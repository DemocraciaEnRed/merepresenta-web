<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import partidos from '$lib/partidos.json'
  

  let urlPartido;
  let partido = {};
  let provincia;

  onMount(async ()=>{
    urlPartido = $page.params.partido
    provincia = $page.params.provincia
    //await get partido
    partido = partidos.find((party)=>{return party.slug === urlPartido});
  })

</script>
<section class="hero is-large">
  <div class="hero-body" style="background-image: url('{partido.logo}')">
  </div>
</section>
<section class="">
  <h1 class="title">{partido.name}</h1>
  <p class="description">
    Introducción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie vestibulum duis a quisque odio vulputate. Sit maecenas sit sed morbi viverra sed dui. Imperdiet ullamcorper malesuada vitae volutpat quam. Id magna sed in in dictum proin proin. Tincidunt magnis adipiscing gravida turpis suscipit et. A justo convallis morbi lectus aliquet ultricies in maecenas.
    Amet urna maecenas sit tempus massa.
  </p>
</section>
<div class="buttons">
  <button class="button is-primary">Primary</button>
  <button class="button is-primary">
    <span class="icon">
      <i class="fas fa-home"></i>
    </span>
</button>
</div>
<style>
  .hero-body{
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    height: 200px;
  }
</style>