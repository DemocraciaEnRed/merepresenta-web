<script>
  import { page } from '$app/stores';
  import { PoliciesIcons } from '$lib/common/utils';
  import partido from '$lib/partido.json';
  import { onMount } from 'svelte';
  import Proposal from './_proposal.svelte';
  let load;
  onMount(()=>{
    load = true
  })
  
</script>
<svelte:head>
	<script src="https://unpkg.com/external-svg-loader@1.3.1/svg-loader.min.js"></script>
</svelte:head>
<main>
  <section>
    <div class="partido-img mt-4" style="background-image: url({partido.logo})">
      <span hidden>{partido.name}</span>
    </div>

    <p class="description p-4 mt-4">
      {partido.description}
    </p>
    
    <div class="container p-4">
      <h2 class="has-text-left title is-5 has-text-black">Les interesa</h2>
      <div class="columns is-mobile p-2">
        {#each partido.proposals as proposal}
          <!--ESTA PELOTUDEZ ME COSTO UN HUEVO-->
          <div class="column has-text-centered">
            <div class="px-6 py-2 has-background-black">
              {#if load}
                <svg 
                  width="50"
                  height="50"
                  class="{proposal.category}-path"
                  title="propuestas de {proposal.category}"
                  data-src="{PoliciesIcons[proposal.category]}">
                </svg>
              {/if}  
          </div>
          </div>
        {/each}
      </div>

      <h2 class="has-text-left title is-5 has-text-black">¿Qué proponen?</h2>
      {#each partido.proposals as proposal}
        <Proposal {proposal} party={partido.slug}/>
      {/each}
      <div class="has-text-centered">
        <p class="mb-4">
          <strong>¿Querés la información oficial?</strong>
        </p>
        <a href={partido.plataform_url} target="_blank" class="is-uppercase is-underlined mt-4">ir a la plataforma oficial</a>
        <p class="mt-4">
          <strong>¿Querés conocer a sus candidates?</strong> 
        </p>
        <a href="/partidos-y-candidates/{$page.params.provincia}/candidates/{partido.slug}"
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

</style>