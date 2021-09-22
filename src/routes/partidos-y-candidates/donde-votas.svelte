<script context="module">
  import API from "$lib/apiHandler";
  import { getDistricts } from "$lib/graph-ql/distritos.js";
  export async function load(){
    const res = await API(getDistricts());
    if(res.statusText === 'OK'){
      return{
        props: {
          provincias: res.data.data.distritos
        }
      }
    }
    return {
      status: res.status,
      error: new Error(`Could not load ${res.response.error}`)
    }
  } 
  </script>
  <script>
    export let provincias;
  </script>
  <main class="container p-2 has-background-black">
    <h1 class="has-text-centered title-white is-3 my-4">¿Donde votas?</h1>
    {#each provincias as provincia}
      <div class="columns">
        <div class="column has-text-centered">
        <a href="/partidos-y-candidates/{provincia.slug}" class="button is-fullwidth">{provincia.name}</a>
        </div>
      </div>
    {/each}  
  </main>