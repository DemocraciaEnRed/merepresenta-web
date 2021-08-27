<script>
  import SelectDistrict from '$lib/common/SelectDistrict.svelte';
  import Header from '$lib/header/Header.svelte';
</script>
<Header />
<div class="is-flex is-justify-content-flex-end">
  <SelectDistrict/>
</div>
<main>
	<slot></slot>
</main>
<footer></footer>