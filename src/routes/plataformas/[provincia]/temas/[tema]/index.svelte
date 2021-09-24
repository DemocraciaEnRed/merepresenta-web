<script context="module">
  import API, { handleResponse } from '$lib/apiHandler';
  import {getThemeProposalsByParty} from '$lib/graph-ql/partidos.js';
  export async function load({page}){
    const { tema, provincia} = page.params;
    const res = await API(fetch, getThemeProposalsByParty(tema, provincia))
    return await handleResponse(res,'partidos','partido');
  }
  
</script>
<script>
  import { page } from '$app/stores';
  import ProposalsByParty from './_party-pp.svelte'
  import HeaderPP from './_header.svelte';
  import SelectDistrict from '$lib/common/SelectDistrict.svelte';
  export let partidos;
  let routePath;
  let tema;
  page.subscribe(({path, params})=>{
    routePath = path;
    tema = params.tema;
  })
</script>
<main>
  <section>
    <HeaderPP {tema}/>
    <div class="info p-4">
      Leé las distintas propuestas sobre 
      <span style="color: var(--{tema});text-transform: capitalize">{tema}</span> 
      de cada partido según tu distrito
    </div>
    <div class="has-text-right mt-2">
      <SelectDistrict/>
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