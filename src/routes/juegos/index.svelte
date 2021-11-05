<script>
    import Game from './_game.svelte'
    import VerdaderoFalso from './_verdaderofalso.svelte'
</script>
<main class="r hero
	 has-background-black tetris-background">
    <div class="hero-body p-2">
        <section class="has-text-left-mobile has-text-centered-tablet container p-4 my-6">
            <h2 class="title light is-4 has-text-weight-normal has-text-white">Desafiá todo lo que crees saber sobre la política argentina.</h2>
        </section>
        <section class="container p-4 has-text-centered">
            <div >
                <Game  background='games/juego1.png' title="TRIVIA" subtitle="Juego de preguntas y respuestas" url={"https://trivia.merepresenta.info/"} textColor="white" />
                <Game delay={'delay'}  background='games/juego2.png' title="COMPÁS POLÍTICO"  subtitle="¿Cuál es tu ideología?" url={"https://compaspolitico.merepresenta.info/"} textColor="black"/>
                <VerdaderoFalso  background='games/verdaderofalso.png' url={"https://verdaderofalso.merepresenta.info/"} />

                <div class="columns">
                    <div class="column is-half mx-auto my-6 ">
                        <h3 class="subtitle light has-text-white is-4">
                            ¿Preferís un juego de mesa?<br>
                            <span class="has-text-weight-medium">Descargate nuestro Juego de la Oca
                            </span>
                        </h3>
                    </div>
                
                </div>
                <div class="column is-12">
                    <Game delay={'delay'} background='games/oca.png' title="Juego de la oca" subtitle="descargá las instrucciones para imprimir, el tablero y la caja
                    " url={"https://drive.google.com/drive/folders/1u26igX-aGzXn9CnU1tJ5JI35S8SUKZ1t"} textColor="white"/>
                </div>
            </div>
        </section>


                

    </div>
 
</main>