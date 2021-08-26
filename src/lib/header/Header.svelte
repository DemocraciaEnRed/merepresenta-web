<script>
	import { page } from '$app/stores';
	let openNav = false;

</script>
<header>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-end">
			<button class="navbar-burger" on:click={() => openNav = !openNav} aria-label="menu" aria-expanded="false" class:is-active="{openNav}">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</button>
		</div>
		<div class="navbar-menu" class:is-active={openNav}>
			<div class="navbar-start">
				<a class="navbar-item" sveltekit:prefetch class:is-active={$page.path === '/'} href="/">
					Home
				</a>
				<a class="navbar-item" class:is-active={$page.path === '/sobre-nosotros'} href="/sobre-nosotros">
					Sobre nosotros
				</a>
			</div>
		</div>
	</nav>
</header>