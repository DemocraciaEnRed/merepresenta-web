<script>
  export let candidate;
  export let open
  import Binary from "./_binary.svelte";
  import { slide } from 'svelte/transition';
  let isOpen = open
</script>
<div class="box">
  <div class="group-header is-flex is-flex-direction-row is-align-items-center is-clickable" on:click={()=>open = !open}>
    <div class="is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center has-text-centered">
        <p class=" has-text-black is-inline has-text-weight-medium" >Sobre el partido</p>
    </div>
    <div class="icon-container">
      <i class="fas {open ? 'fa-angle-double-up' : 'fa-angle-double-down'} has-text-black fa-lg fa-fw"></i>
    </div>
  </div>
  {#if open}
  <div class="group-content" transition:slide>
    <div class="columns is-vcentered">
      {#if candidate.age}
      <div class="column has-text-black">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center element-group">
            <p class="is-uppercase">EDAD</p>
            <p class="is-uppercase has-text-weight-medium">{candidate.age} años</p>
          </div>
      </div>
      {/if}
      {#if candidate.profession}
      <div class="column has-text-black has-text-centered">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center element-group">
            <p class="is-uppercase">Profesión</p>
            <p class="is-uppercase has-text-weight-medium">{candidate.profession.name}</p>
          </div>
      </div>
      {/if}
      {#if candidate.childrens != null && candidate.childrens > 0}
      <div class="column has-text-black has-text-centered">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center element-group">
            <p class="is-uppercase">Hijos</p>
            <p class="is-uppercase has-text-weight-medium">{candidate.childrens} Hijxs</p>
          </div>
      </div>
      {/if}
      {#if candidate.cargos_publicos != null}
      <div class="column has-text-black has-text-centered">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center element-group">
            <p class="is-uppercase">¿Tuvo cargos?</p>
            <Binary value={candidate.cargos_publicos}/>
          </div>
      </div>
      {/if}
      {#if candidate.otros_partidos != null}
      <div class="column has-text-black has-text-centered">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center element-group">
            <p class="is-uppercase is-size-7">¿Estuvo en varios partidos?</p>
            <Binary value={candidate.otros_partidos}/>
          </div>
      </div>
      {/if}
      <!-- <div class="column"></div> -->
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
.element-group{
  height: 90px;
  margin: 0 20px;
}
.group-content .columns .column:not(:first-child){
  border-left: 1px solid #000;
}
@media screen and (max-width: 1023px) {
  .element-group{
    height: auto;
    margin: 0 20px;
  }
  .group-content{
    padding: 1rem 1rem;
    background-color: #FFF;
    /* border-top: 1px solid #000;; */
    border-bottom: 1px solid #000;
  }
  .element-group p:first-child{
    margin-bottom: 10px;
  }
  .group-content .columns .column:not(:first-child){
    border-left: 0;
    border-top: 1px solid #000;
  }
}
</style>
