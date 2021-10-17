<script>
  export let partido;
  export let open
  import Binary from "./_binary.svelte";
  import { slide } from 'svelte/transition';
  import { page } from '$app/stores';
  let isOpen = open
</script>
<div class="box">
  <div class="group-header is-flex is-flex-direction-row is-align-items-center is-clickable" on:click={()=>isOpen = !isOpen}>
    <div class="is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center has-text-centered">
        <p class=" has-text-black is-inline has-text-weight-medium" >Sobre el partido</p>
    </div>
    <div class="icon-container">
      <i class="fas {isOpen ? 'fa-angle-double-up' : 'fa-angle-double-down'} has-text-black fa-lg fa-fw"></i>
    </div>
  </div>
  {#if isOpen}
  <div class="group-content" transition:slide>
    <h1 class="is-4 has-text-centered has-text-black mb-4">Conocé las propuestas de "<span class="has-text-weight-medium">{partido.name}</span>" y conocé como votó el partido en 10 leyes</h1>
    <div class="buttons is-centered">
      <a href="/partidos-y-candidates/{$page.params.provincia}/partidos/{partido.id}" class="button is-black is-outlined is-uppercase has-text-weight-semibold">Ver partido</a>
      <a href="/como-votaron" class="button is-black is-outlined is-uppercase has-text-weight-semibold">Ver votaciones</a>
    </div>
    
  </div>
  {/if}
</div>
<style> 
.box{
  border: 1px solid #000;
  border-bottom: 0;
  padding: 0;
  border-radius: 0;
}
.group-header{
  background-color: #FFF;
  padding: 1rem;
  border-bottom: 1px solid #000;
}
.group-content{
  padding: 2rem 1rem;
  background-color: #FFF;
  /* border-top: 1px solid #000;; */
  border-bottom: 1px solid #000;
}

</style>
