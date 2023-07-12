<script context="module">
  import API, { handleResponse } from '$lib/apiHandler';
  import {getCandidates, getCandidatesByCargo} from '$lib/graph-ql/candidates';
  export async function load({fetch, page}){
    const res = await API(fetch, getCandidates(page.params.id));
    const propsResCandidate = await handleResponse(res, "candidate", "candidato_by_id")
    const res2 = await API(fetch, getCandidatesByCargo({
      cargo: propsResCandidate.props.candidate.cargo, 
      district:propsResCandidate.props.candidate.partido.district.id
    }))
    const otherCandidates = await handleResponse(res2, "candidates", "candidato");
    propsResCandidate.props.otherCandidates = getRandomItems(otherCandidates.props.candidates)
    return propsResCandidate
 }
</script>
<script>
  import { page } from "$app/stores";
  
  import Dropdown from "$lib/common/Dropdown.svelte";
  import About from "./_about.svelte";
  import Party from "./_party.svelte";
  import Ideology from "./_ideology.svelte";
  import Timeline from './_timeline.svelte';
  import Twitter from "./_twitter.svelte";
  import Corporate from './_corporate.svelte';
  import { CandidateImg, directusImg, ProvinciasSlugs } from "$lib/common/utils";
	import CandidateCard from '$lib/common/candidate-card.svelte';
	import { getRandomItems } from '$lib/common/utils';
	import SelectDistrict from '$lib/common/SelectDistrict.svelte';
	import SelectParty from '$lib/common/selectParty.svelte';
	import SelectCandidate from "$lib/common/selectCandidate.svelte";
  
  export let candidate;
  export let otherCandidates;
  const partyUrl = `/partidos-y-candidates/${$page.params.provincia}/partidos/${$page.params.partido}`;

</script>
<div class="section py-5">
  <div class="container">
    <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        <li ><a class="has-text-black" href="/partidos-y-candidates/donde-votas">Partidos y candidatxs</a></li>
        <li ><a class="has-text-black" href="/partidos-y-candidates/{$page.params.provincia}">{ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name}</a></li>
        <li ><a class="has-text-black" href="/partidos-y-candidates/{$page.params.provincia}/partidos/{candidate.partido.id}">{candidate.partido.name}</a></li>
        <li ><a class="has-text-black" href="/partidos-y-candidates/{$page.params.provincia}/candidates/{$page.params.partido}">Candidatxs</a></li>
        <li class="is-active"><a href aria-current="page">{candidate.name}</a></li>
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
            <h1 class=" is-size-4 is-size-5-touch has-text-black my-1 animate__animated animate__backInRight animate__delay-2s" >Candidat{candidate.genre === 'm' ? 'o': 'a' } por la {candidate.position}° posición en el cargo de {candidate.cargo.toLowerCase()} por {ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="section tetris-background">
  <div class="is-flex is-justify-content-center is-flex-wrap-wrap select-section mb-6">
    <SelectDistrict/>
    <SelectParty />
    <SelectCandidate />
  </div>
  <div class="container">
    <About {candidate} open={true}/>
    <br>
    <Party partido={candidate.partido} open={true}/>
    
  </div>
</div>

<div class="section tetris-background">
  <div class="container">
    <h1 class="subtitle is-3 is-size-5-touch has-text-centered has-text-black my-6" style="font-weight: 500!important;" >Conoce a los demás candidatos</h1>
    <div class="columns is-mobile is-multiline is-justify-content-center is-flex is-flex-wrap-wrap p-2">
      {#each otherCandidates as candidate}
      <CandidateCard candidatePage candidate={candidate}/>
    {/each}
    </div>
  </div>
</div>

<div class="hero is-black is-medium black-tetris-background">
  <div class="hero-body is-align-items-flex-start">
    <div class="container">
      <h1 class="has-text-centered title is-3 mb-6 animate__animated animate__flipInX">¿Querés conocer las propuestas del partido?</h1>
      <div class="buttons is-centered">
        <a href="/partidos-y-candidates/{$page.params.provincia}/partidos/{candidate.partido.id}" class="button is-white is-medium is-uppercase has-text-weight-semibold px-6 is-outlined">Ver partido</a>
      </div>
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
  }

</style>