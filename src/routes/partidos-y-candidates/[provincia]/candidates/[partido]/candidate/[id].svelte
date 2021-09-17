<script>
  import { page } from "$app/stores";
  import candidate from '$lib/candidate.json'
  import Dropdown from "$lib/common/Dropdown.svelte";
  import About from "./_about.svelte";
  import Ideology from "./_ideology.svelte";
  import Timeline from './_timeline.svelte';
  import Twitter from "./_twitter.svelte";
  import Corporate from './_corporate.svelte';

  const partyUrl = `/partidos-y-candidates/${$page.params.provincia}/partidos/${$page.params.partido}`;

</script>
<main class="container has-background-white mt-4">
  <section class="has-text-black">
    <table class="candidate-header">
      <td id="candidato-img" style="background-image: url({candidate.img});">
      </td>
      <td id="politican-info">
        <h3 class="has-text-centered is-uppercase has-text-white has-background-black p-2 ">{candidate.party.name}</h3>
        <h2 class="title is-3 has-text-black is-uppercase mt-4 px-4">{candidate.fullname}</h2>
        <p class=" p-4">Candidate a {candidate.position_full}</p>
      </td>
    </table>
    <div class="mt-4">
      <Dropdown name="¿Quién es y a qué se dedica?">
        <About {candidate}/>
      </Dropdown>
    </div>
    <div>
      <Dropdown name="Ideología y opiniones">
        <Ideology {candidate}/>
      </Dropdown>
    </div>
    <div>
      <Dropdown name="Twitter">
        <Twitter twitter={candidate.twitter}/>
      </Dropdown>
    </div>
    <div >
      <Dropdown name="Recorrido político">
        <Timeline {candidate}/>
      </Dropdown>
    </div>
    <div>
      <Dropdown name="Vida empresarial">
        <Corporate {candidate}/>
    </Dropdown>
    </div>
  </section>
  <p class="has-text-centered mt-6">
    <strong>¿Querés conocer las propuestas <br> del partido?</strong><br>
  <a href={partyUrl} class="button is-black is-active my-4 is-uppercase"> Ver Partido</a>
  </p>
</main>
<style>
  .candidate-header{
    border-top: 2px black solid;
    border-bottom: 2px black solid;
  }
  #candidato-img{
    width: 50%;
    height: 250px;
    background-size: cover;
    background-position: center;
    border-right: 1px black;
  }
  #politican-info p{
    border-top: 1px solid;
  }
  strong{
    font-weight: 500;
    color: black
  }
</style>