<script>
  import { page } from "$app/stores";
  export let candidate;
</script>
<div class="has-text-centered">
  <p class="mt-4">
    Conocé las propuestas de {candidate.partido.name}
  </p>
  <a 
    href="/partidos-y-candidates/{$page.params.provincia}/partidos/{candidate.partido.id}" 
    class="button is-black mb-4 is-uppercase">
    Ver Partido
  </a>
  <p class="mt-4">Conocé cómo votó su partido en las ultimas leyes</p>
  <a href="/como-votaron" class="button is-black is-uppercase">
    Ver Votaciones
  </a>
</div>