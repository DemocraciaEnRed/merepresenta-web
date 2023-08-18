<script>
	import Icon from '$lib/common/Icon.svelte';
	import { shuffleArray } from '$lib/common/utils';
	import Carousel from 'svelte-carousel';


	const pasoPartyResult= shuffleArray([
		{name:'fi',id:369},
		{name:'hacemos',id:372},
		{name:'juntos',id:374},
		{name:'union',id:394},
		{name:'lla',id:375},
	])
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
						<img class="is-hidden-mobile" src="carrousel/post-paso/general.png" alt="abc electoral" />
						<img class="is-hidden-tablet" src="carrousel/post-paso/generalMob.png" alt="abc electoral" />
				</div>
				{#each pasoPartyResult as party }
				<div class="carrousel-item has-text-centered">
					<a target="_blank" href="/propuestas/partidos/{party.id}">
						<img class="is-hidden-mobile" src="carrousel/post-paso/{party.name}Desk.png" alt="abc electoral" />
						<img class="is-hidden-tablet" src="carrousel/post-paso/{party.name}Mob.png" alt="abc electoral" />
					</a>
				</div>
					
				{/each}
				<!-- <div class="carrousel-item has-text-centered">
					<a target="_blank" href="/abc-electoral">
						<img class="is-hidden-mobile" src="carrousel/abc_desk.png" alt="abc electoral" />
						<img class="is-hidden-tablet" src="carrousel/abc_mobile.png" alt="abc electoral" />
					</a>
				</div>
				<div class="carrousel-item has-text-centered">
					<a target="_blank" href="https://drive.google.com/drive/folders/1WvjL0X8-i0F1qSJ2xs5HUy1YY2XPGmG6?usp=sharing">
					<img class="is-hidden-mobile" src="carrousel/dataset_desk.png" alt="dataset" />
					<img class="is-hidden-tablet" src="carrousel/dataset_mobile.png" alt="dataset" />
				</a>

				</div>
				<div class="carrousel-item has-text-centered">
					<a target="_blank" href="https://compaspolitico.merepresenta.info/">
						<img class="is-hidden-mobile" src="carrousel/compas_desk.png" alt="compas politico" />
						<img class="is-hidden-tablet" src="carrousel/compas_mobile.png" alt="compas politico" />
					</a>
				</div>
				<div class="carrousel-item has-text-centered">
					<a target="_blank" href="https://trivia.merepresenta.info/">
						<img class="is-hidden-mobile" src="carrousel/trivia_desk.png" alt="trivia" />
						<img class="is-hidden-tablet" src="carrousel/trivia_mobile.png" alt="trivia" />
					</a>
				</div>
				<div class="carrousel-item has-text-centered">
					<a target="_blank" href="https://verdaderofalso.merepresenta.info/">
						<img class="is-hidden-mobile" src="carrousel/vof_desk.png" alt="verdadero o falso" />
						<img class="is-hidden-tablet" src="carrousel/vof_mobile.png" alt="verdadero o falso" />
					</a>
				</div> -->
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
