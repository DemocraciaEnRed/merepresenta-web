<script context="module">
  import API, { handleResponse } from '$lib/apiHandler';
  import {getCandidates, getCandidatesByCargoAndDistrict} from '$lib/graph-ql/candidates';
  import { get4FirstRandomItems } from '$lib/common/utils';
  export async function load({fetch, page}){
    const res = await API(fetch, getCandidates(page.params.id));
    const propsResCandidate = await handleResponse(res, "candidate", "candidato_by_id")
   
    
    return propsResCandidate
 }
</script>
<script>
  import { page } from "$app/stores";
  
  import Dropdown from "$lib/common/Dropdown.svelte";
  import About from "./_about.svelte";
  import Party from "./_party.svelte";
  import { CandidateImg, cargosSlugs } from "$lib/common/utils";
	import CandidateCard from '$lib/common/candidate-card.svelte';
  
  export let candidate;
  let otherCandidates;
  let loading = true
  async function update() {
    loading = true
		const res = await API(fetch, getCandidatesByCargoAndDistrict({
      idExcept:candidate.id,
      cargo: candidate.cargo, 
      district:candidate.partido.district.id
    }))
		const response = await handleResponse(res, 'candidatos', 'candidato');
		otherCandidates = get4FirstRandomItems(response.props.candidatos);
		loading = false;
	}

	$: candidate, update()
  
  const partyUrl = `/propuestas/partidos/${$page.params.partido}`;

</script>
<div class="section py-5">
  <div class="container">
    <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        <li ><a class="has-text-black" href="/partidos-y-candidaturas">Partidos y Candidaturas</a></li>
        <li ><a class="has-text-black text-wrap-wrap" href="/propuestas/partidos/{candidate.partido.id}">{candidate.partido.name}</a></li>
        <li ><a class="has-text-black" href="/partidos-y-candidaturas/candidates/{$page.params.partido}">Candidaturas</a></li>
        <li class="is-active"><a href aria-current="page" class=" text-wrap-wrap">{candidate.name}</a></li>
      </ul>
    </nav>
  </div>
</div>
<div class="candidate-container">
    <div class="container">
      <div class="columns is-mobile is-multiline is-vcentered">
        <div class="column is-12-touch is-narrow-desktop candidate-logo-container">
          <img src={CandidateImg(candidate)} class="image mx-auto my-2 candidate-logo" alt="">
        </div>
        <div class="column is-12-touch is-normal-desktop has-text-centered-touch">
          <div class="has-background-black party-text-container is-inline-block animate__animated animate__backInRight">
            <h1 class="general-sans is-size-4 has-text-white px-5    is-uppercase" >{candidate.partido.name}</h1>
          </div>
          <div class="candidate-content">
            <h1 class="general-sans is-size-2 is-size-4-touch has-text-black has-text-weight-bold is-capitalized my-1 animate__animated animate__backInRight animate__delay-1s" >{candidate.name}</h1>
            <h1 class=" is-size-4 is-size-5-touch has-text-black my-1 animate__animated animate__backInRight animate__delay-2s" >Candidat{candidate.genre === 'm' ? 'o': 'a' } por la {candidate.position}° posición en el cargo de {cargosSlugs[candidate.cargo][candidate.genre]}<!--  por {ProvinciasSlugs.find(p => p.slug === $page.params.provincia) && ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name} --></h1>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="section tetris-background">

  <div class="container">
    <About {candidate} open={true}/>
    <br>
    <Party partido={candidate.partido} open={true}/>
    
  </div>
</div>

<div class="section tetris-background">
  <div class="container">
    <h1 class="subtitle is-3 is-size-5-touch has-text-centered has-text-black my-6" style="font-weight: 500!important;" >Conocé las demás candidaturas</h1>
    <div class="columns is-mobile is-multiline is-justify-content-center is-flex is-flex-wrap-wrap p-2">
      {#if !loading}
        {#each otherCandidates as candidate}
          <CandidateCard  showParty candidate={candidate}/>
        {/each}
      {:else}
        <div class="progres-wrapper">
          <progress class="progress is-large is-dark" max="100">60%</progress>

        </div>
      {/if}
    </div>
  </div>
</div>
{#if candidate.partido.ejes.length > 0}
  
<div class="hero is-black is-medium black-tetris-background">
  <div class="hero-body is-align-items-flex-start">
    <div class="container">
      <h1 class="has-text-centered title is-3 mb-6 animate__animated animate__flipInX">¿Querés conocer las propuestas del partido?</h1>
      <div class="buttons is-centered">
        <a href="/propuestas/partidos/{candidate.partido.id}" class="button is-white is-medium is-uppercase has-text-weight-semibold px-6 is-outlined">Ver partido</a>
      </div>
    </div>
  </div>
</div>
{/if}


<style>
  nav.breadcrumb .is-active{
    font-weight: 600;
  }
  .tetris-background{
    background-image: url('/white-background-desktop.png');
    background-size: auto;
    background-attachment: fixed;
  }
  .candidate-container{
    border:1px solid #000;
    border-left: 10px solid #000;
    border-right: 10px solid #000;
  }
  .candidate-logo{
    border-radius: 50%;
    width: 170px;
  }
  .black-tetris-background {
      background-image: url("/black-background-desktop.png");
      background-attachment: fixed;
      /* background-size: cover; */
      background-repeat: repeat;
    }
    .hero.black-tetris-background .hero-body{
      background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%); 
      /* background-attachment: fixed; */
    }
    .progres-wrapper{
      width: 50%;
    }
@media screen and (max-width: 1023px) {
     .candidate-logo{
      width: auto;
      max-height: 200px;
    }
    .candidate-container{
      border:1px solid #000;
      border-top: 0px solid #000;
      border-left: 0px solid #000;
      border-right: 0px solid #000;
    }
    .candidate-logo-container{
      border-top: 1px solid #000;
      padding-bottom: 0;
    }
    .candidate-content{
      border-top: 1px solid #000;
      /* border-left: 10px solid #000; */
      padding: 1rem;
    }
    .party-text-container {
      width: 100%;
    }
    .progres-wrapper{
      width: 90%;
    }
  }

</style>