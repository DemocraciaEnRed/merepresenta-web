<script>
  import candidatos from '$lib/candidatos-jxc.json';
  import { onMount } from 'svelte';
  import bulmaCarousel from '~bulma-carousel/dist/js/bulma-carousel.min.js';
  import { page } from "$app/stores";
  let element;
	// let nextUrl = `/partidos-y-candiatos/${$page.params.provincia}/${$page.params.partido}`
  let nextUrl = '';
  onMount(()=>{
    // Initialize all elements with carousel class.
    const carousels = bulmaCarousel.attach('.carousel', options);
    
    element = document.querySelector('#candidatos');
    if (element && element.bulmaCarousel) {
    }
  })
</script>
<section class="container">
  <div id="carousel-demo" class="carousel">
    {#each candidatos as candidato, i}
      <div class="box item-{i+1}">
        <img src={candidato.img} class="is-rounded" alt="Foto retrato de {candidatos.fullname}"/>
        {candidato.fullname}
        <p>{candidato.position}</p>
        <a href="{nextUrl}/{candidato.id}">VER CANDIDATE</a>
      </div>
    {/each}
  </div>
</section>