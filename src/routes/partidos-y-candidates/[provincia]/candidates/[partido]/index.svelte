<script context="module">
  import API, { handleResponse } from '$lib/apiHandler';
  import { getCandidatesByParty } from '$lib/graph-ql/candidates';
  export async function load({page, fetch}){
    const res = await API(fetch, getCandidatesByParty(page.params.partido));
    return await handleResponse(res, "candidates", "candidato");
  }
</script>
<script>
  import { onMount } from 'svelte';
  import { page } from "$app/stores";
  import { directusImg } from '$lib/common/utils';
  let Carousel; // for saving Carousel component class
  let carouselRef; // for calling methods of carousel instance
  export let candidates;
  const partyUrl = `/partidos-y-candidates/${$page.params.provincia}/partidos/${$page.params.partido}`;
  
  //Initialize carousel
  onMount(async () => {
    const module = await import('svelte-carousel');
    Carousel = module.default;
  });

</script>
<svelte:head>
	<title>Home</title>
</svelte:head>
<main class="container p-2 has-background-white has-text-centered ">
  <h1 class="title is-4 is-uppercase mt-4">
    Candidates de <br>{candidates[0].partido.name}
  </h1>
  <a
    href="{partyUrl}"
    class="button is-uppercase is-black">
    Ver partido
  </a>
  <p class="my-4">Se postulan:</p>
  <svelte:component this={Carousel} bind:this={carouselRef}>
    {#each candidates as candidate}
      <div class="candidate has-text-centered">
        <div 
          style="background-image: url({directusImg}{candidate.avatar.id})"
          class="candidate-img" alt="Foto retrato de {candidate.name}"/>
        <h1 class="title has-text-black">{candidate.name}</h1>
        <p class="has-text-black">Candidat{candidate.genre === 'm' ? 'o': 'a' } a <br>
        {candidate.cargo}</p>
        <a href="{$page.path}/candidate/{candidate.id}" class="button is-outlined is-active my-4">VER CANDIDATE</a>
      </div>
    {/each}
  </svelte:component>
</main>
<style>
  .candidate-img{
    height: 380px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .candidate{
    border: 1px solid black;
  }
  h1{
    font-weight: 400;
  }
</style>