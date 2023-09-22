<script>
	import API, { handleResponse } from '$lib/apiHandler';
	import { getPartyById } from '$lib/graph-ql/partidos';
	import { PartyImg } from './utils';

	export let partySelected;
</script>

{#if partySelected}
<div class="party-container">
    <div class="container">
  
      <div class="columns is-vcentered party-info">
        <div class="column is-3 party-logo-wrapper">
          <img src={PartyImg(partySelected)} class="image mx-auto party-logo" alt="logo de {partySelected.name}">
        </div>
        <div class="column">
          <div class="party-content p-4">
            <h1 class="general-sans is-size-4 is-size-5-touch has-text-black has-text-weight-bold is-uppercase mb-4" >Candidaturas de {partySelected.name}</h1>
            <h1 class=" is-size-6 is-size-7-touch has-text-black has-text-weight-light mb-4" >{partySelected.summary}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
    
{/if}

<style>


  .party-container{
    background-color: #fff;
    border:1px solid #000;
    border-left: 10px solid #000;
    border-right: 10px solid #000;
  }
  .party-logo{
    max-height: 7rem;
  }
  
  .party-info{
   width: 100%;
  }
  .party-content  h1{
    line-height: normal;
  }
  @media screen and (max-width: 1023px) {
    .party-logo{
      width: auto;
      max-height: 6rem;
      
      
    }
    .party-info{
    width: 100%;
    margin: 0;
    }
    .party-info :last-child{
      padding: 0;
    }
    .party-container{
      width: 100%;
      border:1px solid #000;
      border-left: 10px solid #000;
      border-right: 10px solid #000;
    }

  }

  h1{
    font-weight: 400;
  }
</style>