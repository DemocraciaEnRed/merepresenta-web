<script context="module">
  import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByCargoAndDistrict } from '$lib/graph-ql/candidates';
	import { getDistricts } from '$lib/graph-ql/distritos';
	export async function load({ page, fetch }) {
		const res = await API(fetch, getCandidatesByCargoAndDistrict({cargo:'gobernador',district:page.params.provincia}));
		const response = await handleResponse(res, 'candidates', 'candidato');
    	const res2 = await API(fetch, getDistricts());
		const response2 = await handleResponse(res2, 'provincias', 'distritos');
    	response.props.district = response2.props.provincias.find(provincia => provincia.slug === page.params.provincia) 
		return response;
	}
</script>
<script>
	import GobLegislative from "../_gob_legislative.svelte";
  import Presidential from "../_presidential.svelte";
  
  export let district
	export let candidates;
</script>
<main  class="pb-6 has-background-white white-background-desktop">

  <Presidential {candidates} noProposal={district.slug==='buenos-aires'} logo='/logo-{district.slug}.png' title='PARTIDOS Y CANDIDATURAS {district.name}' subtitle='Conocé la fórmula completa del partido de tu interés'/>
  <GobLegislative/>
</main>

<style>

</style>