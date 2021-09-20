<script>
  import { page } from '$app/stores';
  import ProposalsByParty from './_party-pp.svelte'
  import HeaderPP from './_header.svelte';
  import SelectDistrict from '$lib/common/SelectDistrict.svelte';

  import partidos from '$lib/proposal-x-partido.json';
  
  

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