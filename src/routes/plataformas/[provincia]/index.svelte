<script>
	import { page } from "$app/stores";
	let nextUrl = `/plataformas/${$page.params.provincia}`
</script>
<main class=" is-flex is-align-items-center is-justify-content-center black-background p-2 has-background-black">
<section class="container has-text-centered propuestas">
	<h1 class="title-white is-4 is-size-3-tablet ">¿CÓMO QUERÉS CONOCER LAS PROPUESTAS?</h1>
	<div class="is-hidden-tablet buttons is-justify-content-center mt-4">
		<a href={`${nextUrl}/temas`} class="has-background-white is-uppercase button has-text-black ">
			Por tema
		</a>
		<a href={`${nextUrl}/partidos`} class="is-uppercase button has-text-black">Por partido</a>
	</div>
	<div class="is-hidden-mobile is-flex is-justify-content-center mt-6">
		<a href={`${nextUrl}/temas`} class="button-container  p-5 m-3 has-background-black is-uppercase has-text-black is-flex is-flex-direction-column is-align-items-center">
			<figure class="is-hidden-mobile image is-96x96">
				<img src="/por-tema.svg" alt="Ícono de carpetas">
			</figure>
			<span class="is-size-4 has-text-white">Por tema</span>
	
		</a>
		<a href={`${nextUrl}/partidos`} class="button-container p-5 m-3 has-background-black is-uppercase has-text-black is-flex is-flex-direction-column is-align-items-center">
			<figure class="is-hidden-mobile image is-96x96">
				<img src="/por-partido.svg" alt="Ícono de tres personas">
			</figure>
			<span class="is-size-4 has-text-white">Por partido</span></a>
	</div>
</section>
</main>
<style>
	.propuestas{
		margin-top: 50px;
	}
	.button-container {
		border:2px solid #fff;
		width:230px
	}
</style>