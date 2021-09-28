<script context="module">
  import API, { handleResponse } from '$lib/apiHandler';
  import {getThemeProposalsByParty} from '$lib/graph-ql/partidos.js';
  export async function load({page}){
    const { tema, provincia} = page.params;
    const res = await API(fetch, getThemeProposalsByParty(tema, provincia))
    const response = await res.json();
    if(res.ok){
      return{
        props:{
          partidos: response.data.partido,
          tema: response.data.ejes[0]
        }
      }
    }
    return{
      status : res.status
    }
  }
</script>
<script>
  import ProposalsByParty from './_party-pp.svelte'
  import HeaderPP from './_header.svelte';
  import SelectDistrict from '$lib/common/SelectDistrict.svelte';
  export let partidos;
  export let tema;
</script>
<main>
  <section>
    <nav class="breadcrumb is-small pl-2 my-2" aria-label="breadcrumbs">
      <ul>
        <li ><a href="/plataformas/donde-votas">Plataformas</a></li>
        <li ><a href="/plataformas/temas">Temas</a></li>
        <li class="is-active"><a href aria-current="page" style="color:{tema.color}">{tema.name}</a></li>
      </ul>
    </nav>
    <div class="has-text-right my-2">
      <SelectDistrict/>
    </div>
    <HeaderPP {tema}/>
    <div class="info p-4">
      Leé las distintas propuestas sobre 
      <span style="color: {tema.color});text-transform: capitalize">{tema.name}</span> 
      de cada partido según tu distrito
    </div>
    <div class="p-2">
      {#each partidos as partido}
        <ProposalsByParty {partido}/>
      {/each}
    </div>
    
  </section>
</main>

<style>

  .info{
    border-left: 3px solid black;
    border-bottom: 1px solid black;
  }
</style>