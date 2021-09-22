<script>
  import partidos from '$lib/partidos.json';
  import { page } from "$app/stores";
  import { base } from '$app/paths';
  import SelectDistrict from '$lib/common/SelectDistrict.svelte';
	
  let nextUrl = `${$page.path}`
</script>
<main class="container p-2 has-background-white">
  <div class="has-text-right">
    <SelectDistrict/>
  </div>
  <h1 class="mt-4 title is-4">Partidos y candidatos</h1>
  <p class="is-family-sans-serif ">Explorá las candidaturas, a qué se dedican, cuál es su trayectoria política, si fueron parte de otros partidos y mucho más!</p>
  <p class="has-text-centered mt-6">
    <strong>¿Querés saber cómo votó cada partido <br> en las últimas leyes?</strong><br>
    <a href="//como-votaron" class="button is-medium is-outlined is-active is-uppercase mt-4">Ver votaciones</a>
  </p>
  <section class="columns is-mobile">
    {#each partidos as partido}
      <div class="column is-half has-text-centered party">
        <div
          src={partido.logo}
          alt={`logo de ${partido.name}`}
          style="background-image: url({partido.logo})"
          class="party-logo">
        </div>
        <div class="buttons mt-2">
          <a href="{nextUrl}/partidos/{partido.slug}" class="button is-black is-uppercase is-fullwidth">Ver partido</a>
          <a href="{nextUrl}/candidates/{partido.slug}" class="button is-active is-outlined is-fullwidth is-uppercase">Ver candidates</a>
        </div>
      </div>
    {/each}
  </section>
</main>
<style>

.party-logo{
  height: 150px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
section{
  margin-top: 50px;
}
h1{
  font-weight: 300;
}
</style>