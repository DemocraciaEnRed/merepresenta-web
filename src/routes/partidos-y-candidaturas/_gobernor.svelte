<script>
	import API, { handleResponse } from '$lib/apiHandler';
	import Icon from '$lib/common/Icon.svelte';
	import GobernorCandidateCard from '$lib/common/gobernor-candidate-card.svelte';
	import SkeletonSelect from '$lib/common/skeleton-select.svelte';
	import { getCandidatesByCargo } from '$lib/graph-ql/candidates';
	import { afterUpdate, onMount } from 'svelte';
	import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';

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

	afterUpdate(() => {
		updateWindowWidth();
	});

	onMount(() => {
		dinamycParticlesToShow = windowWidth ? ((windowWidth - 70) / divisor).toFixed() : 12;
		dinamycParticlesToScroll = dinamycParticlesToShow;
		updateWindowWidth();

		getDistrictGobernor();
	});

	let districts = [];
	let allcandidates;
	let candidatesOnDistrict;

	const getDistrictGobernor = async () => {
		const res = await API(fetch, getCandidatesByCargo('gobernador'));
		const response = await handleResponse(res, 'candidates', 'candidato');
		allcandidates = response.props.candidates;
		response.props.candidates.forEach((candidate) => {
			if (!districts.some((district) => district.slug === candidate.distrito_nacional.slug)) {
				districts = [...districts, candidate.distrito_nacional];
			}
		});
	};

	const handleGobernorDistrics = async (event) => {
		candidatesOnDistrict = null;
		setTimeout(() => {
			candidatesOnDistrict = allcandidates.filter(
				(candidate) => candidate.distrito_nacional.slug === event.target.dataset.district
			);
		}, 300);
	};
</script>

<svelte:window
	bind:innerWidth={windowWidth}
	bind:outerWidth={initWidth}
	on:resize={updateWindowWidth}
/>
<div class="has-text-centered my-6 has-text-black">
	<h1 class="is-size-2 has-text-weight-medium has-text-black">
		¿Vivís en {districts
			.map((district) => ' ' + district.name)
			.join(', ')
			.replace(/, ([^,]*)$/, ' o $1')}?
	</h1>
	<h3 class="is-size-2 has-text-weight-light">Encontrá tus candidatos y candidatas</h3>
	<div class="districts-buttons is-flex is-justify-content-center is-flex-wrap-wrap">
		{#each districts as district}
			<button
				class="button is-outlined is-black is-rounded is-uppercase"
				data-district={district.slug}
				on:click={handleGobernorDistrics}
			>
				{district.name}
			</button>
		{/each}
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
						<GobernorCandidateCard
							{candidate}
							showListButton
							showProposalButton
							proposalDisbled={candidate.partido.district.slug === 'buenos-aires'}
						/>
					{/each}
				</Carousel>
			</div>
		{/if}
    {:else}
	<SkeletonSelect img="/candidate.svg" text="Elegí un distrito y conocé la fórmula completa" />
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
	.districts-buttons {
		gap: 16px;
	}
	.districts-buttons button {
		width: 33%;
		white-space: break-spaces;
	}
	.carousel-wrapper {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	@media screen and (max-width: 768px) {
		.districts-buttons button {
			width: 80%;
			white-space: break-spaces;
		}
		.carousel-wrapper {
			padding-left: 0;
			padding-right: 0;
		}
        
	}
</style>
