<script context="module">
	import API, { handleResponse } from "$lib/apiHandler";
	import { getThemes } from "$lib/graph-ql/themes.js";
	export async function load({fetch}){
	  const res = await API(fetch, getThemes());
	  return await handleResponse(res, "temas", "ejes")
	}
  </script>
<script>
	import { loop_guard, space } from 'svelte/internal';
	import { page } from "$app/stores";
	import { directusImg, ProvinciasSlugs } from "$lib/common/utils";
	export let temas;
</script>

<svelte:head>
	<!-- <title>Home</title> -->
</svelte:head>
<main>
	<div class="hero is-black is-halfheight tetris-background">
		<div class="hero-body">
			<div class="container">
				<img src="/logo-merepresenta.svg" width="400" class="image p-4 mb-5 is-hidden-desktop" alt="">
				<div class="columns is-centered is-mobile">
					<div class="column is-8-desktop">
						<h1 class="title is-3 is-size-4-touch has-text-centered has-text-left-touch has-text-white">
							Una herramienta para pensar tu voto
						</h1>
						<h2 class="subtitle is-3 is-size-4-touch has-text-centered has-text-left-touch has-text-white">
							Conocé candidaturas, partidos, propuestas y mucho más.
						</h2>
					</div>
				</div>
				<div class="is-hidden-touch">
					<div class="has-text-centered mt-6">
						<h2 class="title is-1 has-text-white p-3 px-6 is-inline-block is-uppercase">¿SABÉS QUIÉN TE REPRESENTA? </h2>
						
					</div>
					<div class="buttons is-centered mt-6">
						<a href="/partidos-y-candidates/donde-votas" class="animate__animated animate__pulse animate__infinite animate__slow button is-size-4 is-white is-inline is-uppercase has-text-weight-semibold py-3 px-6">
							VER CANDIDATURAS Y PARTIDOS
					</a>
				</div>
			</div>

				<section class="is-hidden-desktop has-text-centered my-6">
					<h2 class="title is-4 has-text-white has-text-weight-normal">¿SABÉS QUIÉN TE REPRESENTA?</h2>
					<div class="has-text-centered mt-6 mb-2">
						<img src="/candidates-link.svg" alt="">
					</div>
					<a href="/partidos-y-candidates/donde-votas" class="button  is-fullwidth is-uppercase mb-4">
						CONOCÉ TODO SOBRE<br> <strong>CANDIDATURAS Y PARTIDOS</strong>
					</a>
					<div class="has-text-centered mt-6 mb-2">
						<img src="/proposals-link.svg" alt="">
					</div>
					<a href="/plataformas/donde-votas" class="button transparent is-fullwidth is-uppercase">
						CONOCÉ TODAS SUS <br>
						<strong>propuestas</strong>
					</a>
					<div class="has-text-centered mt-6 mb-2">
						<img src="/vote.svg" alt="Ícono de votación">
					</div>
					<a href="/abc-electoral" class="button games transparent is-fullwidth is-uppercase ">
						CONOCÉ QUÉ Y CÓMO SE VOTA<br><strong> ver ABC sobre las elecciones 2021</strong>
						
					</a>
					<div class="has-text-centered mt-6 mb-2">
						<img src="juegos.svg" alt="Ícono de juegos">
					</div>
					<a href="/juegos" class="button games transparent is-fullwidth is-uppercase ">
						JUGÁ CON LA<br><strong> POLÍTICA ARGENTINA</strong>
						
					</a>
				</section>
			</div>
		</div>
	</div>
		<!-- Home on Desktop -->
		<div class="section is-hidden-touch">
			<div class="container desktop-topics has-text-centered">
				<div class="columns is-vcentered icons mb-6 is-align-items-stretch">

					{#each temas as tema}
						<div class="column has-text-centered">
							<div class="topic-container is-flex is-justify-content-center" style="background-color: {tema.color};">
								<img src="{directusImg}{tema.icon_file.id}" class="icon-topic"  alt="icono de {tema.name}"/>
							</div>
						</div>
					{/each}
					<!-- <div class="column">
						<img src="themes/gender.svg" class="image mx-auto" alt="Ícono de género">
					</div>
					<div class="column ">
						<img src="themes/health.svg" class="image mx-auto" alt="Ícono de salud" >
					</div>
					<div class="column">
						<img src="themes/house.svg" class="image mx-auto" alt="Ícono de vivienda">
					</div>
					<div class="column">
						<img src="themes/justice.svg" class="image mx-auto" alt="Ícono de justicia">
					</div>
					<div class="column">
						<img src="themes/money.svg" class="image mx-auto" alt="Ícono de dinero">
					</div>
					<div class="column">
						<img src="themes/nature.svg" class="image mx-auto" alt="Ícono de naturaleza">
					</div>
					<div class="column">
						<img src="themes/search.svg" class="image mx-auto" alt="Ícono de búsqueda">
					</div>
					<div class="column">
						<img src="themes/security.svg" class="image mx-auto" alt="Ícono de seguruidad">
					</div> -->
				</div>
					<h2 class="title is-1 has-text-white has-background-black p-3 px-6 is-inline-block is-uppercase">¿Queres conocer<br>las propuestas?</h2>
					<div class="buttons is-centered">
						<a href="/plataformas/donde-votas" class="button is-black is-large is-uppercase has-text-weight-semibold px-6 is-outlined">ver propuestas</a>
					</div>
					
					<div class="divider"></div>
						<img class="image mx-auto vote-logo" src="/vote.png" width="240" alt="">	
						<h2 class="title is-1 has-text-white has-background-black p-3 px-6 is-inline-block is-uppercase on-top">¿SABÉS QUÉ SE VOTA?</h2>
						<div class="buttons is-centered">
							<a href="/abc-electoral" class="button is-black is-large is-uppercase has-text-weight-semibold px-6 is-outlined">VER ABC ELECTORAL</a>
						</div>
						<div class="divider"></div>
						<img class="image mx-auto games-logo" src="/juegos.svg" width="240" alt="Ícono de juegos">
						<h2 class="title is-1 has-text-white has-background-black p-3 px-6 is-inline-block is-uppercase on-top mb-3">¿SABÉS DE POLÍTICA ARGENTINA?</h2>
						<div class="buttons is-centered mt-6">
							<a href="/juegos" class="button is-black is-large is-uppercase has-text-weight-semibold px-6 is-outlined">DESAFIATE CON ESTOS JUEGOS</a>
						</div>

			<!-- <div class="divider my-6"></div> -->
	</div>
	</div>
		
	</main>
	<style>
		.tetris-background {
		background-image: url("/black-background-desktop.png");
		background-attachment: fixed;
		background-repeat: repeat;
	}
	.hero.tetris-background .hero-body{
		background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 90%); 
		background-attachment: fixed;
	}
	@media screen and (max-width: 1024px){
		.hero.tetris-background .hero-body{
			background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%); 
		}
	}
	.button{
		display: flex;
		border: 1px solid white;
		flex-direction: column;
		border-radius: 10px;
		height: auto;
	}
	.button.games{
		white-space: break-spaces;
	}
	.divider{
		width: 75%;
		margin: 60px auto;
		border:1px solid #000;
	}
	.icons img{
		max-width: 50px;
	}
	.games-logo{
		filter:invert(0%) sepia(97%) saturate(13%) hue-rotate(210deg) brightness(5%) contrast(103%);
		margin-bottom: -5px
	}
	.desktop-topics .button{
		border: 1px solid #000;
		border-radius: 5px;
	}
	.vote-logo{
		margin-bottom:-25px;
		z-index: 10;
	}
	.on-top{
		position: relative;
		z-index: 20;
	}
	.topic-container{
		height: 100%;
	}

</style>