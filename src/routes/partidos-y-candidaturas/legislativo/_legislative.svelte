<script>
	import API, { handleResponse } from '$lib/apiHandler';
	import Dropdown from '$lib/common/Dropdown.svelte';
	import SelectDistrict from '$lib/common/SelectDistrict.svelte';
	import CardCandidatesGroup from '$lib/common/card-party/card-candidates-group.svelte';
	import SkeletonSelect from '$lib/common/skeleton-select.svelte';
	import { CandidateImg, cargosSlugs, cargosSlugsAbbreviated } from '$lib/common/utils';
	import { getCandidatesToLegislativeSection } from '$lib/graph-ql/candidates';
	import { getPartysByDistrict } from '$lib/graph-ql/partidos';
	import GobLegislative from '../_gob_legislative.svelte';
	let partys;
	let partyList;
	let candidates;
	async function handleSelect() {
		partys = null
		const res = await API(fetch, getPartysByDistrict(this.value));
		const response = await handleResponse(res, 'partidos', 'partido');
		const res2 = await API(fetch, getCandidatesToLegislativeSection(this.value));
		const response2 = await handleResponse(res2, 'candidates', 'candidato');
		partys = response.props.partidos.filter((partido) => partido.tipo === 'lista');
		candidates = response2.props.candidates
	}
</script>

<section class="">
	<section class="container p-2">
		<div class="has-text-centered  has-text-black">
			<img src="/deputies-chamber.png" alt="camara de diputados" />
			<h3 class="is-size-3 has-text-weight-medium">Poder Legislativo Nacional</h3>
			<h1 class="is-size-2 has-text-weight-medium has-text-black">¿Dónde votás?</h1>
		</div>
	</section>
	<div class="select-district mb-5">
		<SelectDistrict on:change={handleSelect} />
	</div>
	<div class="wrapper">
		{#if partys}
			<div class="dropdown-wrapper">
				
				{#each partys as party}
					
				<Dropdown class="has-text-black " darkMode backgroundHeader name={party.name}>
						
						<div class="is-flex is-flex-direction-row is-justify-content-center">
							<CardCandidatesGroup candidates={candidates.filter(candidate => candidate.partido.id=== party.id)} verticalTitle="Poder Ejecutivo Local" wrap fullWidth/>
						</div>
				</Dropdown>
				{/each}
			</div>
			{:else}
				<SkeletonSelect img="/candidate.svg" text="Elegí un distrito y conocé la fórmula completa" />
			{/if}
		</div>
	<GobLegislative/>
</section>

<style>
	.dropdown-wrapper {
		width: 80%;
		margin: auto;
	}
	.columns {
		width: 100%;
		justify-content: center;
	}
	.select-district {
		width: 100%;
		text-align: center;
	}
</style>
