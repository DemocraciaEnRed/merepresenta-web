<script>
  export let candidate;
  import Binary from "./_binary.svelte";
</script>
<div class="">
  <table>
    {#if candidate.age}
      <tr>
        <td class="py-5 has-text-left">edad</td>
        <td class="py-5"><strong>{candidate.age} años</strong></td>
      </tr>
    {/if}
    <tr>
      <td class="py-5 has-text-left">profesión</td>
      <td class="py-5"><strong>
        {#if candidate.profession}
        {candidate.profession.name}
        {:else}NO HAY DATOS
        {/if }
      </strong></td>
    </tr>
    <tr>
      <td class="py-5 has-text-left">provincia de nacimiento</td>
      <td class="py-5"><strong>
        {#if candidate.distrito_nacional}
          {candidate.distrito_nacional.name}
          {:else}NO HAY DATOS
        {/if}
      </strong></td>
    </tr>
    <tr hidden={candidate.childrens === 0}>
      <td class="py-5 has-text-left">hijes</td>
      <td class="py-5">
        <strong>
          {#if candidate.childrens}
          {candidate.childrens} hije{candidate.childrens > 1 ? 's' : ''}
          {:else}NO HAY DATOS
          {/if}
        </strong>
      </td>
    </tr>
  </table>
  <div class="my-5"><strong >¿Tuvo cargos?</strong>
  <Binary value={candidate.cargos_publicos}/>
  </div>
  <div class="my-5">
    <strong class="my-6">¿Estuvo en varios partidos?</strong>
  <Binary value={candidate.otros_partidos}/>
  </div>
  
</div>
<style> 

</style>