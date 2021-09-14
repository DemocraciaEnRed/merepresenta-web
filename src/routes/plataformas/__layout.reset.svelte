<script>
	import Header from '$lib/header/Header.svelte';
</script>
<Header logoVisible={true}/>
<main class="container p-2">
	<slot />
</main>
<footer></footer>