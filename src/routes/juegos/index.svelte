<script>
    import Game from './_game.svelte'
    import VerdaderoFalso from './_verdaderofalso.svelte'
    import Trivia from './_trivia.svelte';
	import Compas from './_compas.svelte';
</script>
<main class="r hero
	 has-background-white">
    <div class="hero-body p-2">
        <section class="has-text-centered container p-4 my-6">
            <h2 class="title light is-size-1  is-size-3-touch has-text-weight-normal has-text-black is-uppercase">Nuestros Juegos</h2>
            <h2 class="subtitle light is-size-4 is-size-6-touch has-text-weight-semibold has-text-black is-uppercase mt-4">Mirá nuestros juegos online para descubrir más sobre la política argentina</h2>
            
        </section>
        <section class="container p-4 has-text-centered">
            <div class="columns is-justify-content-center">
                <div class="column p-0 column-styled">
                    <Compas delay={'delay'}  background='games/juego2.png' title="Compás <br/> politico"  subtitle="¿Cuál es tu ideología?" url={"https://compaspolitico.merepresenta.info/"} textColor="black"/>
                </div>
                <div    class="column p-0 column-styled">
                    <Trivia  background='games/juego1.png' title="TRIVIA" subtitle="Juego de preguntas y respuestas" url={"https://trivia.merepresenta.info/"} textColor="white" />
                </div>
                <div class="column p-0 column-styled ">
                    <VerdaderoFalso  background='games/verdaderofalso.png' url={"https://verdaderofalso.merepresenta.info/"} />
                </div>

            </div>
          
        </section>


                

    </div>
 
</main>


<style>
main{
    min-height: 0;
    margin-bottom: 3rem!important;
}
.column-styled{
        flex: none;
        width: 29%;
        box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
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