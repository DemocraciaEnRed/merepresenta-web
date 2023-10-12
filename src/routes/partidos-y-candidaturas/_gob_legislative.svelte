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

{#if gobernors}
	<hr class="w-75 mx-auto mt-6" />

	
		<section class="container p-2">
			<div class="columns mx-auto">
				<div class="column">
					<div class="card legislative-card">
						<header class="card-header">
							<p class="card-header-title is-justify-content-center is-uppercase">
								Provincia de Buenos Aires
							</p>
						</header>
						<div class="card-content px-0 pb-0">
							<div class="content p-3">
								Conocé las candidaturas a Gobernador de PBA, junto con sus propuestas
							</div>
							<div class="is-flex">
								{#each gobernors.filter((gob) => gob.distrito_nacional.slug === 'buenos-aires') as gob}
									<div
										style="background-image: url({CandidateImg(gob)});"
										alt=""
										class="image-gob"
									/>
								{/each}
							</div>
						</div>
						<footer class="card-footer has-background-black">
							<a href="/partidos-y-candidaturas/{gobernors.filter((gob) => gob.distrito_nacional.slug === 'buenos-aires')[0].distrito_nacional.slug}" class="card-footer-item is-uppercase has-text-white">pba</a>
						</footer>
					</div>
				</div>
				<div class="column">
					<div
						class="card legislative-card is-flex is-flex-direction-column is-justify-content-space-between"
					>
						<header class="card-header">
							<p class="card-header-title is-justify-content-center is-uppercase">
								PODER LEGISLATIVo
							</p>
						</header>
						<img src="/deputies-chamber.png" alt="" class="mx-auto" style="height: auto; max-width:50%">
						<div class="card-content pt-1">
							<div class="content">
								Conocé las candidaturas de P.L. que no pertenecen a ninguna lista, explóralas por
								distrito
							</div>
						</div>
						<div class="is-flex is-justify-content-center mb-6">
							<a
								href="/partidos-y-candidaturas/legislativo"
								class="button is-black is-rounded is-uppercase">PODER LEGISLATIVO</a
							>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card legislative-card">
						<header class="card-header">
							<p class="card-header-title is-justify-content-center is-uppercase">Ciudad de Buenos Aires</p>
						</header>
						<div class="card-content px-0 pb-0">
							<div class="content p-3">
								Conocé las candidaturas a Jefes/as de Gobierno de CABA, junto con sus propuestas
							</div>
							<div class="is-flex">
								{#each gobernors.filter((gob) => gob.distrito_nacional.slug === 'caba') as gob}
									<div
										style="background-image: url({CandidateImg(gob)});"
										alt=""
										class="image-gob"
									/>
								{/each}
							</div>
						</div>
						<footer class="card-footer has-background-black">
							<a href="/partidos-y-candidaturas/{gobernors.filter((gob) => gob.distrito_nacional.slug === 'caba')[0].distrito_nacional.slug}" class="card-footer-item is-uppercase has-text-white">caba</a>
						</footer>
					</div>
				</div>
			</div>
		</section>
{/if}

<style>
	.legislative-card {
		height: 100%;
	}
	.image-gob {
		width: 25%;
		height: 150px;
		background-position: center;
		background-size: cover;
	}
    .card{
        border-radius: 25px;
        overflow: hidden;
    }
</style>
