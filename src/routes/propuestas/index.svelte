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
		/* const resTwo = await API(fetch, getCandidatesByCargo('gobernador'));
		const responseTwo = await handleResponse(resTwo, 'candidates', 'candidato');
		
		candidates.props.gobernorCandidates = responseTwo.props.candidates; */
		props.props.themes = propsThemes.props.temas
		return props;
	}
</script>

<script>
	import CandidateCard from '$lib/common/candidate-card.svelte';
	import ComparativeProposal from '$lib/common/comparative-proposal.svelte';
	import SkeletonSelect from '$lib/common/skeleton-select.svelte';
	import { typeProposaldistrict } from '$lib/common/utils';
	import { getThemes } from '$lib/graph-ql/themes';

	export let candidates;
	export let themes;
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

			partysToCompare = propsParty.props.partidos.filter((party) => party.tipo === 'lista');
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
		partysToCompare = null;
		proposalType = 'nacion'
	}

	async function handleProposalType(event) {
		partysToCompare = null;

		proposalType = event.target.id;
		if (comparative) {
			filteredThemes = themes
			if (proposalType === 'nacion') {
				filteredThemes = themes.filter((tema) => tema.slug !== 'vivienda-y-transporte')
				const resParty = await API(fetch, getPartysByDistrict('nacion'));
				const propsParty = await handleResponse(resParty, 'partidos', 'partido');
				setTimeout(() => {
					partysToCompare = propsParty.props.partidos.filter((party) => party.tipo === 'lista');
					candidatesForType = candidates
					
				}, 1000);
			}else {
				filteredThemes = proposalType === 'caba' ? themes.filter((tema) => tema.slug !== 'empleo'): themes.filter((tema) => tema.slug !== 'empleo').filter((tema) => tema.slug !== 'vivienda-y-transporte')
				const res = await API(fetch, getCandidatesByCargoAndDistrict({cargo:'gobernador',district:proposalType}));
				const responseCandidates = await handleResponse(res, 'candidates', 'candidato');
				const resParty = await API(fetch, getPartysByDistrict(proposalType));
				const propsParty = await handleResponse(resParty, 'partidos', 'partido');
				
				setTimeout(() => {
					partysToCompare = propsParty.props.partidos.filter((party) => party.tipo === 'lista');
					candidatesForType = responseCandidates.props.candidates
					
				}, 1000);

			}
		}else{
			partySelected =null
			if (proposalType === 'nacion') {
				const res = await API(fetch, getPartyById(partyId));
				const response = await handleResponse(res, 'partido', 'partido');
				const resTwo = await API(fetch, getCandidatesByParty(partyId));
				const responseTwo = await handleResponse(resTwo, 'candidates', 'candidato');

				partySelected = response.props.partido[0];
				candidatesSelected = responseTwo.props.candidates;
					

			}else{
				const res1 = await API(fetch, getPartyById(partyId));
				const response1 = await handleResponse(res1, 'partido', 'partido');
				const res2 = await API(fetch, getPartysByAlianza(response1.props.partido[0].alianzas[0].related_partido_id.id));
				const response2 = await handleResponse(res2, 'partido', 'partido');
				partySelected = response2.props.partido.find(party => party.district.slug === proposalType)
				const resTwo = await API(fetch, getCandidatesByParty(partySelected.id));
				const responseTwo = await handleResponse(resTwo, 'candidates', 'candidato');
	
				candidatesSelected = responseTwo.props.candidates.filter(candidate => candidate.cargo.includes('gobernador'));

			}
		}
	}

	/* export let gobernorCandidates;

	let candidatesOnDistrict = gobernorCandidates.filter(
		(candidate) => candidate.distrito_nacional.slug === 'caba'
	);

	let windowWidth;
	let initWidth;
	let dinamycParticlesToShow;
	let loading = false;
	let dinamycParticlesToScroll;
	let divisor = windowWidth < 760 ? 4600 : 300;
	async function updateWindowWidth() {
		if (dinamycParticlesToShow !== ((windowWidth - 70) / divisor).toFixed()) {
			loading = true;

			dinamycParticlesToShow = await ((windowWidth - 70) / divisor).toFixed();
			dinamycParticlesToScroll = dinamycParticlesToShow;
			loading = false;
		}
	}
 */
	afterUpdate(() => {
		//updateWindowWidth();
	});

	onMount(() => {
		/* dinamycParticlesToShow = windowWidth ? ((windowWidth - 70) / divisor).toFixed() : 12;
		dinamycParticlesToScroll = dinamycParticlesToShow;
		updateWindowWidth(); */
	});
