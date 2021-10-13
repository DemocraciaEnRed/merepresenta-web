<script>
  import { page } from "$app/stores";
  import { directusImg, hexToRgb } from "$lib/common/utils";
  export let partido;
  export let tema;
  let rgb = hexToRgb(tema.color);
  let bgAlpha = `rgba(${rgb.r},${rgb.g},${rgb.b}, 0.3)`
</script>
<div class="mb-4 column  is-half-tablet is-one-third-desktop">
  <table class="head">
    <tr>
      <td class="party-name" style="background-color: {bgAlpha};">
        <h1 class="has-background-black has-text-white has-text-centered p-2 is-uppercase">{partido.name}</h1>
      </td>  
      <td class="party-logo" style="background-image: url({directusImg}{partido.logo?.id});">
      </td>
    </tr>
  </table>
  <table style="background-color: {bgAlpha};">
    {#if partido.ejes[0]?.propuestas}
      <tr class="has-text-centered bb">
        <td class="py-4">
          <strong>{partido.ejes[0].summary}</strong>
        </td>    
      </tr>
    {/if}
    <tr>
      <td class="py-4 has-text-centered">
        {#if partido.ejes[0]?.propuestas}
        <a href="{$page.path}/{partido.id}" class="button is-black is-uppercase px-6"> Leer propuestas </a>
        {/if}
        {#if !partido.ejes[0]?.propuestas}
        No se encontraron propuestas sobre este tema en las fuentes consultadas
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