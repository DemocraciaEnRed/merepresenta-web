<script context="module">
	import API, { handleResponse } from '$lib/apiHandler';
	import { getThemes } from '$lib/graph-ql/themes.js';
	export async function load({ fetch }) {
		const res = await API(fetch, getThemes());
		return await handleResponse(res, 'temas', 'ejes');
	}
</script>

<script>
	import { loop_guard, space } from 'svelte/internal';
	import { page } from '$app/stores';
	import { directusImg, ProvinciasSlugs } from '$lib/common/utils';
	export let temas;

	let height
</script>

<svelte:head>
	<!-- <title>Home</title> -->
</svelte:head>
<main>
	
	<div class="hero is-black  is-halfheight tetris-background">
		<div class="hero-body">
			<div class="container pb-6">
				<img src="/logo-merepresenta.svg" width="400" class="image mx-auto p-4 mb-4 mt-5 image-logo " alt="" />
				<div class="columns is-centered is-mobile">
					<div class="column is-7-desktop">
						<h1
							class="title is-5 is-size-6-touch has-text-centered has-text-left-touch has-text-white"
						>
							Te ayudamos a votar de manera informada.
						</h1>
						<h2
							class="subtitle is-5 is-size-6-touch has-text-centered has-text-left-touch has-text-white"
						>
							Conocé candidaturas, partidos, plataformas electorales y mucho más.
						</h2>
					</div>
				</div>
				<div class="is-hidden-touch">
					<div class="has-text-centered mb-6 mt-4">
						<h2 class="title is-1 has-text-white p-3 px-6 is-inline-block is-uppercase">
							A vos, ¿quién te representa?
						</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="section" style="min-height: {height}px;">
		<div class="is-centered card-section" bind:clientHeight={height}>
			<div class="columns is-justify-content-center">
				<div class="column is-one-third-desktop card card-styled mx-3">
					<header class="card-header">
						<div
							class="card-header-title has-text-black is-uppercase has-text-weight-medium is-centered"
						>
							¿No sabés que se vota?
						</div>
					</header>
					<div class="card-image">
						<img class="image mx-auto card-logo" src="/vote.svg" width="240" alt="" />
					</div>
					<footer class="card-foter px-5 pb-5 pt-4">
						<a
							href="/abc-electoral"
							class="button is-black botton-styled is-uppercase has-text-weight-semibold px-3 "
							>ABC ELECTORAL</a
						>
					</footer>
				</div>
				<div class="column is-one-third-desktop card card-styled mx-3">
					<header class="card-header">
						<div
							class="card-header-title has-text-black is-uppercase has-text-weight-medium is-centered"
						>
							¿Qué se propone?
						</div>
					</header>
					<div class="card-image">
						<img class="image mx-auto card-logo" src="/proposal.svg" width="240" alt="" />
					</div>
					<footer class="card-foter px-5 pb-5 pt-4">
						<a
							href="/plataformas/donde-votas"
							class="button is-black botton-styled is-uppercase has-text-weight-semibold px-3 "
							>propuestas por listas</a
						>
					</footer>
				</div>
				<div class="column is-one-third-desktop card card-styled mx-3">
					<header class="card-header">
						<div
							class="card-header-title has-text-black is-uppercase has-text-weight-medium is-centered"
						>
							¡informate jugando!
						</div>
					</header>
					<div class="card-image">
						<img
							class="image mx-auto card-logo"
							src="/juegos.svg"
							width="240"
							alt="Ícono de juegos"
						/>
					</div>
					<footer class="card-foter px-5 pb-5 pt-4">
						<a
							href="/juegos"
							class="button is-black botton-styled is-uppercase has-text-weight-semibold px-3 "
							>conoce lOS JUEGOS</a
						>
					</footer>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.tetris-background {
		background-image: url('/black-background-desktop.png');
		background-attachment: fixed;
		background-repeat: repeat;
	}

	.hero.tetris-background .hero-body {
		background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.4) 90%);
		background-attachment: fixed;
	}
	.card-styled {
		border-radius: 10px;
	}
	.botton-styled {
		border-radius: 50px !important;
	}
	.botton-styled:hover {
		background-color: #3e3e3e;
	}
	.card-logo {
		height: 100px;
	}
	.section {
		position: relative;
		min-height: 40vh;
	}
	.card-section {
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		width: 80%;
		top: -100px;
		position: absolute;
	}
	.card-header {
		box-shadow: none;
	}
	@media screen and (max-width: 1024px) {
		.hero.tetris-background .hero-body {
			background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 1) 100%);
		}
		/* .card-section {
			width: 100%;
			position: static;
		} */
		.card-section > div {
			flex-direction: column;
		}
		.card-styled {
			margin-top: 16px;
		}
		.image-logo{
			margin-left: 0!important;
			padding-left: 0!important;
		}
	}
	.button {
		display: flex;
		border: 1px solid white;
		flex-direction: column;
		border-radius: 10px;
		height: auto;
	}
</style>
