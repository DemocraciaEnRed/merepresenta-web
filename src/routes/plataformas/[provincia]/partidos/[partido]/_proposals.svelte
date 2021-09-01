<script>
  import Proposal from './_proposal.svelte';
  import { PoliciesIcons } from '$lib/common/utils';
  import Icon from '$lib/common/Icon.svelte';
  export let proposals = [];
</script>
{#each proposals as proposal}
  <h2>
    <Icon icon={PoliciesIcons[proposal.category]}/>
    {proposal.category}
  </h2>
  {#each proposal.items as policy}
    <Proposal proposal={policy}/>
  {/each}
{/each}