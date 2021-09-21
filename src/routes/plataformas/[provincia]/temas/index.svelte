<script>
  import { page } from "$app/stores";
  import { PoliciesIcons, } from "$lib/common/utils";
  import temas from '$lib/temas.json';
</script>
<main class="container p-2">
  <h1 class="mt-4 title is-4 has-text-weight-normal mb-1" >TEMAS</h1>
  <p class="mt-1">Conoce los temas que abordan las distintas propuestas</p>
  <div class="columns is-multiline is-mobile mt-4">
    {#each temas as tema}
      <a class="column is-half has-text-centered" href="{$page.path}/{tema.slug}">
        <div style="background-color: var(--{tema.name});">
          <img src={PoliciesIcons[tema.slug]} alt="icono de {tema.name}"  class="py-5">
          <h1 class="has-background-black has-text-weight-medium is-uppercase p-2" style="color:var(--{tema.name})">
            {tema.name}
          </h1>
        </div>
      </a>
    {/each}
  </div>
</main>
<style>
  img{
    width: 109px;
    height: 109px;
  }
</style>