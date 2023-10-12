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
	import Presidential from './_presidential.svelte';
	import Gobernor from './_gobernor.svelte';
	import { CandidateImg } from '$lib/common/utils';
	import GobLegislative from './_gob_legislative.svelte';
	export let candidates;
</script>

<main class="pb-6 has-background-white white-background-desktop">
	<Presidential {candidates} presidential />
	<GobLegislative/>
	<!-- <Legislative />
	<Gobernor /> -->
</main>

<style>
</style>
