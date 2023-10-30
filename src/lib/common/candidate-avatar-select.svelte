<script>
	import { goto } from '$app/navigation';
	import { CandidateImg } from './utils';

	export let candidate;
	export let imageSize = '100px'
	export let partyId;
	export let showPartyName = true
	export let handleSelectParty =()=> goto(`/partidos-y-candidaturas/candidates/candidate/${candidate.id}`)
</script>

<div class="is-relative candidate-wrapper" on:click={handleSelectParty} data-party={candidate.partido.id}>
	<button
		class="button-candidate"
		style="background: linear-gradient(45deg,{candidate.partido.color1},{candidate.partido
			.color2}); {partyId && partyId !== candidate.partido.id ? 'filter: opacity(0.5);':''}"
	    >   
    <div class="info-candidate">
		<figure class="image mx-auto candidate-avatar">
			<img src={CandidateImg(candidate)} alt={candidate.name} />
		</figure>
		<span class="tag candidate-name has-text-weight-semibold has-background-black has-text-white p-5 w-100" style="{partyId && partyId !== candidate.partido.id && 'filter: opacity(0.5);'}">{candidate.partido.name}</span>

    </div>
	</button>
</div>

<style>
	.button-candidate {
		padding: 5px;
		border-radius: 25px;
		border: none;
		overflow: hidden;
		cursor: pointer;
        width: 300px;
        height: auto;
	}
    .info-candidate{
        position: relative;
		border-radius: 25px;
        overflow: hidden;

    }
    
	.candidate-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.candidate-name {
        position: absolute;
        bottom: 0;
        left: 0;
		text-align: center;
		background-color: transparent;
		font-size: 0.85rem;
		flex: 1;
		white-space: pre-wrap;

		/* display: flex;
		flex-direction: column;
		justify-content: start; */
	}
	

	@media screen and (max-width: 768px) {
		.candidate-name {
			top: auto;
			width: 95%;
			bottom: 0;
		}
		.button-candidate {
		height: 170px!important;
		width: 170px!important;
	}
		
	}
</style>
