<script context="module">
  import API, { handleResponse } from '$lib/apiHandler';
  import { getCandidatesByParty } from '$lib/graph-ql/candidates';
  import { getPartyById } from '$lib/graph-ql/partidos';
  export async function load({page, fetch}){
    const resOne = await API(fetch, getCandidatesByParty(page.params.partido));
    const resTwo = await API(fetch, getPartyById(page.params.partido));
    const propsOne = await handleResponse(resOne, "candidates", "candidato");
    const propsTwo = await handleResponse(resTwo, "partidos", "partido");
    propsOne.props.partido = propsTwo.props.partidos[0]
    return await propsOne
  }
</script>
<script>
  import { onMount } from 'svelte';
  import { page } from "$app/stores";
  import { CandidateImg, directusImg, ProvinciasSlugs, PartyImg } from '$lib/common/utils';
  // let Carousel; // for saving Carousel component class
  // let carouselRef; // for calling methods of carousel instance
  
  export let candidates
  export let partido;

  const partyUrl = `/partidos-y-candidates/${$page.params.provincia}/partidos/${$page.params.partido}`;
  
  //Initialize carousel
  // onMount(async () => {
  //   // const module = await import('svelte-carousel');
  //   // Carousel = module.default;
  // });
</script>
<svelte:head>
	<!-- <title>Home</title> -->
</svelte:head>
<div class="section py-5">
  <div class="container">
    <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        <li ><a href="/partidos-y-candidates/donde-votas" class="has-text-black">Partidos y candidatxs</a></li>
        <li ><a href="/partidos-y-candidates/{$page.params.provincia}" class="has-text-black">{ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name}</a></li>
        <li><a href="/partidos-y-candidates/{$page.params.provincia}/partidos/{partido.id}" class="has-text-black" aria-current="page">{partido.name}</a></li>
        <li class="is-active"><a href class="has-text-black" aria-current="page">Candidatxs</a></li>
      </ul>
    </nav>
  </div>
</div>
<div class="party-container">
  <div class="container">

    <div class="columns is-vcentered">
      <div class="column is-4">
        <img src={PartyImg(partido)} class="image mx-auto party-logo" alt="">
      </div>
      <div class="column has-text-centered-touch">
        <div class="party-content p-4">
          <h1 class="general-sans is-size-3 is-size-4-touch has-text-black has-text-weight-bold is-uppercase mb-4" >Candidatxs de {partido.name}</h1>
          <h1 class=" is-size-4 is-size-5-touch has-text-black mb-4" >¿Querés leer todo sobre el partido?</h1>
          <div class="buttons is-centered is-hidden-desktop">
            <a href="/partidos-y-candidates/{$page.params.provincia}/partidos/{partido.id}"
        class="button is-uppercase has-text-weight-semibold is-black is-active">ver partido</a> 
          </div>
          <div class="buttons is-right is-hidden-touch">
            <a href="/partidos-y-candidates/{$page.params.provincia}/partidos/{partido.id}"
        class="button is-uppercase has-text-weight-semibold is-black is-active">ver partido</a> 
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="section tetris-background">
  <div class="container">
    <h1 class="subtitle is-3 is-size-5-touch has-text-centered has-text-black my-6" style="font-weight: 500!important;" >Se postulan</h1>
    <div class="columns is-mobile is-multiline is-justify-content-center is-flex is-flex-wrap-wrap p-2">
      {#each candidates as candidate}
      <div class="column is-half-mobile is-one-third-tablet is-3-desktop is-2-widescreen has-text-centered">
        <div class="candidate-container">
          <div class="candidate-position">
            <span class="is-size-5 general-sans has-text-black has-text-weight-bold">{candidate.position}°</span>
          </div>
          <a href="{$page.path}/candidate/{candidate.id}">
            <figure class="image is-square candidate-img" 
            style="background-image: url({CandidateImg(candidate)})">
          </figure>
        </a>
        <div class="candidate-content is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center p-3">
          <p class="candidate-name is-size-6 has-text-weight-bold has-text-black is-uppercase general-sans has-text-weight-semibold">{candidate.name}</p>
          <p class="has-text-black is-size-7">Candidat{candidate.genre === 'm' ? 'o': 'a' } a <br>
            <span class="general-sans is-size-6 has-text-weight-semibold">{candidate.cargo}</span></p>
            <a href="{$page.path}/candidate/{candidate.id}" class="button is-outlined is-fullwidth is-active has-text-black has-text-weight-semibold">VER MÁS</a>
          </div>
        </div>
        
      </div>
    {/each}
    </div>
  </div>
</div>
<!-- <main class="white-background-desktop p-2 has-background-white has-text-centered ">
  <h1 class="title is-4 is-uppercase mt-4">
    Candidaturas de <br>{candidates[0].partido.name}
  </h1>
  <a
    href="{partyUrl}"
    class="button is-uppercase is-black">
    Ver partido
  </a>
  <p class="my-4">Se postulan:</p>

  <section class=" my-6 mx-auto container columns is-mobile is-3 is-flex-wrap-wrap">
    {#each candidates as candidate}
      <div class="column is-half-mobile has-background-white is-one-third-tablet is-one-quarter-desktop has-text-centered">
        <div class="candidate">
          <figure class="image is-square">
            <div 
            style="background-image: url({CandidateImg(candidate)})"
            class="candidate-img tablet mb-3" alt="Foto retrato de {candidate.name}"/>
          </figure>
        <h1 class="title is-3 has-text-weight-bold is-size-4-touch has-text-black">{candidate.name}</h1>
        <p class="has-text-black">Candidat{candidate.genre === 'm' ? 'o': 'a' } a <br>
        {candidate.cargo}</p>
        <p class="has-text-black">Posición en la lista: {candidate.position}</p>
        <a href="{$page.path}/candidate/{candidate.id}" class="button is-outlined is-active my-4">VER MÁS</a>
        </div>
        
      </div>
    {/each}
  </section>
</main> -->
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
  .party-content  h1{
    line-height: normal;
  }
  @media screen and (max-width: 1023px) {
    .party-logo{
      width: auto;
      max-height: 200px;
    }
    .party-container{
      border:1px solid #000;
      border-top: 0px solid #000;
      border-left: 0px solid #000;
      border-right: 0px solid #000;
    }
    .party-content{
      border-top: 1px solid #000;
      border-left: 10px solid #000;
    }
  }
  .candidate-img{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border: 1px solid black;
    border-bottom: 0;
    background-color: rgb(243, 243, 243);
  }
  .candidate-container{ 
    position: relative;
  }
  .candidate-position{
    position:absolute;
    top: 1px;
    left: 1px;
    z-index: 10;
    background-color: #FFF;
    padding: 5px 10px;
    border-bottom-right-radius: 5px;;
    border-right:1px solid black;
    border-bottom:1px solid black;
  }
  .candidate-content{
    border: 1px solid black;
    background-color: #FFF;
    border-top: 0;
    height: 220px;
  }
  .candidate-name{
    line-height: normal;
  }
  h1{
    font-weight: 400;
  }
</style>