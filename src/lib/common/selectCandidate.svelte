<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByParty } from '$lib/graph-ql/candidates';
	export let currentCandidate
	let selected ;
	let candidatos = [];
	let loading = true;

	async function update() {
	setTimeout(async() => {
		const res = await API(fetch, getCandidatesByParty($page.params.partido));
		const response = await handleResponse(res, 'candidatos', 'candidato');
		loading = false;
		candidatos = response.props.candidatos;
		selected = currentCandidate
	}, 30);
	}

	$: currentCandidate, update()
	
	function go() {
		const candidato = $page.params.id;
		const route = $page.path;
		const newRoute = route.replace(candidato, selected);
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
			{#each candidatos as candidato}
				<option value={candidato.id}>{candidato.name}</option>
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
