<script>
  import { page } from "$app/stores";
  import Icon from "$lib/common/Icon.svelte";
  import provincias from '$lib/provincias.json';
  // get temas
  import temas from '$lib/temas.json';
  let path;
  let district;
  page.subscribe((currentValue)=>{
    path = currentValue.path
    district = provincias.find((p)=>{return p.slug === currentValue.params.provincia})
  })
  
</script>
<h1 class="has-text-center">Plataformas electorales por tema en {district.name}</h1>
<h2>Conocé los temas que abordan las distintas propuestas</h2>
<div class="container">
  <section class="columns mt-6">
    {#each temas as tema}
      <a class="column tema" href="{path}/{tema.slug}" >
        <Icon size="large" icon={tema.icon} />
        <br/>
        {tema.name}
      </a>
    {/each}
  </section>
  
</div>
<style>
  .tema{
    width: 50%;
    float: left;
    text-align: center;
    padding: 10px;
    align-content: center;
    height: 100px;
    border: 4px solid white;
    background: #ccc;
  }
</style>