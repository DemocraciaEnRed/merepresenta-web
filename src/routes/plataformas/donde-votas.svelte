<script context="module">
  import API, { handleResponse } from "$lib/apiHandler";
  import { getDistricts } from "$lib/graph-ql/distritos.js";
  export async function load({fetch}){
    const res = await API(fetch, getDistricts());
    return await handleResponse(res, "provincias", "distritos")
  } 
  </script>
  <script>
    export let provincias
  </script>

  <div class="hero is-black  is-medium tetris-background">
		<div class="hero-body is-align-items-flex-start">
			<div class="container">
        <h1 class="has-text-centered title is-1 mb-6 animate__animated animate__flipInX">¿Dónde votás?</h1>
        <div class="buttons is-centered my-6 ">
          {#each provincias as provincia}
							<a href="/plataformas/{provincia.slug}" class="button is-white is-large is-uppercase has-text-weight-semibold px-6 is-outlined is-hidden-touch animate__animated animate__flipInY animate__delay-1s">{provincia.name}</a>
          {/each}
          {#each provincias as provincia}
							<a href="/plataformas/{provincia.slug}" class="button is-white is-medium is-uppercase has-text-weight-semibold px-6 is-outlined is-hidden-desktop mobile-width animate__animated animate__flipInY animate__delay-1s">{provincia.name}</a>
          {/each}
        </div>
      </div>
    </div>
  </div>


  <style>
    .tetris-background {
      background-image: url("/black-background-desktop.png");
      background-attachment: fixed;
      /* background-size: cover; */
      background-repeat: repeat;
    }
    .hero.tetris-background .hero-body{
      background: linear-gradient(0deg, rgba(0,0,0,1) 00%, rgba(0,0,0,0.4) 100%); 
      background-attachment: fixed;
    }
    @media screen and (max-width: 1024px){
      .hero.tetris-background .hero-body{
        background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%); 
      }
      .mobile-width{
        flex-grow: 1 
      }
    }
    </style>