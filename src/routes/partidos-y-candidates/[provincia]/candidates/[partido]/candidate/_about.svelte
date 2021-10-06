<script>
  export let candidate;
  import Binary from "./_binary.svelte";
</script>
<div class="mt-6">
  <table>
    {#if candidate.age}
      <tr>
        <td class="has-text-left">edad</td>
        <td><strong>{candidate.age} años</strong></td>
      </tr>
    {/if}
    <tr>
      <td class="has-text-left">profesion</td>
      <td><strong>{candidate.profession.name}</strong></td>
    </tr>
    <tr hidden={candidate.childrens === 0}>
      <td class="has-text-left">hijes</td>
      <td>
        <strong>{candidate.childrens} hije{candidate.childrens > 1 ? 's' : ''}</strong>
      </td>
    </tr>
  </table>
  <strong class="mb-6">¿Tuvo cargos?</strong>
  <Binary value={candidate.cargos_publicos}/>
  <strong class="mb-6">¿Estuvo en varios partidos?</strong>
  <Binary value={candidate.otros_partidos}/>
</div>
<style> 

</style>