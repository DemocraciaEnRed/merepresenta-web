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
	import { getPartyById } from '$lib/graph-ql/partidos';
	import CandidateCircleCarousel from '$lib/common/candidate-circle-carousel.svelte';
	import SkeletonSelect from '$lib/common/skeleton-select.svelte';

	export let candidates;
	let randomCandidates = shuffleArray(candidates);

	// Valor reactivo para controlar el ancho de la ventana
	

	let partyId;
	let partySelected;

	async function changeParty() {
		partyId = undefined;
		partySelected = null;
		partyId = await this.dataset.party;
		const res = await API(fetch, getPartyById(partyId));
		const response = await handleResponse(res, 'partido', 'partido');

		partySelected = response.props.partido[0];
	}
</script>

<section class="container p-2">
	<div class="has-text-centered mt-6 has-text-black">
		<img src="/pink-house.png" class="logo-top" alt="casa rosada" />
		<h1 class="is-size-2 is-size-3-mobile has-text-weight-medium has-text-black">
			PARTIDOS Y CANDIDATURAS
		</h1>
		<h3 class="is-size-4-desktop is-size-6-touch has-text-weight-light">
			Conocé la fórmula completa del partido de tu interés
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
		<CardParty
			{partySelected}
			verticalTitle="presidenciales"
			showListButton
			showProposalButton
			district={{ slug: 'nacion' }}
		/>
	</section>
	<section class="container">
		<Proposal proposals={partySelected.ejes} partido={partySelected} />
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
