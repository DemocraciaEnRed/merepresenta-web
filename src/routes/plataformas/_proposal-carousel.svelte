<script>
	import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
	import Icon from '$lib/common/Icon.svelte';
	import { afterUpdate, onMount } from 'svelte';
	import { CandidateImg, shuffleArray } from '$lib/common/utils';
	import ProposalCandidateCard from '$lib/common/proposal-candidate-card.svelte';

	export let candidates;
	let randomCandidates = shuffleArray(candidates);

	let windowWidth;
	let initWidth;
	let dinamycParticlesToShow;
	let loading = false;
	async function updateWindowWidth() {
		if (dinamycParticlesToShow !== ((windowWidth + 70) / 300).toFixed()) {
			loading = true;

			dinamycParticlesToShow = await ((windowWidth + 70) / 300).toFixed();
			loading = false;
		}
	}
	onMount(() => {
		dinamycParticlesToShow = windowWidth ? ((windowWidth + 70) / 300).toFixed() : 12;
	});

	afterUpdate(() => {
		updateWindowWidth();
	});
</script>

<svelte:window
	bind:innerWidth={windowWidth}
	bind:outerWidth={initWidth}
	on:resize={updateWindowWidth}
/>
<div class="section tetris-background">
	<div class="container">
		<div class="has-text-centered has-text-black">
			<h1 class="is-size-2 has-text-weight-medium has-text-black">Precandidatos Presidenciales</h1>
			<h3 class="is-size-4 has-text-weight-light">
				Explora los programa electoral de los precandidatos del partido de tu interés.
			</h3>
		</div>
		<div
			class="columns mt-6 is-mobile is-multiline is-justify-content-center is-flex is-flex-wrap-wrap p-2"
		>
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
						<ProposalCandidateCard {candidate} />
					{/each}
				</Carousel>
			{/if}
		</div>
	</div>
</div>

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
</style>
