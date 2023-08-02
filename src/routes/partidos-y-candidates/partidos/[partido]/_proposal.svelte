<script>
	import { page } from '$app/stores';
	import DropdownProposalAlianzas from '$lib/common/dropdown-proposal-alianzas.svelte';
	import DropdownProposal from '$lib/common/dropdown-proposal.svelte';
	export let proposals;
	export let partido;
	export let alianzas;
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

	let policyUrl = `/plataformas/${$page.params.provincia}/temas/`;
</script>

{#if alianzas}
	{#each proposals as proposal}
		<DropdownProposalAlianzas {proposal} {alianzas} />
	{/each}
{:else}
	{#each proposals as proposal}
		<div class="container p-2">
			<DropdownProposal {proposal} {partido} />
		</div>
	{/each}
{/if}
