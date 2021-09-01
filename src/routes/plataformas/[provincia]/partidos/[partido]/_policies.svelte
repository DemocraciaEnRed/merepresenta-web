<script>
  // Files starting with _ are ignored by the router
  import Icon from '$lib/common/Icon.svelte';
  import {PoliciesIcons} from '$lib/common/utils';
  export let proposals;
</script>

<!--POLICIES-->
<div class="buttons mt-6">
  {#each proposals as policy}
  <button class="button is-primary">
    <Icon icon={PoliciesIcons[policy.category]}/>
  </button> 
 {/each}
</div>