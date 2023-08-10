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
	import Presidential from './_presidential.svelte';
	import Gobernor from './_gobernor.svelte';
	export let candidates;
</script>

<main class="has-background-white white-background-desktop">
	<Presidential {candidates} />
	<Legislative />
	<Gobernor />
</main>

<style>
</style>
