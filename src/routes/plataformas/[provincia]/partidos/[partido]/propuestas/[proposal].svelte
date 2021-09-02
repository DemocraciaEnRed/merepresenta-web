<script context="module">
  //export async function load({ page, fetch }) {
  export function load({ page, fetch }) {
    const id = page.params.proposal
    //await feth(id);
		return {  
			props: {
				id
			}
		};
	}
</script>
<script>
  import { page } from '$app/stores';
  import Icon from '$lib/common/Icon.svelte';
  import { PoliciesIcons } from '$lib/common/utils';
  import proposal from '$lib/proposal.json';
  
  let district = $page.params.provincia;

</script>
<section>
  <h2>{proposal.party_owner}</h2>
  <p>{proposal.intro}</p>
  <div class="card">
    <h1> 
      <Icon icon={PoliciesIcons[proposal.category]}/> {proposal.category} 
      <span class="type">{proposal.type}</span>
    </h1>
    <p>{proposal.description}</p>
    {#if proposal.orignal_url}
      <p><strong>Podés leer la propuesta completa <br/> en su web.</strong></p>
      <a class="button is-uppercase" href={proposal.original_url}>
        Ir a la plataforma oficial
      </a>
    {/if}
  </div>

  {#if proposal.other_links.length > 0}
    <p>
      <strong>
        Si te interesa la tematica, te invitamos a chequear el siguiente material
      </strong>
    </p>
    {#each proposal.other_links as resource}
      <p>
        <a href={resource.url}>{resource.name}</a>
      </p>
    {/each}
  {/if}
  <p>Conocé el resto de los partidos y sus propuestas</p>
  <a href="/plataformas/{district}">
    VOLVER A PLATAFORMAS ELECTORALES
  </a>
</section>
