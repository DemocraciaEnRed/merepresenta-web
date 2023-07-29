<script context="module">
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByCargo } from '$lib/graph-ql/candidates';
	export async function load({ fetch }) {
		const res = await API(fetch, getCandidatesByCargo('presidente'));
		const candidates = await handleResponse(res, 'candidates', 'candidato');
		return candidates;
	}
</script>

<script>
	import ProposalCarousel from './_proposal-carousel.svelte';

	export let candidates;
</script>

<main class="has-background-white white-background-desktop">
	<div class="section tetris-background">
		<div class="container">
			<div class="has-text-centered has-text-black">
				<h1 class="is-size-2 has-text-weight-medium has-text-black">
					Precandidatos Presidenciales
				</h1>
				<h3 class="is-size-4 has-text-weight-light">
					Explora los programa electoral de los precandidatos del partido de tu interés.
				</h3>
			</div>
			<ProposalCarousel {candidates} />
		</div>
	</div>
	<div class="section tetris-background">
		<div class="container">
			<div class="has-text-centered has-text-black">
				<h1 class="is-size-2 has-text-weight-medium has-text-black">
					¿Querés saber en que se diferencian?
				</h1>
			</div>
			<div class="has-text-centered my-5">
				<a href="/plataformas/partidos" class="button is-rounded is-black">COMPARA POR PARTIDO</a>

			</div>
		</div>
	</div>
</main>
