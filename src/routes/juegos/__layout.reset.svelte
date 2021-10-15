<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/index.svelte'
</script>
<Header logoVisible={!true}/>
<slot />
<Footer backgroundColor='white'/>