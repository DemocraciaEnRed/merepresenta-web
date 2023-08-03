<script>
    import {logosAcercaDe, logosChicosAcercaDe} from '$lib/common/utils';
</script>
<main>
    <div class="hero is-black is-halfheight tetris-background">
		<div class="hero-body">
			<div class="container">
				<img src="/logo-merepresenta.svg" width="400" class="image p-4 mb-5 is-hidden-desktop" alt="Logo de Me Representa">
				<div class="columns is-centered is-mobile">
					<div class="column is-8-desktop">
						<h1 class="title is-3 is-size-4-touch has-text-centered has-text-left-touch has-text-white mb-6">
							Acerca de
						</h1>
						<h2 class="is-size-5 is-3  has-text-centered has-text-left-touch has-text-white has-text-weight-normal mb-4">
							<strong>REPRESENTAR</strong> es <strong>personificar</strong>, es “actuar en nombre de”. En política, REPRESENTAR tiene que ver con exponer <strong>deseos, solidaridades, intereses</strong> y necesidades de una sociedad. En este 2023, vamos a votar <strong> representantes para el Poder Ejecutivo Nacional, Provincial y Municipal y del Poder Legislativo en esos mismos niveles.</strong> 
                        </h2>
                        <h2 class="is-size-5 is-3  has-text-centered has-text-left-touch has-text-white has-text-weight-normal mb-4">
                            <strong>Las elecciones no son concursos de popularidad, son mecanismos para asignar responsabilidades.</strong> Para elegir algo tan importante son indispensables los <strong>detalles personales de las candidaturas,</strong> pero, también, es necesario que sus <strong>propuestas</strong> sean <strong>conocidas</strong> y que puedan ser <strong>discutidas</strong>. 
                        </h2>
                        <h2 class="is-size-5 is-3  has-text-centered has-text-left-touch has-text-white has-text-weight-normal mb-4">
                            Porque si <strong>tus representantes van a representarte</strong>, te tienen que explicar <strong>quiénes son y qué han hecho</strong>. Si van a actuar en tu nombre, te tienen que explicar <strong>qué quieren hacer y cómo.</strong> 
						</h2>
					</div>
				</div>
			</div>
        </div>
    </div>
    <section calss="has-background-white" >
        <div class="container py-6 px-2">
            <h1 class="title is-3 is-size-4-touch  mb-6 has-text-black">
                ¿Quiénes somos?
            </h1>
            <p class=" is-3 mb-4 has-text-left  has-text-black">
                Somos tres organizaciones de la sociedad civil que impulsamos <strong>#MeRepresenta</strong> como servicio a la ciudadanía. Para que puedas informarte sobre candidaturas, partidos, propuestas y, también, aprender más sobre las elecciones en general. 
            </p>
            <p class=" is-3  has-text-left  has-text-black">
                <strong>#MeRepresenta</strong> tiene como objetivo ayudarte a pensar el voto y contribuir así a una campaña menos centrada en descalificaciones personales y más orientada a las propuestas.
            </p>

            <h2 class="title is-3 mb-3 mt-6 has-text-black">
                INICIATIVA DE

            </h2>
            <div class="is-flex-tablet is-align-items-center py-3 is-flex-wrap-wrap has-text-centered is-justify-content-space-evenly is-hidden-mobile">
                {#each logosAcercaDe as logo}
                    <img width ={logo.type=='square'? 200: 300} class="mx-3 my-auto" src={`/${logo.src}`} alt={`Logo de ${logo.alt}`}/>
                {/each}
            </div>
            <div class="py-3 mx-3 columns is-mobile is-flex-wrap-wrap is-hidden-tablet">
                {#each logosAcercaDe as logo}
                    <img width=auto class="column is-half my-auto" src={`/${logo.src}`} alt={`Logo de ${logo.alt}`}/>
                {/each}
            </div>
        </div>
        <div class="container py-4 px-2">
            <h2 class="title is-4 mb-3 has-text-black">
                COLABORAN
            </h2>
            <div class="is-flex-tablet is-align-items-center py-3 is-flex-wrap-wrap has-text-centered is-justify-content-space-evently is-hidden-mobile">
                {#each logosChicosAcercaDe as logo}
                    <img width ={logo.type=='square'? 100: 200} class="mx-3 my-auto" src={`/${logo.src}`} alt={`Logo de ${logo.alt}`}/>
                {/each}
            </div>
            <div class="py-3 mx-3 columns is-mobile is-flex-wrap-wrap is-hidden-tablet">
                {#each logosChicosAcercaDe as logo}
                    <img width=auto class="column is-half is-one-quarter my-auto" src={`/${logo.src}`} alt={`Logo de ${logo.alt}`}/>
                {/each}
            </div>
        </div>
        <div  class="container py-6 has-text-left px-2">
            <h2 class="title is-3 mb-6 has-text-black">
                Agradecimientos
            </h2>
            <p class="mb-4">
                Este sitio fue hecho por mucha gente. La gran mayoría, personas que pusieron su compromiso, profesionalismo y esfuerzo sin pedir nada a cambio.
            </p>
            <p class="mb-4">
                Noel Alonso Murray de <strong>Directorio Legislativo</strong> por apostar a esta nueva edición de #MeRepresenta y a todo su equipo. Consu Aranciaga de comunicación, Agus Prieto que se puso al hombro la actualización de la trivia y el ABC, a Martín Ferreiro y Rocío Zalla que trabajaron con los datos del Congreso.
            </p>
            <p class="mb-4">
                Pablo Secchi y Alejandro Román de <strong>Poder Ciudadano</strong> por su apoyo, su presencia es indispensable.. 

            </p>
            <p class="mb-4">
                Al Ruso Snitcofsky que siempre nos ayuda a “desbloquear” y nos ayuda a ser mejores en dataviz.

            </p>
            <p class="mb-4">
                El increíble <strong>equipo de voluntariado</strong>, especialmente a Bianca Romano, Daniela Pelozo, Facundo Toledo, Federico Arakaki, Fermin Villalvilla, Florencia Goñi, Helver Acosta Suárez, Valentina Salovich y Yasmin Mojarro.

            </p>
            <p class="mb-4">
                El <strong>equipo DATA</strong> que la rompió en 2021 y convocamos para esta nueva edición: Agostina Amirante, Agustin Polzella y Camilo Parra que volvieron a participar.
            </p>
            <p>
                Martín Galanternik y Juan Busilli de <strong>MINU</strong> que junto a su equipo y personas voluntarias colaboraron con la búsqueda de datos.
            </p>
            <p class="mb-4">A SocialTIC, por su confianza.
            </p>
            <p class="mb-4">
                Y a todo el equipo de Democracia en Red que trabajó intensamente y con mucha pasión: Vale Lisciani, Fede Bertero, Nacho Gertie, Ceci Ibarra, Pano y Tina Valdez, Guille Croppi, Fede Pasutti, Flor Caffarone, Agus Frizzera, Ale Gonzalez, Jenny Perkes y Juli Ferrando. 💜

            </p>
        </div>
    </section>
</main>
<style>
    strong{
        font-weight: 500;
    }
</style>