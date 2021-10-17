<script context="module">
  import API, { handleResponse } from '$lib/apiHandler';
  import {getCandidates} from '$lib/graph-ql/candidates';
  export async function load({fetch, page}){
    const res = await API(fetch, getCandidates(page.params.id));
    return await handleResponse(res, "candidate", "candidato_by_id")
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
  
  export let candidate;
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
          <img src={CandidateImg(candidate)} class="image mx-auto candidate-logo" alt="">
        </div>
        <div class="column is-12-touch is-normal-desktop has-text-centered-touch">
          <div class="has-background-black party-text-container is-inline-block animate__animated animate__backInRight">
            <h1 class="general-sans is-size-4 has-text-white px-5 has-text-weight-bold is-uppercase" >{candidate.partido.name}</h1>
          </div>
          <div class="candidate-content">
            <h1 class="general-sans is-size-2 is-size-4-touch has-text-black has-text-weight-bold is-uppercase my-1 animate__animated animate__backInRight animate__delay-1s" >{candidate.name}</h1>
            <h1 class=" is-size-4 is-size-5-touch has-text-black my-1 animate__animated animate__backInRight animate__delay-2s" >Candidat{candidate.genre === 'm' ? 'o': 'a' } por la {candidate.position}° posición en el cargo de {candidate.cargo.toLowerCase()} por {ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
<div class="section tetris-background">
  <div class="container">
    <About {candidate} open={false}/>
    <br>
    <Party partido={candidate.partido} open={true}/>
    <br>
    <Twitter candidate={candidate} open={false}/>
    <br>
    <Corporate candidate={candidate} open={false}/>

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
    width: 300px;
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