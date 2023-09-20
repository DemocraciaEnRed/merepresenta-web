<script context="module">
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByCargo, getCandidatesByParty } from '$lib/graph-ql/candidates';
	import { afterUpdate, onMount } from 'svelte';
	import CandidateCircleCarousel from '$lib/common/candidate-circle-carousel.svelte';
	import Proposal from '$lib/common/proposal.svelte';
	/* import ProposalCarousel from './_proposal-carousel.svelte';
	import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
	import Icon from '$lib/common/Icon.svelte';
	import GobernorCandidateCard from '$lib/common/gobernor-candidate-card.svelte';
	import ProposalCandidateCard from '$lib/common/proposal-candidate-card.svelte'; */
	import { getPartyById, getPartysByDistrict } from '$lib/graph-ql/partidos';
	export async function load({ fetch }) {
		const res = await API(fetch, getCandidatesByCargo('presidente'));
		const props = await handleResponse(res, 'candidates', 'candidato');
		const resThemes = await API(fetch, getThemes())
		const propsThemes = await handleResponse(resThemes, 'temas', 'ejes');
		/* const resTwo = await API(fetch, getCandidatesByCargo('gobernador'));
		const responseTwo = await handleResponse(resTwo, 'candidates', 'candidato');
		
		candidates.props.gobernorCandidates = responseTwo.props.candidates; */
		props.props.themes = propsThemes.props.temas
		return props;
	}
</script>

<script>
	import CandidateCard from "$lib/common/candidate-card.svelte";
	import ComparativeProposal from "$lib/common/comparative-proposal.svelte";
	import { getThemes } from '$lib/graph-ql/themes';

	export let candidates;
	export let themes
	let partysToCompare

	let comparative = false;
	
	let partyId;
	let partySelected;
	let candidatesSelected

	$: comparative,cambio('cambio')


	async function cambio(params) {
		partysToCompare= null
		if(comparative){
			const resParty = await API(fetch, getPartysByDistrict('nacion'));
			const propsParty = await handleResponse(resParty, 'partidos', 'partido');

			partysToCompare = propsParty.props.partidos.filter(party => party.tipo === "lista")

		}

	}

	async function changeParty() {
		partyId = await this.dataset.party;
		const res = await API(fetch, getPartyById(partyId));
		const response = await handleResponse(res, 'partido', 'partido');
		const resTwo = await API(fetch, getCandidatesByParty(partyId))
		const responseTwo = await handleResponse(resTwo, 'candidates', 'candidato')
		
		partySelected = response.props.partido[0];
		candidatesSelected = responseTwo.props.candidates
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
<main class="has-background-white white-background-desktop">
	<div class="section tetris-background">
		<div class="container">
			<div class="has-text-centered has-text-black">
				<h1 class="is-size-2 has-text-weight-medium has-text-black">Propuestas</h1>
				<h3 class="is-size-4 has-text-weight-light">
					Conocé las diferencias entre las propuestas de las candidaturas de cada partido
				</h3>
			</div>
			<div class="districts-buttons is-flex is-justify-content-center is-flex-wrap-wrap">
				<button
					class="button {comparative && 'is-outlined'} is-black is-rounded is-uppercase mx-6"
					on:click={() => {
						comparative = false;
					}}
				>
					Por partido
				</button>
				<button
					class="button {!comparative && 'is-outlined'} is-black is-rounded is-uppercase mx-6"
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
				<hr class="w-75 mx-auto">
				<section class="container">
					<div class="is-flex is-justify-content-center">
						{#each candidatesSelected as candidate }
							<CandidateCard {candidate} />
						{/each}

					</div>

					<Proposal proposals={partySelected.ejes} partido={partySelected} allOpen />
				</section>
			{:else}
				<div class="fill-select pt-2">
					<div class="skeleton-candidate">
						<figure class="image is-96x96 my-6">
							<img src="/candidate.svg" alt="silueta de candidato" style="filter: opacity(0.5);" />
						</figure>
						<h2 class="is-size-4">
							Elegí una candidatura para conocer sus propuestas
						</h2>
					</div>
				</div>
			{/if}
		</div>
	{:else}
	{#if partysToCompare}
	<section class="container">
		{#each themes as eje}
					<ComparativeProposal {eje} {partysToCompare} {candidates}/>
		
					
					
					{/each}
				</section>
				{:else}
				<progress class="progress is-large is-dark" max="100"></progress>

		{/if}
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
				<div class="fill-select pt-6">
					<div class="skeleton-candidate">
						<figure class="image is-96x96 my-6">
							<img src="/candidate.svg" alt="candidatos" style="filter: opacity(0.5);" />
						</figure>
						<h2 class="is-size-4">Elegí un distrito</h2>
					</div>
				</div>
			{/if}
		</div>
	</div> -->
</main>

<style>
	@media screen and (max-width: 768px) {
		.section {
			padding: 3rem 0.5rem;
		}
	}
	
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
	.fill-select {
		width: 100%;
		height: 483px;
		text-align: center;
		display: flex;
		justify-content: center;
	}
	.skeleton-candidate {
		background-color: #d9d9d980;
		border: 3px dashed #9f9f9f;
		border-radius: 10px;
		min-height: 60%;
		width: 60%;
		display: flex;
		padding: 16px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #00000071;
	}

	.skeleton-candidate h2 {
		width: 50%;
	}

	@media screen and (max-width: 768px) {
		.fill-select {
			height: 518px;
		}
		.skeleton-candidate {
			width: 90%;
		}
		.skeleton-candidate h2 {
			width: 100%;
		}

		/* .carousel-wrapper {
			padding-left: 0;
			padding-right: 0;
		} */
	}
</style>
