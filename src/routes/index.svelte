<script context="module">
	export const prerender = true;
</script>
<script>
	import Hero from '$lib/header/Hero.svelte'
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>
<main class="container p-2 has-background-black">
	<Hero 
		title="Te ayudamos a votar de manera informada."
		image="/static/logo-merepresenta.svg"
		imgAlt="logo me representa"
		subtitle="Conocé candidaturas, partidos, plataformas electorales y mucho más."
	/>
	<div class="has-text-centered">
		<section class="container p-4">
			<h2 class="title is-4">A vos, ¿quién te representa?</h2>
			<a href="/partidos-y-candidates/donde-votas" class="button is-medium is-fullwidth is-uppercase mb-4">ver partidos y candidates</a>
			<a href="/plataformas/donde-votas" class="button transparent is-medium is-fullwidth is-uppercase ">ver propuestas</a>
		</section>
		<section class="container p-4 ">
			<h2 class="title light is-4">¿No sabés qué se vota?</h2>
			<a class="has-text-white is-underlined  is-uppercase transparent" href="/abc">ver ABC sobre las elecciones 2021</a>
		</section>
	</div>
</main>
<style>
</style>