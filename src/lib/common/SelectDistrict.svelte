<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import API, { handleResponse } from '$lib/apiHandler';
	import { getDistricts } from '$lib/graph-ql/distritos';

	let provincias = [];
	let loading = true;
	onMount(async () => {
		const res = await API(fetch, getDistricts());
		const response = await handleResponse(res, 'provincias', 'distritos');
		loading = false;
		provincias = response.props.provincias;
	});
	let selected = $page.params.provincia;
</script>

{#if !loading && selected !== 'nacion'}
	<div class="select is-medium mx-3 is-white">
		<select
			bind:value={selected}
			on:change
			class="has-background-grey-dark has-text-white	has-text-weight-light"
		>	
			<option value="" selected disabled>Selecciona un distrito</option>

			{#each provincias as provincia}
				<option value={provincia.slug}>{provincia.name}</option>
			{/each}
		</select>
	</div>
{/if}

<style>
	.select {
		width: 60%;
	}
	.select > select {
		width: 100%;
	}
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
