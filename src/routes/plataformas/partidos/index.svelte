<script context="module">
   import API, { handleResponse } from '$lib/apiHandler';
  import {getPartysByDistrict} from '$lib/graph-ql/partidos.js';
  export async function load({page, fetch}){
    const res = await API(fetch, getPartysByDistrict('nacion'));
    return await handleResponse(res, "partidos", "partido");
  }
</script>
<script>
  import { page } from "$app/stores";
	import PartyProposalCard from "$lib/common/card-party/party-proposal-card.svelte";
  import { PartyImg, ProvinciasSlugs } from "$lib/common/utils";
  /**
    * @type {Party[]}
    * @const
  */
  
  export let partidos;
  let partidosPartidos = partidos.filter(partido => partido.tipo === 'partido')
</script>

<div class="section">
  <div class="container my-6">
    <div class="has-text-centered has-text-black">
      <h1 class="is-size-2 has-text-weight-medium has-text-black">
        Propuestas Comparadas
      </h1>
      <h3 class="is-size-4 has-text-weight-light">
        Explora las propuestas electorales de cada partido y sus listas
      </h3>
    </div>
    <div class="columns is-centered is-multiline is-mobile mt-6">
      <PartyProposalCard typeParty="partido"/>
    </div>
  </div>
</div>