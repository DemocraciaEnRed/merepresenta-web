<script>
  import Dropdown from '$lib/common/Dropdown.svelte';
</script>
<main class="hero has-background-white white-background-desktop">
  <div class="section has-background-black has-text-centered">
    <section class="container p-2">
      <div class="has-text-centered mt-6 has-text-white">
        <img src="/abc.svg" alt="imagen de una mano deslizando un voto en una urna">
        <h1 class="title has-text-white mt-3 is-uppercase">Elecciones 2021</h1>
        <h2 class="title subtitle is-5 p-4 has-text-black  has-text-weight-normal ">
          <span class=" has-background-white p-2 mb-5">
          Todo lo que siempre quisiste saber sobre elecciones </span><br>
          <span class="has-background-white p-2">y no te animaste a preguntar.</span>
        </h2>
      </div>
    </section>
  </div>
  <div>
    <section class="container p-2 ">  
      <Dropdown name=" ¿QUÉ SE VOTA?">
        <div >
          <h2>¿Qué se vota en las elecciones de 2021?</h2>
          <img class="is-hidden-tablet" src="/abc/que-se-vota.png" alt="Respuesta de la pregunta">
          <img class="is-hidden-mobile" src="/abc/que-se-vota_desktop.png" alt="Respuesta de la pregunta">
          <h2>¿Cuántas bancas están en juego en el Congreso?</h2>
          <p>En el Senado se renuevan <strong>24 bancas</strong> (un tercio del total). Este año se eligen 3 bancas en 8 provincias: Catamarca, Chubut, Córdoba, Corrientes, La Pampa, Mendoza, Santa Fe y Tucumán. En cada provincia, 2 bancas le corresponden al partido que gane y 1 de ellas al que salga 2do.
          </p>
          <p>En la Cámara de Diputados se renuevan <strong>127 bancas</strong> (la mitad) en <strong>24 distritos</strong>. En este caso, la cantidad de bancas que corresponden a las provincias se ajusta por cantidad de población. 
          </p>
          <p>La distribución de las bancas en juego es la siguiente:</p>
          <ul>
            <li>Pcia de Buenos Aires - <strong>35 bancas</strong></li>
            <li>Ciudad de Buenos Aires -<strong>13 bancas</strong></li>
            <li>Córdoba y Santa Fe -<strong>9 bancas</strong></li>
            <li>Entre Ríos y Mendoza - <strong>5 bancas</strong></li>
            <li>Chaco y Tucumán - <strong></strong>4 bancas</li>
            <li>Catamarca, Corrientes, Jujuy, La Pampa, Misiones, Neuquén, Salta, San Juan:, San Luis, Santa Cruz y Santiago del Estero - 3 <strong>3 bancas</strong></li>
            <li>Chubut, Formosa, La Rioja, Río Negro y Tierra del Fuego - <strong>2 bancas</strong></li>
          </ul>
          <p>Las bancas se distribuyen en función de los resultados por provincia, con un <a href="https://es.wikipedia.org/wiki/Sistema_D%27Hondt" target="_blank">criterio proporcional.</a></p>
          <h2>¿A qué partidos o frentes pertenecen las bancas que se renuevan? </h2>
          <p>Las <strong>24 bancas</strong> que se renuevan en el Senado pertenecen a los partidos mayoritarios: </p>
          <ul>
            <li>El oficialismo (Frente de Todos - FdT) renueva <strong>15 de sus 41 bancas</strong>.</li>
            <li>La oposición (Juntos por el Cambio - JxC) renueva <strong>9 de sus 25 bancas</strong>.</li>
          </ul>
          <p>
              <strong>111 de las 127 bancas</strong> que se renuevan en Diputados pertenecen a los partidos mayoritarios
          </p>
          <ul>
            <li>El oficialismo (FdT) renueva <strong>52 de sus 120 bancas</strong>.</li>
            <li>La oposición (JxC) renueva <strong>60 de sus 115 bancas</strong>.</li>
            <li>El resto de partidos (en su mayoría, provinciales) renuevan <strong>15 bancas. </li>
          </ul>
          <h2>¿En qué se diferencia la Cámara de Diputados de la de Senadores?      </h2>
          <p>Una banca en el <strong>Senado</strong> representa a las <strong>provincias</strong>. En cambio, en la Cámara de <strong>Diputados</strong>, quienes ocupan bancas representan directamente al <strong>pueblo de la Nación</strong>, sin importar la provincia por la que se les elige.</p>
          <p>Así, por ejemplo, cuando una persona que se candidatea a la Cámara de  Diputados dice “voy a representar a tal provincia” no está de acuerdo con lo que dice la Constitución. 
          </p>
          <p>Son <strong>competencias específicas</strong> de la <strong>Cámara de Diputados:</strong>
          </p>
          <ul>
            <li>- Recibir los proyectos de Ley presentados por <strong>iniciativa popular </strong></li>
            <li>Iniciar el proceso de <strong>consulta popular </strong> para un proyecto de ley</li>
            <li>- Iniciar las leyes sobre <strong>contribuciones y reclutamiento de tropas</strong></li>
            <li><strong>Acusar</strong> ante el Senado, en juicio político, <i>“al presidente y vicepresidente, al jefe de Gabinete de ministros, a ministros del Poder Ejecutivo y a miembros de la Corte Suprema”</i> </li>
          </ul>
          <p>Por su parte, el <strong>Senado</strong> tiene las siguientes <strong>atribuciones específicas:</strong>
          </p>
          <ul>
            <li><strong>Juzgar</strong> en juicio político “a los acusados por la Cámara de Diputados” </li>
            <li>Autorizar al presidente de la Nación para que declare el <strong>estado de sitio</strong></li>
            <li>Ser cámara de origen en la Ley Convenio, sobre <strong>coparticipación federal de impuestos</strong></li>
            <li>Ser cámara de origen de leyes que promuevan políticas tendientes al <strong>crecimiento armónico</strong> de la Nación y el <strong>poblamiento de su territorio</strong></li>
            <li>Prestar acuerdo al Poder Ejecutivo para la <strong>designación</strong> de jueces, embajadores, ministros plenipotenciarios, encargados de negocios y de oficiales superiores de las Fuerzas Armadas</li>
          </ul>
        </div>
      </Dropdown>
      <Dropdown   name=" ¿QUIÉNES VOTAN?">
        <div>
          <h2>¿Quiénes votan en las elecciones del 14 de noviembre?</h2>
          <img class="is-hidden-tablet" src="/abc/quien-vota.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/quien-vota_desktop.png" alt="Respuesta a la pregunta">
          <h2>¿Cómo fue la participación electoral desde 1983?</h2>
          <img class="is-hidden-tablet" src="/abc/participacion-1983.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/participacion-1983_desktop.png" alt="Respuesta a la pregunta">
          <p><strong>Si no voté en las elecciones primarias de septiembre 2021, </strong>¿puedo votar en las elecciones generales de noviembre?</p>
          <p>Sí, <strong>podés votar</strong> en las elecciones generales de noviembre.</p>
          <h2>¿Cómo averiguo dónde voto?</h2>
          <img class="is-hidden-tablet" src="/abc/donde-voto.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/donde-voto_desktop.png" alt="Respuesta a la pregunta">
          <h2>¿Qué debo hacer si no figuro en el padrón?</h2>
          <p>Tenés que hacer un <strong>reclamo</strong> por cualquiera de estas vías:</p>
          <ul>
            <li>Por Internet, en este enlace de la <a href="https://www.padron.gov.ar/cne_reclamos/" target="_blank">Cámara Nacional Electoral.</a></li>
            <li>Por e-mail, escribiendo a reclamos.padron@pjn.gov.ar</li>
            <li>Por teléfono, en la línea gratuita 0800-999-7237</li>
            <li>Personalmente: en la Cámara Nacional Electoral <a href="https://www.google.com.ar/maps/place/Av.+Leandro+N.+Alem+232,+C1003AAP+CABA/@-34.6049223,-58.3724807,17z/data=!3m1!4b1!4m5!3m4!1s0x95a3352d42ad1087:0x598e97d062f4570f!8m2!3d-34.6049223!4d-58.370292" target="_blank">Av. Leandro N. Alem 232 – Ciudad Autónoma de Buenos Aires</a>) o en la <a href="https://www.argentina.gob.ar/sites/default/files/secretarias_electorales.pdf" target="_blank">Secretaría Electoral</a> correspondiente a tu último domicilio.</li>
          </ul>
          <h2>¿Por qué, aunque tengo 16 años, no me encuentro en el Padrón Electoral?</h2>
          <p>Porque no realizaste la <strong>actualización obligatoria de los datos identificatorios</strong>, a partir de los 14 años o porque la información no llegó a la Cámara Nacional Electoral para su inclusión.</p>
          <p>En caso de que hubieses efectuado la actualización de tu documento, podés <strong>reclamar</strong> a la Justicia Nacional Electoral tu inclusión en el Padrón ​​a través de www.padron.gov.ar/cne_reclamos o enviando un mail a reclamos.padron@pjn.gov.ar</p>
          <p>Sin embargo, esa eventual modificación no se verá reflejado en el Padrón de 2021.</p>
          <h2>¿Cómo y dónde votan las-os argentinas-os que residen en el exterior?</h2>
          <p>Quienes residan en el exterior pueden votar siempre y cuando se hayan inscrito en el <strong>Registro correspondiente</strong> hasta 6 meses antes de la fecha de la elección y queden incluidos en el incluido/as en el padrón. Votan sólo en la Elección General y no en las Primarias (P.A.S.O)</p>
          <p><strong>Votan personalmente</strong> en la Embajada o Representación Consular que les corresponda.</p>
          <h2>¿Pueden votar los extranjeros en las elecciones nacionales?</h2>
          <p>No, <strong>no pueden votar</strong> en las elecciones para cargos nacionales. En algunos distritos, los residentes pueden elegir autoridades provinciales y/o locales. Para ver los detalles por provincia: <a href="https://www.argentina.gob.ar/interior/extranjeros-residentes-en-argentina/buenos-aires" target="_blank">acá</a>.</p>
        </div>
      </Dropdown>
      <Dropdown   name="¿QUÉ PASA SI NO VOTO?">
        <div>
          <img class="is-hidden-tablet" src="/abc/si-no-voto.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/si-no-voto_desktop.png" alt="Respuesta a la pregunta">
          <h2>Además de la multa, ¿existen otras sanciones?</h2>
          <p>Sí. No podrás ser designada-o para desempeñar funciones o empleos públicos durante tres años a partir de la fecha de la elección.</p>
          <p>Además, no podrás realizar gestiones o trámites durante un año ante los organismos estatales, provinciales o municipales. Este plazo empieza a correr a partir del vencimiento de los sesenta (60) días establecidos para la presentación de la justificación por no votar. <strong>El castigo se anula con el pago de la multa.</strong></p>
          <h2>¿Quiénes no tienen la obligación de votar?</h2>
          <img class="is-hidden-tablet" src="/abc/no-obligacion-de-votar.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/no-obligacion-de-votar_desktop.png" alt="Respuesta a la pregunta">
          <h2>¿Cómo me justifico si no voto?</h2>
          <p>Si no emitiste tu voto debés <strong>dirigirte a la Cámara Nacional Electoral</strong> o asistir a la Secretaría Electoral correspondiente para justificarte, con toda la documentación que acredite el motivo de su ausencia, o ingresar a https://infractores.padron.gov.ar/ </p>
          <p>La justificación deberá realizarse <strong>dentro de los sesenta (60) días posteriores</strong> al día de la elección. Las y los electores de 16 y 17 años y las personas mayores de 70 años no necesitan justificar su ausencia.</p>
          <h2>¿Qué debo hacer si me encuentro a más de 500 kilómetros de distancia de mi lugar de votación?</h2>
          <p>Tenés que presentarte el día de la elección frente a la <strong>autoridad policial más próxima</strong>, para que extienda una certificación escrita que acredite tu situación de distancia. Debés presentar dicha constancia ante la Justicia Electoral, <strong>dentro del plazo de sesenta (60) días corridos</strong> desde el día de la elección a la que te ausentaste.</p>
        </div>
      </Dropdown>
      <Dropdown   name="¿QUÉ HACER SI VEO IRREGULARIDADES?">
        <div>
          <h2>¿Dónde puedo denunciar irregularidades?</h2>
          <img class="is-hidden-tablet" src="/abc/irregularidades.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/irregularidades_desktop.png" alt="Respuesta a la pregunta">
          <p>Las denuncias más frecuentes son:</p>
          <ul>
            <li>Infrinigir la veda electoral, que inicia el viernes previo a la elección a las 8 de la mañana y concluye a las 18 horas, con el cierre del comicio.</li>
            <li>Expendio de bebidas alcohólicas</li>
            <li>Locales partidarios que no respetan la distancia establecida en la norma respecto de los lugares de votación</li>
            <li>Faltante de boletas</li>
            <li>Reunión de electores en horario de veda</li>
            <li>Encuestas en la puerta de los locales de votación</li>
            <li>Violación del secreto del voto por parte de la/el votante</li>
            <li>Realización de espectáculos públicos y/o deportivos durante el período de veda electoral</li>
          </ul>
          <h2>¿Qué pasa si faltan boletas?</h2>
          <p>Quien preside la mesa, con la persona delegada de la Justicia Nacional Electoral, debe verificar que estén disponibles en todo momento boletas de todas las agrupaciones políticas.</p>
          <p>En caso de que falte la opción elegida, tenés que  dirigirte a la autoridad de mesa para indicarle que <strong>"faltan boletas", sin indicar cuál es la que falta.</strong> Las boletas las repondrán las-os fiscales o, en su defecto, quien tenga a cargo la presidencia de la mesa usando las boletas de contingencia entregadas por el correo.</p>
          <h2>¿Qué pasa si figuro como afiliada/o a un partido sin mi consentimiento?</h2>
          <p>Quienes quieran renunciar a su afiliación pueden hacerlo por <strong>telegrama gratuito </strong>  (<a href="https://www.correoargentino.com.ar/servicios/telegrafico/telegrama-ley-23298-desafiliacion-un-partido-politico" target="_blank">este</a>) desde cualquier sucursal del Correo Argentino o personalmente en la Secretaría Electoral correspondiente a donde figurás en el Padrón, con 2 copias de este <a href="https://www.electoral.gov.ar/pdf/renuncia_afiliacion_politica.pdf" target="_blank">formulario</a>. </p>
          <p>Cualquier persona que presuma se encuentra afiliada a un partido político o que no quiera identificar el partido del que se trata, puede renunciar al mismo en forma indeterminada. Los cambios se producen a las 48 horas de efectuado el reclamo.</p>
        </div>
      </Dropdown>
      <Dropdown   name="¿QUIÉNES SON LAS AUTORIDADES DE MESA?">
        <div>
          <img class="is-hidden-tablet" src="/abc/autoridades-de-mesa.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/autoridades-de-mesa_desktop.png" alt="Respuesta a la pregunta">
          <h2>¿Qué hace el “Presidente de mesa”?</h2>
          <p>Es la <strong>máxima autoridad en la mesa electoral</strong> y tiene la responsabilidad por el desarrollo correcto del acto electoral: administra la mesa de votación y realiza el recuento de votos de su mesa. Tiene que actuar con <strong>independencia e imparcialidad.</strong>  Si te designaron autoridad de mesa, podés ver más detalles en este <a href="https://drive.google.com/file/d/17SLtcnQemTYmjwQKSgWJABGWRW5p7v0Y/view" target="_blank">manual</a> para presidentes de mesa.</p>
          <h2>¿Qué hace la/el Fiscal?</h2>
          <img class="is-hidden-tablet" src="/abc/fiscal-de-mesa.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/fiscal-de-mesa_desktop.png" alt="Respuesta a la pregunta">
          <h2>¿Qué sucede si siendo autoridad de mesa no me presento?</h2>
          <p>Es un <strong>delito electoral</strong> no presentarse, porque es una obligación cívica.  Tiene una pena de <strong>prisión de seis meses a dos años.</strong></p>
          <h2>¿Cuáles son los justificativos para no presentarse como autoridad de mesa?</h2>
          <p>El Código Electoral admite <strong>excusarse</strong> de ejercer esa función por razones de enfermedad o de fuerza mayor debidamente justificadas. </p>
          <p>La excusación debe formularse dentro de los tres días de recibida la notificación de designación. Transcurrido ese lapso solo se admite la excusación por causas ocurridas con posterioridad las que serán motivo de consideración especial por la Justicia Electoral. </p>
          <p>La justificación por enfermedad es válida si el certificado fue extendido por médicas-os de Hospitales o Centros de salud públicos, tanto de nivel nacional, provincial o municipal, en ese orden. En ausencia de tales profesionales, la certificación puede ser extendida por una médica-o particular, pudiendo la Justicia hacer verificar su exactitud. </p>
          <p>Otra causal de excepción es desempeñar funciones de organización y/o dirección de un partido político o ser candidata-o, lo que debe acreditarse mediante certificación de las autoridades del respectivo partido.</p>
        </div>
      </Dropdown>
      <Dropdown   name="¿CÓMO SE CLASIFICAN LOS VOTOS?">
        <div>
          <img class="is-hidden-tablet" src="/abc/clasifican-los-votos.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/clasifican-los-votos_desktop.png" alt="Respuesta a la pregunta">
        </div>
      </Dropdown>
      <Dropdown   name=" ¿CÓMO ES EL CAMINO DEL VOTO?">
        <div>
          <h2>¿Cómo se cuentan los votos?</h2>
          <p>Una vez que termina la votación, el presidente de mesa abre la urna y califica y cuenta cada voto en presencia de los fiscales de los partidos. </p>
          <p>Enterate en <a href="https://www.cippec.org/especial/elcaminodelvoto2021/" target="_blank">este video</a> cómo sigue el camino del voto hasta que se proclama a las personas electas.</p>
        </div>
      </Dropdown>
      <Dropdown   name=" ¿QUÉ ES EL VOTO ACCESIBLE?">
        <div>
          <img class="is-hidden-tablet" src="/abc/voto-accesible.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/voto-accesible_desktop.png" alt="Respuesta a la pregunta">
          <h2>¿Qué es el voto accesible?</h2>
          <p>Si tenés alguna <strong>condición física que te dificulte la emisión del voto</strong> podés solicitar el voto asistido por la-el Presidente de mesa o una persona de tu confianza.</p>
          <p>También, si tenés movilidad limitada, podés pedirle a la-el Presidente de la mesa donde tengas que votar, el traslado de la urna al Cuarto Oscuro Accesible (COA), que es un espacio de fácil acceso y cercano al ingreso del establecimiento.</p>
          <h2>¿Qué es el Cuarto Oscuro Accesible?</h2>
          <p>El Cuarto Oscuro Accesible (COA) es <strong>un cuarto oscuro especial</strong> que se encuentra en el lugar de más fácil acceso y cercano al ingreso del lugar de votación. El mismo aparece señalizado e identificado con las siglas “COA”</p>
          <h2>¿Quiénes pueden votar en el Cuarto Oscuro Accesible (COA)?</h2>
          <p>Personas con <strong>discapacidad –motriz, sensorial, mental o visceral– y aquellas que presentan limitaciones que interfieren en su desplazamiento, visión, orientación y comunicación.</strong> Estas limitaciones pueden ser de características permanentes o temporales, visibles o invisibles. </p>
          <p>Se dirige también a <strong>personas adultas mayores, gestantes, personas con lesiones temporales en miembros superiores o inferiores y personas con diversas discapacidades invisibles</strong> (pacientes con cardiopatías, diálisis o en tratamientos oncológicos, enfermedades psiquiátricas no incapacitantes, etc.).</p>
          <h2>¿Qué asistencia se le puede dar a una persona con discapacidad visual? ¿Puede ir acompañado de su perro de asistencia? </h2>
          <p>Las personas con una discapacidad o condición física permanente o transitoria que impida, restrinja o dificulte el ejercicio del voto <strong>podrán sufragar asistidas por la-el presidente de mesa o una persona de su elección.</strong> </p>
          <p>Esta circunstancia se deja asentada en el Padrón de la mesa y en el Acta de cierre de la misma, consignando los datos del elector y de la persona que le asistió. </p>
          <p>Las personas acompañadas por su perro de asistencia pueden ingresar al establecimiento y al cuarto oscuro con el mismo.</p>
          <h2>¿Con qué documentos tenés que ir a votar?</h2>
          <img class="is-hidden-tablet" src="/abc/con-que-documentos.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/con-que-documentos_desktop.png" alt="Respuesta a la pregunta">
          <p>Para votar te tenés que presentar en la mesa electoral con el último ejemplar de tu documento de identidad. Tiene que ser <strong>el que figura en el Padrón o una versión posterior, es decir, uno más nuevo.</strong></p>
          <p>Los documentos habilitantes para votar son:</p>
          <img src="" alt="">
          <p>Nota: <strong>El DNI tarjeta es válido para votar</strong> aunque contenga la leyenda “no válido para votar”. </p>

        </div>
      </Dropdown>
      <Dropdown   name="¿CÓMO SE FINANCIAN LAS CAMPAÑAS ELECTORALES?">
        <div>
          <img class="is-hidden-tablet" src="/abc/financiamiento.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/financiamiento_desktop.png" alt="Respuesta a la pregunta">
          <h2>¿Cómo se financian las campañas electorales?</h2>
          <p>En Argentina, las campañas electorales de los partidos políticos se financian con un <strong>modelo mixto</strong> por el cual los partidos obtienen <strong>financiamiento público y del sector privado.</strong></p>
          <h2>¿Todos los partidos reciben el mismo dinero por parte del Estado?</h2>
          <p>No. La Ley de financiamiento político establece la <strong>fórmula para cada categoría.</strong> Los partidos reciben el <strong>50% de los fondos que se distribuyen en forma igualitaria</strong>, y el restante <strong>50% se distribuye en forma proporcional</strong> de acuerdo al resultado de la elección anterior para la misma categoría.</p>
          <h2>¿Los partidos deben indicar quién los financia y en qué gastan su dinero?</h2>
          <p>Sí, la Ley de Financiamiento Político obliga a los partidos políticos a <strong>registrar sus ingresos y gastos indicando minuciosamente quién realizó cada aporte y en qué se gastó el dinero.</strong> Estos informes son públicos. El informe final de campaña se presenta 90 días después de las elecciones.</p>
          <h2>¿Existen prohibiciones en cuanto a las donaciones?</h2>
          <p>Sí, están  <strong>prohibidas</strong> las siguientes donaciones:</p>
          <ol type="a">
            <li>Contribuciones o donaciones anónimas. La identidad del contribuyente o donante se debe poder divulgar;</li>
            <li>Contribuciones o donaciones de entidades centralizadas o descentralizadas, nacionales, provinciales, interestaduales, binacionales, multilaterales o municipales;</li>
            <li>Contribuciones o donaciones de permisionarios, empresas concesionarias o contratistas de servicios u obras públicas o proveedores de la Nación, las provincias, los municipios o la Ciudad de Buenos Aires;</li>
            <li>Contribuciones o donaciones de personas humanas o jurídicas que exploten juegos de azar;</li>
            <li>Contribuciones o donaciones de Gobiernos o entidades públicas extranjeras;</li>
            <li>Contribuciones o donaciones de personas humanas o jurídicas extranjeras que no tengan residencia o domicilio en el país;</li>
            <li>Contribuciones o donaciones de personas que hubieran sido obligadas a efectuar la contribución por sus superiores jerárquicos o empleadores;</li>
            <li>Contribuciones o donaciones de asociaciones sindicales, patronales y profesionales;</li>
            <li>Contribuciones o donaciones de personas humanas o jurídicas que se encuentren imputadas en un proceso penal en trámite por cualquiera de las conductas previstas en la ley penal tributaria vigente o que sean sujetos demandados de un proceso en trámite ante el Tribunal Fiscal de la Nación por reclamo de deuda impositiva.</li>
          </ol>
          <h2>¿Las donaciones privadas tienen tope? </h2>
          <p>Sí. Los partidos políticas pueden recibir, para la campaña electoral, un total de recursos privados que no supere el monto equivalente a la diferencia entre el tope máximo de gastos de campaña fijado por ley y el monto del aporte público para la campaña electoral correspondiente a ese partido.</p>
          <p>Además, los partidos no pueden recibir de una misma persona (humana o jurídica) un monto superior al dos por ciento (2%) de los gastos permitidos para la campaña. La Cámara Nacional Electoral informa a los partidos políticos el límite de aportes privados permitidos y publica esa información. Podés ver las donaciones permitidas por distrito <a href="https://www.electoral.gob.ar/nuevo/paginas/pdf/ExpSJ61Anexo%20V.pdf" target="_blank">acá</a>. </p>

        </div>
      </Dropdown>
      <Dropdown   name="¿QUÉ CAMBIA CON EL COVID? ">
        <div>
          <img class="is-hidden-tablet" src="/abc/covid.png" alt="Respuesta a la pregunta">
          <img class="is-hidden-mobile" src="/abc/covid_desktop.png" alt="Respuesta a la pregunta">
          <h2>¿Qué cambia con los protocolos impuestos por la pandemia?</h2>
          <p>En principio, se <strong>ampliaron los puntos de votación disponibles</strong>, se pasó de 14.800 espacios habilitados para la votación en el 2019 a más de 17.000. Por eso, es importante revisar el padrón electoral definitivo para confirmar tu centro de votación designado.</p>
          <h2>¿Cuál es el horario de votación para las personas con riesgo?</h2>
          <p>Se creó un <strong>horario de votación prioritario</strong> para personas con factores de riesgo desde las 10.30 hasta las 12.30. Durante ese lapso, los ciudadanos sin condiciones de salud preexistentes también podrán votar, pero deberán ceder su lugar en la fila si una persona dentro del grupo de riesgo concurre a la misma mesa de votación.</p>
          <h2>¿Algo más?</h2>
          <p>Sí, desde el Ministerio del Interior dieron la instrucción <strong>de formar las filas en espacios al aire libre y manteniendo el distanciamiento</strong>. Además, recomiendan que cada votante lleve <strong>su propia birome para firmar</strong> el registro y la instrucción.</p>
          <p>En cada centro de votación habrá un <strong>“facilitador sanitario”</strong>, que cuidará el <strong>correcto funcionamiento del protocolo</strong> y personal sanitario adicional encargado de <strong>mantener las condiciones de higiene.</strong></p>
          <h2>¿Es cierto que si cierro el voto con pegamento se anula?</h2>
          <p>No, es <strong>falso</strong>. Pero dada la situación sanitaria las autoridades electorales recomiendan no lamer el sobre y simplemente meter la solapa hacia adentro de forma que contenga las boletas en su interior.</p>
        </div>
      </Dropdown>
      <section class="my-6">
        <h3 class="mt-6 mb-3 has-text-white">Fuentes</h3>
        <ul class="ml-3  has-text-white">
          <li class="has-text-white">Cámara Nacional Electoral - <a href=" electoral.gob.ar" target="_blank">electoral.gob.ar</a> </li>
          <li class="has-text-white">Dirección Nacional Electoral - <a href="argentina.gob.ar/dine" target="_blank">argentina.gob.ar/dine</a> </li> 
          <li class="has-text-white">Congreso de la Nación Argentina - <a href="congreso.gob.ar" target="_blank">congreso.gob.ar</a></li>
          <li class="has-text-white">Senado de la Nación Argentina - www.senado.gob.ar</li>
          <li class="has-text-white">Cámara de Diputados de la Nación Argentina - <a href="www.hcdn.gob.ar" target="_blank">www.hcdn.gob.ar</a></li>
          <li class="has-text-white">Constitución Nacional Argentina - Art. 39, 40, 52, 53, 59, 61, 75 y 99</li>
          <li class="has-text-white"><a href="https://www.cippec.org/especial/votoinformado-oficialcne/" target="_blank">Plataforma Voto Informado</a>, elaborada por CIPPEC en base a información provista por la Cámara Nacional Electoral.</li>
          <li class="has-text-white">La participación electoral histórica se calculó con datos obtenidos de la Cámara Nacional Electoral, compilados por Carolina Ramos <a href="https://twitter.com/Carito_Ramos" target="_blank">https://twitter.com/Carito_Ramos</a></li>
          <li class="has-text-white">Ley de Financiamiento de Partidos Políticos - <a href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/120000-124999/124231/texact.htm" target="_blank">Ley 26.215</a></li>
        </ul>
      </section>
    </section>
  </div>

 
</main>
<style>
  h2, h3,p,li,strong{
    color:#000
  }
  h2{
    font-size: 1rem;
    margin-top: 1rem;
  }
  img{
    display: block;
    margin: auto;
  }
  ul{
    list-style: disc;
  }
  .subtitle{
    line-height: 3rem;
  }
</style>