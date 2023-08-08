<script>
	import { page } from "$app/stores";
	let nextUrl = `/propuestas/${$page.params.provincia}`
</script>
<div class="hero is-black is-medium tetris-background">
	<div class="hero-body is-align-items-flex-start">
		<div class="container">
			<h1 class="has-text-centered title is-1 mb-6 animate__animated animate__flipInX">¿CÓMO QUERÉS CONOCER LAS PROPUESTAS?</h1>
				<div class="is-flex is-justify-content-center mt-6 buttons-container">
					<a href={`${nextUrl}/temas`} class="button-container has-text-centered is-justify-content-space-between has-background-black is-uppercase has-text-black is-flex is-flex-direction-column is-align-items-center animate__animated animate__bounceInLeft animate__delay-1s">
						<img src="/por-tema.svg" class="image icon-type" alt="Ícono de carpetas">
						<span class="is-size-5 has-text-white">Por tema</span>
					</a>
					<a href={`${nextUrl}/partidos`} class="button-container has-text-centered is-justify-content-space-between has-background-black is-uppercase has-text-black is-flex is-flex-direction-column is-align-items-center animate__animated animate__bounceInRight animate__delay-1s">
						<img src="/por-partido.svg" class="image icon-type" alt="Ícono de tres personas">
						<span class="is-size-5 has-text-white">Por partido</span></a>
				</div>
		</div>
	</div>
</div>

<style>
.tetris-background {
	background-image: url("/black-background-desktop.png");
	background-attachment: fixed;
	/* background-size: cover; */
	background-repeat: repeat;
}
.hero.tetris-background .hero-body{
	background: linear-gradient(0deg, rgba(0,0,0,1) 00%, rgba(0,0,0,0.4) 100%); 
	background-attachment: fixed;
}
@media screen and (max-width: 1024px){
	.hero.tetris-background .hero-body{
		background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%); 
	}
	.buttons-container{
		flex-direction: column;
	}
	.button-container {
		flex-grow: 1;
		width: auto!important;
	}
}
.icon-type{
	width: 100px;
	height: 100px;
	margin-bottom: 10px;
}
.button-container {
		border:2px solid #fff;
		width: 230px;
		padding: 1rem;
		margin: 15px;
	}
</style>