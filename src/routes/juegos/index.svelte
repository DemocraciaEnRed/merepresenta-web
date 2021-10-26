<script>
    import Game from './_game.svelte'
</script>
<main class="r hero
	 has-background-black tetris-background">
    <div class="hero-body p-2">
        <section class="containe has-text-left-mobile has-text-centered-tablet container p-4 my-6">
            <h2 class="title light is-4 has-text-weight-normal has-text-white">Desafiá todo lo que crees saber sobre la política argentina.</h2>
        </section>
        <section class="container p-4 has-text-centered">
            <div >
                <Game  background='games/juego1.png' title="TRIVIA" subtitle="Juego de preguntas y respuestas" url={"https://trivia.merepresenta.info/"} textColor="white" />
                <Game delay={'delay'}  background='games/juego2.png' title="COMPÁS POLÍTICO" subtitle="PRÓXIMAMENTE" url={"#"} textColor="black"/>
            </div>
        </section>
    </div>
 
</main>