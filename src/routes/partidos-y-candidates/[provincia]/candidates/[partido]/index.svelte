<script>
  import partido from '$lib/candidatos-jxc.json';
  import { onMount } from 'svelte';
  import { page } from "$app/stores";
  import { base } from '$app/paths';
  let Carousel; // for saving Carousel component class
  let carouselRef; // for calling methods of carousel instance
  const partyUrl = `//partidos-y-candidates/${$page.params.provincia}/partidos/${partido.slug}`;
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
    Candidatos de <br>{partido.name}
  </h1>
  <a
    href="{partyUrl}"
    class="button is-uppercase is-black">
    Ver partido
  </a>
  <p class="my-4">Se postulan:</p>
  <svelte:component this={Carousel} bind:this={carouselRef}>
    {#each partido.candidates as candidato, i}
      <div class="candidate has-text-centered">
        <div 
          style="background-image: url({candidato.img})"
          class="candidate-img" alt="Foto retrato de {candidato.fullname}"/>
        <h1 class="title has-text-black">{candidato.fullname}</h1>
        <p class="has-text-black">Candidate a <br>
        {candidato.position}</p>
        <a href="{$page.path}/candidate/{candidato.id}" class="button is-outlined is-active my-4">VER CANDIDATE</a>
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