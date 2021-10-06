<script>
	import Hero from '$lib/header/Hero.svelte'
import { space } from 'svelte/internal';
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>
<main class="container is-fullhd black-background
	p-2 has-background-black">
	<Hero 
		title="Te ayudamos a votar de manera informada."
		image="/logo-merepresenta.svg"
		imgAlt="logo me representa"
		subtitle="Conocé candidaturas, partidos, plataformas electorales y mucho más."
	/>
	<div class="has-text-centered">
		<section class="container p-4 is-hidden-tablet">
			<h2 class="title is-4 has-text-white has-text-weight-normal">A vos, ¿quién te representa?</h2>
			<div class="has-text-centered mt-6 mb-2">
				<img src="/candidates-link.svg" alt="">
			</div>
			<a href="/partidos-y-candidates/donde-votas" class="butto py-5 is-fullwidth is-uppercase mb-4">
				Conocé todo sobre los <br> <strong>partidos y lxs candidatxs</strong>
			</a>
			<div class="has-text-centered mt-6 mb-2">
				<img src="/proposals-link.svg" alt="">
			</div>
			<a href="/plataformas/donde-votas" class="button py-5 transparent is-fullwidth is-uppercase">
				enterate de todas sus  <br>
				<strong>propuestas</strong>
			</a>
		</section>

		<section class="container p-4 is-hidden-mobile mb-6">
			<h2 class="title is-4 has-text-black has-text-weight-normal mb-6"><span class="has-background-white p-2 is-uppercase"> A vos, ¿quién te representa?</span></h2>
			<a href="/partidos-y-candidates/donde-votas" class="button is-medium is-inline is-uppercase mb-4">
				Ver partidos y candidates
			</a>
		</section>

		<section class="has-background-white is-hidden-mobile py-6 ">
			<div class="columns mb-6 mx-2">
				<div class="column">
					<img src="themes/gender.svg"  alt="Ícono de género" class="py-5">
				</div>
				<div class="column">
					<img src="themes/health.svg"  alt="Ícono de salud" class="py-5">
				</div>
				<div class="column">
					<img src="themes/house.svg"  alt="Ícono de vivienda" class="py-5">
				</div>
				<div class="column">
					<img src="themes/justice.svg"  alt="Ícono de justicia" class="py-5">
				</div>
				<div class="column">
					<img src="themes/money.svg"  alt="Ícono de dinero" class="py-5">
				</div>
				<div class="column">
					<img src="themes/nature.svg"  alt="Ícono de naturaleza" class="py-5">
				</div>
				<div class="column">
					<img src="themes/search.svg"  alt="Ícono de búsqueda" class="py-5">
				</div>
				<div class="column">
					<img src="themes/security.svg"  alt="Ícono de seguruidad" class="py-5">
				</div>
			</div>
			<div>
				<h2 class="title is-4 has-text-white has-text-weight-normal mb-6"><span class="has-background-black p-3  is-uppercase"> ¿Querés conocer
					las propuestas? </span></h2>
				<a href="/plataformas/donde-votas" class="has-background-black button transparent is-medium is-uppercase  is-inline">ver propuestas</a>
			</div>
			<div class="divider my-6"></div>
			<div  class="border-top-bottom is-flex is-justify-content-center is-flex-direction-column is-align-items-center m-6">
				<figure class="mb-5 image is-128x128">
					<img class=" vote-logo" src="vote.png" alt="">			</figure>
				<div class="my-6">
					<h2 class="title light is-4 has-text-weight-normal has-text-white"><span class="has-background-black is-uppercase p-3 mb-3"> ¿No sabés qué se vota?</span></h2>
					<a class="has-text-white is-underlined has-background-black p-2  is-uppercase transparent" href="/abc-electoral">ver ABC sobre las elecciones 2021</a>
				</div>
			</div>
			<div class="divider my-6"></div>
		</section>

		
	</div>
</main>
<style>
	.button{
		display: flex;
		border: 1px solid white;
		flex-direction: column;
		border-radius: 10px;
	}
	.divider{
		width: 80%;
		margin: auto;
		border:1px solid #000;
	}

</style>