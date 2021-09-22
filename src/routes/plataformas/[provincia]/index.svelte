<script>
	import { page } from "$app/stores";
	import { base } from '$app/paths';
	let nextUrl = `${base}/plataformas/${$page.params.provincia}`
</script>
<main class="container p-2 has-background-black">
<section class="has-text-centered propuestas">
	<h1 class="title-white is-4">¿Como preferís conocer las propuestas?</h1>
	<div class="buttons is-justify-content-center mt-4">
		<a href={`${nextUrl}/temas`} class="is-uppercase button has-text-black">Por tema</a>
		<a href={`${nextUrl}/partidos`} class="is-uppercase button has-text-black">Por partido</a>
	</div>
</section>
</main>
<style>
	.propuestas{
		margin-top: 50px;
	}
</style>