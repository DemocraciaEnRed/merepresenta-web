<script>
  import partido from '$lib/candidatos-jxc.json';
  import { onMount } from 'svelte';
  import { page } from "$app/stores";

  let Carousel; // for saving Carousel component class
  let carouselRef; // for calling methods of carousel instance
  const partyUrl = `/partidos-y-candidates/${$page.params.provincia}/partidos/${partido.slug}`;
  onMount(async () => {
    const module = await import('svelte-carousel');
    Carousel = module.default;
  });

</script>
<svelte:head>
	<title>Home</title>
</svelte:head>
<svelte:component this={Carousel} bind:this={carouselRef}>
  {#each partido.candidates as candidato, i}
    <div class="box item-{i+1} has-text-centered">
      <img src={candidato.img} class="is-rounded candidate-img" alt="Foto retrato de {candidato.fullname}"/>
      <p>{candidato.fullname}</p>
      <p>{candidato.position}</p>
      <a href="{$page.path}/candidate/{candidato.id}">VER CANDIDATE</a>
    </div>
  {/each}
</svelte:component>
