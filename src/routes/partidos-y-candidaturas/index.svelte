<script context="module">
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByCargo } from '$lib/graph-ql/candidates';
	export async function load({ fetch }) {
		const res = await API(fetch, getCandidatesByCargo('presidente'));
		const candidates = await handleResponse(res, 'candidates', 'candidato');
		return candidates;
	}
</script>

<script>
	import Legislative from './_legislative.svelte';
	import Precidential from './_presidential.svelte';
	export let candidates;
</script>

<main class="has-background-white white-background-desktop">
	<Precidential {candidates} />
	<Legislative />
</main>

<style>
</style>
