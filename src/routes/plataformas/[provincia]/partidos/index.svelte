<script context="module">
   import API, { handleResponse } from '$lib/apiHandler';
  import {getPartysByDistrict} from '$lib/graph-ql/partidos.js';
  export async function load({page, fetch}){
    const res = await API(fetch, getPartysByDistrict(page.params.provincia));
    return await handleResponse(res, "partidos", "partido");
  }
</script>
<script>
  import { page } from "$app/stores";
  import SelectDistrict from "$lib/common/SelectDistrict.svelte";
  import { PartyImg } from "$lib/common/utils";
  /**
    * @type {Party[]}
    * @const
  */
  
  export let partidos;
  
</script>
<main class="container p-2 white-background-desktop">
  <h1 class="has-text-centered-tablet title is-3 has-text-weight-normal has-text-black mt-4">Partidos y propuestas</h1>
  <p class="has-text-centered-tablet">Conocé los propuestas de los distintos partidos según tu distrito.</p>
  <div class="has-text-right mt-6">
    <SelectDistrict/>
  </div>
  
  <section class="columns is-mobile py-6 is-multiline">
    {#each partidos as partido}
      <div class="column is-half-mobile is-one-quarter-desktop is-one-third-tablet has-text-centered party">
        <a href="/partidos-y-candidates/{$page.params.provincia}/partidos/{partido.id}">
          <div
            alt={`logo de ${partido.name}`}
            style="background-image: url({PartyImg(partido)})"
            class="party-logo has-background-white">
          </div>
          <div class="has-background-black has-text-white py-4">
            {partido.name}
          </div>
        </a>
      </div>
    {/each}
  </section>

</main>
<style>
  .party-logo{
    height: 150px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid black;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>