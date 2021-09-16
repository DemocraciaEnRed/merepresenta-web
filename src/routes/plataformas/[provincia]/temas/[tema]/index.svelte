<script context="module">
  export function load({fetch, page}){
    return {
      props: {}
    }
  }
</script>
<script>
  import { page } from '$app/stores';
  import propuestas from '$lib/proposal-x-partido.json';
  let routePath;
  page.subscribe(({path})=>{
    routePath = path
  })
</script>
<section>
  {#each propuestas as proposal}
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src={proposal.party.logo} class="is-rounded" alt="{proposal.party.name} logo">
            </figure>
          </div>
          <div class="media-content">
            <p class="title-white is-4">{proposal.party.name}</p>
          </div>
        </div>
      </div>
      {#each proposal.items as item}
        <div class="propuesta">
          <h2>{item.title}</h2>
          <p>{item.intro}</p>
          <p class="has-text-right">
            <a class="button" href="{routePath}/propuestas/{item.slug}">Leer más</a>
          </p>
        </div>
      {/each}
    </div>
  {/each}
</section>