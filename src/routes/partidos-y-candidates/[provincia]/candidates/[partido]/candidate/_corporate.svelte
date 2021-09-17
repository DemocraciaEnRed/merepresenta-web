<script>
  export let candidate;
  import Binary from './_binary.svelte';
</script>
<div class="mt-4">
  <strong class="mb-6">¿Tiene sociedades?</strong>
  <Binary value={candidate.private_sector_history.has_companies}/>
  <p class="mt-4">
    {candidate.private_sector_history.description}
  </p>
</div>
