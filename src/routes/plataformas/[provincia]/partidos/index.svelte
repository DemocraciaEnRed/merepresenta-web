<script>
  import { page } from "$app/stores";
  import provincias from '$lib/provincias.json'
  import partys from '$lib/partidos.json'
  import Card from './Card.svelte';
  import '$lib/typedef'

  let provincia;
  /**
    * @type {Party[]}
    * @const
  */
  let partidos = [];
  // we suscribe to route changes in case the district selector change 
  page.subscribe((page)=>{
    let currentSlug = page.params.provincia
    provincia = provincias.find((prov)=>{return prov.slug===currentSlug})
    // TODO fetch to partidos by provincia
    partidos = partys;
  })
  function isEven(num){
    return num%2 === 0
  }
</script>
<h1 class="has-text-center">Plataformas electorales en {provincia.name}</h1>
<p>Conocé los propuestas de los distintos partidos</p>
<div class="columns">
  {#each partidos as partido, index}
      <div class="column">
        <Card partido={partido}/>
      </div>
  {/each}
</div>
