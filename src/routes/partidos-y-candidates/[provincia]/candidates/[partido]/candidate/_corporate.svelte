<script>
  export let candidate;
  import Binary from './_binary.svelte';
</script>
<div class="mt-4">
  <strong class="mb-6">¿Tiene sociedades?</strong>
  <Binary value={candidate.tipo_societario}/>
  <p class="mt-4 has-text-left" hidden={!candidate.tipo_societario}>
    {candidate.tipo_societario}
  </p>
</div>
