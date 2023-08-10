<script context="module">
    import API, { handleResponse } from '$lib/apiHandler';
    import {  getCandidatesByCargo, getCandidatesByParty} from '$lib/graph-ql/candidates';
    import { getPartyById, getPartysByAlianza } from '$lib/graph-ql/partidos';
    export async function load({page, fetch}){
      
      const resOne = await API(fetch, getCandidatesByCargo('gobernador'));
      const resTwo = await API(fetch, getPartyById(page.params.partido));
      const propsOne = await handleResponse(resOne, "candidates", "candidato");
      const propsTwo = await handleResponse(resTwo, "partidos", "partido");
      const resThree = await API(fetch, getPartysByAlianza(page.params.partido))
      const propsThree = await handleResponse(resThree, "partidos", "partido")
      propsOne.props.partysListId = propsThree.props.partidos


      propsOne.props.candidates=propsOne.props.candidates.filter(candidate => 
        candidate.partido.alianzas.some(partido => partido.related_partido_id.id === propsTwo.props.partidos[0].id)
      );
      propsOne.props.partido = propsTwo.props.partidos[0]
      return await propsOne
    }
  </script>
  <script>
    import { onMount } from 'svelte';
    import { page } from "$app/stores";
    import {  PartyImg, ProvinciasSlugs } from '$lib/common/utils';
      import CandidateCard from '$lib/common/candidate-card.svelte';
      import CardParty from '$lib/common/card-party/card-party.svelte';
      import DropdownProposalAlianzas from '$lib/common/dropdown-proposal-alianzas.svelte';
      import PartyProposalCard from '$lib/common/card-party/party-proposal-card.svelte';
	import GobernorCandidateCard from '$lib/common/gobernor-candidate-card.svelte';
    // let Carousel; // for saving Carousel component class
    // let carouselRef; // for calling methods of carousel instance
    
    export let candidates
    export let partido;

    const partyUrl = `/propuestas/partidos/${$page.params.partido}`;
    
  
  </script>
  
  
  <div class="section py-5">
    <div class="container">
      <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li ><a href="/partidos-y-candidaturas" class="has-text-black">Partidos y candidaturas</a></li>
          <li><a href="/propuestas/partidos/{partido.id}" class="has-text-black text-wrap-wrap" aria-current="page">{partido.name}</a></li>
          <li class="is-active"><a href class="has-text-black" aria-current="page">Candidaturas</a></li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="party-container">
    <div class="container">
  
      <div class="columns my-0 is-vcentered party-info">
        <div class="column is-4 party-logo-wrapper">
          <img src={PartyImg(partido)} class="image mx-auto party-logo" alt="logo de {partido.name}">
        </div>
        <div class="column has-text-centered-touch">
          <div class="party-content p-4">
            <h1 class="general-sans is-size-3 is-size-4-touch has-text-black has-text-weight-bold is-uppercase mb-4" >Candidaturas de {partido.name}</h1>
            <!-- <h1 class=" is-size-4 is-size-5-touch has-text-black mb-4" >¿Querés leer todo sobre el partido?</h1> -->
            <!-- {#if partido.district.slug === 'nacion'}
            <div class="buttons is-centered is-hidden-desktop">
              <a href="/propuestas/partidos/{partido.id}"
          class="button is-uppercase has-text-weight-semibold is-black is-active px-4">ver partido</a> 
            </div>
            <div class="buttons is-right is-hidden-touch">
              <a href="/propuestas/partidos/{partido.id}"
          class="button is-uppercase has-text-weight-semibold is-black is-active">ver partido</a> 
            </div>
              
            {/if} -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section tetris-background">
    <section class="container p-2">
      <div class="has-text-centered has-text-black">
        <!-- <img src="{partido.district.slug === 'nacion' ? '/pink-house.png' : '/deputies-chamber.png'}" alt="{partido.district.slug === 'nacion' ? 'logo de Casa Rosada' : 'logo de Camara de Diputados'}" /> -->
        <h1 class="is-size-2 has-text-weight-medium has-text-black">Candidatura a jefe/a de gobierno por {ProvinciasSlugs.find(p => p.slug === partido.district.slug).name}</h1>
        <!-- <h3 class="is-size-4 has-text-weight-light">
          Explorá los programas electorales de las precandidaturas del partido de tu interés.
        </h3> -->
      </div>
    </section>
    <div class="container mt-6">
      <div class="columns is-mobile is-multiline is-justify-content-center is-flex is-flex-wrap-wrap p-2">
        {#each candidates as candidate}
        <GobernorCandidateCard {candidate} size="is-3-desktop is-7-tablet is-11-mobile"/>
        {/each}
      </div>
    </div>
  
  
  </div>
 
  <style>
    nav.breadcrumb .is-active{
      font-weight: 600;
    }
    .tetris-background{
      background-image: url('/white-background-desktop.png');
      background-size: auto;
      background-attachment: fixed;
    }
    .party-container{
      border:1px solid #000;
      border-left: 10px solid #000;
      border-right: 10px solid #000;
    }
    .party-logo{
      width: 300px;
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
        max-height: 200px;
        
        
      }
      .party-logo-wrapper{
        border-left: 10px solid #000;
  
  
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
        border-top: 1px solid #000;
        border-left: 0px solid #000;
        border-right: 10px solid #000;
      }
      .party-content{
        border-left: 10px solid #000;
  
      }
    }
  
    h1{
      font-weight: 400;
    }
  </style>