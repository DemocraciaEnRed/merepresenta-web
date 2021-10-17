<script context="module">
  import API, { handleResponse } from "$lib/apiHandler";
  import { getThemes } from "$lib/graph-ql/themes.js";
  export async function load({fetch}){
    const res = await API(fetch, getThemes());
    return await handleResponse(res, "temas", "ejes")
  }
</script>
<script>
  import { page } from "$app/stores";
  import { directusImg, ProvinciasSlugs } from "$lib/common/utils";
  export let temas;
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
							<a href="{$page.path}" class="button is-white is-medium is-uppercase has-text-weight-semibold {$page.path.includes('/temas') ? null : 'is-outlined'}">Por tema</a>
							<a href="{$page.path.replace('/temas','/partidos')}" class="button is-white is-medium is-uppercase has-text-weight-semibold {$page.path.includes('/partidos') ? null : 'is-outlined'}">Por partido</a>
          </div>
          <div class="buttons is-centered">
        </div>
		</div>
	</div>
</div>
<div class="section">
  <div class="container mb-6">
    <div class="columns is-centered">
      <div class="column is-8">
        <h1 class="title is-2 is-size-4-touch has-text-centered has-text-black" >Ingresá a cada uno de los temas y enterate qué propone cada partido para cada uno</h1>
      </div>
    </div>
    <div class="columns is-centered is-multiline is-mobile mt-6">
      {#each temas as tema}
        <a class="column is-half-mobile is-one-quarter-tablet has-text-centered" href="{$page.path}/{tema.slug}">
          <div class="topic-container" style="background-color: {tema.color};">
            <img src="{directusImg}{tema.icon_file.id}" class="icon-topic"  alt="icono de {tema.name}"/>
            <h1 class="has-background-black has-text-weight-medium is-uppercase py-3 is-size-5" style="color:{tema.color}">
              {tema.name}
            </h1>
          </div>
        </a>
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
  @media screen and (max-width: 1024px){
    .hero.tetris-background .hero-body{
      background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%); 
    }
    .buttons-container{
      flex-direction: column;
    }
    .button-container {
      flex-grow: 1;
      width: auto!important;
    }
  }
  .icon-topic{
    width: 125px;
    height: 125px;
    /* margin-bottom: 10px; */
    margin: 30px
  }
  .button-container {
      border:2px solid #fff;
      width: 230px;
      padding: 1rem;
      margin: 15px;
    }
  </style>