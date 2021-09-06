<script>
  import provincias from '$lib/provincias.json';
</script>
<h1 class="has-text-centered title is-3">Plataformas electorales</h1>
<h2 class="has-text-centered title is-4">¿Donde votas?</h2>
{#each provincias as provincia}
  <div class="columns">
    <div class="column has-text-centered">
    <a href="/plataformas/{provincia.slug}" class="button">{provincia.name}</a>
    </div>
  </div>
{/each}