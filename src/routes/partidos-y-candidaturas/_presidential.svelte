<script>
	import Icon from '$lib/common/Icon.svelte';
	import { CandidateImg, shuffleArray } from '$lib/common/utils';

	import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
	import { onMount } from 'svelte';
	import CardParty from '$lib/common/card-party/card-party.svelte';
	import { afterUpdate } from 'svelte';
	import CandidateCircle from '$lib/common/candidate-circle.svelte';

	export let candidates;
	let randomCandidates = shuffleArray(candidates);

	// Valor reactivo para controlar el ancho de la ventana
	let windowWidth;
	let initWidth;
	let bindHeightCaorusel;
	let heightCaorusel
	let dinamycParticlesToShow;
	let loading = false;
	let divisor = windowWidth < 760 ? 100 : 130
	let particlesToScroll
	
	async function updateWindowWidth() {
		divisor = windowWidth < 760 ? 100 : 130
		if (dinamycParticlesToShow !== ((windowWidth) / divisor).toFixed()) {
			loading = true;

			dinamycParticlesToShow = await ((windowWidth) / divisor).toFixed();
			particlesToScroll = dinamycParticlesToShow /2
			loading = false;
		}
	}
	onMount(() => {
		dinamycParticlesToShow = windowWidth ? ((windowWidth) / divisor).toFixed() : 12;
		particlesToScroll = dinamycParticlesToShow /2
		heightCaorusel = bindHeightCaorusel
	});

	afterUpdate(() => {
		updateWindowWidth();
	});

	let partyId;
	let loadingParty = false;

	async function changeParty() {
		partyId = undefined;
		partyId = await this.dataset.party;
	}
</script>

<svelte:window
	bind:innerWidth={windowWidth}
	bind:outerWidth={initWidth}
	on:resize={updateWindowWidth}
/>
<section class="container p-2">
	<div class="has-text-centered mt-6 has-text-black">
		<img src="/pink-house.png" class="logo-top" alt="casa rosada" />
		<h1 class="is-size-2 is-size-3-mobile has-text-weight-medium has-text-black">Precandidaturas Presidenciales</h1>
		<h3 class="is-size-4-desktop is-size-6-touch has-text-weight-light">
			Explorá los programas electorales de las precandidaturas del partido de tu interés.
		</h3>
	</div>
</section>
<section class="container is-fluid px-6 pt-3 has-text-black carousel-section" bind:clientHeight={bindHeightCaorusel}>
	{#if typeof window !== 'undefined' && !loading && dinamycParticlesToShow !== NaN}
		<Carousel
			dots={false}
			particlesToShow={dinamycParticlesToShow}
			infinite={false}
			{particlesToScroll}
			let:showPrevPage
			let:showNextPage
		>
			<div slot="prev" class="arrow-wrapper" style="height : {heightCaorusel+ heightCaorusel/2}px">
				<button class="circle_arrow_button" on:click={showPrevPage}>
					<Icon icon="fa-chevron-left" />
				</button>
			</div>
			<div slot="next" class="arrow-wrapper" style="height : {heightCaorusel+ heightCaorusel/2}px">
				<button class="circle_arrow_button" on:click={showNextPage}>
					<Icon icon="fa-chevron-right" />
				</button>
			</div>
			{#each randomCandidates as candidate}
				<CandidateCircle {candidate} {changeParty}/>
			{/each}
		</Carousel>
	{/if}
</section>
{#if partyId}
	<section
		class="is-flex is-justify-content-center is-flex-direction-column  px-2 pt-2 has-text-black "
	>
		<CardParty {partyId} showListButton showProposalButton district={{slug:'nacion'}}/>
	</section>
{:else}
	<div class="fill-select pt-2">
		<div class="skeleton-candidate">
			<figure class="image is-96x96 my-6">
				<img src="/candidate.svg" alt="silueta de candidato" />
			</figure>
			<h2 class="is-size-4">
				Hacé clic sobre una candidatura y conocé la fórmula completa
			</h2>
		</div>
	</div>
{/if}

<style>
	.fill-select {
		width: 100%;
		height: 575px;
		text-align: center;
		display: flex;
		justify-content: center;
	}
	.skeleton-candidate {
		background-color: #d9d9d980;
		border: 3px dashed #9f9f9f;
		border-radius: 10px;
		min-height: 90%;
		width: 60%;
		display: flex;
		padding: 16px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #00000071;
	}
	.skeleton-candidate figure img {
		filter: opacity(0.5);
	}
	.skeleton-candidate h2 {
		width: 50%;
	}

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
		.logo-top{
			max-width: 40%;
		}
		.carousel-section {
			padding: 0 !important;
		}
		.candidate-avatar {
			height: 65px;
			width: 65px;
		}
		.skeleton-candidate {
			width: 90%;
		}
		.skeleton-candidate h2 {
		width: 100%;
		}
		.circle_arrow_button {
			cursor: pointer;
			height: 40px;
			width: 40px;
			font-size: 1.8rem;
		}
	}
</style>
