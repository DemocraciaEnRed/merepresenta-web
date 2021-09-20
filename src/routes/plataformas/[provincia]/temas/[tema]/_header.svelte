<script>
  import { PoliciesIcons } from "$lib/common/utils";
  export let tema;
</script>
<table class="header">
  <thead>
    <tr>
      <td class="py-4 pl-4">
        <span class="is-uppercase p-1 has-text-black" 
          style="background-color:var(--{tema})">
          {tema}
        </span>
      </td>
      <td id="icon-topic" class="py-4">
        <img src={PoliciesIcons[tema]} alt="icono de {tema}" width="25">
      </td>
    </tr>
  </thead>
</table>
<style>
  .header{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
  }
  #icon-topic{
    text-align: center;
    border-left: 1px solid black;
  }
</style>