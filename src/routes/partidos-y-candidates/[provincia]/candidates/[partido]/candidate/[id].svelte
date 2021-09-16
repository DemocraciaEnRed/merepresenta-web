<script>
  import { page } from "$app/stores";
  import candidate from '$lib/candidate.json'
  import Dropdown from "$lib/common/Dropdown.svelte";
  import Timeline from './_timeline.svelte';
  import Twitter from "./_twitter.svelte";

  const partyUrl = `/partidos-y-candidates/${$page.params.provincia}/partidos/${$page.params.partido}`;

</script>
<main class="container has-background-white mt-4">
  <section>
    <table>
      <td id="candidato-img" style="background-image: url({candidate.img});">
      </td>
      <td id="politican-info">
        <h3 class="has-text-centered is-uppercase has-text-white has-background-black p-2 ">{candidate.party.name}</h3>
        <h2 class="title is-3 mt-4 px-4">{candidate.fullname}</h2>
        <p class=" p-4">Candidate a {candidate.position_full}</p>
      </td>
    </table>
    <div class="mt-4">
      <Dropdown name="¿Quién es y a qué se dedica?">
        <div>
          <strong class="mb-6">¿Tuvo cargos?</strong>
          <table class="my-4 binary">
            <td class:active={candidate.about.had_state_jobs}>SI</td>
            <td class:active={!candidate.about.had_state_jobs}>NO</td>
          </table>
          <strong class="mb-6">¿Estuvo en varios partidos?</strong>
          <table class="my-4 binary">
            <td class:active={candidate.about.multiparty}>SI</td>
            <td class:active={!candidate.about.multiparty}>NO</td>
          </table>
          <strong class="mb-6">Profesión y formación</strong>
          <p>{candidate.about.profession}</p>
        </div>
      </Dropdown>
    </div>
    <div>
      <Dropdown name="Ideología y opiniones">
          <table>
            <td class="has-text-left">
              Conocé las propuestas del partido {candidate.party.name} 
            </td>
            <td>
              <a href class="button is-fullwidth">
                Ver Partido
              </a>
            </td>
          </table>
          <table>
            <td class="has-text-left">
              Conocé cómo votó en las ultimas leyes
            </td>
            <td>
              <a href class="button is-fullwidth">
                Ver Votaciones
              </a>
            </td>
          </table>
      </Dropdown>
    </div>
    <div>
      <Dropdown name="Twitter">
          <Twitter id={candidate.twitter}/>
      </Dropdown>
    </div>
    <div >
      <Dropdown name="Recorrido político">
          <Timeline data={candidate.political_history} position={candidate.position_full} image={candidate.img}/>
      </Dropdown>
    </div>
  </section>
  <p class="has-text-centered mt-6">
    <strong>¿Querés conocer las propuestas <br> del partido?</strong><br>
  <a href={partyUrl} class="button is-black is-active mt-4 is-uppercase"> Ver Partido</a>
  </p>
</main>
<style>
  section{
    color: black;
  }
  table{
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
  .binary {
    border: 2px #000 solid;
  }
  strong{
    font-weight: 500;
    color: black
  }
  table td{
    width: 50%;
  }
  h2{
    color: black;
    text-transform: uppercase;
  }
  .binary .active{
    background-color: #000;
    color: white;
  }
</style>