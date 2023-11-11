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
		if (partyId === this.dataset.party) return
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
</script>

<section class="container pt-2 ">
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
	class="container px-6 has-text-black carousel-section is-max-desktop"

>
	<CandidateCircleCarousel {candidates} {changeParty} />
</section>
{#if partySelected}
	<section class="is-flex is-justify-content-center is-flex-direction-column has-text-black mb-6">
		<BannerParty {partySelected} />
	</section>

	<section
		class="is-flex mb-5 is-justify-content-center is-flex-direction-column px-2 pt-2 has-text-black mb-6"
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
<hr class="w-75 mx-auto">
	{:else}
	<SkeletonSelect img="/candidate.svg" text="Elegí una candidatura para conocer su fórmula y sus propuestas" />
	
	{/if}
	<div class="box is-box-rounded mt-6 w-75 mx-auto">
		<div
			class="group-header is-flex is-flex-direction-row is-align-items-center is-top-rounded"
		>
			<div
				class="is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center has-text-centered"
			>
				<p class=" has-text-black is-inline has-text-weight-medium">
					¿Cómo queda la cámara de diputados tras las generales?
				</p>
			</div>
		</div>
		<div class="group-content is-bottom-rounded">
			<h1 class="is-4 has-text-centered has-text-black mb-6 mx-6">
				Conocé el detalle de la composición de las cámaras, y quienes entran efectivamente por cada partido.
				Además te damos algunos datos de la composición final de cada partido.
			</h1>
			<div class="buttons is-centered">
				<a href="/legislativo"
					class="button is-black is-rounded is-uppercase has-text-weight-semibold px-6 w-100"
					>PODER LEGISLATIVO</a>
			</div>
		</div>
	</div>

<style>
	.logo-top {
		height: 3.5rem;
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

	@media screen and (max-width: 768px) {
		.logo-top {
			max-width: 40%;
		}
		.carousel-section {
			padding: 0 !important;
			margin: 1.5rem 0;
		}
		.group-content .buttons {
			width: 90%;
			margin: auto;
		}
	}

</style>
