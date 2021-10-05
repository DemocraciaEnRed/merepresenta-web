<script>
  import { page } from "$app/stores";
  import SelectDistrict from "$lib/common/SelectDistrict.svelte";
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
</script>
<main class="container p-2 ">
  <h1 class="has-text-center title is-3 has-text-weight-normal has-text-black mt-4">Partidos y propuestas</h1>
  <p>Conocé los propuestas de los distintos partidos según tu distrito.</p>
  <div class="has-text-right">
    <SelectDistrict/>
  </div>
  
  <section class="columns is-mobile py-6">
    {#each partidos as partido}
      <div class="column is-half has-text-centered party">
        <a href="/partidos-y-candidates/{$page.params.provincia}/partidos/{partido.slug}">
          <div
            src={partido.logo}
            alt={`logo de ${partido.name}`}
            style="background-image: url({partido.logo})"
            class="party-logo">
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