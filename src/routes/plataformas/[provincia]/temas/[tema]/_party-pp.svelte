<script>
  import { page } from "$app/stores";
  import { directusImg } from "$lib/common/utils";
  export let partido;
</script>
<div class="mb-4">
  <table class="head">
    <tr>
      <td class="party-name">
        <h1 class="has-background-black has-text-white has-text-centered p-2 is-uppercase">{partido.name}</h1>
      </td>  
      <td class="party-logo" style="background-image: url({directusImg}{partido.logo?.id});">
      </td>
    </tr>
  </table>
  <table>
    {#if partido.ejes[0]?.propuestas}
      {#each partido.ejes[0].propuestas as propuesta}
        <tr class="has-text-centered bb">
          <td class="py-4">
            <strong>{propuesta.summary}</strong>
          </td>    
        </tr>
      {/each}
    {/if}
    <tr>
      <td class="py-4 has-text-centered">
        {#if partido.ejes[0]?.propuestas}
        <a href="{$page.path}/{partido.id}" class="button is-black is-uppercase px-6"> Leer más </a>
        {/if}
        {#if !partido.ejes[0]?.propuestas}
          El partido no tiene propuestas sobre el tema
        {/if}
      </td>
    </tr>
  </table>
</div>
<style>
  table{
    width: 100%;
    border: 1px solid black;
  }
  .party-name{
    vertical-align:middle
  }
  .bb{
    border-bottom: 1px solid black;
  }
  .party-logo{
    width: 100px;
    height: 100px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
    border-left: 1px solid black;
  }
</style>