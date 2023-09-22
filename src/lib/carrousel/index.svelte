<script>
	import Icon from '$lib/common/Icon.svelte';
	import { shuffleArray } from '$lib/common/utils';
	import Carousel from 'svelte-carousel';


	const carouselItems= [
		{name:'pasoresult',link:''},
		{name:'abc',link:'/abc-electoral'},
		{name:'dataset',link:'https://drive.google.com/drive/folders/1WvjL0X8-i0F1qSJ2xs5HUy1YY2XPGmG6?usp=sharing'},
		{name:'compas',link:'https://compaspolitico.merepresenta.info/'},
		{name:'trivia',link:'https://trivia.merepresenta.info/'},
		{name:'vof',link:'https://verdaderofalso.merepresenta.info/'},
		{name:'quiendijo',link:'https://quiendijo.merepresenta.info/'},
		{name:'espectrometro',link:'https://espectrometro.merepresenta.info/'},


	]
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
				{#each carouselItems as item }
				<div class="carrousel-item has-text-centered">
					<a target="_blank" href="{item.link}">
						<img class="is-hidden-mobile" src="carrousel/{item.name}_desk.png" alt={item.name} />
						<img class="is-hidden-tablet" src="carrousel/{item.name}_mobile.png" alt={item.name} />
					</a>
				</div>
					
				{/each}
				
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
