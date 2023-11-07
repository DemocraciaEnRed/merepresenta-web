<script context="module">
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByCargo, getCandidatesByCargoAndDistrict, getCandidatesByParty } from '$lib/graph-ql/candidates';
	import { afterUpdate, onMount } from 'svelte';
	import CandidateCircleCarousel from '$lib/common/candidate-circle-carousel.svelte';
	import Proposal from '$lib/common/proposal.svelte';
	/* import ProposalCarousel from './_proposal-carousel.svelte';
	import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
	import Icon from '$lib/common/Icon.svelte';
	import GobernorCandidateCard from '$lib/common/gobernor-candidate-card.svelte';
	import ProposalCandidateCard from '$lib/common/proposal-candidate-card.svelte'; */
	import { getPartyById, getPartysByAlianza, getPartysByDistrict } from '$lib/graph-ql/partidos';
	export async function load({ fetch }) {
		const res = await API(fetch, getCandidatesByCargo('presidente'));
		const props = await handleResponse(res, 'candidates', 'candidato');
		const resThemes = await API(fetch, getThemes());
		const propsThemes = await handleResponse(resThemes, 'temas', 'ejes');
		props.props.candidates = props.props.candidates.filter(candidate => candidate.partido.elecciones_generales) 
		
		props.props.themes = propsThemes.props.temas
		return props;
	}
</script>

<script>
	import CandidateCard from '$lib/common/candidate-card.svelte';
	import ComparativeProposal from '$lib/common/comparative-proposal.svelte';
	import SkeletonSelect from '$lib/common/skeleton-select.svelte';
	import { PoliciesIcons } from '$lib/common/utils';
	import { getThemes } from '$lib/graph-ql/themes';
	import MereSpinner from '$lib/common/mereSpinner.svelte';

	export let candidates;
	export let themes;
	let loading = true
	let noProposal = false
	let partysToCompare;
	let filteredThemes = themes.filter((tema) => tema.slug !== 'vivienda-y-transporte')
	let candidatesForType = candidates
	let comparative = true;
	let proposalType = 'nacion';

	let partyId;
	let partySelected;
	let candidatesSelected;

	$: comparative, cambio('cambio');

	async function cambio(params) {
		partysToCompare = null;
		if (comparative) {
			const resParty = await API(fetch, getPartysByDistrict('nacion'));
			const propsParty = await handleResponse(resParty, 'partidos', 'partido');

			partysToCompare = propsParty.props.partidos.filter((party) => party.tipo === 'lista').filter(partido => partido.elecciones_generales);
		}
		proposalType = 'nacion'
	}

	async function changeParty() {
		partySelected = null
		partyId = await this.dataset.party;
		const res = await API(fetch, getPartyById(partyId));
		const response = await handleResponse(res, 'partido', 'partido');
		const resTwo = await API(fetch, getCandidatesByParty(partyId));
		const responseTwo = await handleResponse(resTwo, 'candidates', 'candidato');

		partySelected = response.props.partido[0];
		candidatesSelected = responseTwo.props.candidates;
		loading=false
		partysToCompare = null;
		proposalType = 'nacion'
		noProposal=false
	}

	async function handleProposalType(event) {
		if (proposalType === event.target.id) return
		let partyIfFail = partySelected
		partysToCompare = null;
		proposalType = event.target.id;
		if (comparative) {
			filteredThemes = themes
				filteredThemes = themes.filter((tema) => tema.slug !== 'vivienda-y-transporte')
				const resParty = await API(fetch, getPartysByDistrict('nacion'));
				const propsParty = await handleResponse(resParty, 'partidos', 'partido');
				setTimeout(() => {
					partysToCompare = propsParty.props.partidos.filter((party) => party.tipo === 'lista').filter(partido => partido.elecciones_generales) ;
					console.log(partysToCompare);
					candidatesForType = candidates
					
				}, 1000);
		}else{
			partySelected =null
				const res = await API(fetch, getPartyById(partyId));
				const response = await handleResponse(res, 'partido', 'partido');
				const resTwo = await API(fetch, getCandidatesByParty(partyId));
				const responseTwo = await handleResponse(resTwo, 'candidates', 'candidato');

				partySelected = response.props.partido[0];
				candidatesSelected = responseTwo.props.candidates;
				noProposal=false

		}
	}


</script>

