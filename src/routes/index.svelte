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
		<section class="container p-4">
			<h2 class="title is-4 has-text-white has-text-weight-normal">A vos, ¿quién te representa?</h2>
			<a href="/partidos-y-candidates/donde-votas" class=" button is-medium is-fullwidth is-uppercase mb-4">ver partidos y candidates</a>
			<a href="/plataformas/donde-votas" class=" is-hidden-tablet  button transparent is-medium is-fullwidth is-uppercase ">ver propuestas</a>
		</section>

		<section class="has-background-white is-hidden-mobile py-6 ">
			<div class="columns mb-6">
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
				<h2 class="title is-4 has-text-white has-text-weight-normal"><span class="has-background-black p-3 mb-3 is-uppercase"> ¿Querés conocer
					las propuestas? </span></h2>
				<a href="/plataformas/donde-votas" class="has-background-black button transparent is-medium is-uppercase ">ver propuestas</a>
			</div>

			<div  class="border-top-bottom is-flex is-justify-content-center is-flex-direction-column is-align-items-center m-6">

				
				<img class="my-6 vote-logo" src="vote.png" alt="">
				
				<div class="my-6">
					<h2 class="title light is-4 has-text-weight-normal has-text-white"><span class="has-background-black is-uppercase p-3 mb-3"> ¿No sabés qué se vota?</span></h2>
					<a class="has-text-white is-underlined has-background-black p-2  is-uppercase transparent" href="/abc-electoral">ver ABC sobre las elecciones 2021</a>
				</div>
			</div>
		</section>

		
	</div>
</main>
<style>
	.vote-logo{
		width: 250px;
	}
	.border-top-bottom {
		border-top:2px solid #000;
		border-bottom:2px solid #000
	}
	
</style>