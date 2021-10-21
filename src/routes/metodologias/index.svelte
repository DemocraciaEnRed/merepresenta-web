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
            <div>
                <h2 class="has-text-weight-semibold	 px-2 py-4 is-uppercase has-background-black has-text-white">Metodología</h2>
            </div>
            <div class="has-background-white pb-5 pt-2 px-2">
                <p class="mb-4">#MeRepresenta se propone como un sitio único que sistematiza y compila información útil para quien vote en las Elecciones Generales de 2021.</p> 
                <p class="mb-4">La plataforma permite acceder a datos de las candidaturas, de los partidos y de sus propuestas electorales. A ello sumamos, como complemento, una sección con información general sobre las Elecciones en Argentina y otra sección, con juegos, para proponer un acercamiento distinto a los datos. </p>
                <p class="mb-4">Para el desarrollo de cada una de las secciones, seguimos una metodología de trabajo orientada hacia un resultado que fuera riguroso y, a la vez, que ofreciera la información de forma sencilla y atractiva.</p>
                <p>Trabajar con información de distinta índole, de distintas fuentes y que, aún así, mantenga su coherencia fue un desafío. En esta sección, contamos cómo lo hicimos. </p>
                <p class="my-4"><strong class="has-text-weight-normal p-2 has-background-black has-text-white">Toda la información de #MeRepresenta es pública</strong></p> 
                <p class="mb-4">Creemos en el conocimiento compartido. Es por eso que todos los datos compilados por #MeRepresenta son públicos y cualquier persona puede verlos, auditarlos y/o usarlos.</p>
                <p class="mb-2">Nos ilusiona que diferentes personas puedan trabajar sobre nuestros datos para producir más información valiosa para las y los votantes.</p>
                <Button name="Datos" iconType="fa-file-pdf" url="https://drive.google.com/drive/u/0/folders/1nLV1ux6IkRmdHJTK1_uvqHVeBapvWPQI"/>
                <p class="mb-2">Además, el código de esta misma página también es público y accesible, de forma tal que cualquier otra organización con intenciones de replicarla en otros contextos pueda hacerlo.</p>
                <Button name="Nuestro código" brand iconType="fa-github" url="https://github.com/DemocraciaEnRed/merepresenta-web"/>     
            </div>
        </div>
        <Dropdown class="has-text-black" darkMode backgroundHeader name="DATOS DE CANDIDATURAS
        ">
            <div>
                <p>El trabajo en la sección de CANDIDATURAS supuso  <strong>compilar</strong> información personal del 100% de las candidaturas: todas las listas de los <strong> 24 distritos.</strong></p>
                <p>La recopilación de información tomó 2 meses y comenzó antes de las Primarias Abiertas Simultáneas y Obligatorias (PASO). El trabajo combinó técnicas automatizadas con trabajo artesanal.</p>
                <p>A partir de información publicada por la Cámara Nacional Electoral (CNE) pudimos conseguir la base de datos con información de todos y todas las personas que se presentaron en las PASO (ver <a href="https://docs.google.com/spreadsheets/d/15F9ckis7CIcON1dYJ_d87fQrPqD0eg7d/edit?usp=sharing&ouid=110000592528509533244&rtpof=true&sd=true" target="_blank">aquí</a>).</p>
                <p>A partir del uno de software (“web scraping” o “raspado web”), pudimos extraer de esa base de datos no sólo los nombres de las candidaturas sino también “alianza partidaria”, “distrito”, “categoría”, “subcategoría”, “posición,” “DNI”, “género” y “fecha de nacimiento”. </p>
                <p>Una vez consolidada esta información, cruzamos los DNI de las personas en las listas con el Portal de Datos del Ministerio de Justicia y Derechos Humanos (ver <a href="http://datos.jus.gob.ar/dataset/entidades-constituidas-en-la-inspeccion-general-de-justicia-igj" target="_blank">aquí</a>) para conocer las “entidades constituídas” que se muestran en la plataforma en el apartado de “vida empresarial” (sí/no).</p>
                <p>En una tercera capa, trabajando con R Studio sobre un gran caudal de datos, pudimos extraer datos de su actividad en Twitter: descripcion (bio), cantidad de seguidores (followers_count), cantidad de tweets emitidos (statuses_count), fecha de creación de la cuenta (account_created_at), y sus tweets con más RT.</p>
                <p>La cuarta capa de información fue aportada por trabajo humano. Consistió en una carga manual, basada en fuentes confiables, que pudieran proveer más datos: “profesión”, “hijxs”, “si tuvo o no cargos políticos anteriormente” y “si estuvo en otros partidos o no”. La información que no pertenecía a una fuente confiable o que simplemente no se encontró, figura con el rótulo “no hay datos”
                </p>
                <p>Una vez vinculadas las 4 capas de información, y definidos los resultados de las PASO, comenzamos a trabajar sobre las listas definitivas, información que obtuvimos gracias a la aplicación Elecciones Legislativas, del Ministerio del Interior Argentina (ver <a href="https://www.argentina.gob.ar/elecciones/resultados-del-recuento-provisional-de-las-elecciones-paso" target="_blank">aquí</a>). Y, apenas la Justicia Nacional Electoral confirmó las candidaturas (<a href="https://www.electoral.gob.ar/nuevo/paginas/datos/candidaturasdatos2021.php" target="_blacnk">aquí</a>), terminamos de configurar la matriz. En las Elecciones Generales de 2021, hay 845 candidaturas. 
                </p>
                <p>Con las listas finales en mano, eliminamos aquellas que quedaron fuera en las Primarias y auditamos la carga previa. Lo hicimos distrito por distrito, provincia por provincia, completando las listas hasta alcanzar al 100% de las candidaturas titulares, en todo el territorio nacional.</p>
                <h2 class="is-size-5">Desarrollo:</h2>
                <h3 class="is-size-6">Democracia en Red y Observatorio de Redes</h3>
            </div>
        </Dropdown>
        <Dropdown class="has-text-black" darkMode backgroundHeader name="DATOS DE PARTIDOS
        ">
            <div>
                <p>Para el apartado de partidos tomamos, como testimonio político, su posición en torno a 10 leyes aprobadas en la Cámara de Diputados de la Nación, en los últimos 12 años (3 mandatos en la Cámara). 
                </p>
                <p>La selección de las leyes “más importantes” es arbitraria: buscamos leyes notorias, de temáticas variadas, cuyo tratamiento haya recibido atención social, en el período 2009-2021. </p>
                <p>Para obtener los resultados de las votaciones, recurrimos al <a href="https://votaciones.hcdn.gob.ar/" target="_blank">sitio oficial de la HCDN</a> y descargamos las tablas con votaciones nominales. Estas bases asocian a un/a diputado/a con el bloque parlamentario y con su voto (“afirmativo”, “negativo”, “abstención”, “ausente” o “no votó”).</p>
                <p>A esa tabla agregamos una nueva columna: “frente electoral actual”. Así, normalizamos la información del pasado a partir de la conformación partidaria actua</p>
                <p>Por ejemplo, el bloque de la “Coalición Cívica - ARI”, que hasta 2011 concurría a las elecciones autónomamente como partido, en la traslación aparece como parte del frente electoral “Juntos Por El Cambio” (junto con otros 17 partidos, 7 de los cuales han tenido un bloque parlamentario propio en el pasado).
                </p>
                <p>Lo mismo aplica para los integrantes bonaerenses del “Frente Renovador”, conglomerado que gana las elecciones legislativas en 2013 y que se integra al bloque del “Peronismo Federal”, pero que hoy concurre a las Elecciones Generales de 2021 como integrante del “Frente de Todos” (junto con otros 23 partidos o movimientos, 12 de los cuales han tenido un bloque parlamentario propio en el pasado). </p>
                <p>En otros casos, como el Partido Socialista, su traslación a la realidad actual es de adscripción variada. El voto de Roy Cortina en la Ley de Medios aparece hoy asociado a “Juntos por el Cambio”, ya que el Partido Socialista de la Ciudad de Buenos Aires integra dicho frente. Cortina, de hecho, ocupa su banca en la Legislatura Porteña luego de integrar la lista de “Juntos por el Cambio” en 2017.</p>
                <p>En cambio, el voto del bloque Socialista correspondiente a Alicia Ciciliani, de Santa Fe, aparece asociado al “Frente Progresista Cívico y Social” (FPCyS), ya que el Partido Socialista en Santa Fe forma parte de dicha coalición. Ciciliani fue, de hecho, Ministra de la gestión provincial del FPCyS entre 2017 y 2019. </p>
                <p>De la misma forma, a las bancas de la provincia de Córdoba asociadas al bloque “Federal Unidos por una Nueva Argentina” en 2016 se las identificó con quienes hoy se presentan a elecciones bajo el sello de “Unidos por Córdoba” y así es como aparecen catalogadas en la traslación a 2021.</p>
                <p>Existe una cantidad significativa de casos para los que no pudimos aplicar la traslación a 2021, de manera taxativa. A esos casos, los catalogamos como “no aplica”. La categoría se aplica, sobre todo, a casos de las leyes de 2009 - 2010. Obviamente, estos casos no figuran entre los porcentajes calculados.</p>
                <p>Una vez categorizados los bloques del pasado de acuerdo con su adscripción partidaria actual, calculamos los porcentajes de los votos según sus “posiciones (afirmativo / negativo)” sobre el total de “integrantes del bloque proyectado a 2021”. La categoría  “aus + abs” engloba las abstenciones, ausencias y, también, a la categoría “sin votar” (de muy poca frecuencia).</p>
                <p>Así, el porcentaje de “SI” del “Frente de Todos” en la Ley de Matrimonio Igualitario (2010) se obtiene dividiendo la “cantidad de personas que votaron sí” por la “cantidad de personas que integraban los partidos que hoy conforman el Frente de Todos”.  </p>
                <p>Sabemos que la traslación del pasado al presente es metodológicamente forzada. Sabemos que fueron muchos los cambios de nuestro sistema de partidos en estos 12 años. Creemos, también, que los resultados que arroja son sugerentes y pueden ser analizados. </p>
                <p>Tenemos frentes electorales que, hoy, encontraron motivos para unirse que, antes, no tenían. Tenemos frentes electorales, hoy, integrados por personas que, en el pasado, han tenido posiciones disímiles. Tenemos partidos políticos que, de acuerdo a si están en el oficialismo o en la oposición, asumen estrategias parlamentarias distintas, acordes a esa ubicación. </p>
                <p>Tenemos alianzas electorales cambiantes pero los votos en la Cámara de Diputados, sus testimonios políticos, permanecen para la posteridad. Ese ejercicio de combinar el pasado con el presente, en torno a 10 leyes votadas en la Cámara de Diputados, es el que propone esta sección.  </p>
                <h2 class="is-size-5">Desarrollo:</h2>
                <h3 class="is-size-6">Democracia en Red</h3>
            </div>
        </Dropdown>
        <Dropdown class="has-text-black" darkMode backgroundHeader name="DATOS DE PROPUESTAS">
            <div>
                <p>Una vez definidas las listas definitivas, decidimos abordar sus propuestas. Fue un desafío doble: a la tarea enciclopédica de organizar un enorme caudal de información se sumó la de establecer criterios ¿qué es una propuesta? ¿dónde está? 
                </p>
                <p>Para la primera tarea, una vez definida la fuente, encuadramos las propuestas electorales de los partidos que compiten en las Elecciones Generales en 10 EJES </p>
                <img src="/all-themes.svg" alt="ïconos de todos los ejes">
                <p>La presentación de las propuestas se pensó en 2 niveles para facilitar la navegación de quien visite el sitio. Así, están estructuradas en dos partes: un “resumen”, en forma de punteo, con los “titulares” de las propuestas del eje temático correspondiente. Adicionalmente, aquellas personas interesadas en profundizar en el desarrollo de las propuestas pueden acceder a más información en un segundo nivel. </p>
                <p>Para la estandarización se aplicaron criterios de estilo para equilibrar el respeto por la voz original del partido con una cantidad razonable de caracteres. </p>
                <p>Por ejemplo, </p>
                <ul>
                    <li> El resumen es con sustantivo: <br>
                        <i>no es "Realizar loquesea"<br>
                            es "Realización de loquesea"
                            </i>
                    </li>
                    <li>
                        Las propuestas sí están formuladas con infinitivo:<br>
                        <i>no es "Realización de loquesea"<br>
                            es "Realizar loquesea"
                        </i>
                    </li>
                    <li>En las formulaciones buscamos la expresión directa<br>
                        no es... 
                        <br>
                        <i>"Se propone impulsar una Ley de Seguridad con el objetivo de articular las fuerzas de seguridad para prevenir y reprimir los delitos que se manifiestan de manera regular en los tejidos urbanos." 
                        </i><br>
                        es ...<br>
                        <i>"Impulsar una Ley de Seguridad para articular las fuerzas de seguridad para prevenir y reprimir los delitos"
                        </i> <br>
                    </li>
                    <li>
                        <p>Con el mismo objetivo de reducir la extensión de los textos, muchos casos aparecen depurados de otras consideraciones políticas que pueden resultar relevantes:  
                        </p>
                        <p>a "integración paritaria en todos los cargos, especialmente en los referidos a la dirección, conducción y planificación estratégica."
                        </p>
                        <p>quedó sustituída por
                        </p>
                        <p>“integración paritaria en todos los cargos”
                        </p>
                        <p>Donde dice “La educación inclusiva y de calidad debe estar en la base del desarrollo social y productivo de San Luis y, como tal, debe ser un eje fundamental de la conciencia social. La educación es la principal herramienta de superación personal y progreso colectivo, de formación de ciudadanía, de bienestar presente y futuro y de libertad.”</p>
                        <p>quedó sustituído por </p>
                        <p>“Educación inclusiva y de calidad”
                        </p>
                    </li>
                </ul>
                <p>En cualquier caso, dentro de cada EJE, de cada partido, quien visita #MeRepresenta tendrá a disposición un enlace directo a la fuente oficial correspondiente para tomar contacto con la voz directa de cada partido.
                </p>
                <p>En lo que se refiere a la segunda tarea, establecer criterios de pertinencia, fue más difícil. 
                </p>
                <p>Como fuente principal utilizamos la presentación oficial de las plataformas electorales frente a la <a href="https://www.electoral.gob.ar/nuevo/index.php" target="_blank">Cámara Nacional Electoral</a>, que están disponibles haciendo click <a href="https://www.electoral.gob.ar/nuevo/paginas/plataformas2021/" target="_blank">aquí. </a>
                </p>
                <p>Privilegiamos utilizar este recurso y no basarnos en las promesas formuladas en actos de campaña o en declaraciones brindadas por lxs candidatxs en notas en medios de comunicación. </p>
                <p>Las propuestas, plasmadas en un programa, son el contrato electoral de un partido con sus votantes: los contratos son por escrito y ante quien corresponde. Así, por sobre otras, privilegiamos como fuente primordial la presentación ante una autoridad. 
                </p>
                <p>En algunos casos en los que encontramos que las propuestas presentadas frente a la Cámara Nacional Electoral eran más demasiado ambiguas, vagas o poco concretas, decidimos consultar fuentes complementarias como:
                </p>
                <ul>
                    <li>Página web oficial del partido</li>
                    <li>Página web oficial del candidato o candidata que encabeza la lista</li>
                </ul>
                <p>En algunos casos, muy poco frecuentes, como por ejemplo el del “Frente de Todos” en Misiones, la plataforma electoral presentada ante la Cámara Nacional Electoral era la correspondiente a una de las listas que  compitieron en las PASO, dentro del mismo Frente. No encontramos información oficial del frente en fuentes que cumplieran los criterios anteriores. Así, decidimos continuar con la propuesta presentada ante la CNE por la lista de pre-candidaturas que quedó confirmada en las PASO para las Elecciones Generales.</p>
                <p>Por lo demás, las propuestas no son el fuerte de los frentes electorales que compiten en las Elecciones Generales de 2021 . Es lo que hay.</p>
                <h2 class="is-size-5">Desarrollo:</h2>
                <h3 class="is-size-6"> Acción Colectiva + ACIJ + Nuestra Córdoba + EcoFeminita + Conocimiento Abierto + Democracia en Red
                </h3>
            </div>
        </Dropdown>
        <Dropdown class="has-text-black" darkMode backgroundHeader name="DATOS DE ABC ELECTORAL">
            <div>
                <p>Esta sección está formulada en base a preguntas frecuentes, búsquedas populares en Google, preguntas formuladas en redes sociales, y en el trabajo editorial de Poder Ciudadano y CIPPEC para elecciones anteriores.
                </p>
                <p>Las fuentes utilizadas para elaborar las respuestas de la sección son</p>
                <ul>
                    <li>Cámara Nacional Electoral - electoral.gob.ar
                    </li>
                    <li>Dirección Nacional Electoral - argentina.gob.ar/dine</li>
                    <li>Congreso de la Nación Argentina - congreso.gob.ar</li>
                    <li>Senado de la Nación Argentina - www.senado.gob.a</li>
                    <li>Cámara de Diputados de la Nación Argentina - www.hcdn.gob.ar</li>
                    <li>Constitución Nacional Argentina - Art. 39, 40, 52, 53, 59, 61, 75 y 99</li>
                    <li><a href="https://www.cippec.org/especial/votoinformado-oficialcne/" target="_blank">Plataforma Voto Informado</a>, elaborada por CIPPEC en base a información provista por la Cámara Nacional Electoral.</li>
                    <li>La participación electoral histórica se calculó con datos obtenidos de la Cámara Nacional Electoral, compilados por Carolina Ramos https://twitter.com/Carito_Ramos</li>
                    <li>Ley de Financiamiento de Partidos Políticos - <a href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/120000-124999/124231/texact.htm" target="_blank">Ley 26.215</a></li>
                </ul>
                <h2 class="is-size-5">Desarrollo:</h2>
                <h3 class="is-size-6"> Poder Ciudadano + CIPPEC + Democracia en Red
                </h3>
            </div>
        </Dropdown>
        <Dropdown class="has-text-black" darkMode backgroundHeader name="JUEGOS" >
            <div>
                <Dropdown class="has-text-black" fontSizeTitle="is-size-5" name="Compás Político">
                    <div>
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
                        <Button name="ir a jugar" icon="fa-arrow-up"/>
                        <h2 class="is-size-5">Desarrollado por:</h2>
                        <h3 class="is-size-6">DEMOCRACIA EN RED Y ANTONIO MILANESE</h3>
                        
                    </div>
                </Dropdown>
                <Dropdown class="has-text-black" fontSizeTitle="is-size-5" name="Trivia">
                    <div>
                       
                        <p>Reutilizamos una trivia que hicimos junto al Directorio Legislativo en 2019 para sus 20 años. La actualizamos, le agregamos preguntas. 
                        </p>
                        <p>Son 150 preguntas de 5 categorías; cada una tiene 3 opciones pero sólo una es correcta.
                        </p>
                        <p>¡No vamos a publicar las respuestas porque lo que queremos es que juegues!
                        </p>
                        <Button name="ir a jugar" icon="fa-arrow-up"/>
                        <h2 class="is-size-5">Desarrollo:</h2>
                        <h3 class="is-size-6">Democracia en Red y Directorio Legislativo</h3>
                    </div>
                </Dropdown>
            </div>
        </Dropdown>
       

    </section>
</main>
<style>
    .intro-metodologia{
        border: 2px solid #000
    }
</style>