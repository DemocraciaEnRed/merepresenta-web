<script>
  import Dropdown from "$lib/common/Dropdown.svelte";
  import laws from '$lib/votes-x-law.json'
  import Votes from './_votes.svelte';
</script>
<main class="container p-2 has-background-black has-text-centered">
  <img src="/abc.svg" class="mt-4" alt="imagen de una mano deslizando un voto en una urna">
  <h1 class="title is-5 my-4 p-4 has-text-weight-normal has-text-white">Conocé cómo votó cada uno de los partidos en las siguientes leyes</h1>
</main>
{#each laws as law}
  <Dropdown  name={law.name.toUpperCase()}>
    <Votes votes={law.votes} />
  </Dropdown>
{/each}