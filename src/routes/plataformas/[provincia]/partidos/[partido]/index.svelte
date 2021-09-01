<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import part from '$lib/partido.json'
  import '$lib/typedef';
  import Policies from './_policies.svelte'
  import Proposals from "./_proposals.svelte";

  let urlPartido;
  let provincia;
  /**
    @type PartyDetail
    @const
  */
  let partido = part
  onMount(async ()=>{
    urlPartido = $page.params.partido
    provincia = $page.params.provincia
    //await get partido
    //partido = await fetch('api') 
  })

</script>
<section class="hero is-large">
  <div class="hero-body" style="background-image: url('{partido.logo}')">
  </div>
</section>
<section>
  <h1 class="title">{partido.name}</h1>
  <p class="description">
    {partido.description}
  </p>
  <Policies proposals={partido.proposals}/>
  <Proposals proposals={partido.proposals}/>
</section>

<style>  
  .hero-body{
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    height: 200px;
  }
</style>