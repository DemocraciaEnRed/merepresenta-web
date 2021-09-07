<script>
  import { page } from '$app/stores';
  import laws from '$lib/voted-laws.json'
  const {provincia, id} = $page.params
  let next = `/partidos-y-candidates/${provincia}/partidos/${id}/ley`
</script>
<h1>
  {provincia}
</h1> 
<strong>¿Cómo votaron?</strong>
<p>Clickeá la ley y enterarte de sus votos</p>
{#each laws as law}
  <a href="{next}/{law.slug}">
    {law.name}
  </a>
{/each}