<script>
    import Game from './_game.svelte'
    let height
</script>
<main class="r hero is-black tetris-background">
    <div class="hero-body py-6 ">
        <section class="has-text-centered container p-6 my-6 title-section">
            <h2 class="title light is-size-1  is-size-3-touch has-text-weight-normal has-text-white is-uppercase">Nuestros Juegos</h2>
            <h2 class="subtitle light is-size-4 is-size-6-touch has-text-weight-semibold has-text-white is-uppercase mt-4">Mirá nuestros juegos online para descubrir más sobre la política argentina.</h2>
            
        </section>
    </div>
    
</main>
<section class="container p-4 has-text-centered"  style="min-height: {height -40}px;">
    <div class="columns is-flex-wrap-wrap is-justify-content-center card-section" bind:clientHeight={height}>
        <!-- <div class="column p-0 pb-2 column-styled">
            <Game image="games/compas.png" url={"https://compaspolitico.merepresenta.info/"} title="Compás politico"/>
        </div> -->
        <div    class="column p-0 pb-2 column-styled">
            <Game image="games/trivia.png" url={"https://trivia.merepresenta.info/"}  title="trivia"/>
        </div>
        <div class="column p-0 pb-2 column-styled ">
            <Game image="games/vof.png" url={"https://verdaderofalso.merepresenta.info/"} title="verdadero o falso"/>
        </div>
        <div class="column p-0 pb-2 column-styled ">
            <Game image="games/espectrometro.png" url={"https://dequelado.merepresenta.info/"} title="espectrometro"/>
        </div>
        <div class="column p-0 pb-2 column-styled ">
            <Game image="games/quiendijo.png" url={"https://quiendijo.merepresenta.info/"} title="quiendijo"/>
        </div>

    </div>
  
</section>


<style>
main{
    min-height: 0;
    margin-bottom: 3rem!important;
}
.tetris-background {
	background-image: url('/black-background-desktop.png');
	background-attachment: fixed;
	background-repeat: repeat;
}
.hero.tetris-background .hero-body {
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.4) 90%);
    background-attachment: fixed;
}


@media screen and (max-width: 1024px){
.title-section{
    padding: 0!important;
}
  .card-section {
	width: 90%;
}
.card-section > div {
	flex-direction: column;
}
}
.card-section {
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
		top: -100px;
		position: absolute;
	}
.column-styled{
        flex: none;
        width: 29%;
        margin-left: 1rem;
        margin-right: 1rem;
    }
	@media screen and (max-width: 770px) {
        .column-styled{
            width: 90%;
            margin: 0 auto 16px;
        }
	}
</style>