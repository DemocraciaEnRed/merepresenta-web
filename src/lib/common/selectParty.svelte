<script>
	import { page } from '$app/stores';
	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import API, { handleResponse } from '$lib/apiHandler';
	import { getPartysByDistrict } from '$lib/graph-ql/partidos';
	export let currentparty

	let partidos = [];
	let loading = true;
	let selected;

	async function update() {

		setTimeout(async() => {
			const res = await API(fetch, getPartysByDistrict($page.params.provincia));
			const response = await handleResponse(res, 'partidos', 'partido');
			loading = false;
			partidos = response.props.partidos;
			selected = $page.params.partido;
		}, 30);

	}

	$:currentparty, update()

	function go() {
		const provincia = $page.params.provincia;
		const partido = $page.params.partido;
		const route = $page.path;
		let newRoute = `/partidos-y-candidates/${provincia}/candidates/${selected}`;
		if ($page.path.includes('/partidos/')) {
			newRoute = `/partidos-y-candidates/${provincia}/partidos/${selected}`;
			//window.location.replace(newRoute)
		}
		
		goto(newRoute, { replaceState: true });
	}
</script>

{#if !loading}
	<div class="select is-medium mx-3 is-white">
		<select
			bind:value={selected}
			on:change={go}
			class="has-background-grey-dark has-text-white has-text-weight-light"
		>
			{#each partidos as partido}
				<option value={partido.id}>{partido.name}</option>
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
