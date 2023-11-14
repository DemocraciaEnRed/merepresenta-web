<script context="module">
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByCargo } from '$lib/graph-ql/candidates';
	import { CandidateImg, shuffleArray } from '$lib/common/utils';
	export async function load({ fetch }) {
		const res = await API(fetch, getCandidatesByCargo('presidente'));
		const { props } = await handleResponse(res, 'candidates', 'candidato');
		props.candidates = shuffleArray(
			props.candidates.filter((candidate) => candidate.partido.elecciones_generales)
		);
		return { props };
	}
</script>

<script>
	import Carrousel from '$lib/carrousel/index.svelte';

	import FlourishCard from '$lib/common/flourish-card.svelte';
	let height;
	export let candidates;
</script>

<svelte:head>
	<!-- <title>Home</title> -->
</svelte:head>
<main>
	<div class="hero is-black is-halfheight tetris-background">
		<div class="hero-body">
			<div class="columns pb-6 mb-6 mx-auto">
				<div class="column has-text-centered-touch">
					<img
						src="/logo-merepresenta.svg"
						width="300"
						class="image py-4 mt-5 image-logo"
						alt="logo de Me representa"
					/>
					<div class="title-banner">
						<div class="">
							<h2 class="title is-1 is-size-2-touch has-text-white py-3 is-inline-block is-uppercase ">
								<span>HAY Balotaje </span>
								<br />
								Elegí el futuro qúe querés
							</h2>
						</div>
					</div>
					
				</div>
				<div class="column has-text-right has-text-centered-touch">
					<img src="/logoHome.png" alt="logo elijo saber" />
				</div>
			</div>
		</div>
	</div>
	<div class="section has-background-white" style="min-height: {height}px;">
		<div class="is-centered card-section" bind:clientHeight={height}>
			<div class="is-relative pb-6 mb-4">

				<div class="box candidate-box has-background-FF4817 mb-6 width-80">
					<div class="text-title">
						<h1
							class="is-size-1 is-size-1-tablet is-size-3-mobile has-text-weight-bold has-text-black is-uppercase"
						>
							Conocé las <br /> diferencias
						</h1>
						<h1
							class="is-size-1 is-size-1-tablet is-size-3-mobile has-text-weight-bold has-text-white is-uppercase"
						>
							entre los <br /> candidatos
						</h1>
						<div class=" pb-5 is-hidden-touch">
							<a class="button is-size-6 w-100 mx-auto is-black is-rounded mb-4" href="/propuestas"
								>COMPARÁ SUS PROPUESTAS</a
							>
							<a
								class="button is-size-6 w-100 mx-auto is-rounded has-background-white"
								href="/partidos-y-candidaturas/candidates/comparativa">COMPARÁ SUS PERFILES</a
							>
						</div>
					</div>
					<div class="is-flex is-justify-content-center is-relative candidates-home-wrapper">
						{#each candidates as candidate}
							<div class="candidate-sobre-position">
								<div
									class="button-candidate"
									style="background: linear-gradient(45deg,{candidate.partido.color1},{candidate
										.partido.color2})"
								>
									<div class="info-candidate">
										<figure class="image mx-auto candidate-avatar">
											<img src={CandidateImg(candidate)} alt={candidate.name} />
										</figure>
									</div>
								</div>
							</div>
						{/each}
					</div>
					<div class=" pt-5 is-hidden-desktop">
						<a class="button is-size-6 w-100 mx-auto is-black is-rounded mb-4" href="/propuestas"
							>COMPARÁ SUS PROPUESTAS</a
						>
						<a
							class="button is-size-6 w-100 mx-auto is-rounded has-background-white"
							href="/partidos-y-candidaturas/candidates/comparativa">COMPARÁ SUS PERFILES</a
						>
					</div>
				</div>
				<div class="box candidate-box has-background-white mt-5 width-80 ">
					<div class="text-title is-flex is-flex-direction-column is-justify-content-space-between">
						<h1
							class="is-size-1 is-size-1-tablet is-size-3-mobile has-text-weight-bold has-text-black is-uppercase"
						>
						Quiénes <br>
						quedaron en <br>
						el poder <br>
						Legislativo
						</h1>

						<div class=" pb-5 is-hidden-touch">
							<a
								class="button is-size-6 w-100 mx-auto is-black is-rounded mb-4 is-uppercase"
								href="/legislativo">CONOCÉ LA composición FINAL</a
							>
						</div>
					</div>
					<div class="image-diputies-chamber">
						<img src="/diputies_chamber.png" alt="" />
					</div>
					<div class="pt-5 is-hidden-desktop">
						<a
							class="button is-size-6 is-size-7-mobile w-100 mx-auto is-black is-rounded mb-4 is-uppercase"
							href="/legislativo">CONOCÉ LA composición FINAL</a
						>
					</div>
				</div>
			<div class="final-banner"></div>
			</div>

			<div class="is-flex is-flex-direction-column width-80">
				<h1 class="mb-5 is-size-2 has-text-black has-text-weight-bold has-text-centered">
					No te pierdas el resto de nuestro contenido
				</h1>
				<div class="columns is-justify-content-center">
					<div class="column is-one-third-desktop card card-styled 1 mx-3">
						<header class="card-header">
							<div
								class="card-header-title title-custom-style has-text-black is-uppercase has-text-weight-medium is-centered has-background-5A81FF"
							>
								COMPARá las propuestas
							</div>
						</header>
						<div class="card-image py-5">
							<img
								class="image mx-auto card-logo"
								src="/compare.svg"
								width="240"
								alt="candidaturas"
							/>
						</div>
						<footer class="card-foter px-5 pb-5">
							<a
								href="/partidos-y-candidaturas"
								class="text-wrap-wrap button button-link is-black botton-styled is-uppercase has-text-weight-semibold px-3 call-to-action"
								>Propuestas comparadas</a
							>
						</footer>
					</div>
					<div class="column is-one-third-desktop card card-styled mx-3">
						<header class="card-header">
							<div
								class="card-header-title title-custom-style has-text-black is-uppercase has-text-weight-medium is-centered has-background-E9F92A"
							>
								Quienes son los candidatos
							</div>
						</header>
						<div class="card-image py-5">
							<img
								class="image mx-auto card-logo"
								src="/admin.svg"
								width="240"
								alt="propuestas"
							/>
						</div>
						<footer class="card-foter px-5 pb-5">
							<a
								href="/propuestas"
								class="text-wrap-wrap button button-link is-black botton-styled is-uppercase has-text-weight-semibold px-3 call-to-action"
								>Candidaturas</a
							>
						</footer>
					</div>
					<div class="column is-one-third-desktop card card-styled mx-3">
						<header class="card-header">
							<div
								class="card-header-title title-custom-style has-text-black is-uppercase has-text-weight-medium is-centered has-background-FF4817"
							>
								Compará los candidatos
							</div>
						</header>
						<div class="card-image py-5">
							<img
								class="image mx-auto card-logo"
								src="/people.svg"
								width="240"
								alt="Ícono de juegos"
							/>
						</div>
						<footer class="card-foter px-5 pb-5">
							<a
								href="/juegos"
								class="text-wrap-wrap button button-link is-black botton-styled is-uppercase has-text-weight-semibold px-3 call-to-action"
								>compará</a
							>
						</footer>
					</div>
				</div>
			</div>
			<div class="carrousel width-80">
				<h1 class="title mt-6 is-1 is-size-3-touch has-text-centered has-text-black is-spaced">
					Lo que todavía no viste
				</h1>
				<Carrousel />
			</div>
			<div class="section p-0 mt-5 width-80">
				<FlourishCard id='14741416'/>
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
	.hero .hero-body .columns {
		width: 90%;
	}
	.title-banner div h2 span {
		color: #ff4817;
	}
	.title-banner div h2 {
		font-weight: 900!important;
	}
	.subtitle-banner {
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
		min-height: 50vh;
	}
	.card-section {
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		top: -100px;
		position: absolute;
	}
	.card-header {
		box-shadow: none;
		padding-top: 1rem;
	}
	.title-custom-style {
		padding: 0.5rem;
		border-top: 1px solid #000;
		border-bottom: 1px solid #000;
	}
	.has-background-5A81FF {
		background-color: #5a81ff;
	}
	.has-background-E9F92A {
		background-color: #e9f92a;
	}
	.has-background-FF4817 {
		background-color: #ff4817;
	}
	.candidate-box {
		border: 4px solid #000;
		border-radius: 20px;
		display: flex;
		justify-content: space-between;
		position: relative;
		z-index: 1;
		padding: 1rem 2.5rem;
	}

	.call-to-action {
		position: relative;
		z-index: 2;
	}

	.width-80{
		width: 80%;
		margin: auto;
	}
	@media screen and (max-width: 1024px) {
		.candidate-box {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: .75rem .75rem;
		}
		.hero.tetris-background .hero-body {
			background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 1) 100%);
		}
		.subtitle-banner {
			width: 100%;
		}
		.width-80{
			width: 95%;
		}

		.card-section > div {
			flex-direction: column;
		}
		.card-styled {
			margin-top: 16px;
		}
		.image-logo {
			margin: auto;
		}
	}
	.button-link {
		display: flex;
		border: 1px solid white;
		flex-direction: column;
		border-radius: 10px;
		height: auto;
	}

	.text-wrap-wrap {
		white-space: normal;
	}

	.candidate-sobre-position {
		display: flex;
	}
	.candidate-sobre-position:first-child {
		align-items: start;
		margin-right: -25px;
	}
	.candidate-sobre-position:last-child {
		align-items: end;
	}
	.candidate-sobre-position:last-child > div {
		z-index: 1;
	}
	.button-candidate {
		padding: 5px;
		border-radius: 25px;
		border: none;
		overflow: hidden;
		cursor: pointer;
		width: 250px;
		height: auto;
	}
	.info-candidate {
		border-radius: 20px;
		overflow: hidden;
	}
	@media screen and (max-width: 1024px) {
		.text-title {
			text-align: center;
		}
		.button-candidate {
			width: 250px;
		}
		.candidate-sobre-position {
			height: 425px;
		}
	}
	@media screen and (max-width: 768px) {
		.button-candidate {
			width: 150px;
		}
		.candidate-sobre-position {
			height: 250px;
		}
		.hero .hero-body {
			padding: 1.5rem .5rem;
		}
		.hero .hero-body .columns{
			width: 100%;
		}
		.hero .hero-body .column {
			padding: 0;
		}
	}
	.image-diputies-chamber {
		width: 50%;
	}
	.image-diputies-chamber > img {
		width: 100%;
	}
	@media screen and (max-width: 1024px) {
		.image-diputies-chamber {
			width: 100%;
		}
	}
	.final-banner {
		content: '';
		border: 4px solid #000;
		background-color: #5a81ff;
		width: 100%;
		height: 300px;
		position: absolute;
		bottom: 0;
	}
</style>
