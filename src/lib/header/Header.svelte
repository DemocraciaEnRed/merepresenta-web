<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	let openNav = false;
	// export let logoVisible = true;
	let path
	let provincia
	page.subscribe((newval)=>{
		path = newval.path;
		provincia = newval.params.provincia || 'donde-votas';
	})
	
</script>
<header id="the-header" class="has-background-black m-0 is-hidden-touch">
	<div class="container py-5">
		<img src="/logo-merepresenta.svg" class="image mx-auto p-4 mb-5" alt="">
		<nav class="level">
			<p class="level-item has-text-centered" class:active={path==="/"}>
				<a class="has-text-white" href="/">Inicio</a>
			</p>
			<p class="level-item has-text-centered" class:active={path.includes('/partidos-y-candidates')}>
				<a class="has-text-white" href="/partidos-y-candidates/{provincia}">Partidos y candidaturas</a>
			</p>
			<p class="level-item has-text-centered" class:active={path.includes('/plataformas')}>
				<a class="has-text-white" href="/plataformas/{provincia}">Propuestas</a>
			</p>
			<p class="level-item has-text-centered" class:active={path.includes('/abc-electoral')}>
				<a class="has-text-white" href="/abc-electoral">Abc Electoral</a>
			</p>
			<p class="level-item has-text-centered" class:active={path.includes('/juegos')}>
				<a class="has-text-white" href="/juegos">Juegos</a>
			</p>
			<p class="level-item has-text-centered" class:active={path.includes('/metodologias')}>
				<a class="has-text-white" href="/metodologias">Metodología</a>
			</p>
			<p class="level-item has-text-centered" class:active={path.includes('/acerca-de')}>
				<a class="has-text-white" href="/acerca-de">Acerca de</a>
			</p>
		</nav>
	</div>
</header>
<header id="mobile-header" class="has-background-black p-4 is-hidden-desktop">
	<div class="is-flex is-flex-direction-row is-align-items-center">
		<a href on:click={() => openNav = !openNav}><i class="fas fa-bars fa-lg fa-fw has-text-white"></i></a>
		<a href="/">
			<img src="/logo-merepresenta.svg" class="image mx-4" width="180" alt="">
		</a>
		
	</div>
		
</header>
{#if openNav}
	<aside class="sidebar-menu" transition:fade="{{duration: 100}}">
		<div class="sidebar-container">
			<div class="exit-button">
				<i class="fas fa-times fa-2x my-4 mr-5 has-text-white is-clickable" on:click={() => openNav = !openNav}></i>
			</div>
			<div class="sidebar-menu-list is-flex is-flex-direction-column is-justify-content-start pt-6">
				
				<img src="/logo-merepresenta.svg" class="image mx-auto mb-5 mt-6 px-6" width="400"alt="">
				<ul class="">
					<li class:active={path==="/"} >
						<a href="/" on:click={() => openNav = !openNav}>Inicio</a>
					</li>
					<li class:active={path.includes('/partidos-y-candidates')}>
						<a href="/partidos-y-candidates/{provincia}" on:click={() => openNav = !openNav}>Partidos y candidaturas</a>
					</li>
					<li class:active={path.includes('/plataformas')}>
						<a href="/plataformas/{provincia}" on:click={() => openNav = !openNav}>Propuestas</a>
					</li>
					<li class:active={path.includes('/abc-electoral')}>
						<a href="/abc-electoral" on:click={() => openNav = !openNav}>Abc Electoral</a>
					</li>
					<li class:active={path.includes('/juegos')}>
						<a href="/juegos" on:click={() => openNav = !openNav}>Juegos</a>
					</li>
					<li class:active={path.includes('/metodologias')} >
						<a href="/metodologias" on:click={() => openNav = !openNav}>Metodología</a>
					</li>
					<li class:active={path.includes('/acerca-de')} >
						<a href="/acerca-de" on:click={() => openNav = !openNav}>Acerca de</a>
					</li>
				</ul>
			</div>
		</div>
		
	</aside>
{/if}
<style>
#the-header, #mobile-header{
	border-bottom: 2px solid #FFF;
}
#the-header .level-item a {
	text-transform: uppercase;
}
#mobile-header{
	position:sticky;
	z-index: 100;
	top: 0;
}
.sidebar-menu{
	position:fixed;
	top:0;
	width: 100vw;
	background-color: #000;
	z-index: 100;
	height: 100vh
}
.sidebar-menu .sidebar-container{
	position: relative;
}
.sidebar-container .exit-button{
	position: absolute;
	right: 0;
	top: 0;
}
.sidebar-container .sidebar-menu-list{
	height: 100vh;
}


.sidebar-menu-list li{
	border-bottom: 1px solid white;
	padding: 10px;
}
.sidebar-menu-list .active{
	background-color: rgba(255,255,255, 0.19);
	text-shadow: 0px 0px 11px #fff;
	font-weight: bold;
}
.active a{
	font-weight: 500;
	text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff;
}
.sidebar-menu-list li a{
	text-transform: uppercase;
	color: white;
}
.sidebar-menu-list li a::before{
	content: url('/inactive-link.png');
	padding-right: 10px;
}
.sidebar-menu-list .active a::before{
	content: url('/active-link.png');
	padding-right: 10px;
}
.sidebar-menu-list li a:hover{
	background-color:transparent
}

</style>
