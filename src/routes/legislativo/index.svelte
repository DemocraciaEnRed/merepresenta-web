<script context="module">
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByCargo } from '$lib/graph-ql/candidates';
	import { shuffleArray } from '$lib/common/utils';
	export async function load({ fetch }) {
		const res = await API(fetch, getCandidatesByCargo('presidente'));
		const { props } = await handleResponse(res, 'candidates', 'candidato');
		props.candidates = shuffleArray(props.candidates);
		return  {props} ;
	}
</script>

<script>
	import Legislative from "./_legislative.svelte";
    export let candidates
</script>

<main class="pb-6 has-background-white white-background-desktop">
    <Legislative {candidates}/>

</main>