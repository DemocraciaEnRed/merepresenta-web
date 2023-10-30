<script>
	import API, { handleResponse } from '$lib/apiHandler';
	import { CandidateImg } from '$lib/common/utils';
	import { getCandidatesByCargo } from '$lib/graph-ql/candidates';
	import { onMount } from 'svelte';
	let gobernors;
	async function load() {
		const res = await API(fetch, getCandidatesByCargo('gobernador'));
		const response = await handleResponse(res, 'candidates', 'candidato');
		gobernors = response.props.candidates;
	}
	onMount(() => {
		load();
	});
</script>

<hr class="w-75 mx-auto mt-6" />
<section class="container ">
	<div class="card w-75 mx-auto">
		<header class="card-header p-2">
		  <p class="card-header-title is-uppercase is-justify-content-center has-text-centered">
			¿Cómo queda la cámara de diputados tras las generales?
		  </p>
		  
		</header>
		<div class="card-content">
		  <div class="content has-text-centered p-4 p-1-touch">
			Conocé el detalle de la composición de las cámaras, y quienes entran efectivamente por cada partido. Además te damos algunos datos de la composición final de cada partido.
		  </div>
		</div>
		<footer class="card-footer is-justify-content-center pb-5">
		  <a href="#" class="button is-rounded is-black boton">PODER LEGISLATIVO</a>
		</footer>
	  </div>
</section>

<style>
	
    .card{
        border-radius: 25px;
    }
	.boton{
		width: 75%;
	}
	@media screen and (max-width: 768px){
		.boton{
			width: auto;
		}
	}
	.card-footer{
		border: none;
	}
</style>
