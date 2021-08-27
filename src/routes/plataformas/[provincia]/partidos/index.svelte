<script>
  import { page } from "$app/stores";
  import provincias from '$lib/provincias.json'
  import partys from './partidos.json'
  import Card from './Card.svelte';
  let provincia;
  let partidos = [];
  page.subscribe((page)=>{
    let currentSlug = page.params.provincia
    provincia = provincias.find((prov)=>{return prov.slug===currentSlug})
    // this is a fetch to partidos by provincia
    // await party.api :P
    partidos = partys;
    console.log(partidos)
  })
  
  // get partidos by provincia
</script>
<h1 class="has-text-center">Plataformas electorales en {provincia.name}</h1>
{#each partidos as partido}
  <Card partido={partido}/>
{/each}