<script>
  import { page } from "$app/stores";
  import candidate from '$lib/candidate.json'
  import Dropdown from "$lib/common/Dropdown.svelte";
  import Timeline from './_timeline.svelte';
  import Twitter from "./_twitter.svelte";

  const partyUrl = `/partidos-y-candidates/${$page.params.provincia}/partidos/${$page.params.partido}`;

</script>
<section>
  <div>
    <img src={candidate.img} alt="Foto perfil de {candidate.fullname}" class="candidato-img">
  </div>
  <div>
    <h2>{candidate.fullname}</h2>
    <p>{candidate.position} - {candidate.party.name}</p>
    <a href={partyUrl}> Ver Partido</a>
  </div>
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
  <div class="mt-4">
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
  <div class="mt-4">
    <Dropdown name="Twitter">
        <Twitter id={candidate.twitter}/>
    </Dropdown>
  </div>
  <div class="mt-4">
    <Dropdown name="Recorrido político">
        <Timeline data={candidate.political_history} position={candidate.position_full} image={candidate.img}/>
    </Dropdown>
  </div>
</section>
<style>
  .candidato-img{
    width: 60px;
    border-radius: 50%;
  }
  .binary {
    border: 2px #000 solid;
  }
  table td{
    width: 50%;
  }
  .binary .active{
    background-color: #000;
    color: white;
  }
</style>