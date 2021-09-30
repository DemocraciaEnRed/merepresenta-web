<script>
	import Hero from '$lib/header/Hero.svelte'
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>
<main class="container p-2 has-background-black">
	<Hero 
		title="Te ayudamos a votar de manera informada."
		image="/logo-merepresenta.svg"
		imgAlt="logo me representa"
		subtitle="Conocé candidaturas, partidos, plataformas electorales y mucho más."
	/>
	<div class="has-text-centered">
		<section class="container p-4">
			<h2 class="title is-4 has-text-white has-text-weight-normal">A vos, ¿quién te representa?</h2>
			<div class="has-text-centered mt-6 mb-2">
				<img src="/candidates-link.svg" alt="">
			</div>
			
			<a href="/partidos-y-candidates/donde-votas" class="button py-5 is-fullwidth is-uppercase mb-4">
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
		<section class="container p-4 ">
			<h2 class="title light is-4 has-text-weight-normal has-text-white">¿No sabés qué se vota?</h2>
			<a class="has-text-white is-underlined  is-uppercase transparent" href="/abc-electoral">ver ABC sobre las elecciones 2021</a>
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

</style>