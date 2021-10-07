<script context="module">
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
          Leé las distintas propuestas sobre 
          <strong style="color: {tema.color};text-transform: capitalize">{tema.name}</strong> 
          de cada partido según tu distrito
        </p>
        <p class="mt-2">
          <em class="mt-6">Si querés saber sobre el estado actual de {tema.name.toLowerCase()} en la Argentina descargá nuestra hoja de diagnóstico </em>
        </p>
        <p class="has-text-centered mt-4">
          <a href={tema.sheet_url} target="_blank" class="download-sheet">
            <img src="/download.png" alt="icono de descarga">
            descargar hoja de diagnóstico
          </a>
        </p>
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