<script>
	import API, { handleResponse } from '$lib/apiHandler';
	import { CandidateImg, PartyImg, shuffleArray } from '$lib/common/utils';
	import { getCandidatesByCargo, getCandidatesByCargoAndDistrict } from '$lib/graph-ql/candidates';
	import { getPartysByDistrict } from '$lib/graph-ql/partidos';
	import { onMount } from 'svelte';
	

  export let partido;
	export let candidate;
  export let getQuantity;
  export let typeParty;
  export let url = '/propuestas/partidos/'
  let ProposalCards = []

  const getPartys = async ()=>{
    if(!candidate){
      if(partido){
        const res = await API(fetch, getPartysByDistrict(partido.district.slug))
        const response = await handleResponse(res, 'partidos', 'partido');
        const otherProposal = response.props.partidos.filter((party) => party.tipo === partido.tipo);
        ProposalCards = shuffleArray(otherProposal.filter((party) => party.id !== partido.id))
        if (getQuantity) ProposalCards = ProposalCards.slice(0, getQuantity);
      } else{
        const res = await API(fetch, getPartysByDistrict('nacion'));
        const response = await handleResponse(res, 'partidos', 'partido');
        let otherProposal = response.props.partidos
        if(typeParty) otherProposal= response.props.partidos.filter((party) => party.tipo === typeParty);
        ProposalCards = shuffleArray(otherProposal)
        if (getQuantity) ProposalCards = ProposalCards.slice(0, getQuantity);
      }   

    }
  }
  const getCandidates = async ()=>{
      if(typeof candidate === 'boolean'){
        const res = await API(fetch, getCandidatesByCargo('presidente'));
        const props = await handleResponse(res, 'candidates', 'candidato');
        ProposalCards = shuffleArray(props.props.candidates)
        if (getQuantity) ProposalCards = ProposalCards.slice(0, getQuantity);
      }else{
        const res = await API(fetch, getCandidatesByCargoAndDistrict({idExcept:candidate.id, cargo:candidate.cargo, district:candidate.distrito_nacional.slug}))
        const props = await handleResponse(res, 'candidates', 'candidato');
        ProposalCards = shuffleArray(props.props.candidates.filter((party) => party.id !== partido.id))
        if (getQuantity) ProposalCards = ProposalCards.slice(0, getQuantity);
  
      }
  }



  
  onMount(()=>{
    if(candidate)getCandidates()
    else getPartys()
  })


  $:partido, getPartys()

  $: if(candidate !== undefined){
    getCandidates()

  }

</script>
{#if ProposalCards.length > 0}
{#if candidate}
{#each ProposalCards as proposal}
  <div class="column is-half-mobile is-one-third-tablet is-3-desktop is-2-widescreen has-text-centered">
    <div class="candidate-container">
      <div class="header is-flex is-justify-content-center is-align-content-center px-1">
        <p class="candidate-name is-size-6 has-text-weight-bold has-text-white is-uppercase general-sans has-text-weight-semibold is-flex is-flex-wrap-wrap is-align-content-center">
          {proposal.name}
        </p>
      </div>
      <a href="{url}{proposal.partido.id}">
        <figure class="image is-square candidate-img"
            style="background-image: url({CandidateImg(proposal)})"/>
      </a>
      <div class="candidate-content is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-3">
        <p class="candidate-party is-size-6 has-text-weight-bold has-text-black is-uppercase general-sans has-text-weight-semibold"	>
          {proposal.partido.alianzas[0].related_partido_id.name}
        </p>
        <p class="candidate-party is-size-7 has-text-weight-semibold has-text-black is-uppercase general-sans">
          {proposal.partido.name}
        </p>
      </div>
      <div class="candidate-footer">
        <a	href="{url}{proposal.partido.id}"
          class="button is-fullwidth is-black has-text-weight-semibold">VER PROPUESTAS</a	>
      </div>
    </div>
  </div>
  {/each}
{:else}
{#each ProposalCards as proposal}
<div class="column is-half-mobile is-one-quarter-tablet is-2-desktop has-text-centered">
  <a href="{url}{proposal.id}">
    <div class="party-container">
      <figure	class="image is-square party-logo"
          style="background-image: url({PartyImg(proposal)})" />
      <div class="name-partido has-background-black is-flex is-align-items-center is-justify-content-center has-text-white py-4">
        <p>{proposal.name}</p>
      </div>
    </div>
  </a>
</div>
  
{/each}
{/if}
  
{/if}

<style>

.party-container{
      background-color: #fff;
    border: 1px solid black;

    }
      .party-logo{
    /* height: 150px; */
    width: 100%;
    /* margin: 0 auto; */
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
	.candidate-img {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		border-bottom: 1px solid black;
		background-color: rgb(243, 243, 243);
	}
	.candidate-container {
		height: 100%;
		position: relative;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.candidate-container .header {
		padding: 8px 0;
		background-color: #000;
		flex: 1 1 0px;
	}
	.candidate-content {
		background-color: #fff;
		border-top: 0;
		height: 180px;
	}
	.candidate-name {
		line-height: normal;
	}
	.candidate-footer a {
		white-space: normal;
		height: fit-content;
	}
	.candidate-footer a {
		border-radius: 0;
	}
  
</style>
