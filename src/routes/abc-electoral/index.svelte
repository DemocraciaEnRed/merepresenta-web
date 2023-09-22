<script>
  import Dropdown from '$lib/common/Dropdown.svelte';
</script>

<main class="pb-6 hero has-background-white white-background-desktop">
  <div class="section has-background-black has-text-centered">
    <section class="container p-2">
      <div class="has-text-centered mt-6 has-text-white">
        <img src="/abc.svg" alt="imagen de una mano deslizando un voto en una urna" />
        <h1 class="title has-text-white mt-3 is-uppercase">Elecciones 2023</h1>
        <h2 class="title subtitle is-5 p-4 has-text-black  has-text-weight-normal ">
          <span class=" has-background-white p-2 mb-5">
            Todo lo que siempre quisiste saber sobre elecciones
          </span><br />
          <span class="has-background-white p-2">y no te animaste a preguntar.</span>
        </h2>
      </div>
    </section>
  </div>
  <div>
    <section class="container p-2 ">
      <Dropdown name=" ¿QUÉ SE VOTA?">
        <div>
          <img class="is-hidden-tablet" src="/abc/Quesevota-Mob-01.png" alt="Respuesta a la pregunta" />
          <img class="is-hidden-mobile" src="/abc/Quesevota-Desk-01.png" alt="Respuesta a la pregunta" />
          <h2>¿Qué cargos se votan en las elecciones nacionales de 2023?</h2>
          <p>
            En tanto, el 13 de agosto se realizarán las Primarias, Abiertas, Simultáneas y
            Obligatorias (PASO) para cargos nacionales en todo el país,donde se obtendrán las
            candidaturas definitivas de cada partido, que competirán luego en las elecciones
            generales del 22 de octubre.
          </p>
          <p>
            Además de <strong> presidente y vice </strong> , en este 2023 se renuevan bancas en el
            Congreso Nacional, la mitad de las bancas de <strong>diputadas/os</strong> en las
            <strong>24 provincias</strong>
            y un tercio del <strong>Senado</strong> en <strong>8</strong>
            provincias (Buenos Aires, Formosa, Jujuy, Misiones, La Rioja, San Luis, San Juan y Santa
            Cruz). Además, se elegirán representantes de Argentina para el Parlasur.
          </p>
          <h2>¿Qué es el PARLASUR?</h2>
          <p>
            El Parlamento del MERCOSUR (Parlasur) es un órgano de representación ciudadana a nivel
            regional, creado en 2005. Desde 2009, los Estados Partes (Argentina, Brasil, Bolivia,
            Paraguay, Uruguay y Venezuela) tienen representación, definida en elecciones directas.
            Este año, Argentina elegirá 43 surparlamentarias/os que representarán al país en la sede
            del Parlasur en Montevideo, Uruguay.
          </p>
          <h2>¿Cuántas bancas del Congreso están en juego?</h2>
          <p>
            En el Senado se renuevan <strong>24 bancas</strong> (un tercio del total). Este año se eligen
            3 bancas en 8 provincias: Buenos Aires, Formosa, Jujuy, Misiones, La Rioja, San Luis, San
            Juan y Santa Cruz. En cada provincia, 2 bancas le corresponden al partido que gane y 1 de
            ellas al que salga segundo.
          </p>
          <p>
            En la Cámara de Diputados se renuevan <strong>130 bancas</strong> (la mitad del total)
            en los <strong>24 distritos</strong>. En este caso, la cantidad de bancas que
            corresponden a las provincias se ajusta por cantidad de población.
          </p>
          <p>La distribución de las bancas en juego en 2023 es la siguiente:</p>
          <ul>
            <li>Buenos Aires - <strong>35 bancas</strong></li>
            <li>Ciudad Autónoma de Buenos Aires - <strong>12 bancas</strong></li>
            <li>Santa Fe - <strong>10 bancas</strong></li>
            <li>Córdoba - <strong>9 bancas</strong></li>
            <li>Mendoza y Tucuman - <strong>5 bancas</strong></li>
            <li>
              Corrientes, Entre Ríos, Misiones, Salta y Santiago del Estero - <strong>
                4 bancas</strong>
            </li>
            <li>
              Chaco, Chubut, Formosa, Jujuy, La Rioja, Rio Negro, San Juan y Tierra del Fuego - <strong>3
                bancas</strong>
            </li>
            <li>Catamarca, La Pampa, Neuquén, Santa Cruz y San Luis - <strong>2 bancas</strong></li>
          </ul>
          <h2>¿A qué partidos o frentes pertenecen las bancas que se renuevan?</h2>
          <p>
            Las <strong>24 bancas</strong> que se renuevan en el Senado pertenecen a los partidos mayoritarios:
          </p>
          <ul>
            <li>
              El oficialismo (Frente de Todos - en estas elecciones Unión por la Patria) renueva <strong>10 de sus 35
                bancas</strong>.
            </li>
            <li>La oposición (Juntos por el Cambio - JxC) renueva <strong>11 de sus 33 bancas</strong>.</li>
          </ul>
          <p>De las <strong>130 bancas</strong> que se renuevan en Diputados:</p>
          <ul>
            <li>
              Por parte del oficialismo, <strong>Frente de Todos</strong> - en estas elecciones <strong>Unión por la
                Patria</strong>,
              renueva <strong>68</strong> de sus 118 bancas.
            </li>
            <li>En cuanto a la oposición, <strong>Juntos por el Cambio</strong>, renueva <strong>49</strong> de sus 116
              bancas.</li>
            <li>El resto de los partidos, en su mayoría provinciales, renuevan <strong>13 bancas</strong>.</li>
          </ul>
          <h2>¿En qué se diferencia la Cámara de Diputados de la de Senadores?</h2>
          <p>
            Una banca en el <strong>Senado</strong> representa a las <strong>provincias</strong>. En cambio, en la
            Cámara de
            <strong>Diputados</strong>, quienes ocupan bancas representan directamente al <strong>pueblo de la
              Nación</strong>, sin
            importar la provincia por la que se les elige.<br />
            Así, por ejemplo, cuando una persona que se candidatea a la Cámara de Diputados dice “voy
            a representar a tal provincia” no está de acuerdo con el espíritu de la Constitución: estos
            cargos se eligen por provincia para representar a la Nación.
          </p>
          <p>Entre otras funciones, la <strong>Cámara de Diputados</strong>:</p>
          <ul>
            <li>
              Recibe los proyectos de Ley presentados por <strong>iniciativa popular</strong>

            </li>
            <li>
              Inicia el proceso de <strong>consulta popular</strong> para un proyecto de ley

            </li>
            <li>
              Inicia las leyes sobre <strong>contribuciones y reclutamiento de tropas</strong>

            </li>
            <li>
              <strong>Acusar</strong> ante el Senado, en juicio político, “al presidente y vicepresidente, al jefe de
              Gabinete de ministros, a ministros del Poder Ejecutivo y a miembros de la Corte Suprema”

            </li>
          </ul>

          <p>
            Por su parte, el <strong>Senado</strong> tiene, entre otras <strong>atribuciones específicas</strong>:

          </p>
          <ul>
            <li> <strong>Juzga</strong> en juicio político “a los acusados por la Cámara de Diputados” </li>
            <li> Autoriza al presidente de la Nación para que declare el <strong>estado de sitio</strong></li>
            <li> Es cámara de origen en la Ley Convenio, sobre <strong>coparticipación federal de impuestos</strong>
            </li>
            <li> Es cámara de origen de leyes que promuevan políticas tendientes al <strong>crecimiento
                armónico</strong> de la Nación y el <strong>poblamiento de su territorio</strong> </li>
            <li> Presta acuerdo al Poder Ejecutivo para la <strong>designación</strong> de jueces, embajadores,
              ministros plenipotenciarios, encargados de negocios y de oficiales superiores de las Fuerzas Armadas
            </li>
          </ul>
        </div>
      </Dropdown>
      <Dropdown name="¿QUIÉNES VOTAN? ">
        <div>
          <img class="is-hidden-tablet" src="/abc/QuienVota-Mob-01.png" alt="Respuesta a la pregunta" />
          <img class="is-hidden-mobile" src="/abc/QuienVota-Desk-01.png" alt="Respuesta a la pregunta" />
          <h2>¿Quiénes pueden votar en las elecciones?</h2>
          <p>
            Toda persona que posea <strong>nacionalidad argentina</strong> por:
          </p>
          <ul>
            <li>Ser nativa: Siempre y cuando sean mayores de 16 años.</li>
            <li>Por opción/Naturalización: Siendo mayores de 18 años.</li>
          </ul>
          <p>
            Siempre y cuando figuren en el <strong>padrón electoral</strong> y cuenten con el <strong>documento</strong>
            que les habilita a votar.
          </p>
          <p>
            También, pueden votar las personas que se encuentren <strong>detenidas</strong>, sin condena firme, y
            <strong>residentes en el exterior</strong> que se hayan inscripto en el Registro correspondiente.
          </p>
          <h2>¿Cómo fue la participación electoral desde 1983?</h2>
          <p>Desde el retorno de la Democracia en nuestro país, la participación de las y los ciudadanos en los actos
            electorales <strong>promedia 78,6%</strong> y <strong>siempre estuvo por encima del 70%</strong>;
            exceptuando las elecciones PASO del año 2021, realizadas en el contexto de la pandemia de COVID-19 en donde
            la participación fue cercana al <strong>68%</strong> del padrón electoral.</p>
          <img src="/abc/participacion-2022.png" alt="participacion 2022">
          <h2>¿Cómo averiguo dónde voto? </h2>
          <p>
            Podés verificar el establecimiento de votación, el de n° de mesa donde votás, el n° de orden y ejemplar del
            DNI con el cuál estás inscripto/a para votar, ingresando a <a href="https://padron.gob.ar"
              class="has-text-black has-text-weight-bold">www.padron.gob.ar.</a></p>
          <p>Por teléfono, podés llamar a la línea gratuita 0800-999-7237.</p>
          <h2>¿Qué debo hacer si no figuro en el padrón?</h2>
          <p>
            Tenés que hacer un <strong>reclamo</strong> por cualquiera de estas vías:
          </p>
          <ul>
            <li>Por Internet, en este enlace de la Cámara Nacional Electoral.</li>
            <li>Por e-mail, escribiendo a reclamos.padron@pjn.gov.ar</li>
            <li>Por teléfono, en la línea gratuita 0800-999-7237 </li>
            <li>Personalmente: en la Cámara Nacional Electoral (Av. Leandro N. Alem 232 – Ciudad Autónoma de Buenos
              Aires) o en la Secretaría Electoral correspondiente a tu último domicilio.</li>
          </ul>
          <h2>¿Por qué a pesar de tener 16 años no me encuentro en el Padrón Electoral?</h2>
          <p>Porque la información no llegó a la Cámara Nacional Electoral para su inclusión.
            En caso de que hubieses efectuado la actualización de tu documento, podés <strong>reclamar</strong> a la
            Justicia Nacional Electoral tu inclusión en el Padrón ​​a través de <a
              href="www.padron.gov.ar/cne_reclamos">www.padron.gov.ar/cne_reclamos</a> o
            enviando un mail a reclamos.padron@pjn.gov.ar
          </p>
          <h2>¿Cómo y dónde votan las/os argentinas/os que residen en el exterior?</h2>
          <p>Quienes residan en el exterior no pueden votar en las PASO.</p>
          <p>En las elecciones generales de octubre sí podrán votar siempre y cuando se hayan inscrito en el
            <strong>Registro correspondiente</strong> (hasta 6 meses antes de la fecha de la elección) y queden
            incluidos en el
            incluido/as en el
            padrón.
          </p>
          <p>El voto es presencial en la Embajada o Representación Consular que les corresponda. </p>
          <h2>¿Pueden votar los extranjeros en las elecciones nacionales?</h2>
          <p>No, <strong>no pueden votar</strong> en las elecciones para cargos nacionales. En algunos distritos, los
            residentes pueden elegir autoridades provinciales y/o locales. Para ver los detalles por provincia, podés
            entrar <a
              href="https://www.argentina.gob.ar/interior/observatorioelectoral/normativa-electoral/voto-de-extanjerosas-residentes-en-argentina">acá</a>.
          </p>
          <h2>¿Con qué documentos tenés que ir a votar?</h2>
          <p>Para votar te tenés que presentar en la mesa electoral con el último ejemplar de tu documento de identidad.
            Tiene que ser <strong>el que figura en el Padrón o una versión posterior, es decir, uno más nuevo</strong>.
          </p>
          <p>Los documentos habilitantes para votar son:</p>
          <img src="/abc/documentos-validos.jpg" alt="documentos validos">
          <p>Nota: El <strong class="is-underlined"><span class="is-italic">DNI tarjeta</span> es válido para
              votar</strong> aunque contenga la leyenda “no válido para votar” (sí, es así)</p>
        </div>
      </Dropdown>
      <Dropdown name="¿QUÉ PASA SI NO VOTO?">
        <div>
          <img class="is-hidden-tablet" src="/abc/novoto-Mob.png" alt="Respuesta a la pregunta" />
          <img class="is-hidden-mobile" src="/abc/novoto-Desk.png" alt="Respuesta a la pregunta" />
          <h2>¿Dónde puedo denunciar irregularidades?</h2>
          <p>Si no votás y no justificas tu ausencia con un motivo válido, se te incluirá en el Registro de Infractores
            y <strong>recibirás una sanción</strong>. </p>
          <p>La multa por no votar en alguno de los actos electorales (elecciones primarias o elecciones generales) es
            de cincuenta pesos ($50). Si no se registra tu voto ni en las elecciones primarias ni en las elecciones
            generales, la multa tiene un valor total de ciento cincuenta pesos ($150).</p>
          <p>El monto de las multas integran el Fondo Partidario Permanente, a cargo del Ministerio del Interior.</p>
          <h2>Además de la multa, ¿existen otras sanciones?</h2>
          <p>Sí. No podrás ser designada/o para desempeñar funciones o empleos públicos durante tres años a partir de la
            fecha de la elección. </p>
          <p>Además, no podrás realizar gestiones o trámites durante un año ante los organismos estatales, provinciales
            o municipales. Este plazo empieza a correr a partir del vencimiento de los sesenta (60) días establecidos
            para la presentación de la justificación por no votar. <strong>El castigo se anula con el pago de la
              multa</strong>.</p>
          <h2>¿Quiénes no tienen la obligación de votar?</h2>
          <ul>
            <li>Personas <strong>mayores de 70 años</strong>.</li>
            <li>Personas de <strong>16 o 17 años</strong>.</li>
            <li>Quienes el día de la elección se encuentren a <strong>más de quinientos (500) kilómetros</strong> de
              distancia del lugar donde deban votar.</li>
            <li>Las personas <strong>enfermas o imposibilitadas</strong>, por fuerza mayor, de asistir a las urnas.</li>
            <li>Argentinas/os <strong>residentes en el exterior</strong>.</li>
            <li>El personal de organismos y empresas de servicios públicos que <strong>deban realizar tareas</strong>
              que le impidan asistir a los comicios.</li>
            <li><strong>Juezas, jueces y sus auxiliares</strong> que por disposición del Código Electoral deban asistir
              a sus oficinas y mantenerlas abiertas mientras dura el acto electoral.</li>
          </ul>
          <h2>¿Cómo me justifico si no voto?</h2>
          <p>Si no emitiste tu voto debés <strong>dirigirte a la Cámara Nacional Electoral</strong> o asistir a la
            Secretaría Electoral correspondiente para justificarte, con toda la documentación que acredite el motivo de
            su ausencia, o ingresar a <a
              href="https://infractores.padron.gov.ar/">https://infractores.padron.gov.ar/</a> </p>
          <p>La justificación deberá realizarse <strong>dentro de los sesenta (60) días posteriores</strong> al día de
            la elección. Las y los electores de 16 y 17 años y las personas mayores de 70 años no necesitan justificar
            su ausencia.</p>
          <h2>¿Qué debo hacer si me encuentro a más de 500 kilómetros de distancia de mi lugar de votación?</h2>
          <p>Tenés que presentarte el día de la elección frente a la <strong>autoridad policial más próxima</strong>,
            para que extienda una certificación escrita que acredite tu situación de distancia. Debés presentar dicha
            constancia ante la Justicia Electoral, <strong>dentro del plazo de sesenta (60) días corridos</strong> desde
            el día de la elección a la que te ausentaste.</p>
        </div>
      </Dropdown>
      <Dropdown name="¿QUÉ HACER SI VEO IRREGULARIDADES?">
        <div>
          <h2>¿Dónde puedo denunciar irregularidades?</h2>
          <p>A través del portal específico de la Cámara Nacional Electoral podés <strong>realizar denuncias</strong>
            relacionadas con infracciones definidas por las leyes electorales.
            También podés hacer reclamos vía Twitter en https://twitter.com/camaraelectoral (@camaraelectoral).</p>

          <p>Las <strong>denuncias más frecuentes</strong> son:</p>
          <ul>
            <li>Infringir la veda electoral, que inicia el viernes previo a la elección a las 8 de la mañana y concluye
              a las 18 horas, con el cierre del comicio. </li>
            <li>Expendio de bebidas alcohólicas</li>
            <li>Locales partidarios que no respetan la distancia establecida en la norma respecto de los lugares de
              votación</li>
            <li>Faltante de boletas</li>
            <li>Reunión de electores en horario de veda</li>
            <li>Encuestas en la puerta de los locales de votación</li>
            <li>Violación del secreto del voto por parte de la/el votante</li>
            <li>Realización de espectáculos públicos y/o deportivos durante el período de veda electoral</li>
          </ul>
          <h2>¿Qué pasa si faltan boletas?</h2>
          <p>Quien preside la mesa, con la persona delegada de la Justicia Nacional Electoral, debe verificar que estén
            disponibles en todo momento boletas de todas las agrupaciones políticas. </p>
          <p>En caso de que falte la opción elegida, tenés que dirigirte a la autoridad de mesa para indicarle que
            <strong>"faltan boletas", sin indicar cuál es la que falta</strong>. Las boletas las repondrán las-os
            fiscales o, en su defecto, quien tenga a cargo la presidencia de la mesa usando las boletas de contingencia
            entregadas por el correo.
          </p>
          <h2>¿Qué pasa si figuro como afiliada/o a un partido sin mi consentimiento?</h2>
          <p>Quienes quieran renunciar a su afiliación pueden hacerlo por <strong>telegrama gratuito</strong> (este)
            desde cualquier sucursal del Correo Argentino o personalmente en la Secretaría Electoral correspondiente a
            donde figurás en el Padrón, con 2 copias de este formulario. </p>
          <p>Cualquier persona que presuma se encuentra afiliada a un partido político o que no quiera identificar el
            partido del que se trata, puede renunciar al mismo en forma indeterminada. Los cambios se producen a las 48
            horas de efectuado el reclamo.</p>

        </div>
      </Dropdown>
      <Dropdown name="¿QUIÉNES SON LAS AUTORIDADES DE MESA?">
        <div>
          <img class="is-hidden-tablet" src="/abc/Autoridades-Mob-01.png" alt="Respuesta a la pregunta" />
          <img class="is-hidden-mobile" src="/abc/Autoridades-Desk-01.png" alt="Respuesta a la pregunta" />
          <h2>¿Quienes conforman la mesa electoral?</h2>
          <p>La mesa electoral se conforma de:</p>
          <ul>
            <li>Presidente/a de mesa</li>
            <li>Suplente o Vicepresidente/a</li>
            <li>Fiscales de mesa</li>
          </ul>
          <h2>¿A qué llamamos “Presidente/a de mesa”?</h2>
          <p>Es la máxima autoridad de la mesa. Se convocan a <strong>ciudadanas/os que son seleccionadas/os por la
              Justicia
              Electoral para cumplir el rol de presidente el día de la elección</strong>.</p>
          <h2>¿A qué llamamos “Suplente o Vicepresidente/a de mesa”?</h2>
          <p>Se le asigna el rol de suplente o vicepresidente/a de mesa, a quien auxilia al presidente o puede ser su
            reemplazo en caso de cualquier eventualidad. </p>
          <p>En ambos casos, las designaciones son comunicadas por el correo oficial o por intermedio de los servicios
            especiales de comunicación que tienen los organismos de seguridad tanto nacionales como provinciales.</p>
          <h2>¿ A qué llamamos “Fiscal de mesa”?</h2>
          <p>Las/os fiscales de mesa son <strong>designadas/os por los partidos políticos</strong> para asegurar el
            correcto procedimiento electoral en cada mesa de votación. Su función es observar lo que ocurre en las mesas
            de votación y verificar que se respete la Ley Electoral, los derechos del electorado y cuidar las boletas de
            su partido.</p>
          <h2>Como autoridad de mesa, ¿puedo no presentarme?</h2>
          <p>Es un <strong>delito electoral</strong> no presentarse porque es una obligación cívica. Tiene una pena de
            <strong>prisión de seis meses a dos años</strong>.
          </p>
          <h2>¿En qué situaciones podría justificar mi ausencia como autoridad de mesa?</h2>
          <p>El Código Electoral admite <strong>excusarse</strong> de ejercer esa función por razones de enfermedad o de
            fuerza mayor, debidamente justificadas. </p>
          <p>La excusación debe formularse dentro de los tres días de recibida la notificación de designación.
            Transcurrido ese lapso solo se admite la excusación por causas ocurridas con posterioridad las que serán
            motivo de consideración especial por la Justicia Electoral. </p>
        </div>
      </Dropdown>
      <Dropdown name=" ¿CÓMO SE CLASIFICAN LOS VOTOS?">
        <div>
          <img class="is-hidden-tablet" src="/abc/Votos-Mob-01.png" alt="Respuesta a la pregunta" />
          <img class="is-hidden-mobile" src="/abc/Votos-Desk-01.png" alt="Respuesta a la pregunta" />
          <h2>¿Cómo se clasifican los votos?</h2>
          <p>1. <span class="is-underlined">Votos Válidos</span></p>
          <ul>
            <li><strong>Voto afirmativo:</strong>
              <ul style="list-style-type: circle;">
                <li>Se emite mediante boleta oficializada de una misma agrupación (o lista) para todas las categorías de
                  cargos.</li>
                <li>Para cada categoría de cargos a elegir se emiten boletas oficializadas de diferentes agrupaciones (o
                  listas).</li>
                <li>La boleta puede tener tachaduras, agregados, roturas o sustituciones (borratina), siempre que el
                  encabezado se encuentre intacto y se vea claramente la fecha de elección, el cargo al que se postula y
                  el partido.</li>
                <li>En el sobre hay más boletas oficializadas de la misma lista y categorías de cargos. Sólo se
                  computará una y se destruirán las restantes.</li>
              </ul>
              <div class="columns">
                <div class="column"><img src="/abc/voto-valido-1.jpg" alt=" votos validos"></div>
                <div class="column"><img src="/abc/voto-valido-2.jpg" alt=" votos validos"></div>
              </div>
              <div class=" has-text-grey has-text-centered is-size-7 mb-5">
                *Información válida para el año 2023
              </div>
            </li>
            <li><strong>Voto en blanco:</strong> Éste representa la abstención de elegir entre las diversas propuestas
              para expresar disconformidad con los partidos políticos y se considera como tal cuándo:
              <ul style="list-style-type: circle;">
                <li>El sobre se encuentra vacío.</li>
                <li>El sobre contiene un papel (de cualquier color), sin imágenes, textos ni objetos extraños.</li>
                <li>El sobre contiene una boleta oficializada, pero le falta el cuerpo correspondiente a una categoría.
                  En ese caso, se considerará <strong>"voto en blanco"</strong> solo para dicha categoría.</li>
              </ul>
              <div class="columns">
                <div class="column"> <img src="/abc/voto-blanco-1.jpg" alt="votos en blanco"></div>
                <div class="column"> <img src="/abc/voto-blanco-2.jpg" alt="votos en blanco"></div>
              </div>
              <div class=" has-text-grey has-text-centered is-size-7 mb-5">
                *Información válida para el año 2023
              </div>
            </li>
          </ul>
          <p>2. <span class="is-underlined">Votos Inválidos</span></p>
          <ul>
            <li><strong>Voto nulo:</strong>
              <ul style="list-style-type: circle;">
                <li>Se emite mediante boleta no oficializada. Por ejemplo, boletas de elecciones anteriores y/o de otros
                  distritos.</li>
                <li>En el sobre junto con la boleta se hallan incluidos objetos extraños a ella, tales como monedas,
                  estampitas, etcétera.</li>
                <li>Boletas oficializadas de distintas agrupaciones para un mismo cargo.</li>
                <li>Boletas oficializadas de distintas listas de una misma agrupación política para la misma categoría
                  de cargos.</li>
                <li>Boletas oficializadas que por destrucción parcial, defecto o tachaduras, no contengan, por lo menos,
                  el nombre del partido y la categoría de cargos a elegir.</li>
                <li>Boletas oficializadas que contienen inscripciones y/o leyendas de cualquier tipo, salvo en los casos
                  de tachaduras, agregados o sustituciones. </li>
              </ul>
              <div class="columns">
                <div class="column"> <img src="/abc/voto-nulo-1.jpg" alt="votos nulos"></div>
                <div class="column"> <img src="/abc/voto-nulo-2.jpg" alt="votos nulos"></div>
              </div>
              <div class=" has-text-grey has-text-centered is-size-7 mb-5">
                *Información válida para el año 2023
              </div>
            </li>
            <li><strong>Voto de identidad impugnada:</strong>
              <ul style="list-style-type: circle;">
                <li>Sucede cuándo el/la presidente/a de mesa, el/la vicepresidente/a (vocal auxiliar) o los/as fiscales,
                  consideran que el/la votante no es el titular del documento cívico que presenta. Los votos de
                  identidad impugnada serán contabilizados, pero no abiertos ni escrutados en la mesa. Se enviarán
                  cerrados y colocados en un sobre especial junto con la huella dactilar del/la votante y se enviará a
                  la Justicia Nacional Electoral para que ésta decida sobre su validez o nulidad.</li>
              </ul>
              <div class="columns">
                <div class="column is-half-desktop mx-auto"> <img src="/abc/voto-impugnado.jpg" alt="voto impugnado"></div>
              </div>
              <div class=" has-text-grey has-text-centered is-size-7 mb-5">
                *Información válida para el año 2023
              </div>
            </li>
            <li><strong>Voto recurrido:</strong>
              <ul style="list-style-type: circle;">
                <li>Sucede cuándo la validez o nulidad es cuestionada en el escrutinio de mesa por algún fiscal. En
                  estos casos el fiscal que recurre:<br />
                  a. Deberá fundamentar su pedido con una “expresión concreta de la causa”;<br />
                  b. Asentará tales motivos en el formulario especial provisto por la Justicia Nacional Electoral;<br />
                  c. Consignará sus datos, nombre y apellido, número de documento cívico, domicilio y agrupación
                  política (o lista), y firmará el formulario.
                </li>
                <li>El formulario se adjuntará a la boleta y al sobre respectivo para ser enviado al Juzgado Federal con
                  competencia electoral o a la Junta Electoral Nacional respectivamente.</li>
              </ul>
              <div class="columns">
                <div class="column is-half-desktop mx-auto"> <img src="/abc/voto-recurrido.jpg" alt="voto recurrido"></div>
              </div>
            </li>
          </ul>
        </div>
      </Dropdown>
      <Dropdown name=" ¿CÓMO ES EL CAMINO DEL VOTO?">
        <div>
          <h2>¿Cómo se cuentan los votos?</h2>
          <p>
            Una vez que termina la votación, el presidente de mesa abre la urna y califica y cuenta cada voto en
            presencia de los fiscales de los partidos.
          </p>
          <p>
            Enterate a través de <a href="https://www.youtube.com/watch?v=zKuaJZInwZQ" target="_blank">este video</a>
            desarrollado por CIPPEC en 2021, cómo sigue el camino del voto hasta que se proclama a las personas electas.
          </p>
        </div>
      </Dropdown>
      <Dropdown name="¿QUÉ ES EL VOTO ACCESIBLE? ">
        <div>
          <h2>¿Qué es el voto accesible? </h2>
          <p>Si tenés alguna <strong>condición física que te dificulte la emisión del voto</strong> podés solicitar el
            voto asistido por la/el Presidenta/e de mesa o una persona de tu confianza.</p>
          <p>Si tenés movilidad reducida, podés pedirle a la/el Presidenta/e de la mesa donde tengas que votar, el
            traslado de la urna al Cuarto Oscuro Accesible (COA), que es un espacio de fácil acceso y cercano al ingreso
            del establecimiento.</p>
          <h2>¿Qué es el Cuarto Oscuro Accesible?</h2>
          <p>El Cuarto Oscuro Accesible (COA) es <strong>un cuarto oscuro especial</strong> que se encuentra en el lugar
            de más fácil acceso y cercano al ingreso del lugar de votación. El mismo aparece señalizado e identificado
            con las siglas “COA”.</p>
          <h2>¿Quiénes pueden votar en el Cuarto Oscuro Accesible (COA)?</h2>
          <p>Personas con <strong>discapacidad –motriz, sensorial, mental o visceral– y aquellas que presentan
              limitaciones que interfieren en su desplazamiento, visión, orientación y comunicación</strong>. Estas
            limitaciones pueden ser de características permanentes o temporales, visibles o invisibles. </p>
          <p>Se dirige también a <strong>personas adultas mayores, gestantes, personas con lesiones temporales en
              miembros superiores o inferiores y personas con diversas discapacidades invisibles</strong> (pacientes con
            cardiopatías, diálisis o en tratamientos oncológicos, enfermedades psiquiátricas no incapacitantes, etc.).
          </p>
          <h2>¿Qué asistencia se le puede dar a una persona con discapacidad visual? ¿Puede ir acompañado de su perro de
            asistencia? </h2>
          <p>Las personas con una discapacidad o condición física permanente o transitoria que impida, restrinja o
            dificulte el ejercicio del voto <strong>podrán sufragar asistidas por la/el presidenta/e de mesa o una
              persona de su elección</strong>. </p>
          <p>Esta circunstancia se deja asentada en el Padrón de la mesa y en el Acta de cierre de la misma, consignando
            los datos del elector y de la persona que le asistió. </p>
          <p>Las personas acompañadas por su perro de asistencia pueden ingresar al establecimiento y al cuarto oscuro
            con el mismo. </p>
        </div>
      </Dropdown>
      <Dropdown name="¿CÓMO SE FINANCIAN LAS CAMPAÑAS ELECTORALES?">
        <div>
          <img class="is-hidden-tablet" src="/abc/Financiamiento-Mob-01.png" alt="Respuesta a la pregunta" />
          <img class="is-hidden-mobile" src="/abc/Financiamiento-Desk-01.png" alt="Respuesta a la pregunta" />
          <h2>¿Cómo se financian las campañas electorales?</h2>
          <p>En Argentina, las campañas electorales de los partidos políticos se financian con un <strong>modelo
              mixto</strong> por el cual los partidos obtienen <strong>financiamiento público y del sector
              privado</strong>.</p>
          <h2>¿Todos los partidos reciben el mismo dinero por parte del Estado?</h2>
          <p>No. La Ley de financiamiento político establece la <strong>fórmula para cada categoría</strong>. Los
            partidos reciben el <strong>50% de los fondos que se distribuyen en forma igualitaria</strong>, y el
            restante <strong>50% se distribuye en forma proporcional</strong> de acuerdo al resultado de la elección
            anterior para la misma categoría.</p>

          <h2>¿Los partidos deben indicar quién los financia y en qué gastan su dinero?</h2>
          <p>Sí, la Ley de Financiamiento Político obliga a los partidos políticos a <strong>registrar sus ingresos y
              gastos indicando minuciosamente quién realizó cada aporte y en qué se gastó el dinero</strong>. Estos
            informes son públicos. El informe final de campaña se presenta 90 días después de las elecciones.</p>
          <h2>¿Existen prohibiciones en cuanto a las donaciones?</h2>
          <p>Sí, están <strong>prohibidas</strong> las siguientes donaciones:</p>
          <ol type="a">
            <li>Contribuciones o donaciones anónimas. La identidad del contribuyente o donante se debe poder divulgar;
            </li>
            <li>Contribuciones o donaciones de entidades centralizadas o descentralizadas, nacionales, provinciales,
              interestaduales, binacionales, multilaterales o municipales;</li>
            <li>Contribuciones o donaciones de permisionarios, empresas concesionarias o contratistas de servicios u
              obras públicas o proveedores de la Nación, las provincias, los municipios o la Ciudad de Buenos Aires;
            </li>
            <li>Contribuciones o donaciones de personas humanas o jurídicas que exploten juegos de azar;</li>
            <li>Contribuciones o donaciones de Gobiernos o entidades públicas extranjeras;</li>
            <li>Contribuciones o donaciones de personas humanas o jurídicas extranjeras que no tengan residencia o
              domicilio en el país;</li>
            <li>Contribuciones o donaciones de personas que hubieran sido obligadas a efectuar la contribución por sus
              superiores jerárquicos o empleadores;</li>
            <li>Contribuciones o donaciones de asociaciones sindicales, patronales y profesionales;</li>
            <li>Contribuciones o donaciones de personas humanas o jurídicas que se encuentren imputadas en un proceso
              penal en trámite por cualquiera de las conductas previstas en la ley penal tributaria vigente o que sean
              sujetos demandados de un proceso en trámite ante el Tribunal Fiscal de la Nación por reclamo de deuda
              impositiva.</li>
          </ol>
          <h2>¿Las donaciones privadas tienen tope? </h2>
          <p>Sí. Los partidos políticos pueden recibir, para la campaña electoral, un total de recursos privados que no
            supere el monto equivalente a la diferencia entre el tope máximo de gastos de campaña fijado por ley y el
            monto del aporte público para la campaña electoral correspondiente a ese partido.</p>
          <p>Además, los partidos no pueden recibir de una misma persona (humana o jurídica) un monto superior al dos
            por ciento (2%) de los gastos permitidos para la campaña. La Cámara Nacional Electoral informa a los
            partidos políticos el límite de aportes privados permitidos y pública esa información. Podés ver las
            donaciones permitidas por distrito acá. </p>
        </div>
      </Dropdown>
      <Dropdown name="¿QUÉ ES LA BOLETA ÚNICA ELECTRÓNICA?">
        <div>
          <img class="is-hidden-tablet" src="/abc/BUE-Mob.png" alt="Respuesta a la pregunta" />
          <img class="is-hidden-mobile" src="/abc/BUE-Desk.png" alt="Respuesta a la pregunta" />
          <p>En la Ciudad Autónoma de Buenos Aires la elección local será concurrente, es decir se votará al mismo
            tiempo por categorías nacionales y locales. Para las nacionales, se votará con el sistema tradicional,
            basado en papel. Para los cargos locales (Jefa/e de Gobierno, legisladoras/es y Comunas) se utilizará la
            <strong>Boleta Única Electrónica</strong> (BUE).
          </p>
          <p>La BUE es un sistema de sufragio que permite seleccionar las candidaturas a través de una pantalla táctil e
            imprimir la boleta del/de la votante que, además, registra la información del voto en un chip.</p>
          <p>Una vez que se guarda esta información, el chip queda inutilizado y no podrá volver a usarse. </p>
          <h2>¿Cómo funciona el sistema electrónico?</h2>
          <p>La máquina de votación tiene una pantalla táctil y un sistema de impresión y verificación. Así, el/la
            votante selecciona en la pantalla a su candidata/o e imprime su elección en la <strong>Boleta de Única
              Electrónica (BUE)</strong>.</p>
          <div class="columns">
            <div class="column is-half-desktop mx-auto"> <img src="/abc/maquina-votacion.png" alt="maquina votacion">
            </div>
          </div>

          <p class="mt-3">Si tu rol es como autoridad de mesa, podés informarte más entrando a <a
              href="https://drive.google.com/file/d/1NS8SmZeoO_gT19EHvSi4SgQL2msNUH4T/view?usp=drive_link"> éste
              instructivo</a>.</p>
          <h2>¿Es buena la Boleta Única Electrónica (BUE)? </h2>
          <p>Quienes defienden la BUE destacan que es un sistema “rápido y fácil”, como si la rapidez y la facilidad
            fueran derechos constitucionales. Sin embargo, especialistas en informática y algunas organizaciones de la
            sociedad civil cuestionamos la implementación de la BUE en la Ciudad de Buenos Aires, principalmente, por
            sus obstáculos insalvables en materia de auditabilidad y comprensión. </p>
          <p>En efecto, el sistema no garantiza la transparencia en el escrutinio provisorio o el secreto del voto y
            esos <strong>sí</strong> son derechos fundamentales. Además, la intermediación de una máquina en el proceso
            afecta la igualdad entre partidos, privilegiando a los más grandes que poseen más recursos para contratar
            expertos capaces de auditar el proceso. </p>
          <p>Así, en consonancia con lo que sucede en casi todo el mundo, muchas organizaciones especializadas en
            democracia y tecnología consideramos que la Boleta Única Electrónica es una apuesta arriesgada y
            extravagante y que lo que corresponde para asegurar la confianza y participación ciudadana plena, es
            promover procesos electorales simples, descentralizados y basados en papel. </p>
        </div>
      </Dropdown>
      <Dropdown name=" ¿QUÉ SON LAS PASO? ">
        <div>
          <img class="is-hidden-tablet" src="/abc/PASO-Mob-01.png" alt="Respuesta de la pregunta" />
          <img class="is-hidden-mobile" src="/abc/PASO-Desk-01.png" alt="Respuesta de la pregunta" />
          <h2>¿Qué significa PASO?</h2>
          <p>
            Significa <strong> Primarias, Abiertas, Simultáneas y Obligatorias </strong> (PASO).
            <br />
            Son <strong> Primarias </strong> porque son una elección al interior de los partidos,
            para definir candidaturas, no cargos. En las PASO no se elige quiénes serán presidente,
            diputados o senadores, sino quiénes serán los candidatos a dichos cargos. <br />
            Son <strong> Abiertas </strong> porque toda la ciudadanía puede votar en el frente
            electoral o partido político que quiera sin necesidad de estar afiliada a ese partido.
            <br />
            Son <strong> Simultáneas </strong> porque se realiza la elección de candidaturas al
            mismo tiempo. <br />
            Y son <strong> Obligatorias </strong> porque todas las personas en el Padrón tienen el
            deber de votar. <br />
          </p>

          <h2>¿Cuándo surgen las PASO?</h2>
          <p>
            Se crearon en 2009 y la primera vez que se llevaron a cabo para cargos nacionales fue en
            las elecciones del 2011.
          </p>
          <h2>¿Qué se vota en las PASO del 13 de agosto?</h2>
          <p>
            El 13 de agosto se votan las precandidaturas que cada partido político presenta para
            competir en las elecciones generales para presidente y vice, diputados y senadores
            nacionales. Aquella lista que obtenga la mayoría de los votos dentro de cada partido
            político se convertirá en la fórmula que competirá en las elecciones generales de
            Octubre.
          </p>
        </div>
      </Dropdown>
      <section class="mt-6">
        <h3 class="mt-6 mb-3 has-text-black">Fuentes</h3>
        <ul class="ml-3  has-text-black">
          <li class="has-text-black">
            Cámara Nacional Electoral - <a href="https://www.electoral.gob.ar/nuevo/index.php"
              target="_blank">electoral.gob.ar</a>
          </li>
          <li class="has-text-black">
            Dirección Nacional Electoral - <a href="https://www.argentina.gob.ar/interior/dine"
              target="_blank">argentina.gob.ar/dine</a>
          </li>
          <li class="has-text-black">
            Congreso de la Nación Argentina - <a href="https://www.congreso.gob.ar/" target="_blank">congreso.gob.ar</a>
          </li>
          <li class="has-text-black">
            Senado de la Nación Argentina - <a href="https://www.senado.gob.ar/" target="_blank">www.senado.gob.ar</a>
          </li>
          <li class="has-text-black">
            Cámara de Diputados de la Nación Argentina - <a href="https://www.hcdn.gob.ar/"
              target="_blank">www.hcdn.gob.ar</a>
          </li>
          <li class="has-text-black">
            Constitución Nacional Argentina - Art. 39, 40, 52, 53, 59, 61, 75 y 99
          </li>
          <li class="has-text-black">
            <a href="https://www.cippec.org/especial/votoinformado-oficialcne/" target="_blank">Plataforma Voto
              Informado</a>, elaborada por CIPPEC en base a información provista por la Cámara Nacional Electoral.
          </li>
          <li class="has-text-black">
            La participación electoral histórica se calculó con datos obtenidos de la Cámara
            Nacional Electoral, compilados por Carolina Ramos <a href="https://twitter.com/Carito_Ramos"
              target="_blank">https://twitter.com/Carito_Ramos</a>
          </li>
          <li class="has-text-black">
            Ley de Financiamiento de Partidos Políticos - <a
              href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/120000-124999/124231/texact.htm"
              target="_blank">Ley 26.215</a>
          </li>
          <li class="has-text-black">
            Guía para autoridades de mesa. Juzgado Federal N*1 con Competencia Electoral, Distrito Capital Federal,
            disponible <a
              href="https://drive.google.com/file/d/1NS8SmZeoO_gT19EHvSi4SgQL2msNUH4T/view?usp=drive_link">aca</a>
          </li>
        </ul>
      </section>
    </section>
  </div>
</main>

<style>
  h2,
  h3,
  p,
  li,
  strong {
    color: #000;
  }

  h2 {
    font-size: 1rem;
    margin-top: 1rem;
  }

  img {
    display: block;
    margin: auto;
  }

  ul {
    list-style: disc;
  }

  .subtitle {
    line-height: 3rem;
  }
</style>