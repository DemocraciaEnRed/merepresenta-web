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
  <main class=" black-background p-2 has-background-black">
    <section class="container">
      <h1 class="py-6 has-text-centered title-white is-3 my-4">¿Donde votás?</h1>
      <div class="columns is-flex-wrap-wrap is-justify-content-center ">
        {#each provincias as provincia}
          
            <div class="column is-mobile is-one-quarter is-offset-one-quarter-mobile is-half-mobile has-text-centered">
            <a href="/plataformas/{provincia.slug}" class="button is-fullwidth">{provincia.name}</a>
            </div>
        
        {/each}  
      </div>
    </section>
  </main>