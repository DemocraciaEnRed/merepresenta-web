<script>
	import Icon from '$lib/common/Icon.svelte';

	import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';
	import CandidateCircle from '$lib/common/candidate-circle.svelte';
	import API, { handleResponse } from '$lib/apiHandler';
	import { getPartyById } from '$lib/graph-ql/partidos';
	import { shuffleArray } from './utils';

	export let candidates;
	export let changeParty;
	let randomCandidates = shuffleArray(candidates);

	// Valor reactivo para controlar el ancho de la ventana
	let windowWidth;
	let initWidth;
	let bindHeightCaorusel;
	let heightCaorusel;
	let dinamycParticlesToShow;
	let loading = false;
	let divisor = windowWidth < 760 ? 100 : 130;
	let particlesToScroll;

	async function updateWindowWidth() {
		divisor = windowWidth < 760 ? 100 : 130;
		if (dinamycParticlesToShow !== (windowWidth / divisor).toFixed()) {
			loading = true;

			dinamycParticlesToShow = await (windowWidth / divisor).toFixed();
			particlesToScroll = dinamycParticlesToShow / 2;
			loading = false;
		}
	}
	onMount(() => {
		dinamycParticlesToShow = windowWidth ? (windowWidth / divisor).toFixed() : 12;
		particlesToScroll = dinamycParticlesToShow / 2;
		heightCaorusel = bindHeightCaorusel;
	});

	afterUpdate(() => {
		updateWindowWidth();
	});

	let partyId;
</script>

<svelte:window
	bind:innerWidth={windowWidth}
	bind:outerWidth={initWidth}
	on:resize={updateWindowWidth}
/>

{#if typeof window !== 'undefined' && !loading && dinamycParticlesToShow !== NaN}
	<Carousel
		dots={false}
		particlesToShow={dinamycParticlesToShow}
		infinite={false}
		{particlesToScroll}
		let:showPrevPage
		let:showNextPage
	>
		<div
			slot="prev"
			class="arrow-wrapper is-hidden-tablet"
			style="height : {heightCaorusel + heightCaorusel / 2}px"
		>
			<button class="circle_arrow_button" on:click={showPrevPage}>
				<Icon icon="fa-chevron-left" />
			</button>
		</div>
		<div
			slot="next"
			class="arrow-wrapper is-hidden-tablet"
			style="height : {heightCaorusel + heightCaorusel / 2}px"
		>
			<button class="circle_arrow_button" on:click={showNextPage}>
				<Icon icon="fa-chevron-right" />
			</button>
		</div>
		{#each randomCandidates as candidate}
			<CandidateCircle {partyId} {candidate} {changeParty} />
		{/each}
	</Carousel>
{/if}

<style>
	.arrow-wrapper {
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
	@media screen and (max-width: 768px) {
		.circle_arrow_button {
			cursor: pointer;
			height: 40px;
			width: 40px;
			font-size: 1.8rem;
		}
	}
</style>
