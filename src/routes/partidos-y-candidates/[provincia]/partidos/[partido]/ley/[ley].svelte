<script>
  import { page } from '$app/stores';

  import votes from '$lib/law-votes-by-party.json';
  import Vote from './_vote.svelte'
  
  let currentCandidate = {};
  let candidateRoute;
  let modalisopen = false
  function openModal(vote){
    currentCandidate = vote.candidate
    modalisopen = true
    candidateRoute = `/partidos-y-candidates/${$page.params.provincia}/candidates/${votes.party.slug}`;
  }
  
</script>
<h1>{votes.party.name}</h1>
<strong>¿Cómo votaron?</strong>
<section>
  <Vote def="positivo"/> A favor
  <Vote def="abstencion"/> No datos
  <Vote def="negativo"/> En contra
</section>
<strong>{votes.law.name}</strong>
<section>
  {#each votes.items as vote }
    <span class="flex">
      <Vote vote={vote} openModal={(vote)=>{openModal(vote)}}/>
    </span>
    
  {/each}
</section>
<div class="modal" class:is-active={modalisopen}>
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box has-text-centered">
      <img src={currentCandidate.img} class="is-rounded candidate-img" alt="Foto retrato de {currentCandidate.name}"/>
      <p>{currentCandidate.name}</p>
      <p>{currentCandidate.position}</p>
      <a href="{candidateRoute}/candidate/{currentCandidate.id}">VER CANDIDATE</a>
    </div>
  </div>
  <button class="modal-close is-large" on:click={()=>{modalisopen = false}} aria-label="close"></button>
</div>