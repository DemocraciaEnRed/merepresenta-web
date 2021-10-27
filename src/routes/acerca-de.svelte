<script>
    import {logosAcercaDe} from '$lib/common/utils';
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
							<strong>REPRESENTAR</strong> es <strong>personificar</strong>, es “actuar en nombre de”. En política, REPRESENTAR tiene que ver con exponer <strong>deseos, solidaridades, intereses</strong> y necesidades de una sociedad. En este 2021, vamos a votar <strong>representantes para el Congreso Nacional.</strong> 
                        </h2>
                        <h2 class="is-size-5 is-3  has-text-centered has-text-left-touch has-text-white has-text-weight-normal mb-4">
                            <strong>Las elecciones no son concursos de popularidad, se tratan de dar responsabilidades.</strong> Para elegir algo tan importante son indispensables los <strong>detalles personales de las y los candidatxs,</strong> pero también es necesario que sus <strong>propuestas</strong> sean <strong>conocidas</strong> y que puedan ser <strong>discutidas</strong>. 
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
                Somos organizaciones de la sociedad civil que nos unimos para crear <strong>#MeRepresenta</strong>, una plataforma simple, atractiva e interactiva donde la ciudadanía pueda informarse sobre candidaturas, partidos, propuestas y, también, aprender más sobre las elecciones en general.
            </p>
            <p class=" is-3  has-text-left  has-text-black">
                <strong>#MeRepresenta</strong> tiene como objetivo ayudarte a pensar tu voto y contribuir así a una campaña menos centrada en las descalificaciones personales y más orientada a las propuestas.
            </p>
            <div class="is-flex-tablet is-align-items-center py-3 is-flex-wrap-wrap has-text-centered is-justify-content-space-between is-hidden-mobile">
                {#each logosAcercaDe as logo}
                    <img width ={logo.type=='square'? 150: 200} class="mx-3 my-auto" src={`/${logo.src}`} alt={`Logo de ${logo.alt}`}/>
                {/each}
            </div>
            <div class="py-3 mx-3 columns is-mobile is-flex-wrap-wrap is-hidden-tablet">
                {#each logosAcercaDe as logo}
                    <img width=auto class="column is-half my-auto" src={`/${logo.src}`} alt={`Logo de ${logo.alt}`}/>
                {/each}
            </div>
        </div>
        <div class="container py-4 px-2">
            <h2 class="title is-3 mb-3 has-text-black">
                Nos apoyan:
            </h2>
            <div class="is-flex is-align-items-center py-3 is-flex-wrap-wrap ">
                <object width=150 class="mx-3" type="image/svg+xml" data="/logo-avina.svg" title="Logo de Avina"/>
                <object width=90 class="mx-3" type="image/svg+xml" data="/twitter.svg" title="Logo de Twitter"/>
            </div>
        </div>
        <div class="container py-5 has-text-left px-2">
            <h2 class="title is-3 has-text-white mb-5 has-text-black">
                Créditos
            </h2>
            <p class="is-3 has-text-left has-text-black">
                Las secciones de #MeRepresenta fueron desarrolladas, en conjunto, entre diferentes organizaciones
            </p>
            <p class="my-3"><strong>ABC ELECTORAL </strong>
            </p>
            <p class="mb-5">
                Poder Ciudadano + CIPPEC + Democracia en Red
            </p>
            <p class="mb-3"><strong>CANDIDATURAS y PARTIDOS</strong>
            </p>
            <p class="mb-5">
                Observatorio de Redes + Democracia en Red
            </p>
            <p class="mb-3">
                <strong>PROPUESTAS</strong>
            </p>
            <p class="mb-5">
                Acción Colectiva + ACIJ + Nuestra Córdoba + EcoFeminita + Conocimiento Abierto + Eco House + Democracia en Red
            </p>
            <p class="mb-3">
                <strong>TRIVIA</strong></p>
                <p class="mb-5">Directorio Legislativo + Democracia en Red</p>
            <p class="mb-3">
                <strong>COMPÁS POLÍTICO</strong>
            </p>
            <p class="mb-1">
                Democracia en Red
            </p>
            <p class="mb-5">Idea: Antonio Milanese + Agustin Frizzera</p>
            <p class="mb-3">
                <strong>VERDADERO - FALSO ELECTORAL (próximamente)</strong>
            </p>
            <p class="mb-5">
                Poder Ciudadano + Democracia en Red
            </p>
            <p class="mb-3">
                <strong>JUEGO DE LA OCA en CAMPAÑA (próximamente)</strong>
            </p>
            <p class="mb-5">
                Poder Ciudadano + Democracia en Red
            </p>
            <p class="mb-3">
                <strong>Coordinación general del proyecto:</strong> 
            </p>
            <p class="mb-5">
                Democracia en Red
            </p>
        </div>
        <div  class="container py-6 has-text-left px-2">
            <h2 class="title is-3 mb-6 has-text-black">
                Agradecimientos
            </h2>
            <p class="mb-4">
                Este  sitio fue hecho por mucha gente. La gran mayoría, personas que pusieron su compromiso, profesionalismo y esfuerzo sólo a cambio de este “gracias”. 
            </p>
            <p class="mb-4">
                A Guada y Juani, del Observatorio de Redes, surcaron horizontes llenos de datos, los delimitaron, los estructuraron y los vincularon con el repositorio de <a href="https://politicosentwitter.com/" target="_blank">Politcxs en Twitter</a> ;) 
            </p>
            <p class="mb-4">
                A Karina y a Pablo, de Poder Ciudadano, por su sabiduría, su velocidad y su sentido del humor. 

            </p>
            <p class="mb-4">
                A Juan y a Noel, de Directorio Legislativo, por colaborar con las preguntas de la Trivia. A Mechi y a Agus por la idea original: ¿quién dijo “nunca es tarde para refritar buenas ideas”? 

            </p>
            <p class="mb-4">
                A Gonzalo y a Manuel, de CIPPEC, por compartir su excelente material.  A Iván y a Chani, de Redacción, por el acompañamiento, porque necesitamos nuevas formas de comunicar.  A Nina, de FUNDEPS, por estar. 

            </p>
            <p class="mb-4">Al Ruso, por sus 93 minutos, cada uno fue valioso: aprendemos de vos. A Toni, por el juego y el Compás Político: lo hicimos con las categorías que quisimos.  
            </p>
            <p>A quienes pusieron horas editando las propuestas, Macarena y Emilse, de Nuestra Córdoba. A quienes le pusieron criterios a los diagnósticos , a Emilia (EcoFeminita), a Ornella y equipo (Acción Colectiva), a Carmen (Huésped) y a Joaco, RO !  y equipo de ACIJ, 
            </p>
            <p class="mb-4">A voluntarias y voluntarios: Camila Roberto, Carolina Diez, Agustin Polzella, Federico Bertero, Agostina Amirante, Camilo Parra, Facundo Bustos, Candelaria Figueredo, Melanie Gobetto, Guillermo Fernández, Ailen Diaz Testa, Nicolás Galvan, Greta Liporace, Lucas Abeldaño, Lucas Espiñeira, Lourdes Cabrera e Isabella Tubelli. Con gran esfuerzo, compromiso y dedicación ayudaron a completar las bases de datos de candidaturas, partidos y propuestas electorales. 
            </p>
            <p class="mb-4">A Lucia, a Sara y a Tarick, de Avina, por la confianza y el acompañamiento en todas las etapas, por esas ideas que nos reafirman en la búsqueda de nuevas maneras de comunicar.

            </p>
            <p class="mb-4">Al equipo de Democracia en Red.</p>
            <p class="mb-4">Si la navegación de kichicientos datos es lo más simple posible es por la cabeza de Antonella Meduri y Federico Pasutti. Si las cosas se ven bien, si el mensaje está ajustado (y aprobado) es gracias a Mauro Salerno, Agustin Rabinovich, Leomar Solorzano, Daniel Zárate, Alejandra González y Nicole Alonso. A Agus Manuele, por la magia. 
            </p>
            <p class="mb-4">A Mijail Cohen y Julieta García que codearon la plataforma, día y noche (está disponible en código abierto <a href="https://github.com/DemocraciaEnRed/merepresenta-web" target="_blank">acá</a> ;). Natán Szmedra, que programó la trivia, y al equipo de Maná Digital, que hicieron el Compás Político. A Alvaro Araujo, en la parte de atrás, #imprescindible. A Diego Vilardebó, por cubrirnos la espalda. A Guillermo Croppi, por ser tan crack, Guille.
            </p>
            <p class="mb-4">Si a quien lee le parece que hay mucha información, que ¿cuántas variables más van a agregar?, que tal está mal, que cual está bien, que vamos 85%, es porque  Luciana Vega y Valeria Lisciani coordinaron los equipos y lo DEJARON TODO. 
            </p>
            <p class="mb-4">A Powa ❤️ , a Flor Caffarone, por ser tan lo más. Y a Agus Frizzera, por las dudas.
            </p>
            <p class="mb-4">Porque sólo seremos mejores cuando seamos capaces de soñarnos mejores. 

            </p>
        </div>
    </section>
</main>
<style>
    strong{
        font-weight: 500;
    }
</style>