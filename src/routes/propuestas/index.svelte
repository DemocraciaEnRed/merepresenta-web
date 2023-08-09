<script context="module">
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByCargo } from '$lib/graph-ql/candidates';
	import ProposalCarousel from './_proposal-carousel.svelte';
	export async function load({ fetch }) {
		const res = await API(fetch, getCandidatesByCargo('presidente'));
		const candidates = await handleResponse(res, 'candidates', 'candidato');
		return candidates;
	}
</script>

<script>

	export let candidates;
</script>

<main class="has-background-white white-background-desktop">
	<div class="section tetris-background">
		<div class="container">
			<div class="has-text-centered has-text-black">
				<h1 class="is-size-2 has-text-weight-medium has-text-black">
					Propuestas a nivel Nacional
				</h1>
				<h3 class="is-size-4 has-text-weight-light">
					Explorá las propuestas electorales de cada precandidatura
				</h3>
			</div>
			<ProposalCarousel {candidates} />
		</div>
	</div>
	<div class="section tetris-background">
		<div class="container">
			<div class="has-text-centered has-text-black">
				<h1 class="is-size-2 has-text-weight-medium has-text-black">
					¿Querés saber en qué se diferencian?
				</h1>
			</div>
			<div class="has-text-centered my-5">
				<a href="/propuestas/comparativa" class="button is-rounded is-black is-uppercase">Compará por partido</a>

			</div>
		</div>
	</div>
</main>
