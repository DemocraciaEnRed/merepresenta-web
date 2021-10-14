<script context="module">
  import {getThemeProposalsByPartyId} from '$lib/graph-ql/partidos.js';
  import API, { handleResponse } from '$lib/apiHandler';
  export async function load({page, fetch}){
    const {party, tema} = page.params;
    const res = await API(fetch ,getThemeProposalsByPartyId(tema, party))
    return await handleResponse(res, "party", "partido");
  }
</script>
<script>
  import HeaderPP from './_header.svelte';
  export let party
  let partido = party[0];
  //la vaca
  let tema = partido.ejes[0].ejes_id;
</script>
<div class="columns ">
  <HeaderPP {tema}/>
  <div class="info p-6 is-8 column ">
    <h1 class="title is-uppercase is-4">
      Propuestas de <span style="color: {tema.color})">{tema.name}</span><br>
      <span class="has-text-weight-normal">{partido.name}</span>
    </h1>
  </div>
</div>
<main class=" white-background-desktop ">
  <section class="container p-2">
    <ul class="mt-6 mx-3">
    {#each partido.ejes[0].propuestas as propuesta}
      <li class="mt-3">{propuesta.summary}</li>
    {/each}
    </ul>
    <p class="has-text-centered mt-6">
      <a href={partido.url_fuente} target="_blank" class="button is-black is-uppercase">
        ir a la plataforma oficial
      </a> 
    </p>
    {#if partido.ejes[0].ejes_id.resources.length >0}
      <p class="has-text-centered mt-6">   
        <strong>
          Si te interesa el tema de <span style="color: {tema.color})">{tema.name}</span>, <br>
          te invitamos a que visites <br> las siguientes páginas
        </strong>
      </p>
      {#each partido.ejes[0].ejes_id.resources as related}
        <p class="has-text-centered mt-4">
          <a href={related.url} target="_blank" class="button is-outlined is-active px-4">{related.url_label}</a>  
        </p>
      {/each}
    {/if}
    <div class="has-text-centered">
      <p class="has-text-centered mt-6">
      Conocé el resto de los partidos y sus propuestas
    </p>
    <a href="/" class="button is-black is-uppercase mt-4">ver propuestas</a>
    </div>
  </section>
</main>
<style>
  .info{
    border-left: 3px solid black;
    border-bottom: 1px solid black;
  }
  ul{
    list-style-type: disc;
  }
</style>