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
	let dinamycParticlesToScroll;
	let divisor = windowWidth < 760 ?4600 : 300
	async function updateWindowWidth() {
		if (dinamycParticlesToShow !== ((windowWidth - 70) / divisor).toFixed()) {
			loading = true;

			dinamycParticlesToShow = await ((windowWidth - 70) / divisor).toFixed();
			dinamycParticlesToScroll = dinamycParticlesToShow
			loading = false;
		}
	}
	onMount(() => {
		dinamycParticlesToShow = windowWidth ? ((windowWidth - 70) / divisor).toFixed() : 12;
		dinamycParticlesToScroll = dinamycParticlesToShow
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

<div
	class="columns mt-6 is-mobile is-multiline is-justify-content-center is-flex is-flex-wrap-wrap p-2"
>
	{#if typeof window !== 'undefined' && !loading && dinamycParticlesToShow !== NaN}
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
			{#each randomCandidates as candidate}
				<ProposalCandidateCard {candidate} />
			{/each}
		</Carousel>
	{/if}
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
