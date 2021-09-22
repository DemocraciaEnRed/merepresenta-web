<script>
  import { page } from "$app/stores";
  import { PoliciesIcons } from "$lib/common/utils";
  export let proposal;
  let policyUrl  = `/plataformas/${$page.params.provincia}/temas/`;    
  
</script>
<table class="my-5 p-2">
  <table>
    <tr>
      <td class="p-4 border is-uppercase">
        <span class="p-2 has-text-black" style="background-color: var(--{proposal.ejes_id.slug});">{proposal.ejes_id.name}</span>
      </td>
      <td class="category-icon has-text-centered">
        <img src={PoliciesIcons[proposal.ejes_id.slug]} alt="icono de {proposal.ejes_id.name}" >
      </td>
    </tr>
  </table>
  <table>
    <tr>
      <td>
        <ul class="px-5 mt-4 ml-4">
          {#each proposal.propuestas as item}
            <li>{item.summary}</li>
          {/each}
        </ul>
      </td>
    </tr>
    <tr class="has-text-centered">
      <a href="{policyUrl}{proposal.ejes_id.slug}" class="button is-black is-uppercase my-4">leer más</a>  
    </tr>
  </table>
</table>

<style>
  table{
    width: 100%;
    border: 1px solid black
  }
  .category-icon{
    vertical-align: middle;
    border-left: 2px solid black
  }
  .category-icon img{
    width: 25px!important;
    height: 25px!important;
  }
  ul{
    font-family: Arial, Helvetica, sans-serif;
    list-style-type:disc;
    margin: 0;
    padding: 0;
  }
</style>