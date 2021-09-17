<script>
  export let candidate;
  import Binary from "./_binary.svelte";
</script>
<div class="mt-6">
  <table>
    <tr>
      <td class="has-text-left">edad</td>
      <td><strong>{candidate.about.age} años</strong></td>
    </tr>
    <tr>
      <td class="has-text-left">profesion</td>
      <td><strong>{candidate.about.profession}</strong></td>
    </tr>
    <tr hidden={candidate.about.children && candidate.about.children !== 0}>
      <td class="has-text-left">hijes</td>
      <td>
        <strong>{candidate.about.children} hije{candidate.about.children > 1 ? 's' : ''}</strong>
      </td>
    </tr>
  </table>
  <strong class="mb-6">¿Tuvo cargos?</strong>
  <Binary value={candidate.about.had_state_jobs}/>
  <strong class="mb-6">¿Estuvo en varios partidos?</strong>
  <Binary value={candidate.about.multiparty}/>
</div>
<style> 

</style>