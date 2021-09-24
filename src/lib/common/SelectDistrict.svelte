<script>
  import { page } from "$app/stores";
  import { goto } from '$app/navigation';
  import { onMount } from "svelte";
  import API, {handleResponse} from "$lib/apiHandler";
  import { getDistricts } from "$lib/graph-ql/distritos";
  
  let provincias = []
  let loading = true
  onMount(async ()=>{
    const res = await API(fetch, getDistricts());
    const response = await handleResponse(res, "provincias", "distritos")
    loading = false
    provincias = response.props.provincias
  })
  let selected = $page.params.provincia
  function go(){
    const provincia = $page.params.provincia
    const route = $page.path
    const newRoute = route.replace(provincia, selected);
    goto(newRoute,{replaceState:true});
  }
</script>
{#if !loading}
<div class="select is-small">
  <select bind:value={selected} on:change={go}>
    {#each provincias as provincia}
      <option value={provincia.slug}>{provincia.name}</option>
    {/each}
  </select>
</div>
{/if}