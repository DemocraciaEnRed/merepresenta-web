<script>
  import provincias from '$lib/provincias.json';
</script>
<main class="container p-2 has-background-black">
  <h1 class="has-text-centered title-white is-3 my-4">¿Donde votas?</h1>
  {#each provincias as provincia}
    <div class="columns">
      <div class="column has-text-centered">
      <a href="/partidos-y-candidates/{provincia.slug}" class="button is-fullwidth">{provincia.name}</a>
      </div>
    </div>
  {/each}  
</main>