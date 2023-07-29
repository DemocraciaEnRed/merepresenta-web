<script>
	import Icon from '$lib/common/Icon.svelte';
	import { CandidateImg, shuffleArray } from '$lib/common/utils';

	import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
	import { onMount } from 'svelte';
	import CardParty from '$lib/common/card-party/card-party.svelte';
	import { afterUpdate } from 'svelte';

	export let candidates;
	let randomCandidates = shuffleArray(candidates);

	// Valor reactivo para controlar el ancho de la ventana
	let windowWidth;
	let initWidth;
	let dinamycParticlesToShow;
	let loading = false;
	let divisor = windowWidth < 760 ? 100 : 130

	async function updateWindowWidth() {
		divisor = windowWidth < 760 ? 100 : 130
		if (dinamycParticlesToShow !== ((windowWidth) / divisor).toFixed()) {
			loading = true;

			dinamycParticlesToShow = await ((windowWidth) / divisor).toFixed();
			loading = false;
		}
	}
	onMount(() => {
		dinamycParticlesToShow = windowWidth ? ((windowWidth) / divisor).toFixed() : 12;
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
		<img src="/pink-house.svg" alt="" />
		<h1 class="is-size-2 has-text-weight-medium has-text-black">Precandidatos Presidenciales</h1>
		<h3 class="is-size-4 has-text-weight-light">
			Explora los programa electoral de los precandidatos del partido de tu interés.
		</h3>
	</div>
</section>
<section class="container is-fluid px-6 pt-3 has-text-black carousel-section">
	{#if typeof window !== 'undefined' && !loading && dinamycParticlesToShow !== NaN}
		<Carousel
			dots={false}
			particlesToShow={dinamycParticlesToShow}
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
			{#each randomCandidates as candidate}
				<button class="button-candidate" on:click={changeParty} data-party={candidate.partido.id}>
					<figure class="image candidate-avatar">
						<img class="is-rounded" src={CandidateImg(candidate)} alt="" />
					</figure>
				</button>
			{/each}
		</Carousel>
	{/if}
</section>
{#if partyId}
	<section
		class="is-flex is-justify-content-center is-flex-direction-column  px-2 pt-6 has-text-black"
	>
		<CardParty {partyId} showListButton showProposalButton />
	</section>
{:else}
	<div class="fill-select pt-6">
		<div class="skeleton-candidate">
			<figure class="image is-96x96 my-6">
				<img src="/candidate.svg" alt="" />
			</figure>
			<h2 class="is-size-4">
				Hace "click" sobre un candidato y conoce la formula presidencial compelta
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
		height: 90%;
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #00000071;
	}
	.skeleton-candidate figure img {
		filter: opacity(0.5);
	}
	.skeleton-candidate h2 {
		width: 50%;
	}
	.button-candidate {
		background-color: transparent;
		border: none;
		cursor: pointer;
		position: relative;
	}

	.candidate-avatar img {
		border: 2px solid #000;
	}
	.candidate-avatar {
		height: 85px;
		width: 85px;
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
		.carousel-section {
			padding: 0 !important;
		}
		.candidate-avatar {
			height: 65px;
			width: 65px;
		}
		.circle_arrow_button {
			cursor: pointer;
			height: 25px;
			width: 25px;
			font-size: 1.5rem;
		}
	}
</style>
