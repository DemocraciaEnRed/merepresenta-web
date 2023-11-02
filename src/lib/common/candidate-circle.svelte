<script>
	import { goto } from '$app/navigation';
	import { CandidateImg } from './utils';

	export let candidate;
	export let imageSize = '100px'
	export let partyId;
	export let showPartyName = true
	export let handleSelectParty =()=> goto(`/partidos-y-candidaturas/candidates/candidate/${candidate.id}`)
</script>

<div class="is-relative candidate-wrapper mx-auto" on:click={handleSelectParty} data-party={candidate.partido.id}>
	<button
		class="button-candidate"
		style="background: linear-gradient(45deg,{candidate.partido.color1},{candidate.partido
			.color2}); height:{imageSize}; width:{imageSize}; {partyId && partyId !== candidate.partido.id && 'filter: opacity(0.5);'}"
	>
		<figure class="image mx-auto candidate-avatar">
			<img class="is-rounded" src={CandidateImg(candidate)} alt={candidate.name} />
		</figure>
	</button>
	{#if showPartyName}
		<span class="tag candidate-name has-text-weight-semibold" style="{partyId && partyId !== candidate.partido.id ? 'filter: opacity(0.5);':''}">{candidate.partido.name}</span>
		
	{/if}
</div>

<style>
	.button-candidate {
		padding: 5px;
		border-radius: 999px;
		border: none;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		margin: 0 24px;
		height: 100px;
		width: 100px;
	}

	.candidate-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: min-content;
	}

	.candidate-name {
		text-align: center;
		background-color: transparent;
		padding: 0;
		padding-top: 4px;
		font-size: 0.85rem;
		flex: 1;
		white-space: pre-wrap;
		
	}
	

	@media screen and (max-width: 768px) {
		.candidate-name {
			top: auto;
			width: 95%;
			bottom: 0;
		}
		.button-candidate {
		height: 80px!important;
		width: 80px!important;
	}
		.button-candidate {
			height: 80px;
			width: 80px;
		}
	}
</style>
