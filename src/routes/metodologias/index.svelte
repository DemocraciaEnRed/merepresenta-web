<script>
      import Dropdown from '$lib/common/Dropdown.svelte';
      import Button from './_button.svelte'
</script>
<main class="has-background-white white-background-desktop">
    <section class="container p-2">
        <div class="has-text-centered mt-6 has-text-black">
            <h1 class="title has-text-black mt-3">¿Cómo estructuramos la búsqueda de datos?</h1>
            <h2 class="title is-5 p-4 has-text-black has-text-weight-normal">
                Trabajar con información de distinta índole fue un desafío
            </h2>
          </div>
    </section>
    <section class="container px-2 py-6 has-text-black">
        <div class="has-text-black intro-metodologia">
            <div class="has-background-black">
                <h2 class="has-text-weight-semibold	 px-2 py-4 is-uppercase  has-text-white">Metodología</h2>
            </div>
            <div class="has-background-white pb-5 pt-2 px-2">
                <p class="mb-4"><strong>#MeRepresenta</strong> se propone como un sitio único que <strong>sistematiza y compila información útil para quien vote en las Elecciones de 2023</strong>. </p> 
                <p class="mb-4">La plataforma permite acceder a datos de las candidaturas, de los partidos y de sus propuestas electorales. A ello sumamos, como complemento, una sección con información general sobre las Elecciones en Argentina y otra sección, con juegos, para proponer un acercamiento distinto a los datos.</p>
                <p class="mb-4">En esta segunda edición, actualizamos la metodología tomando aprendizajes de la primera implementación en 2021. Como siempre, trabajamos con información de distinta índole, de distintas fuentes y buscamos que, aún así, mantenga coherencia. Todo un desafío.</p>
                <p class="mb-4">En esta sección, contamos cómo lo hicimos.</p>
                <div class="info-metodology">
                    <p><strong>Toda la información de #MeRepresenta es pública.</strong></p>
                    <p>Creemos en el conocimiento compartido. Es por eso que todos los datos compilados por <strong>#MeRepresenta</strong> son públicos y cualquier persona puede verlos, auditarlos y/o usarlos. </p>
                    <p>Nos ilusiona que diferentes personas puedan trabajar sobre nuestros datos para producir más información valiosa para las y los votantes.</p>
                    <Button name="Datos" iconType="fa-file-pdf" url="https://drive.google.com/drive/folders/1WvjL0X8-i0F1qSJ2xs5HUy1YY2XPGmG6?usp=sharing"/>
                    <p class="mb-2">Además, el código de esta misma página también es público y accesible, de forma tal que cualquier otra organización con intenciones de replicarla en otros contextos pueda hacerlo.</p>
                    <Button name="Nuestro código" brand iconType="fa-github" url="https://github.com/DemocraciaEnRed/merepresenta-web"/>     

                </div>
                
            </div>
        </div>
        <Dropdown class="has-text-black" darkMode backgroundHeader name="DATOS DE CANDIDATURAS">
            <div>
                <p>El trabajo en la sección de CANDIDATURAS supuso compilar para las Primarias Abiertas Simultáneas y Obligatorias (PASO) información personal del <strong>100% de las candidaturas al Poder Ejecutivo Nacional y del Senado</strong> y, al menos, <strong>2 candidaturas de cada lista a diputados nacionales</strong> de las listas de los 24 distritos. Del <strong>Poder Ejecutivo Provincial</strong> priorizamos a la Provincia de Buenos Aires y Ciudad de Buenos Aires ya que son categorías que se votan el mismo día que las elecciones nacionales.</p>
                <p>El trabajo combinó técnicas automatizadas con trabajo artesanal. A partir de información publicada por la Cámara Nacional Electoral (<a href="https://www.electoral.gob.ar/nuevo/paginas/btn/elecc2023.php">CNE</a>) pudimos conseguir la base de datos con información de todas las personas que se presentan a las PASO (ver <a href="https://drive.google.com/drive/folders/1WvjL0X8-i0F1qSJ2xs5HUy1YY2XPGmG6?usp=sharing">aquí</a>). </p>
                <p>Como fuente de información utilizamos bases de datos propias elaboradas para #MeRepresenta 2021 y las bases de elaboración propia de Directorio Legislativo.</p>
                <p>La última capa de información fue aportada por trabajo humano. Y nos enfocamos no solo en los datos de la candidatura (posición, lista, alianza partidaria) sino que también buscamos su edad, redes sociales (Twitter, Instagram y Facebook), profesión y último grado de estudios. </p>
                <p>Para la elección general, cuando las candidaturas estén formalmente definidas, nos proponemos agregar su recorrido político. </p>
            </div>
        </Dropdown>
        <Dropdown class="has-text-black" darkMode backgroundHeader name="DATOS DE PROPUESTAS">
            <div>
                <p>Para analizar las propuestas de los partidos, priorizamos las propuestas de las candidaturas al Poder Ejecutivo Nacional. El desafío en esta sección fue doble: a la tarea enciclopédica de organizar un enorme caudal de información se sumó la de establecer criterios: “¿dónde están las propuestas?” </p>

                <p>Para la primera tarea, una vez definida la fuente, encuadramos las propuestas electorales de los partidos que compiten en las PASO en 6 EJES TEMÁTICOS:</p>
                <ul>
                    <li>Economía</li>
                    <li>Democracia</li>
                    <li>Salud</li>
                    <li>Educación</li>
                    <li>Ambiente</li>
                    <li>Seguridad</li>
                </ul>
                <p>La presentación de las propuestas se pensó en 2 niveles para facilitar la navegación de quien visite el sitio. Así, están estructuradas en dos partes: un “resumen”, en forma de punteo, con los “titulares” de las propuestas. Adicionalmente, aquellas personas interesadas en profundizar en el desarrollo de las propuestas pueden acceder a más información en un segundo nivel. </p>
                <p>Para la estandarización se aplicaron criterios de estilo para equilibrar el respeto por la voz original del partido y, a la vez, disponer en pantalla una cantidad razonable de caracteres:<br>
                Tanto el resumen como la descripción están en infinitivo. Por ejemplo: no es “realización de loquesea” sino “realizar loquesea”.</p>
                <p>Además, en las formulaciones buscamos la expresión directa:</p>
                <p>no es... <br>
                    <i>"Se propone impulsar una Ley de Seguridad con el objetivo de articular las fuerzas de seguridad para prevenir y reprimir los delitos que se manifiestan de manera regular en los tejidos urbanos." </i></p>
                <p>es ... <br>
                    <i>"Impulsar una Ley de Seguridad para articular las fuerzas de seguridad para prevenir y reprimir los delitos"</i></p>    
                
                <p>En este ejemplo, los caracteres son la mitad, y la voz está intacta.</p>
                <p>Con el mismo objetivo de reducir la extensión de los textos, muchos casos aparecen depurados de otras consideraciones políticas que pueden resultar relevantes: </p>
                <p>sí… <br><i>la "integración paritaria en todos los cargos, especialmente en los referidos a la dirección, conducción y planificación estratégica."</i></p>
                <p>quedó sustituída por <br><i>“integración paritaria en todos los cargos”</i></p>
                <p>Donde dice… <br><i>“La educación inclusiva y de calidad debe estar en la base del desarrollo social y productivo de San Luis y, como tal, debe ser un eje fundamental de la conciencia social. La educación es la principal herramienta de superación personal y progreso colectivo, de formación de ciudadanía, de bienestar presente y futuro y de libertad.”</i></p>
                <p>se adaptó: <br><i>“Educación inclusiva y de calidad”</i></p>
                <p>En los casos en donde los partidos presentaban más de cinco propuestas por eje temático, se realizó un corte editorial seleccionando las cinco propuestas con más desarrollo.</p>
                En cualquier caso, dentro de cada EJE, de cada partido, quien visita <strong>#MeRepresenta</strong> tendrá a disposición un enlace directo a la fuente oficial correspondiente para tomar contacto con la voz directa de cada partido y el total de las propuestas presentadas.</div>
                <p>En lo que se refiere a la segunda tarea, ¿dónde están las propuestas?, establecer criterios de pertinencia fue más difícil. </p>
                <p>Como fuente principal utilizamos las plataformas electorales de los sitios web oficiales de las candidaturas.</p>
                <p>Si no se encontraron propuestas en la web oficial (o no hay web oficial), utilizamos como fuente las plataformas electorales presentadas frente a la <a href="https://www.electoral.gob.ar/nuevo/index.php">Cámara Nacional Electoral</a>, que están disponibles haciendo click <a href="https://www.electoral.gob.ar/nuevo/paginas/propuestas2021/">aquí</a>. Como son únicas para cada partido o frente (no distingue entre listas dentro de ese partido o frente), en esos casos no será posible comparar las propuestas de las distintas precandidaturas de la interna</p>
                <p>En lo que se refiere a la segunda tarea, ¿dónde están las propuestas?, establecer criterios de pertinencia fue más difícil. <br>
                    Como fuente principal utilizamos las plataformas electorales de los sitios web oficiales de las candidaturas.
                </p>
                <p>Si no se encontraron propuestas en la web oficial de la persona que se candidatea (o no hay web oficial) utilizamos como fuente las plataformas electorales presentadas frente a la Cámara Nacional Electoral, que están disponibles haciendo click aquí. Como en muchos casos son únicas para cada partido o frente (no distingue entre listas dentro de ese partido o frente), en esos casos no será posible comparar las propuestas de las distintas precandidaturas de la interna. </p>
                <p class="mb-0">En algunos casos, al no contar con propuestas oficiales escritas en su sitio web buscamos fuentes alternativas, manteniendo un criterio metodológico para definir qué puede tomarse en cuenta como propuesta y qué no. Utilizamos como fuente los últimos videos subidos en sus canales de Youtube oficiales con las siguiente prioridades y requisitos:</p>
                 <ul class="mt-0">
                    <li>que el candidato o candidata esté hablando directamente de sus propuestas (una entrevista, spot publicitario, conferencia, discurso, etc)</li>
                    <li>que el video sea de 2023 </li>
                    <li>en caso de tomar entrevistas, que estas sean a más de un medio de comunicación.</li>
                </ul>
        </Dropdown>
        <Dropdown class="has-text-black" darkMode backgroundHeader name="DATOS DE ABC ELECTORAL">
            <div>
                <p>Esta sección está formulada en base a preguntas frecuentes, búsquedas populares en Google, preguntas formuladas en redes sociales.</p>
                <p>Las fuentes utilizadas para elaborar las respuestas de la sección son</p>
                <ul>
                    <li>Cámara Nacional Electoral - <a href="https://www.electoral.gob.ar/nuevo/index.php">electoral.gob.ar</a></li>
                    <li>Dirección Nacional Electoral - <a href="https://www.argentina.gob.ar/interior/dine">argentina.gob.ar/dine</a></li>
                    <li>Congreso de la Nación Argentina - <a href="https://www.congreso.gob.ar/">congreso.gob.ar</a></li>
                    <li>Senado de la Nación Argentina - <a href="http://www.senado.gob.ar">www.senado.gob.ar</a></li>
                    <li>Cámara de Diputados de la Nación Argentina - <a href="http://www.hcdn.gob.ar">www.hcdn.gob.ar</a></li>
                    <li>Constitución Nacional Argentina - Art. 39, 40, 52, 53, 59, 61, 75 y 99</li>
                    <li><a href="https://www.cippec.org/especial/votoinformado-oficialcne/" target="_blank">Plataforma Voto Informado</a>, elaborada por CIPPEC en base a información provista por la Cámara Nacional Electoral.</li>
                    <li>La participación electoral histórica se tomo del Observatorio Político Electoral, del Ministerio del Interior (<a href="https://www.argentina.gob.ar/interior/observatorioelectoral/datos-electorales/participacion-historica-en-elecciones">aqui</a>)</li>
                    <li>Ley de Financiamiento de Partidos Políticos - <a href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/120000-124999/124231/texact.htm" target="_blank">Ley 26.215</a></li>
                </ul>
            </div>
        </Dropdown>
        <Dropdown class="has-text-black" darkMode backgroundHeader name="JUEGOS" >
            <div>
                <!-- <Dropdown class="has-text-black" fontSizeTitle="is-size-5" name="Compás Político">
                    <div>
                        <p><span class="is-underlined">Desarrollo</span>: <i>Antonio Milanese + Democracia en Red</i></p>
                        <p>El compás político es un juego basado en el <a href="https://www.politicalcompass.org/" target="_blank">Political Compass</a>, un test que te “encuadra” ideológicamente en base a pocas preguntas. Entre otra de nuestras referencias, principales se encuentra el <a href="https://www.theguardian.com/world/ng-interactive/2018/nov/21/how-populist-are-you-quiz?s=08" target="_blank">How Populist Are You?</a> (¿Cuán Populista Sos?) publicado por The Guardian en 2018. También, consultamos el <a href="https://www.idrlabs.com/es/coordenadas-politicas/prueba.php" target="_blank">Test de Coordenadas Políticas desarrollado por IDRLabs. </a>
                        </p>
                        <p>Tomamos estos conocidos quizzes y los adaptamos al contexto y al vocabulario político argentino. </p>
                        <p>Así, los ejes de los resultados son:
                        </p>
                        <ul>
                            <li>EJE Y - POPULISTA - LIBERAL</li>
                            <li>EJE X - IZQUIERDA - DERECHA</li>
                        </ul>
                        <p>Los cálculos realizados para la ubicación en cuadrantes se basan en los siguientes criterios.</p>
                        <h2 class="is-size-5">Niveles y puntuaciones</h2>
                        <p>Cada pregunta podría responderse en 7 niveles que van de -3 a 3. Los niveles de respuesta son:</p>
                        <ul>
                            <li>Muy de acuerdo (+3)</li>
                            <li>De acuerdo (+2)</li>
                            <li>Moderadamente de acuerdo (+1)</li>
                            <li>Ni de acuerdo ni en desacuerdo (0)
                            </li>
                            <li>Moderadamente en desacuerdo (-1)
                            </li>
                            <li>En desacuerdo (-2)</li>
                            <li>Muy en desacuerdo (-3)
                            </li>
                        </ul>
                        <p>En este esquema cada pregunta promedia el puntaje en un solo eje. Todas las preguntas tienen el mismo peso y no están ponderadas. 
                        </p>
                        <h2 class="is-size-5">Cuestionario
                        </h2>
                        <p>El juego tiene 20 preguntas en total. 
                        </p>
                        <p>10 corresponden al “Eje Y” y 10 corresponden al “Eje X”.  
                        </p>
                        <h2 class="is-size-5">Eje Y - Liberalismo // Populismo
                        </h2>
                        <p>En este test, el eje “liberalismo-populismo” se usa como medida de la posición de quien realiza el test en materia política, donde el “liberalismo” se asocia a la defensa de las libertades individuales y al respeto por los procedimientos institucionales, mientras que el “populismo” se asocia a la defensa del colectivo social (un asunto distinto a la suma de los deseos individuales) y a la confianza en un liderazgo político fuerte para lograrlo.    
                        </p>
                        <h2 class="is-size-5">10 preguntas.
                        </h2>
                        <ol>
                            <li>Los políticos deben estar cerca de la gente, escuchar y entender sus necesidades para darle lo que necesita. +1
                            </li>
                            <li>Si tuviera que elegir, diría que lo individual es más importante que lo colectivo. -1
                            </li>
                            <li>Si tenemos un gobierno fallido, no importa el plazo constitucional: hay que sacarlo cuanto antes. +1
                            </li>
                            <li>En política, para algo existen las reglas de juego. Nunca es aceptable que los procedimientos se dejen de lado: siempre hay que respetar las instituciones. -1
                            </li>
                            <li>Es importante educar a nuestros niños en las tradiciones y limitar la influencia de productos culturales y tradiciones extranjeras. +1
                            </li>
                            <li>Las decisiones políticas se toman más de acuerdo a los intereses de unos pocos poderosos que pensando en las necesidades de la gente. +1
                            </li>
                            <li>Muchas veces, conocer el pensamiento político de alguien permite saber si es una buena o mala persona. +1
                            </li>
                            <li>Si tuviera que elegir, prefiero un liderazgo político “correcto” técnicamente, aburrido pero que administre bien, antes que uno que nos conmueva con nuevos sueños. -1
                            </li>
                            <li>El primer gol de Maradona a los ingleses (“la mano de Dios”) fue legítimo. +1</li>
                            <li>En Democracia, hay libertad de expresión y yo puedo decir lo que quiera, siempre. -1
                            </li>
                        </ol>
                        <h2 class="is-size-5">Eje X -  Izquierda // Derecha </h2>
                        <p>En este test, el eje “izquierda-derecha” se usa como medida de la posición de quien realiza el test, sobre todo, en materia económica, donde la “izquierda” favorece la intervención del Estado y la regulación económica sobre el mercado, mientras que la “derecha” favorece la libertad económica y el "dejar hacer". 
                        </p>
                        <h2 class="is-size-5">10 preguntas </h2>
                        <ol>
                            <li>Si tuviera que elegir, diría que la igualdad es más importante que la libertad. -1
                            </li>
                            <li>Si tuviera que elegir, diría que la igualdad es más importante que la libertad. -1
                            </li>
                            <li>En general, la intervención del estado en el mercado distorsiona la economía y degrada el tejido productivo +1
                            </li>
                            <li>El sector privado gestiona mejor que el estado +1</li>
                            <li>El Estado debe asistir económicamente a quienes han perdido el trabajo o se encuentran en situación de vulnerabilidad. -1
                            </li>
                            <li>Se debería cobrar un arancel a quienes estudian en la universidad pública. +1
                            </li>
                            <li>La inmigración en Argentina debería estar más controlada e, idealmente, más limitada +1</li>
                            <li>Aquellas actividades económicas que dañan el medio ambiente deberían ser especialmente reguladas y en algunos casos prohibidas. -1
                            </li>
                            <li>Es importante fomentar y proteger la industria nacional. -1</li>
                            <li>Industrias estratégicas como la nuclear o la militar no deberían estar en manos del sector privado. -1
                            </li>
                        </ol>
                        <h2 class="is-size-5">Procesamiento</h2>
                        <p>Multiplicamos el valor obtenido en las opciones de cada pregunta por el valor de la pregunta. 
                        </p>
                        <p>Por ejemplo:
                        </p>
                        <p>“2. Si tuviera que elegir, diría que lo individual es más importante que lo colectivo. -1”
                        </p>
                        <ul>
                            <li>Muy de acuerdo (+3)</li>
                            <li>De acuerdo (+2)</li>
                            <li>Moderadamente de acuerdo (+1)
                            </li>
                            <li>Ni de acuerdo ni en desacuerdo (0)
                            </li>
                            <li>Moderadamente en desacuerdo (-1)
                            </li>
                            <li>En desacuerdo (-2)
                            </li>
                            <li>Muy en desacuerdo (-3)
                            </li>
                        </ul>
                        <p>-1 (valor pregunta)  x -2 (valor opción) = +2
                        </p>
                        <p>Luego promediamos el resultado obtenido por cada quien, para cada eje.
                        </p>
                        <p>¡No vamos a publicar el gráfico final porque lo que queremos es que juegues!
                        </p>
                        <Button name="ir a jugar" url="https://compaspolitico.merepresenta.info/" icon="fa-arrow-up"/>

                        
                    </div>
                </Dropdown> -->
                <Dropdown class="has-text-black" fontSizeTitle="is-size-5" name="Trivia">
                    <div>
                        <p><span class="is-underlined">Desarrollo</span>: <i>Directorio Legislativo + Democracia en Red </i></p>
                       
                        <p>Reutilizamos una trivia que hicimos junto al Directorio Legislativo en 2019 para sus 20 años. La actualizamos, le agregamos preguntas. 
                        </p>
                        <p>Son 30 preguntas por categoría, 180 en total. Las categorías son: política nacional, frases memorables, legislativas, latinoamérica, poder ejecutivo y elecciones 2023. Cada pregunta tiene  3 opciones pero sólo una es correcta.</p>
                        <p>¡No vamos a publicar las respuestas porque lo que queremos es que juegues!</p>
                        <Button name="ir a jugar" url="https://trivia.merepresenta.info/" icon="fa-arrow-up"/>

                    </div>
                </Dropdown>
                <Dropdown class="has-text-black" fontSizeTitle="is-size-5" name="Verdadero o Falso Electoral">
                    <div>
                        <p><span class="is-underlined">Desarrollo</span>: <i>Poder Ciudadano + Democracia en Red</i></p>
                       
                        <p>Un verdadero o falso con preguntas basadas en el ABC electoral para medir cuando sabes de las elecciones generales de 2023.
                        </p>
                        <Button name="ir a jugar" url="https://verdaderofalso.merepresenta.info/" icon="fa-arrow-up"/>

                    </div>
                </Dropdown>
            </div>
        </Dropdown>
       

    </section>
</main>
<style>
    .info-metodology{
        margin: auto;
        width: 80%;
        border: 1px solid #000;
        padding: 16px;
        border-radius: 10px;
    }
    .intro-metodologia{
        border: 2px solid #000;
        border-radius: 20px;
        
    }
    .intro-metodologia > div:first-child{
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    .intro-metodologia > div:last-child{
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
</style>