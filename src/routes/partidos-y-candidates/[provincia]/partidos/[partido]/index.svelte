<script>
  import { page } from '$app/stores';
  import Icon from '$lib/common/Icon.svelte';
  import partido from '$lib/partido.json';
  
  const path = $page.path
</script>
<section class="has-text-centered">
  <h1>{partido.name}</h1>
  <p>¿Querés saber que proponen para las <br/> distintas temáticas?</p>
  <a href="{path}/propuestas" class="button mt-4">Ver propuestas</a>
  <h2 class="has-text-left">Les interesa</h2>
  {#each partido.proposals as proposal}
    {proposal.category}
  {/each}
  <h2 class="has-text-left">Composición por género</h2>
  <a href="{path}/como-votan" class="como-votan">
    <strong>¿Cómo votan?</strong>
    <span>
      <Icon icon="fa-chevron-right"/>
    </span>
  </a>
  <p class="my-6">Si querés conocer las propuestas del resto <br/>de los partidos, te invitamos a visitar plataformas electorales</p>
  <a href class="button is-uppercase mt-4">Ver plataformas electorales</a>
</section>
<style>
  .como-votan{
    padding: 20px;
    border: 1px solid black;
    display: block;
    margin: 20px 0;
  }
  .como-votan{
    display: flex;
  }
  .como-votan strong{
    align-content: flex-start;
  }
  .como-votan span{
    align-content: flex-end;
  }
</style>