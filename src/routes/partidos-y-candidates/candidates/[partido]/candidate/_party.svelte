<script>
  export let partido;
  export let open
  import Binary from "./_binary.svelte";
  import { slide } from 'svelte/transition';
  import { page } from '$app/stores';
  let isOpen = open
</script>
<div class="box is-rounded">
  <div class="group-header is-flex is-flex-direction-row is-align-items-center is-top-rounded" >
    <div class="is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center has-text-centered">
        <p class=" has-text-black is-inline has-text-weight-medium" >Sobre el partido</p>
    </div>
    <!-- <div class="icon-container">
      <i class="fas {isOpen ? 'fa-angle-double-up' : 'fa-angle-double-down'} has-text-black fa-lg fa-fw"></i>
    </div> -->
  </div>
  {#if isOpen}
  <div class="group-content is-bottom-rounded" transition:slide>
    <h1 class="is-4 has-text-centered has-text-black mb-4">Conocé las propuestas de "<span class="has-text-weight-medium">{partido.name}</span>"</h1>
    <div class="buttons is-centered">
      <a href="/partidos-y-candidates/partidos/{partido.id}" class="button is-black is-outlined is-uppercase has-text-weight-semibold is-flex-grow-1">Ver propuestas</a>
      <a href="/partidos-y-candidates/candidates/{partido.alianzas[0].related_partido_id.id}" class="button is-black is-outlined is-uppercase has-text-weight-semibold is-flex-grow-1">Ver interna</a>

      <!-- <a href="/como-votaron" class="button is-black is-outlined is-uppercase has-text-weight-semibold">Ver votaciones</a> -->
    </div>
    
  </div>
  {/if}
</div>
<style> 
.box{
  border: 1px solid #CFCFCF;
  border-bottom: 0;
  padding: 0;
  border-radius: 0;
}
.is-rounded{
    border-radius: 10px;
  }
.is-top-rounded{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.is-bottom-rounded{
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.group-header{
  background-color: #FFF;
  padding: 1rem;
  border-bottom: 1px solid #CFCFCF;
}
.group-content{
  padding: 2rem 1rem;
  background-color: #FFF;
  /* border-top: 1px solid #CFCFCF;; */
  border-bottom: 1px solid #CFCFCF;
}
.group-content .buttons{
  width: 50%;
  margin: auto;
}

@media screen and (max-width:500px){
  .group-content .buttons{
  width: 90%;
  margin: auto;
}
}

</style>
