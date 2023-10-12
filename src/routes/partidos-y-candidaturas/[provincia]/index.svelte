<script context="module">
  import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByCargo, getCandidatesByCargoAndDistrict } from '$lib/graph-ql/candidates';
	export async function load({ page, fetch }) {
		const res = await API(fetch, getCandidatesByCargoAndDistrict({cargo:'gobernador',district:page.params.provincia}));
		const candidates = await handleResponse(res, 'candidates', 'candidato');

		return candidates;
	}
</script>
<script>
	import GobLegislative from "../_gob_legislative.svelte";
import Presidential from "../_presidential.svelte";

	export let candidates;
</script>
<main  class="pb-6 has-background-white white-background-desktop">

  <Presidential {candidates}/>
  <GobLegislative/>
</main>

<style>
.tetris-background{
  background-image: url('/white-background-desktop.png');
  background-size: auto;
  background-attachment: fixed;
}
.party-logo{
    /* height: 150px; */
    width: 100%;
    /* margin: 0 auto; */
    border: 1px solid black;
    border-bottom: 0;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.name-partido{
  text-transform: uppercase;
  padding: 2px 10px;
  height: 100px;
  line-height: normal;
  font-weight: 500;
}
/* .party-logo{
  height: 150px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fff;
}
h2{
  text-align: center;
  background-color: black;
  color: white
}
section{
  margin-top: 50px;
}
h1{
  font-weight: 300;
} */
</style>