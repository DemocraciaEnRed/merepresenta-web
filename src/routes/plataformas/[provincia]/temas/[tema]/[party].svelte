<script>
  import { page } from '$app/stores';
  import HeaderPP from './_header.svelte';
  import party from '$lib/proposal-x-partido.json';
  let partido = party[0];
  //la vaca
  let tema = $page.params.tema;
</script>
<HeaderPP {tema}/>
<div class="info p-4">
  <h1 class="title is-uppercase is-4">
    Propuestas de <span style="color: var(--{tema})">{tema}</span><br>
    <span class="has-text-weight-normal">{partido.name}</span>
  </h1>
</div>
<main class="container p-2">
  <ul class="ml-5 mt-4">
    {#each partido.items as propuesta}
      <li>{propuesta.intro}</li>
    {/each}
  </ul>
  {#each partido.items as propuesta}
    <h2 class="py-2 title is-6 mt-4">{propuesta.title}</h2>  
    <p>
      {propuesta.complete_description}
    </p>
  {/each}
  <p class="has-text-centered">
    <a href={partido.url_plataforma} class="button is-black is-uppercase">
      ir a la plataforma oficial
    </a> 
  </p>
  <p class="has-text-centered mt-5">
    <strong>
      Si te interesa el tema de <span style="color: var(--{tema})">{tema}</span>, <br>
      te invitamos a que visites <br> las siguientes páginas
    </strong>
  </p>
  {#each partido.related_links as related}
    <p class="has-text-centered mt-4">
      <a href={related.url} class="button is-outlined is-active px-4">{related.link}</a>  
    </p>
  {/each}
  <p class="has-text-centered mt-4">
    Conocé el resto de los partidos y sus propuestas
    <a href="/" class="button is-black is-uppercase mt-4">ver propuestas</a>  
  </p>
</main>
<style>
  .info{
    border-left: 3px solid black;
    border-bottom: 1px solid black;
  }
  ul{
    list-style-type: disc;
  }
</style>