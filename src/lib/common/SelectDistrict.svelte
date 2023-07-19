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
    const newRoute = '/partidos-y-candidates/'+selected
    goto(newRoute, { replaceState: true });
  }
</script>
{#if !loading && selected !== 'nacion'}
<div class="select is-medium mx-3 is-white">
  <select bind:value={selected} on:change={go} class="has-background-grey-dark has-text-white	has-text-weight-light">
    {#each provincias as provincia}
      <option value={provincia.slug}>{provincia.name}</option>
    {/each}
  </select>
</div>
{/if}

<style>
	.select::after {
		border-width: 2px;
	}
	.select:hover::after {
		border-color: white;
		border-width: 4px;
	}
	.select:hover > select {
		font-weight: 400 !important;
	}
	@media screen and (max-width: 1023px) {
		.select {
			width: 85%;
			margin-bottom: 16px;
		}
		.select > select {
			width: 100%;
		}
	}
</style>