<script>
  import provincias from '$lib/provincias.json'
  import { page } from "$app/stores";
  import { goto } from '$app/navigation';
  let selected = $page.params.provincia

  function go(){
    const slug = $page.params.provincia
    const route = $page.path
    const newRoute = route.replace(slug, selected);
    goto(newRoute,{replaceState:true});
  }

</script>
<div class="select is-small">
  <select bind:value={selected} on:change={go}>
    {#each provincias as provincia}
      <option value={provincia.slug}>{provincia.name}</option>
    {/each}
  </select>
</div>