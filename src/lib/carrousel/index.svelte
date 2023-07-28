<script>
	import Icon from '$lib/common/Icon.svelte';
	import Carousel from 'svelte-carousel';
</script>

<div class="carrousel-wrapper mt-6">
	{#if typeof window !== 'undefined'}
		<div class="is-desktop">
			<Carousel let:showPrevPage let:showNextPage>
				<div slot="prev" class="arrow-wrapper">
					<button class="circle_arrow_button" on:click={showPrevPage}>
						<Icon icon="fa-arrow-left" />
					</button>
				</div>
				<div slot="next" class="arrow-wrapper">
					<button class="circle_arrow_button" on:click={showNextPage}>
						<Icon icon="fa-arrow-right" />
					</button>
				</div>
				<div class="carrousel-item has-text-centered">
					<a target="_blank" href="/abc-electoral">
						<img class="is-hidden-mobile" src="carrousel/abc_desk.png" alt="" />
						<img class="is-hidden-tablet" src="carrousel/abc_mobile.png" alt="" />
					</a>
				</div>
				<div class="carrousel-item has-text-centered">
					<img class="is-hidden-mobile" src="carrousel/dataset_desk.png" alt="" />
					<img class="is-hidden-tablet" src="carrousel/dataset_mobile.png" alt="" />
				</div>
				<div class="carrousel-item has-text-centered">
					<a target="_blank" href="https://compaspolitico.merepresenta.info/">
						<img class="is-hidden-mobile" src="carrousel/compas_desk.png" alt="" />
						<img class="is-hidden-tablet" src="carrousel/compas_mobile.png" alt="" />
					</a>
				</div>
				<div class="carrousel-item has-text-centered">
					<a target="_blank" href="https://trivia.merepresenta.info/">
						<img class="is-hidden-mobile" src="carrousel/trivia_desk.png" alt="" />
						<img class="is-hidden-tablet" src="carrousel/trivia_mobile.png" alt="" />
					</a>
				</div>
				<div class="carrousel-item has-text-centered">
					<a target="_blank" href="https://verdaderofalso.merepresenta.info/">
						<img class="is-hidden-mobile" src="carrousel/vof_desk.png" alt="" />
						<img class="is-hidden-tablet" src="carrousel/vof_mobile.png" alt="" />
					</a>
				</div>
			</Carousel>
		</div>
	{/if}
</div>

<style>
	.arrow-wrapper {
		display: flex;
		align-items: center;
	}
	.carrousel-item img {
		width: 90%;
	}
	.circle_arrow_button {
		cursor: pointer;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #000;
		color: #fff;
		font-size: 1.3rem;
		border: none;
	}
	@media screen and (max-width: 768px) {
		.carrousel-item img {
			width: 95%;
		}
		.circle_arrow_button {
			cursor: pointer;
			height: 25px;
			width: 25px;
			font-size: 0.8rem;
		}
	}
</style>
