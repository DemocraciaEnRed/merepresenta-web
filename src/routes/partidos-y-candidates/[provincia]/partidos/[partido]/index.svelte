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
  import { directusImg, PoliciesIcons } from '$lib/common/utils';
  import { onMount } from 'svelte';
  import Proposal from './_proposal.svelte';
  export let partidos;
  let partido = partidos[0]
  let svgLoad;
  
  //this is for svg loading, necesary to paint them from here
  onMount(()=>{
    svgLoad = true
  })
  
</script>
<svelte:head>
	<script src="https://unpkg.com/external-svg-loader@1.3.1/svg-loader.min.js"></script>
</svelte:head>

<main>
  <nav class="breadcrumb is-small pl-2 mt-2" aria-label="breadcrumbs">
    <ul>
      <li ><a href="/partidos-y-candidates/donde-votas">partidos y candidates</a></li>
      <li ><a href="/partidos-y-candidates/{$page.params.provincia}">{$page.params.provincia}</a></li>
      <li class="is-active"><a href aria-current="page">{partido.name}</a></li>
    </ul>
  </nav>
  <section>
    <div class="partido-img mt-4" style="background-image: url({directusImg}{partido.logo.id})">
      <span hidden>{partido.name}</span>
    </div>
    
    <p class="description p-4 mt-4">
      {partido.summary}
    </p>
    
    <div class="container p-4">
      <h2 class="has-text-left title is-5 has-text-black">Les interesa</h2>
      <div class="columns is-mobile p-2">
        {#each partido.ejes as proposal}
          <div class="column has-text-centered">
            <div class="px-6 py-2 has-background-black">
              {#if svgLoad}
                <svg 
                  width="50"
                  height="50"
                  style="fill:{proposal.ejes_id.color}"
                  title="propuestas de {proposal.ejes_id.slug}"
                  data-src="{directusImg}{proposal.ejes_id.icon_file.id}">
                </svg>
              {/if}  
          </div>
          </div>
        {/each}
      </div>

      <h2 class="has-text-left title is-5 has-text-black">¿Qué proponen?</h2>
      {#each partido.ejes as proposal}
        <Proposal {proposal} party={partido.id}/>
      {/each}
      <div class="social-networks py-6">
        <a href={partido.url_instagram}>
          <Icon brand size="large" icon="fa-instagram"/>
        </a>
        <a href={partido.url_facebook}>
          <Icon brand size="large" icon="fa-facebook-square"/>  
        </a>
        <a href={partido.url_twitter}>
          <Icon brand size="large" icon="fa-twitter-square"/>  
        </a>
      </div>

      <div class="has-text-centered">
        <p class="mb-4">
          <strong>¿Querés la información oficial?</strong>
        </p>
        <a href={partido.url_web} target="_blank" class="is-uppercase is-underlined mt-4">ir a la plataforma oficial</a>
        <p class="mt-6">
          <strong>¿Querés conocer a sus candidates?</strong> 
        </p>
        <a href="/partidos-y-candidates/{$page.params.provincia}/candidates/{partido}"
          class="button is-uppercase mt-4 is-fullwidth  is-outline is-active">ver candidates</a>
      </div>
      
    </div>
    
  </section>
</main>

<style>
  .partido-img{
    height: 200px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .description{
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-left: 4px solid black;
  }
  svg{
    width: 25px;
    height: 25px;
    background-color: black;
  }
  .social-networks{
    display: flex;
    justify-content: center;
  }
  .social-networks a{
    color: black
  }
</style>