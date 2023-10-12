<script>
	import Icon from '$lib/common/Icon.svelte';
	import { CandidateImg, shuffleArray } from '$lib/common/utils';

	import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
	import { onMount } from 'svelte';
	import CardParty from '$lib/common/card-party/card-party.svelte';
	import { afterUpdate } from 'svelte';
	import CandidateCircle from '$lib/common/candidate-circle.svelte';
	import BannerParty from '$lib/common/banner-party.svelte';
	import Proposal from '../../lib/common/proposal.svelte';
	import API, { handleResponse } from '$lib/apiHandler';
	import { getPartyById, getPartysByAlianza, getPartysByDistrict } from '$lib/graph-ql/partidos';
	import CandidateCircleCarousel from '$lib/common/candidate-circle-carousel.svelte';
	import SkeletonSelect from '$lib/common/skeleton-select.svelte';
	import SelectDistrict from '$lib/common/SelectDistrict.svelte';
	import CardCandidatesGroup from '$lib/common/card-party/card-candidates-group.svelte';
	import { getCandidatesByParty, getCandidatesByPartyList } from '$lib/graph-ql/candidates';

	export let logo
	export let title
	export let subtitle
	export let noProposal = false

	export let candidates;
	export let presidential = false
	let randomCandidates = shuffleArray(candidates);

	// Valor reactivo para controlar el ancho de la ventana
	

	let partyId;
	let partySelected;
	let candidatesDistrict

	async function changeParty() {
		partySelected = null
		candidatesDistrict = null

		partyId = await this.dataset.party;
		const res = await API(fetch, getPartyById(partyId));
		const response = await handleResponse(res, 'partido', 'partido');
		if (!presidential) {
			const resCandidates = await API(fetch, getCandidatesByParty(partyId));
			const responseCandidates = await handleResponse(resCandidates, 'candidatos', 'candidato');
			
			candidatesDistrict = responseCandidates.props.candidatos
		}
		partySelected = response.props.partido[0];
	}
	async function handleSelectDistrict(event) {
		candidatesDistrict = null
		const res = await API(fetch, getPartysByDistrict(event.target.value));
		const response = await handleResponse(res, 'partidos', 'partido');
		const partysId = response.props.partidos.filter(partido => partido.alianzas.some((partyInList) => partyInList.related_partido_id.id === partySelected.alianzas[0].related_partido_id.id))
		const resCandidates = await API(fetch, getCandidatesByPartyList(partysId.map(party => party.id)));
		const responseCandidates = await handleResponse(resCandidates, 'candidatos', 'candidato');
		candidatesDistrict = responseCandidates.props.candidatos
	}
</script>

<section class="container p-2">
	<div class="has-text-centered mt-6 has-text-black">
		<img src="{logo}" class="logo-top" alt="logo" />
		<h1 class="is-size-2 is-size-3-mobile has-text-weight-medium has-text-black is-uppercase">
			{title}
		</h1>
		<h3 class="is-size-4-desktop is-size-6-touch has-text-weight-light">
			{subtitle}
		</h3>
	</div>
</section>
<section
	class="container px-6 pt-3 mb-6 has-text-black carousel-section is-max-desktop"

>
	<CandidateCircleCarousel {candidates} {changeParty} />
</section>
{#if partySelected}
	<section class="is-flex is-justify-content-center is-flex-direction-column has-text-black mb-6">
		<BannerParty {partySelected} />
	</section>

	<section
		class="is-flex mb-5 is-justify-content-center is-flex-direction-column px-2 pt-2 has-text-black"
	>
	{#if presidential}
		<CardParty
			{partySelected}
			verticalTitle="presidenciales"
			showListButton
			showProposalButton
			district={{ slug: 'nacion' }}
		/>
	{:else}
	<div class="w-50 mx-auto">
		<CardCandidatesGroup candidates={candidatesDistrict.filter(candidate => candidate.cargo === 'gobernador' || candidate.cargo === 'vice-gobernador')} verticalTitle="gobernadores" wrap fullWidth/>

	</div>


	{/if}
	</section>
	{#if presidential}
		<section
			class="is-flex mb-5 is-justify-content-center is-flex-direction-column px-2 pt-2 has-text-black is-align-items-center"
		>
		<h1 class="is-size-4 is-size-3-mobile has-text-weight-medium has-text-black has-text-centered">
			¿Querés conocer el resto de la fórmula?
		</h1>
		<SelectDistrict on:change={handleSelectDistrict}/>

		
		</section>
		
			{#if candidatesDistrict}
				{#if candidatesDistrict.some(candidate => candidate.cargo === 'gobernador' || candidate.cargo === 'vice-gobernador')}
					<div class="my-3">
						<CardCandidatesGroup candidates={candidatesDistrict.filter(candidate => candidate.cargo === 'gobernador' || candidate.cargo === 'vice-gobernador')} verticalTitle="Poder Ejecutivo Local" />

					</div>
				{/if}
				{#if candidatesDistrict.some(candidate => candidate.cargo === 'senador-nacional')}
					<div class="my-3">
						<CardCandidatesGroup candidates={candidatesDistrict.filter(candidate => candidate.cargo === 'senador-nacional')} verticalTitle="P.L. Senadores" />

					</div>
				{/if}
				{#if candidatesDistrict.some(candidate => candidate.cargo === 'diputado-nacional')}
					<div class="my-3">
						<CardCandidatesGroup candidates={candidatesDistrict.filter(candidate => candidate.cargo === 'diputado-nacional')} verticalTitle="P.L. Diputados" />

					</div>
				{/if}
			{/if}
	{/if}
	<section class="container">
		{#if !noProposal}
			<Proposal proposals={partySelected.ejes} partido={partySelected} />
		{:else}
		<h3 class="is-size-4 has-text-weight-light has-text-centered my-4">
			No hay propuestas de este partido para este distrito
		</h3>
		{/if}
	</section>
{:else}
	<SkeletonSelect img="/candidate.svg" text="Elegí una candidatura para conocer su fórmula y sus propuestas" />

{/if}

<style>
	.logo-top {
		height: 3.5rem;
	}

	@media screen and (max-width: 768px) {
		.logo-top {
			max-width: 40%;
		}
		.carousel-section {
			padding: 0 !important;
		}
	}
</style>