<main class="pb-6 has-background-white white-background-desktop">
	<div class="section tetris-background">
		<div class="container">
			<div class="has-text-centered has-text-black">
				<h1 class="is-size-2 has-text-weight-medium has-text-black">Propuestas</h1>
				<h3 class="is-size-4 has-text-weight-light">
					Conocé las diferencias entre las propuestas de las candidaturas de cada partido
				</h3>
			</div>
			<div class="type-button-group mt-5 is-flex is-justify-content-center">
				<button
					class="button {comparative && 'is-outlined'} is-black is-rounded is-uppercase button-type"
					on:click={() => {
						comparative = false;
					}}
				>
					Por partido
				</button>
				<button
					class="button {!comparative &&
						'is-outlined'} is-black is-rounded is-uppercase button-type"
					on:click={() => {
						comparative = true;
					}}
				>
					Comparativa
				</button>
			</div>
		</div>
	</div>
	{#if !comparative}
		<div>
			<section class="container pt-3 mb-3 has-text-black carousel-section is-max-desktop">
				<CandidateCircleCarousel {candidates} {changeParty} />
			</section>
			{#if !loading}
			<hr class="w-75 mx-auto" />
				
			{/if}
			{#if partySelected}
				<section class="container">
					<div class="is-flex is-justify-content-center">
						{#each candidatesSelected as candidate}
							<CandidateCard
								{candidate}
								size="is-two-fifths-mobile is-one-third-tablet is-2-desktop is-2-widescreen"
							/>
						{/each}
					</div>

					{#if !noProposal}
						<Proposal proposals={partySelected.ejes} partido={partySelected} />
					{:else}
					<h3 class="is-size-4 has-text-weight-light has-text-centered my-4">
						No hay candidaturas ni propuestas de este partido para el distrito elegido
					</h3>
					{/if}
					<div class="box is-box-rounded">
						<div
							class="group-header is-flex is-flex-direction-row is-align-items-center is-top-rounded"
						>
							<div
								class="is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center has-text-centered"
							>
								<p class=" has-text-black is-inline has-text-weight-medium">
									¿Querés saber en qué se diferencia cada candidatura?
								</p>
							</div>
						</div>
						<div class="group-content is-bottom-rounded">
							<h1 class="is-4 has-text-centered has-text-black mb-4">
								Enfrentá las candidaturas y conocé sus diferencias
							</h1>
							<div class="buttons is-centered">
								<button
									on:click={() => {
										comparative = true;
									}}
									class="button is-black is-outlined is-rounded is-uppercase has-text-weight-semibold px-6"
									>COMPARÁ CANDIDATURAS</button
								>
							</div>
						</div>
					</div>
				</section>
			{:else}
				<SkeletonSelect
					img="/candidate.svg"
					text="Elegí una candidatura para conocer sus propuestas"
				/>
			{/if}
		</div>
	{:else if partysToCompare}
		<section class="container p-2">
			<div class="is-flex is-justify-content-center mb-5 is-hidden-mobile">
				<h1 class="is-4  has-text-centered has-text-black has-text-weight-semibold my-1">
					tematicas:
				</h1>
				<div class="is-flex is-flex-wrap-wrap is-justify-content-center">
					{#each filteredThemes as eje}
					<a class="is-flex is-align-items-center tag-eje px-3 m-1 has-background-white" href={'#'+eje.slug} >
						<img
						src={PoliciesIcons[eje.slug]}
						alt="icono de {eje.name}"
						width="25"
					/>
						<span class="has-text-black">{eje.name}</span>
					</a>
					{/each}

				</div>
			</div>
			<div class="comparative-wrapper">
				{#each filteredThemes as eje}
					<ComparativeProposal {eje} {partysToCompare} candidates={candidatesForType} />
				{/each}

			</div>
		</section>
	{:else}
		<MereSpinner />
	{/if}


</main>

<style>
	.tag-eje{
		width: fit-content;
		border-radius: 999px;
		border: 1px solid #000;

	}

	.disclaimer{
		display: none;
		position: absolute;
		bottom: -100%;
		left: 50%;
		text-align: center;
		width: 100%;
		height: fit-content;
		white-space: break-spaces;
		font-size: 1rem;
		z-index: 999;
		transform: translate(-50%, 0%);
	}

	.district-button{
		width: 25%;
		text-align: center;
	}
	.box {
		border: 1px solid #cfcfcf;
		border-bottom: 0;
		padding: 0;
		border-radius: 0;
	}

	.is-top-rounded {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.is-box-rounded {
		border-radius: 10px;
	}
	.is-bottom-rounded {
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.group-header {
		background-color: #fff;
		padding: 1rem;
		border-bottom: 1px solid #cfcfcf;
	}
	.group-content {
		padding: 2rem 1rem;
		background-color: #fff;
		border-bottom: 1px solid #cfcfcf;
	}
	.group-content .buttons {
		width: 50%;
		margin: auto;
	}

	.button-type {
		margin: 0 3rem;
		font-size: 1.3rem;
	}
	.button-type-proposal {
		font-size: 1rem;
		width: 80%;
	}
	.fill-select {
		width: 100%;
		height: 483px;
		text-align: center;
		display: flex;
		justify-content: center;
	}

	@media screen and (max-width: 768px) {
		.district-button{
		width: 100%;

		}	
		.section {
			padding: 3rem 0.5rem;
		}

		.group-content .buttons {
			width: 90%;
			margin: auto;
		}
		.type-button-group {
			border: 1px solid #0a0a0a;
			border-radius: 9999px;
			padding: 2px;
		}
		.fill-select {
			height: 518px;
		}

		.button-type {
			margin: 0;
			width: 50%;
			border: none;
			font-size: 1rem;
		}
		.button-type-proposal{
			width: 50%;
			flex: 1;
		}
		.button-type-proposal:first-of-type{
			width: 100%;
		}

		/* .carousel-wrapper {
			padding-left: 0;
			padding-right: 0;
		} */
	}
</style>
