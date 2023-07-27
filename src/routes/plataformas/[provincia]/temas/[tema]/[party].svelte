<script context="module">
  import { page } from '$app/stores';
  import { directusImg, ProvinciasSlugs } from "$lib/common/utils";
  import {getThemeProposalsByPartyId} from '$lib/graph-ql/partidos.js';
  import API, { handleResponse } from '$lib/apiHandler';
  export async function load({page, fetch}){
    const {party, tema} = page.params;
    const res = await API(fetch ,getThemeProposalsByPartyId(tema, party))
    return await handleResponse(res, "party", "partido");
  }
</script>
<script>
  import HeaderPP from './_header.svelte';
  export let party
  let partido = party[0];
  let tema = partido.ejes[0].ejes_id;
</script>
<div class="section py-5">
  <div class="container">
    <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        <li ><a href="/plataformas/donde-votas" class="has-text-black">Propuestas</a></li>
        <li ><a href="/plataformas/temas" class="has-text-black">Por temas</a></li>
        <li ><a href="/plataformas/temas/{tema.slug}" style="color:{tema.color}" aria-current="page">{tema.name}</a></li>
        <li class="is-active"><a href class="has-text-black" aria-current="page">{partido.name}</a></li>
      </ul>
    </nav>
  </div>
</div>
<div class="topic-container">
  <div class="container">
    <div class="columns is-mobile is-multiline is-vcentered">
      <div class="column is-4-desktop is-full-touch">
        <div class="p-5" style="background-color: {tema.color}">
          <p class="has-text-black has-text-centered mb-5 is-size-3 is-size-4-touch has-text-weight-medium is-uppercase">{tema.name}</p>
          <img src="{directusImg}{tema.icon_file.id}" class="image mx-auto topic-logo animate__animated animate__bounceIn" alt/>
        </div>
      </div>
      <div class="column has-text-centered-touch">
        <div class="topic-content p-4">
          <h1 class="m-0 is-size-3 is-size-5-touch has-text-black has-text-weight-medium is-uppercase" > Propuestas de <span style="color:{tema.color}">{tema.name}</span> de {partido.name}</h1>
          <div class="mb-3 header-propuestas-resumen general-sans">
            <p class="has-text-black mt-3">{partido.ejes[0].summary}</p>
          </div>
          <a href="{partido.url_fuente}" target="_blank" class="is-uppercase has-text-black has-text-weight-semibold"><u>fuente oficial</u></a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="section tetris-background">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-8">

        <div class="box is-radiusless">
          {#each partido.ejes[0].propuestas as propuesta, i}
          <div class="general-sans my-4">
            <h1 class="is-size-6 has-text-weight-semibold has-text-black ">Propuesta #{i+1}</h1>
            <p class="ml-5 mt-3">{propuesta.summary}</p>
          </div>
          {/each}
        </div>
        {#if partido.ejes[0].ejes_id.resources.length >0}
        <div class="box is-radiusless">
            <p class="has-text-centered has-text-black">
                Si te interesa el tema de <span class="has-text-weight-medium" style="color: {tema.color}">{tema.name}</span>
                te invitamos a que visites las siguientes páginas
            </p>
            <p class="buttons is-centered mt-5">
              {#each partido.ejes[0].ejes_id.resources as related}
              <a href={related.url} target="_blank" class="button is-black has-text-weight-medium is-uppercase is-outlined px-4">{related.url_label}</a>   
              {/each}
            </p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
<div class="hero is-black is-medium black-tetris-background">
  <div class="hero-body is-align-items-flex-start">
    <div class="container">
      <h1 class="has-text-centered title is-3 mb-6 animate__animated animate__flipInX">Conocé el resto de los partidos en {ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name} y sus propuestas</h1>
      <div class="buttons is-centered">
        <a href="/plataformas/partidos" class="button is-white is-medium is-uppercase has-text-weight-semibold px-6 is-outlined">Ver propuestas</a>
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
  .topic-container{
    border:1px solid #000;
    border-left: 10px solid #000;
    border-right: 10px solid #000;
  }
  .topic-logo{
    width: 200px;
  }
  .header-propuestas-resumen{
    white-space: pre-wrap;
  }
  .box{
    border: 1px solid black;
  }
@media screen and (max-width: 1023px) {
    .topic-logo{
      width: auto;
      max-height: 200px;
    }
    .topic-container{
      border:1px solid #000;
      border-top: 0px solid #000;
      border-left: 0px solid #000;
      border-right: 0px solid #000;
    }
    .topic-content{
      border-top: 1px solid #000;
      border-left: 10px solid #000;
    }
  }
</style>