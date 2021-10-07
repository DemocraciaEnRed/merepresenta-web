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
<HeaderPP {tema}/>
<div class="info p-4">
  <h1 class="title is-uppercase is-4">
    Propuestas de <span style="color: {tema.color})">{tema.name}</span><br>
    <span class="has-text-weight-normal">{partido.name}</span>
  </h1>
</div>
<main class="container p-2">
  <ul class="ml-5 mt-4">
    {#each partido.ejes[0].propuestas as propuesta}
      <li>{propuesta.title}</li>
    {/each}
  </ul>
  {#each partido.ejes[0].propuestas as propuesta}
    <h2 class="py-2 title is-6 mt-4">{propuesta.title}</h2>  
    <p>
      {propuesta.summary}
    </p>
  {/each}
  <p class="has-text-centered mt-4">
    <a href={partido.url_web} target="_blank" class="button is-black is-uppercase">
      ir a la plataforma oficial
    </a> 
  </p>
  <p class="has-text-centered mt-5">
    <strong>
      Si te interesa el tema de <span style="color: {tema.color})">{tema.name}</span>, <br>
      te invitamos a que visites <br> las siguientes páginas
    </strong>
  </p>
  {#if partido.ejes[0].resources}
    {#each partido.ejes[0].resources as related}
      <p class="has-text-centered mt-4">
        <a href={related.url} class="button is-outlined is-active px-4">{related.url_label}</a>  
      </p>
    {/each}
  {/if}
  <p class="has-text-centered mt-4">
    Conocé el resto de los partidos y sus propuestas
    <a href="/" class="button is-black is-uppercase mt-4">ver propuestas</a>  
  </p>
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