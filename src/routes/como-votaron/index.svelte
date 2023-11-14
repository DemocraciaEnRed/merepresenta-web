<script context="module">
  import API, {handleResponse} from "$lib/apiHandler";
  import { getLaws } from '$lib/graph-ql/laws';
  //load es un hook de svelte cuando carga la ruta
  export async function load({fetch}){
    const res = await API(fetch, getLaws);
    // handle response devuelve o error o props
    return handleResponse(res, "laws", "leyes");
    // const {party, tema} = page.params;
    // const res = await API(fetch ,getThemeProposalsByPartyId(tema, party))
    // return await handleResponse(res, "party", "partido");
  }
</script>
<script>
  import Dropdown from "$lib/common/Dropdown.svelte";
  import { directusImg } from "$lib/common/utils";
  export let laws;
  // import Votes from './_votes.svelte.delete';
</script>
<div class="section has-background-black has-text-centered">
  <div class="container">
    <img src="/abc.svg" alt="imagen de una mano deslizando un voto en una urna">
    <h1 class="title is-5 has-text-weight-normal has-text-white">Conocé cómo votó cada uno de los partidos en las siguientes leyes</h1>
  </div>
</div>
<div class="section white-background-desktop">
  <div class="container">
    {#each laws as law}
      <Dropdown  name={`(${law.year}) ${law.title.toUpperCase()}`}>
        <img src="{directusImg}{law.infografia.id}" class="image is-hidden-desktop mx-auto" width="500" alt={`(${law.year}) ${law.title.toUpperCase()}`}>
        <img src="{directusImg}{law.infografia_large}" class="image is-hidden-touch mx-auto" alt={`(${law.year}) ${law.title.toUpperCase()}`}>
        <div class="section has-text-centered">
          <p class="">Para más información, podes ver la fuente de los datos</p>
          <div class="buttons is-centered">
            <a href={law.url} target="_blank" class="button is-black has-text-weight-semibold is-uppercase">Link a fuente</a>
          </div>
        </div>
      </Dropdown>
    {/each}
  </div>
</div>

