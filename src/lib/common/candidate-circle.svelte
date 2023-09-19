<script>
	import { CandidateImg } from './utils';

	export let candidate;
	export let changeParty;
	export let partyId;
</script>

<div class="is-relative candidate-wrapper" on:click={changeParty} data-party={candidate.partido.id}>
	<button
		class="button-candidate"
		style="background: linear-gradient(45deg,{candidate.partido.color1},{candidate.partido
			.color2}); {partyId && partyId !== candidate.partido.id && 'filter: opacity(0.5);'}"
	>
		<figure class="image mx-auto candidate-avatar">
			<img class="is-rounded" src={CandidateImg(candidate)} alt={candidate.name} />
		</figure>
	</button>
	<span class="tag candidate-name">{candidate.partido.name}</span>
</div>

<style>
	.button-candidate {
		padding: 4px;
		border-radius: 999px;
		border: none;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		height: 90px;
		width: 90px;
	}

	.candidate-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.candidate-name {
		text-align: center;
		background-color: transparent;
		padding-top: 4px;
		width: 50%;
		flex: 1;
		white-space: pre-wrap;
		/* display: flex;
		flex-direction: column;
		justify-content: start; */
	}
	

	@media screen and (max-width: 768px) {
		.candidate-name {
			top: auto;
			bottom: 0;
		}
		.button-candidate {
			height: 70px;
			width: 70px;
		}
	}
</style>
