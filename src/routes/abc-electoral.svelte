<script>
  import Dropdown from '$lib/common/Dropdown.svelte';
</script>
<main class="container has-background-black">
  <section class=" p-2">
    <div class="has-text-centered mt-6 has-text-white">
      <img src="/abc.svg" alt="imagen de una mano deslizando un voto en una urna">
      <h1 class="title has-text-white mt-3">Elecciones 2021</h1>
      <h2 class="title is-5 p-4 has-text-white has-text-weight-normal">
        Conocé qué candidatxs y partidos participan en estas elecciones
      </h2>
      <p class="has-text-left p-4">
        En las elecciones PASO (Primarias, Abiertas, Secretas y Obligatorias) se definen las listas de cada espacio político para las elecciones generales. En este 2021, tanto en las PASO como en las Elecciones generales lo que la ciudadanía definirá es la renovación de 127 del total de 257 bancas de la Cámara de Diputados mientras que en el Senado ocurrirá lo mismo con 24 de los 54 escaños que posee.
      </p>
    </div>
  </section>
  <Dropdown darkMode name="¿QUIÉNES VOTAN?">
    <div></div>
  </Dropdown>
  <Dropdown darkMode name="¿QUÉ PASA SI NO VOTO?">
    <div></div>
  </Dropdown>
  <Dropdown darkMode name="¿QUÉ HACER SI VEO IRREGULARIDADES?">
    <div></div>
  </Dropdown>
  <Dropdown darkMode name="¿QUIÉNES SON LAS AUTORIDADES DE MESA?">
    <div></div>
  </Dropdown>
  <!--
  <h1 class="title px-2 is-5 has-text-black mt-4 has-text-centered special">
    <span class="has-background-white">
      LO QUE TENÉS QUE SABER SI ES LA PRIMERA VEZ QUE VOTÁS
    </span>
  </h1>
  -->
  <Dropdown darkMode name="¿CÓMO SE CLASIFICAN LOS VOTOS?">
    <div></div>
  </Dropdown>
  <Dropdown darkMode name="¿CÓMO ES EL CAMINO DEL VOTO?">
    <div></div>
  </Dropdown>
  <Dropdown darkMode name="¿QUÉ ES EL VOTO ACCESIBLE?">
    <div></div>
  </Dropdown>
  <Dropdown darkMode name="¿CÓMO SE FINANCIAN LAS CAMPAÑAS ELECTORALES?">
    <div></div>
  </Dropdown>
  <Dropdown darkMode name="¿QUÉ CAMBIA CON EL COVID?">
    <div></div>
  </Dropdown>


</main>
<style>
  .special{
    line-height: 35px;
  }
</style>