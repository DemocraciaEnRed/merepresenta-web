<script context="module">
   import API, { handleResponse } from '$lib/apiHandler';
  import {getPartysByDistrict} from '$lib/graph-ql/partidos.js';
  export async function load({page, fetch}){
    const res = await API(fetch, getPartysByDistrict(page.params.provincia));
    return await handleResponse(res, "partidos", "partido");
  }
</script>
<script>
  import { page } from "$app/stores";
  import { PartyImg, ProvinciasSlugs } from "$lib/common/utils";
  /**
    * @type {Party[]}
    * @const
  */
  
  export let partidos;
  
</script>
<div class="hero is-black tetris-background">
  <div class="back-provincias has-text-right">
    <div class="is-clearfix pt-3 px-3">
      <a href="/plataformas/donde-votas" class="is-white is-uppercase is-outlined is-pulled-left"><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Cambiar provincia</a>
      <p class="general-sans has-text-weight-bold is-uppercase is-pulled-right">{ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name}</p>
    </div>
  </div>
  <div class="hero-body is-align-items-flex-start">
    <div class="container py-5">
			<h1 class="has-text-centered title is-2 is-size-4-touch mb-6">¿CÓMO QUERÉS CONOCER LAS PROPUESTAS?</h1>
          <div class="buttons is-centered">
							<a href="{$page.path.replace('/partidos','/temas')}" class="button is-white is-medium is-uppercase has-text-weight-semibold {$page.path.includes('/temas') ? null : 'is-outlined'}">Por tema</a>
							<a href="{$page.path}" class="button is-white is-medium is-uppercase has-text-weight-semibold {$page.path.includes('/partidos') ? null : 'is-outlined'}">Por partido</a>
          </div>
          <div class="buttons is-centered">
        </div>
		</div>
	</div>
</div>
<div class="section">
  <div class="container my-6">
    <div class="columns is-centered">
      <div class="column is-8">
        <h1 class="title is-2 is-size-4-touch has-text-centered has-text-black" >¡Conocé las propuestas de los distintos partidos en <b>{ProvinciasSlugs.find(p => p.slug === $page.params.provincia).name}</b>!</h1>
      </div>
    </div>
    <div class="columns is-centered is-multiline is-mobile mt-6">
      {#each partidos as partido}
        <div class="column is-half-mobile is-one-quarter-tablet is-2-desktop has-text-centered">
          <a href="/partidos-y-candidates/{$page.params.provincia}/partidos/{partido.id}">
            <figure class="image is-square party-logo" style="background-image: url({PartyImg(partido)})"></figure>
            <div class="name-partido has-background-black is-flex is-align-items-center is-justify-content-center has-text-white py-4">
              <p>{partido.name}</p>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
<style>
  .tetris-background {
    background-image: url("/black-background-desktop.png");
    background-attachment: fixed;
    /* background-size: cover; */
    position:relative;
    background-repeat: repeat;
  }
  .hero.tetris-background .hero-body{
    background: linear-gradient(0deg, rgba(0,0,0,1) 00%, rgba(0,0,0,0.4) 100%); 
    background-attachment: fixed;
  }
  .back-provincias{
    position:absolute;
    width: 100%;
  }
  .party-logo{
    /* height: 150px; */
    width: 100%;
    /* margin: 0 auto; */
    border: 1px solid black;
    border-bottom: 0;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.name-partido{
  text-transform: uppercase;
  padding: 2px 10px;
  height: 100px;
  line-height: normal;
  font-weight: 500;
}
</style>