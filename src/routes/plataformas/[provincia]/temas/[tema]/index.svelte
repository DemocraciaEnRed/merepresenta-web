<script context="module">
  import { page } from '$app/stores';
  import { directusImg, ProvinciasSlugs, PartyImg } from "$lib/common/utils";
  import API, { handleResponse } from '$lib/apiHandler';
  import {getThemeProposalsByParty} from '$lib/graph-ql/partidos.js';
  export async function load({page}){
    const { tema, provincia } = page.params;
    const res = await API(fetch, getThemeProposalsByParty(tema, provincia))
    const response = await res.json();
    if(res.ok){
      return{
        props:{
          partidos: response.data.partido,
          tema: response.data.ejes[0]
        }
      }
    }
    return{
      status : res.status
    }
  }
</script>
<script>
  import ProposalsByParty from './_party-pp.svelte'
  import HeaderPP from './_header.svelte';
  import SelectDistrict from '$lib/common/SelectDistrict.svelte';
  export let partidos;
  export let tema;
</script>
<div class="section py-5">
  <div class="container">
    <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        <li ><a href="/plataformas/donde-votas" class="has-text-black">Propuestas</a></li>
        <li ><a href="/plataformas/{$page.params.provincia}" class="has-text-black">{ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name}</a></li>
        <li ><a href="/plataformas/{$page.params.provincia}/temas" class="has-text-black">Por temas</a></li>
        <li class="is-active"><a href style="color:{tema.color}" aria-current="page">{tema.name}</a></li>
      </ul>
    </nav>
  </div>
</div>
<div class="topic-container">
  <div class="container">

    <div class="columns is-vcentered">
      <div class="column is-4">
        <div class="p-5" style="background-color: {tema.color}">
          <img src="{directusImg}{tema.icon_file.id}" class="image mx-auto topic-logo animate__animated animate__bounceIn" alt/>
        </div>
      </div>
      <div class="column has-text-centered-touch">
        <div class="topic-content p-4">
          <div class="is-inline-block px-5 mb-3" style="background-color: {tema.color}">
            <h1 class="general-sans m-0 is-size-2 is-size-4-touch has-text-black has-text-weight-bold is-uppercase" > Propuestas de {tema.name}</h1>
          </div>
          <h1 class="general-sans is-size-3 is-size-5-touch has-text-black" >Leé las distintas propuestas sobre <span class="has-text-weight-bold" style="color: {tema.color}">{tema.name}</span> de cada partido según tu distrito </h1>

        </div>
      </div>
    </div>
  </div>
