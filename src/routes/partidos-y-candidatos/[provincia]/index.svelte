<script>
  import partidos from '$lib/partidos.json';
  import { page } from "$app/stores";
	let nextUrl = `/partidos-y-candiatos/${$page.params.provincia}`
</script>
<section>
  {#each partidos as partido}
    <div>
      <h1>
        {partido.name}
      </h1>
      <div class="buttons">
        <a href="{nextUrl}/candidates/{partido.slug}" class="button">Ver candidates</a>
        <a href="{nextUrl}/partidos/{partido.slug}" class="button">Ver partido</a>
      </div>
    </div>
  {/each}
  </section>