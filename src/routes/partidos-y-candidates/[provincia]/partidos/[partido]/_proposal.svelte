<script>
  import { base } from "$app/paths";

  import { page } from "$app/stores";
  import { PoliciesIcons } from "$lib/common/utils";
  export let proposal;
  
  let policyUrl  = `//plataformas/${$page.params.provincia}/temas/`;    
  
  
</script>
<table class="my-5 p-2">
  <thead>
    <tr>
      <td class="p-4 border is-uppercase">
        <span class="p-2" style="background-color: var(--{proposal.category});">{proposal.category}</span>
      </td>
      <td class="category-icon has-text-centered">
        <img src={PoliciesIcons[proposal.category]} alt="icono de {proposal.category}" width="25">
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <ul class="px-5 mt-4 ml-4">
          {#each proposal.items as item}
            <li>{item.description}</li>
          {/each}
        </ul>
      </td>
    </tr>
    <tr class="has-text-centered">
      <a href="{policyUrl}{proposal.category_slug}" class="button is-black is-uppercase my-4">leer más</a>  
    </tr>
  </tbody>
</table>

<style>
  table{
    width: 100%;
    border: 2px solid black
  }
  thead{
    border: 2px solid;
  }
  .category-icon{
    vertical-align: middle;
    border-left: 2px solid black
  }
  ul{
    font-family: Arial, Helvetica, sans-serif;
    list-style-type:disc;
    margin: 0;
    padding: 0;
  }
</style>