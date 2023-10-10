<script context="module">
	import API, { handleResponse } from '$lib/apiHandler';
	import { getThemes } from '$lib/graph-ql/themes.js';
	export async function load({ fetch }) {
		const res = await API(fetch, getThemes());
		return await handleResponse(res, 'temas', 'ejes');
	}
</script>

<script>
	import Carrousel from '$lib/carrousel/index.svelte'

	import FlourishCard from '$lib/common/flourish-card.svelte';
	let height
</script>

<svelte:head>
	<!-- <title>Home</title> -->
</svelte:head>
<main>
	
	<div class="hero is-black  is-halfheight tetris-background">
		<div class="hero-body">
			<div class="columns pb-6 mb-6 mx-auto">
				<div class="column has-text-centered-touch">
					<img src="/logo-merepresenta.svg" width="300" class="image py-4 mt-5 image-logo " alt="logo de Me representa" />
					<div class="title-banner">
						<div class="">
							<h2 class="title is-1 has-text-white py-3 is-inline-block is-uppercase">
								El futuro <br/>
								<span >no es un misterio</span>
							</h2>
						</div>
					</div>
					<div class="is-centered is-mobile subtitle-banner">
						<div class="is-7-desktop ">
							
							<h2
								class="subtitle is-5 is-size-6-touch has-text-white"
							>
							Conocé las propuestas de cada candidatura para saber qué es lo que puede llegar a pasar los próximos 4 años. 
							</h2>
						</div>
					</div>
				</div>
				<div class="column has-text-right has-text-centered-touch">
					<img src="/logoHome.png" alt="logo elijo saber">
				</div>
			</div>
		</div>
	</div>
	<div class="section" style="min-height: {height}px;">
		<div class="is-centered card-section" bind:clientHeight={height}>
			<div class="columns is-justify-content-center">
				<div class="column is-one-third-desktop card card-styled 1 mx-3">
					<header class="card-header">
						<div
							class="card-header-title title-custom-style has-text-black is-uppercase has-text-weight-medium is-centered has-background-5A81FF"
						>
							¿No sabés qué se vota?
						</div>
					</header>
					<div class="card-image py-5">
						<img class="image mx-auto card-logo" src="/candidates-link.svg" width="240" alt="candidaturas" />
					</div>
					<footer class="card-foter px-5 pb-5">
						<a
							href="/partidos-y-candidaturas"
							class="text-wrap-wrap button is-black botton-styled is-uppercase has-text-weight-semibold px-3 call-to-action"
							>Candidaturas</a
						>
					</footer>
				</div>
				<div class="column is-one-third-desktop card card-styled mx-3">
					<header class="card-header">
						<div
							class="card-header-title title-custom-style has-text-black is-uppercase has-text-weight-medium is-centered has-background-E9F92A"
						>
							¿Qué se propone?
						</div>
					</header>
					<div class="card-image py-5">
						<img class="image mx-auto card-logo" src="/proposal.svg" width="240" alt="propuestas" />
					</div>
					<footer class="card-foter px-5 pb-5">
						<a
							href="/propuestas"
							class="text-wrap-wrap button is-black botton-styled is-uppercase has-text-weight-semibold px-3 call-to-action"
							>propuestas por listas</a
						>
					</footer>
				</div>
				<div class="column is-one-third-desktop card card-styled mx-3">
					<header class="card-header">
						<div
							class="card-header-title title-custom-style has-text-black is-uppercase has-text-weight-medium is-centered has-background-FF4817"
						>
							¡informate jugando!
						</div>
					</header>
					<div class="card-image py-5">
						<img
							class="image mx-auto card-logo"
							src="/juegos.svg"
							width="240"
							alt="Ícono de juegos"
						/>
					</div>
					<footer class="card-foter px-5 pb-5">
						<a
							href="/juegos"
							class="text-wrap-wrap button is-black botton-styled is-uppercase has-text-weight-semibold px-3 call-to-action"
							>conocé los juegos</a
						>
					</footer>
				</div>
			</div>
			<div class="carrousel">
				<h1 class="title mt-6 is-1 is-size-3-touch has-text-centered has-text-black  is-spaced">Lo que todavía no viste</h1>
				<Carrousel/>
			</div>
			<div class="section p-0 mt-5">
				<FlourishCard/>

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
	.hero .hero-body .columns{
		width: 90%;
	}
	.title-banner div h2 span {
		color: #FF4817;
	}
	.subtitle-banner{
		width: 65%;
	}
	.card-styled {
		padding: 1rem;
		border: 1px solid #000;
		border-radius: 10px;
		position: relative;
	}
	.card-styled::after {
		content: '';
		margin: auto;
		left: 1rem;
		right: 1rem;
		top: 1rem;
		bottom: 1rem;
		position: absolute;
		border: 1px solid #000;
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
		padding-top: 1rem;
	}
	.title-custom-style{
		padding: .5rem;
		border-top: 1px solid #000;
		border-bottom: 1px solid #000;
		
	}
	.has-background-5A81FF{
		background-color: #5A81FF;
	}
	.has-background-E9F92A{
		background-color: #E9F92A;
	}
	.has-background-FF4817{
		background-color: #FF4817;
	}
	.call-to-action{
		position: relative;
		z-index: 2;
	}
	
	@media screen and (max-width: 1024px) {
		.hero.tetris-background .hero-body {
			background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 1) 100%);
		}
		.subtitle-banner{
		width: 100%;
		}
		.card-section {
			width: 90%;
		}
		.card-section > div {
			flex-direction: column;
		}
		.card-styled {
			margin-top: 16px;
		}
		.image-logo{
			margin: auto;
		}
	}
	.button {
		display: flex;
		border: 1px solid white;
		flex-direction: column;
		border-radius: 10px;
		height: auto;
	}
	
	.text-wrap-wrap{
		white-space: normal;
	}

</style>
