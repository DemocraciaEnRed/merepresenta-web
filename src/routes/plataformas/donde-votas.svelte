<script context="module">
  import API, { handleResponse } from "$lib/apiHandler";
  import { getDistricts } from "$lib/graph-ql/distritos.js";
  export async function load({fetch}){
    const res = await API(fetch, getDistricts());
    return await handleResponse(res, "provincias", "distritos")
  } 
  </script>
  <script>
    export let provincias
  </script>
  <main class="container black-background p-2 has-background-black">
    <h1 class="has-text-centered title-white is-3 my-4">¿Donde votás?</h1>
    {#each provincias as provincia}
      <div class="columns is-mobile">
        <div class="column is-half is-offset-one-quarter has-text-centered">
        <a href="/plataformas/{provincia.slug}" class="button is-fullwidth">{provincia.name}</a>
        </div>
      </div>
    {/each}  
  </main>