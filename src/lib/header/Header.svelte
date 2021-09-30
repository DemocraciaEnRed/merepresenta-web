<script>
	import { page } from '$app/stores';
	let openNav = false;
	import { slide } from 'svelte/transition';
	export let logoVisible = true;
	let path
	let provincia
	page.subscribe((newval)=>{
		path = newval.path;
		provincia = newval.params.provincia || 'donde-votas';
	})
	
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
				<img src="/logo-merepresenta.svg" id="logo" alt="logo">
			</a>	
		</div>
		{#if openNav}
		<aside class="menu" transition:slide>
			<ul class="menu-list">
				<li class:active={path==="/"} >
					<a href="/" on:click={() => openNav = !openNav}>Inicio</a>
				</li>
				<li class:active={path===`/partidos-y-candidates/${provincia}`}>
					<a href="/partidos-y-candidates/{provincia}" on:click={() => openNav = !openNav}>Partidos y candidates</a>
				</li>
				<li class:active={path===`/plataformas/${provincia}`}>
					<a href="/plataformas/{provincia}" on:click={() => openNav = !openNav}>propuestas</a>
				</li>
				<li class:active={path==='/abc-electoral'}>
					<a href="/abc-electoral" on:click={() => openNav = !openNav}>Abc Electoral</a>
				</li>
				<!--
					JUAN CARLOS FALOPA
					<li>
						<a href>Juegos</a>
					</li>
					<li>
					<a href>Quienes somos</a>
				</li>
				<li>
					<a href>Por que lo hacemos</a>
				</li>
				<li>
					<a href>Metodología</a>
				</li>
				-->
			</ul>
		</aside>
		<div class="rest"></div>
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
.menu{
	display: inline-block;
	width: 90%;
	height: 100%;
	position: fixed;
	background-color: black;
}
.menu-list li{
	border-bottom: 1px solid white;
	padding: 10px;
}
.menu-list .active{
	background-color: rgba(255,255,255, 0.19);
	text-shadow: 0px 0px 11px #fff;
	font-weight: bold;
}
.active a{
	text-shadow:
    /* White glow */
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
}
.menu-list{
	border-top: 1px solid white;
}
.menu-list li a{
	text-transform: uppercase;
	color: white;
}
.menu-list li a::before{
	content: url('/inactive-link.png');
	padding-right: 10px;
}
.menu-list .active a::before{
	content: url('/active-link.png');
	padding-right: 10px;
}
.menu-list li a:hover{
	background-color:transparent
}
</style>