</div>
<div class="section tetris-background">
  <div class="container">
    <div class="is-flex is-flex-direction-row is-align-items-center is-justify-content-space-between pt-3 px-3">
      <a href="/partidos-y-candidates/donde-votas" class="button is-black is-outlined is-small has-text-black has-text-weight-medium is-uppercase is-pulled-left"><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Cambiar provincia</a>
      <p class="general-sans has-background-black has-text-weight-semibold is-uppercase is-pulled-right is-size-4 is-size-6-touch has-text-white px-5 py-1 has-text-right">{ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name}</p>
    </div>
    <div class="columns is-centered is-multiline is-mobile mt-6">

      {#each partidos as partido}
      <div class="column is-full-mobile is-half-tablet is-3-desktop has-text-centered">
        <a href="/partidos-y-candidates/{$page.params.provincia}/partidos/{partido.id}">
          <figure class="image is-2by1 has-background-white party-logo" style="background-image: url({PartyImg(partido)})"></figure>
          <div class="name-partido has-background-black is-flex is-align-items-center is-justify-content-center has-text-white py-4">
            <p>{partido.name}</p>
          </div>
        </a>
        <div class="propuestas-container is-flex is-flex-direction-column is-justify-content-space-between">
          <div class="propuestas-text is-flex-grow-1 is-flex is-flex-direction-column is-justify-content-center general-sans {partido.ejes[0]?.propuestas ? 'has-propuestas' : null}">

            {#if partido.ejes[0]?.propuestas}
            <p>{partido.ejes[0].summary}</p>
            {:else}
            No se encontraron propuestas sobre este tema en las fuentes consultadas
            {/if}
          </div>
          {#if partido.ejes[0]?.propuestas}
          <div class="buttons is-centered">
            <a href="{$page.path}/{partido.id}" class="button is-black has-text-weight-medium is-uppercase is-fullwidth">Leer propuestas</a>
          </div>
          {/if}
        </div>
      </div>
      {/each}
    </div>
  </div>
</div>
<main class="white-background-desktop">
  <section class="container ">
    <nav class="breadcrumb is-small pl-2 my-2" aria-label="breadcrumbs">
      <ul>
        <li ><a href="/plataformas/donde-votas">Plataformas</a></li>
        <li ><a href="/plataformas/temas">Temas</a></li>
        <li class="is-active"><a href aria-current="page" style="color:{tema.color}">{tema.name}</a></li>
      </ul>
    </nav>
    <div class="has-text-right my-2">
      <SelectDistrict/>
    </div>
    <div class="columns header-container mt-6 is-tablet">
       <HeaderPP {tema}/>
      <div class="info column  is-three-quarters-tablet p-4 general-sans">
        <p class="has-text-weight-medium is-size-5">
          Consultá las distintas propuestas sobre
          <strong style="color: {tema.color};text-transform: capitalize">{tema.name}</strong> 
          de cada partido según tu distrito.
        </p>
        {#if tema.slug==='economia'|| tema.slug==='ambiente'|| tema.slug==='genero' || tema.slug==='justicia' || tema.slug==='vivienda' || tema.slug==='institucionalidad'}
          <!-- <p class="mt-2">
            <em class="mt-6">Si querés saber sobre el estado actual de {tema.name.toLowerCase()} en la Argentina descargá nuestra hoja de diagnóstico </em>
          </p> -->
          <p class="has-text-centered mt-4">
            <a href={tema.sheet_url} target="_blank" class="download-sheet">
              <img src="/download.png" alt="icono de descarga">
              Descargá nuestra hoja de diagnóstico
            </a>
          </p>
          {/if}
      </div>
    </div>
   
    <div class="py-4 is-flex-tablet is-flex-wrap-wrap columns">
      {#each partidos as partido}
        <ProposalsByParty {tema} {partido}/>
      {/each}
    </div>
    
  </section>
</main>

<style>
  nav.breadcrumb .is-active{
    font-weight: 600;
  }
  .tetris-background{
    background-image: url('/white-background-desktop.png');
    background-size: auto;
    background-attachment: fixed;
  }
  .topic-container{
    border:1px solid #000;
    border-left: 10px solid #000;
    border-right: 10px solid #000;
  }
  .topic-logo{
    width: 200px;
  }
  .party-logo{
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: 1px solid black;
    border-bottom: 0;
  }
  .name-partido{
    text-transform: uppercase;
    padding: 2px 10px;
    height: 100px;
    line-height: normal;
    font-weight: 500;
  }
  .propuestas-container{
    background-color: #FFF;
    border: 1px solid #000;
    padding: 10px;
    min-height: 300px;
    color: black;
  }
  .propuestas-text.has-propuestas{
    line-height: 2;
    font-size: 0.9rem;
    white-space: pre-wrap;
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
    .propuestas-container{
      min-height: 100px;
    }
    .propuestas-text{
      margin-bottom: 10px;
    }
  }
  .header-container{
    border-top:1px solid
  }
  .info{
    border-left: 4px solid black;
    border-right: 4px solid black;
    border-bottom: 1px solid black;
  }
  .download-sheet{
    font-weight: bold;
    text-decoration: underline;
    text-transform: uppercase;
    color: black;
  }
</style>