<script context="module">
   import API, { handleResponse } from '$lib/apiHandler';
  import {getPartysByDistrict} from '$lib/graph-ql/partidos.js';
  export async function load({page, fetch}){
    const res = await API(fetch, getPartysByDistrict('nacion'));
    return await handleResponse(res, "partidos", "partido");
  }
</script>
<script>
  import { page } from "$app/stores";
  import { PartyImg, ProvinciasSlugs } from "$lib/common/utils";
  /**
    * @type {Party[]}
    * @const
  */
  
  export let partidos;
  let partidosPartidos = partidos.filter(partido => partido.tipo === 'partido')
</script>

<div class="section">
  <div class="container my-6">
    <div class="has-text-centered has-text-black">
      <h1 class="is-size-2 has-text-weight-medium has-text-black">
        Propuestas Comparadas
      </h1>
      <h3 class="is-size-4 has-text-weight-light">
        Explora las propuestas electorales de cada partido y sus listas
      </h3>
    </div>
    <div class="columns is-centered is-multiline is-mobile mt-6">
      {#each partidosPartidos as partido}
        <div class="column is-half-mobile is-one-quarter-tablet is-2-desktop has-text-centered">
          <a href="/partidos-y-candidates/partidos/{partido.id}">
            <figure class="image is-square party-logo" style="background-image: url({PartyImg(partido)})"></figure>
            <div class="name-partido has-background-black is-flex is-align-items-center is-justify-content-center has-text-white py-4">
              <p>{partido.name}</p>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
<style>
  .tetris-background {
    background-image: url("/black-background-desktop.png");
    background-attachment: fixed;
    /* background-size: cover; */
    position:relative;
    background-repeat: repeat;
  }
  .hero.tetris-background .hero-body{
    background: linear-gradient(0deg, rgba(0,0,0,1) 00%, rgba(0,0,0,0.4) 100%); 
    background-attachment: fixed;
  }
  .back-provincias{
    position:absolute;
    width: 100%;
  }
  .party-logo{
    /* height: 150px; */
    width: 100%;
    /* margin: 0 auto; */
    border: 1px solid black;
    border-bottom: 0;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.name-partido{
  text-transform: uppercase;
  padding: 2px 10px;
  height: 100px;
  line-height: normal;
  font-weight: 500;
}
</style>