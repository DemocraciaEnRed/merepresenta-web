<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import DropdownProposalAlianzas from '$lib/common/dropdown-proposal-alianzas.svelte';
	import DropdownProposal from '$lib/common/dropdown-proposal.svelte';
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByPartyList } from '$lib/graph-ql/candidates';
	
	export let proposals;
	export let partido;
	export let alianzas;

	let candidates

	if (alianzas) {
		proposals = [];
		let ejes = alianzas.map((alianza) => ({
			alianzaName: alianza.name,
			ejes: alianza.ejes
		}));
		alianzas.forEach((alianza) => {
			alianza.ejes.forEach((eje) => {
				if (proposals.some((eje_id) => eje_id.ejes_id.slug === eje.ejes_id.slug)) return;
				proposals.push({
					ejes_id: {
						name: eje.ejes_id.name,
						color: eje.ejes_id.color,
						slug: eje.ejes_id.slug
					}
				});
			});
			let ejesToFilter = [...alianza.ejes];
		});
	}
	const getCanditatesInAlianzas = async ()=>{
		if (alianzas) {
		const res = await API(fetch, getCandidatesByPartyList(alianzas.map(alianza => alianza.id)))
		const response = await handleResponse(res, 'candidates', 'candidato')

		candidates = response.props.candidates}

	}

	$: partido, getCanditatesInAlianzas()

	let policyUrl = `/plataformas/${$page.params.provincia}/temas/`;
</script>

{#if alianzas}
	{#each proposals as proposal}
		<DropdownProposalAlianzas {proposal} {alianzas} {candidates}/>
	{/each}
{:else}
	{#each proposals as proposal}
		<div class="container p-2">
			<DropdownProposal {proposal} {partido} />
		</div>
	{/each}
{/if}
