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
        <p class=" has-text-black is-inline has-text-weight-medium" >Vida empresarial</p>
    </div>
    <div class="icon-container">
      <i class="fas {open ? 'fa-angle-double-up' : 'fa-angle-double-down'} has-text-black fa-lg fa-fw"></i>
    </div>
  </div>
  {#if open}
  <div class="group-content" transition:slide>
    <div class="columns is-vcentered">
      <div class="column has-text-black">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center element-group">
            <p class="is-uppercase">¿Tiene sociedades?</p>
            <Binary value={candidate.tipo_societario}/>
          </div>
      </div>
    </div>
    <p class="mt-4 has-text-left" hidden={!candidate.tipo_societario}>
      {candidate.tipo_societario}
    </p>
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
</style>
