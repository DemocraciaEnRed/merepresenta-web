<script>
	import { page } from "$app/stores";
	let nextUrl = `/plataformas/${$page.params.provincia}`
</script>
<section class="has-text-centered">
	<h1 class="title is-3">Plataformas Electorales</h1>
	<p>¿Como preferís conocer las propuestas?</p>
	<div class="buttons is-justify-content-center mt-4">
		<a href={`${nextUrl}/temas`} class="is-uppercase button">Por tema</a>
		<a href={`${nextUrl}/partidos`} class="is-uppercase button">Por partido</a>
	</div>
</section>