</script>

<!-- <svelte:window
	bind:innerWidth={windowWidth}
	bind:outerWidth={initWidth}
	on:resize={updateWindowWidth}
/> -->
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
			{#if partySelected}
				<hr class="w-75 mx-auto" />
				<div class="mb-5 is-flex is-flex-wrap-wrap is-justify-content-center w-75 mx-auto">
					{#each typeProposaldistrict as district}
						<button
							id={district.slug}
							class="button {proposalType !== district.slug &&
								'is-outlined'} my-1 is-black is-rounded is-uppercase button-type-proposal"
							on:click={handleProposalType}
						>
							{district.name}
						</button>
					{/each}
				</div>
				<section class="container">
					<div class="is-flex is-justify-content-center">
						{#each candidatesSelected as candidate}
							<CandidateCard
								{candidate}
								size="is-two-fifths-mobile is-one-third-tablet is-2-desktop is-2-widescreen"
							/>
						{/each}
					</div>

					<Proposal proposals={partySelected.ejes} partido={partySelected} />
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
			<h1 class="is-size-4 is-size-3-mobile mb-3 has-text-weight-medium has-text-black has-text-centered">Tipo de propuesta</h1>
			<div class="mb-5 is-flex is-flex-wrap-wrap is-justify-content-center w-75 mx-auto">
				{#each typeProposaldistrict as district}
					<button
						id={district.slug}
						class="button {proposalType !== district.slug &&
							'is-outlined'} my-1 is-black is-rounded is-uppercase button-type-proposal"
						on:click={handleProposalType}
					>
						{district.name}
					</button>
				{/each}
			</div>
			{#each filteredThemes as eje}
				<ComparativeProposal {eje} {partysToCompare} candidates={candidatesForType} />
			{/each}
		</section>
	{:else}
		<progress class="progress is-large is-dark w-75 m-auto" max="100" />
	{/if}

	<!-- <div class="section tetris-background">
		<div class="container">
			<div class="has-text-centered has-text-black">
				<h1 class="is-size-2 has-text-weight-medium has-text-black">¿Votas en CABA?</h1>
				<h3 class="is-size-4 has-text-weight-light">
					Explorá las propuestas electorales de cada precandidatura
				</h3>
			</div>
			{#if candidatesOnDistrict}
				{#if typeof window !== 'undefined' && !loading && dinamycParticlesToShow !== NaN}
					<div class="carousel-wrapper mt-3">
						<Carousel
							dots={false}
							particlesToShow={dinamycParticlesToShow}
							particlesToScroll={dinamycParticlesToScroll}
							infinite={false}
							let:showPrevPage
							let:showNextPage
						>
							<div slot="prev" class="arrow-wrapper">
								<button class="circle_arrow_button" on:click={showPrevPage}>
									<Icon icon="fa-chevron-left" />
								</button>
							</div>
							<div slot="next" class="arrow-wrapper">
								<button class="circle_arrow_button" on:click={showNextPage}>
									<Icon icon="fa-chevron-right" />
								</button>
							</div>
							{#each candidatesOnDistrict as candidate}
								<ProposalCandidateCard
									{candidate}
									proposalDisabled={candidate.distrito_nacional.slug !== 'caba'}
								/>
							{/each}
						</Carousel>
					</div>
				{/if}
			{:else if candidatesOnDistrict === null}
				<div class="fill-select is-flex is-justify-content-center is-align-items-center">
					<progress class="progress is-medium is-dark" max="100" />
				</div>
			{/if}
			{#if candidatesOnDistrict === undefined}
				<SkeletonSelect img="/candidate.svg" text="Elegí un distrito" />
			{/if}
		</div>
	</div> -->
</main>

<style>
	/* .arrow-wrapper {
		display: flex;
		align-items: center;
	}
	.circle_arrow_button {
		cursor: pointer;
		width: 50px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		font-size: 3rem;
		border: none;
	}
	.carousel-wrapper {
		padding-left: 3rem;
		padding-right: 3rem;
	} */

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
		/* border-top: 1px solid #CFCFCF;; */
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
		margin: 0 3rem;
		font-size: 1rem;
		flex: 1;
	}
	.fill-select {
		width: 100%;
		height: 483px;
		text-align: center;
		display: flex;
		justify-content: center;
	}

	@media screen and (max-width: 768px) {
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
			margin: 0 2rem;
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
