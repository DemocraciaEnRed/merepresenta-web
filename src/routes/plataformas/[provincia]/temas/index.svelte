<script context="module">
  import API, { handleResponse } from "$lib/apiHandler";
  import { getThemes } from "$lib/graph-ql/themes.js";
  export async function load({fetch}){
    const res = await API(fetch, getThemes());
    return await handleResponse(res, "temas", "ejes")
  }
</script>
<script>
  import { page } from "$app/stores";
  import { directusImg } from "$lib/common/utils";
  export let temas;
</script>
<main class="container p-2">
  <h1 class="mt-4 title is-4 has-text-weight-normal mb-1" >TEMAS</h1>
  <p class="mt-1">Conoce los temas que abordan las distintas propuestas</p>
  <div class="columns is-multiline is-mobile mt-4">
    {#each temas as tema}
      <a class="column is-half has-text-centered" href="{$page.path}/{tema.slug}">
        <div style="background-color: {tema.color});">
          <img src="{directusImg}{tema.icon_file.id}" alt="icono de {tema.name}"  class="py-5">
          <h1 class="has-background-black has-text-weight-medium is-uppercase p-2" style="color:{tema.color}">
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