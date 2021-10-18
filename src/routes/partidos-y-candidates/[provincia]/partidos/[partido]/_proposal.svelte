<script>
  import { page } from "$app/stores";
  import { PoliciesIcons } from "$lib/common/utils";
  export let proposal;
  export let partido;
  let policyUrl  = `/plataformas/${$page.params.provincia}/temas/`;  
</script>

  <div id="partido-{proposal.ejes_id.slug}" class="proposal-header has-background-white is-flex is-flex-direction-row is-align-items-center">
    <div class="icon-container">
      <img src={PoliciesIcons[proposal.ejes_id.slug]} class="image m-3 icon-proposal" alt="icono de {proposal.ejes_id.name}" >
    </div>
    <div class="is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center has-text-centered" style="width:100%; height: 100%;">
      <div class="is-flex is-flex-direction-row is-align-items-center" style="background-color: {proposal.ejes_id.color}; height: 100%;" >
        <p class=" has-text-black is-inline mx-5 is-uppercase is-size-5 has-text-weight-medium" >{proposal.ejes_id.name}</p>
      </div>
    </div>
  </div>
  <div class="proposal-body summary general-sans p-3">
    <div class="columns">
      <div class="column is-4">
        <div class="my-4 has-text-centered-touch has-text-left-desktop">
          
          <h1 class="has-text-weight-bold is-uppercase mb-2 has-text-black">Resumen</h1>
          <p>{proposal.summary}</p>
          {#if partido.url_fuente}
          <hr style="background-color: #000;">
          <!-- <p>Podés leer las propuestas completas en la <a href="{policyUrl}{proposal.ejes_id.slug}/{partido.id}" class="is-uppercase has-text-black has-text-weight-semibold"><u>fuente oficial</u></a></p> -->
          <p>Podés leer las propuestas completas en la <a href="{partido.url_fuente}" target="_blank" class="is-uppercase has-text-black has-text-weight-semibold"><u>fuente oficial</u></a></p>
          {/if}
          <hr class="is-hidden-desktop" style="background-color: #000;">
        </div>
      </div>
      <div class="column">
        {#each proposal.propuestas as item, i}
        <div class="my-4 has-text-centered-touch has-text-left-desktop">
          
          <h1 class="has-text-weight-bold is-uppercase mb-2 has-text-black">Propuesta {i+1}</h1>
          <p>{item.summary}</p>
        </div>
        {/each}
      </div>
    </div>
  </div>

<style>
  .proposal-header{
    border: 2px solid black;
    width: 100%;
    margin-top: 1rem;
  }
  .proposal-body{
    width: 100%;
    background-color: #FFF;
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
    border-left: 2px solid #000;
    margin-bottom: 1rem;

  }
  .icon-proposal{
    width: 40px;
    height: 40px;
  }
  .icon-container{
    border-right: 2px solid #000;
    padding: 0 20px;
  }

  .summary{
    white-space: pre-line;

  }
</style>