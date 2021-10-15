<script context="module">
  import API, { handleResponse } from '$lib/apiHandler';
  import {getPartysByDistrict} from '$lib/graph-ql/partidos.js';
  export async function load({page, fetch}){
    const res = await API(fetch, getPartysByDistrict(page.params.provincia));
    return await handleResponse(res, "partidos", "partido");
  }
</script>
<script>
  import { page } from "$app/stores";
  import SelectDistrict from '$lib/common/SelectDistrict.svelte';
  import { PartyImg } from '$lib/common/utils';
  export let partidos;
</script>
<main class=" p-2 pb-6 has-background-white white-background-desktop">
  <div class="has-text-right">
    <SelectDistrict/>
  </div>
  <h1 class="has-text-centered-tablet mt-4 title is-4">Partidos y candidatos</h1>
  <p class="has-text-centered-tablet is-family-sans-serif ">Explorá las candidaturas, quiénes son, qué hacen, cuál es su trayectoria política y mucho más!</p>
  <p class=" is-hidden-tablet has-text-centered mt-6">
    <strong>¿Querés saber cómo votaron en el Congreso?<br>
    <a href="/como-votaron" class="button is-medium is-outlined is-active is-uppercase mt-4">Ver votaciones</a>
  </p>
  <div class="is-hidden-mobile  columns">
    <p class="column is-three-fifths is-offset-one-fifth has-background-black has-text-centered mt-6 p-5 ">
      <strong class="has-text-white">¿Querés saber cómo votaron en el Congreso?  </strong><br>
      <a href="/como-votaron" class="button is-medium is-outlined is-active is-uppercase mt-4">Ver votaciones</a>
    </p>
  </div>
  
  <section class="container mx-auto columns is-mobile is-flex is-flex-wrap-wrap is-justify-content-center pb-6">
    {#each partidos as partido}
      <div class="column is-half-mobile is-one-quarter-tablet has-text-centered party ">
        <div
          style="background-image: url({PartyImg(partido)})"
          class="party-logo">
        </div>
        <h2>{partido.name}</h2>
        <div class="buttons mt-2">
          <a href="{$page.path}/partidos/{partido.id}" class="button is-black is-uppercase is-fullwidth">Ver partido</a>
          <a href="{$page.path}/candidates/{partido.id}" class="button is-active is-outlined is-fullwidth is-uppercase">VER CANDIDATURAS</a>
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
  background-color: #fff;
}
h2{
  text-align: center;
  background-color: black;
  color: white
}
section{
  margin-top: 50px;
}
h1{
  font-weight: 300;
}
</style>