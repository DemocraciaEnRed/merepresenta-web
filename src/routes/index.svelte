<script context="module">
	export const prerender = true;
</script>
<script>
	import Hero from '$lib/header/Hero.svelte'
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>
<Hero 
	title="ME REPRESENTA"
	subtitle="Te ayudamos a votar de manera informada. Conocé candidaturas, partidos, plataformas electorales y MUCHO MÁS."
/>
<section class="container p-4">
	<h2 class="has-text-centered title is-4">A vos, ¿quién te representa?</h2>
	<button class="button is-medium is-fullwidth is-primary is-uppercase mb-4">ver partidos y candidatxs</button>
	<button class="button is-medium is-fullwidth is-uppercase">ver propuestas</button>
</section>
<section class="container p-4">
	<h2 class="has-text-centered title is-4">¿No sabés qué se vota?</h2>
	<button class="button is-medium is-fullwidth is-uppercase">ver ABC sobre las elecciones 2021</button>
</section>