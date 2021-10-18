<script context="module">
  import { getPartyById } from '$lib/graph-ql/partidos.js';
  import API, { handleResponse } from '$lib/apiHandler';
  export async function load ({fetch ,page}){
    const res = await API(fetch, getPartyById(page.params.partido))
    return await handleResponse(res, "partidos", "partido");
  }
</script>
<script>
  import { page } from '$app/stores';
  import Icon from '$lib/common/Icon.svelte';
  import { directusImg, PartyImg, ProvinciasSlugs, Color, Solver, hexToRgb } from '$lib/common/utils';
  import { onMount,beforeUpdate, afterUpdate } from 'svelte';
  import Proposal from './_proposal.svelte';
  export let partidos;
  let partido = partidos[0]
  let svgLoad;
  let ejesColours = {}
  if(partido.ejes.length > 0){
    partido.ejes.forEach(eje => {
      const rgb = hexToRgb(eje.ejes_id.color);
      const color = new Color(rgb.r, rgb.g, rgb.b);
      const solver = new Solver(color);
      const result = solver.solve();
        ejesColours[eje.ejes_id.slug] = result
    });
  }
  // this is for svg loading, necesary to paint them from here
  onMount(() => {
    svgLoad = true
  })
  afterUpdate(() => {
    svgLoad = true
  })
  
</script>
<svelte:head>
	<script src="https://unpkg.com/external-svg-loader@1.3.1/svg-loader.min.js"></script>
</svelte:head>
<div class="section py-5">
  <div class="container">
    <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        <li ><a href="/partidos-y-candidates/donde-votas" class="has-text-black">Partidos y candidatxs</a></li>
        <li ><a href="/partidos-y-candidates/{$page.params.provincia}" class="has-text-black">{ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name}</a></li>
        <li class="is-active"><a href class="has-text-black" aria-current="page">{partido.name}</a></li>
      </ul>
    </nav>
  </div>
</div>
<div class="party-container">
  <div class="container">
    
    <div class="columns is-mobile is-multiline is-vcentered">
      <div class="column is-12-touch is-narrow-desktop party-logo-container">
        <img src={PartyImg(partido)} class="image mx-auto party-logo" alt="">
      </div>
      <div class="column is-12-touch is-normal-desktop has-text-centered-touch">
        <div class="party-content p-4">

          <h1 class="general-sans is-size-2 is-size-4-touch has-text-black has-text-weight-bold is-uppercase mb-4" >{partido.name}</h1>
          <div class="content">
            <p>{partido.summary || 'No hay descripcion de este partido'}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="section tetris-background">
  <div class="container">
    {#if partido.ejes.length}
    <h1 class="subtitle is-3 is-size-5-touch has-text-centered has-text-black my-6" style="font-weight: 500!important;" >Les interesa</h1>
    <div class="columns is-mobile is-justify-content-center is-flex is-flex-wrap-wrap p-2">
      {#each partido.ejes as proposal}
      <div class="column is-flex-grow-0 has-text-centered">
        <div class="svg-container ">
          {#if svgLoad}
          <a href="#partido-{proposal.ejes_id.slug}">
            <svg 
            width="75"
            height="75"
            style="{ejesColours[proposal.ejes_id.slug].filter}"
            title="propuestas de {proposal.ejes_id.slug}"
            data-src="{directusImg}{proposal.ejes_id.icon_file.id}">
            </svg>
          </a>
          {/if}  
        </div>
      </div>
    {/each}
    </div>
    <h1 class="subtitle is-3 is-size-5-touch has-text-centered has-text-black my-6" style="font-weight: 500!important;" >¿Qué proponen?</h1>
    <!-- <div class="box has-background-black my-6 py-6">
      <h1 class="subtitle is-4 is-size-5-touch has-text-centered has-text-white" style="font-weight: 500!important;" >¿Querés saber cómo votó cada partido en las últimas leyes?</h1>
      <div class="buttons is-centered">
        <a href="/como-votaron" class="button is-white is-medium is-uppercase is-outlined has-text-weight-semibold animate__animated animate__pulse animate__slow animate__infinite">Ver votaciones</a>
      </div>
    </div> -->
    <!-- <div class="is-flex is-flex-direction-row is-align-items-center is-justify-content-space-between pt-3 px-3">
      <a href="/partidos-y-candidates/donde-votas" class="button is-black is-outlined is-small has-text-black has-text-weight-medium is-uppercase is-pulled-left"><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Cambiar provincia</a>
      <p class="general-sans has-background-black has-text-weight-semibold is-uppercase is-pulled-right is-size-4 is-size-6-touch has-text-white px-5 py-1 has-text-right">{ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name}</p>
    </div> -->
    <div class="columns is-multiline is-mobile my-6">
      {#each partido.ejes as proposal}
      <Proposal {proposal} partido={partido}/>
      {/each}
    </div>
    {:else}
    <h1 class="subtitle is-3 is-size-5-touch has-text-centered has-text-black my-6" style="font-weight: 500!important;" >¿Qué proponen?</h1>
    <h1 class="subtitle is-6 is-size-6-touch has-text-centered has-text-black my-6" style="font-weight: 400!important;">No hay propuestas cargadas</h1>
    <br>
    {/if}
    {#if partido.url_fuente}
    <div class="columns is-centered">
      <div class="column is-8">
        <h1 class="subtitle is-4 is-size-5-touch has-text-centered has-text-black my-5" style="font-weight: 500!important;">Podés acceder a la información oficial ingresando a la plataforma oficial de {partido.name}.</h1>
        <div class="buttons is-centered mb-6">
          <a href="{partido.url_fuente}" target="_blank"
          class="button is-uppercase has-text-weight-semibold is-black is-active is-medium">Ir a la plataforma oficial</a> 
        </div>
      </div>
    </div>
    {/if}
    <div class="columns is-centered">
      <div class="column is-8">
        <h1 class="subtitle is-3 is-size-5-touch has-text-centered has-text-black my-5" style="font-weight: 500!important;">¿Querés conocer a sus candidatxs?</h1>
        <div class="buttons is-centered mb-6">
          <a href="/partidos-y-candidates/{$page.params.provincia}/candidates/{partido.id}"
          class="button is-uppercase has-text-weight-semibold is-black is-outlined is-active is-medium">ver candidatxs</a> 
        </div>
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
  .party-container{
    border:1px solid #000;
    border-left: 10px solid #000;
    border-right: 10px solid #000;
  }
  .party-logo{
    width: 300px;
  }
  /* .partido-img{
    height: 200px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .description{
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-left: 4px solid black;
    border-right: 2px solid black;
    
  }
  svg{
    width: 25px;
    height: 25px;
    background-color: black;
  } */
  /*
  .social-networks{
    display: flex;
    justify-content: center;
  }
  .social-networks a{
    color: black
  }
  */
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
    .party-logo-container{
      border-top: 1px solid #000;
      padding-bottom: 0;
    }
  }
  .svg-container{

    padding: 10px 30px;
    background-color: #000;
  }
  /* .svg-container:hover{
    background-color: #000000;
  } */
  .svg-container svg{
    width: 75px;
    height: 75px;
    /* background-color: black; */
  }

</style>