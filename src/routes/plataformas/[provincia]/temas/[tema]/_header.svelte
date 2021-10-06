<script>
  import { directusImg } from "$lib/common/utils";
  export let tema;
</script>
<table class="header">
  <thead>
    <tr style="background-color:{tema.color}">
      <td class="py-4 pl-4" >
        <h1 class="is-uppercase title is-3 has-text-weight-normal p-1 has-text-black">
          {tema.name}
        </h1>
      </td>
      <td id="icon-topic" class="py-4">
        <img src="{directusImg}{tema.icon_file.id}" alt="icono de {tema.name}" width="40">
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