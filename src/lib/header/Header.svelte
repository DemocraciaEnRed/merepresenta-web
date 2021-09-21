<script>
	import { page } from '$app/stores';
	let openNav = false;
	import { slide } from 'svelte/transition';
	export let logoVisible = true;
</script>
<header>
	<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
		<div class="navbar-brand left-burger">
			<button class="navbar-burger" on:click={() => openNav = !openNav} aria-label="menu" aria-expanded="false" class:is-active="{openNav}">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</button>
			<a class="navbar-item" href="/" class:is-hidden={!logoVisible}>
				<img src="/static/logo-merepresenta.svg" id="logo" alt="logo">
			</a>	
		</div>
		{#if openNav}
		<div class="navbar-menu is-active"  transition:slide>
			<div class="navbar-start">
				<a class="navbar-item" sveltekit:prefetch class:is-active={$page.path === '/'} href="/">
					Home
				</a>
				<a class="navbar-item" class:is-active={$page.path === '/sobre-nosotros'} href="/sobre-nosotros">
					Sobre nosotros
				</a>
			</div>
		</div>
		{/if}
	</nav>
</header>

<style>
.navbar{
	border-bottom: 1px solid white;
	background-color: black;
}
#logo{
	max-width: 140px;
}
.navbar-brand.left-burger {
	align-items: flex-start;
	align-items: center;
	font-weight: 700;
}

.navbar-brand.left-burger .navbar-burger {
	margin-left: 0;
	margin-right: 0;
}
.navbar-burger span{
	transition-duration: 0.4s!important;
}
.navbar-menu{
	background-color: black
}
</style>