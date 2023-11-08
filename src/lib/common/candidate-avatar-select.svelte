<script>
	import { goto } from '$app/navigation';
	import { CandidateImg } from './utils';

	export let candidate;
	export let widthSize = '300'
	export let partyId;
	export let showPartyName = true
	export let extraClasses
	export let handleSelectParty =()=> goto(`/partidos-y-candidaturas/candidates/candidate/${candidate.id}`)
	let divWidth
</script>

<div class="is-relative candidate-wrapper {extraClasses}" on:click={handleSelectParty} data-party={candidate.partido.id} style={`height: calc(${divWidth}px *1.5)`} bind:offsetWidth={divWidth}>
	<button
		class="button-candidate"
		style="background: linear-gradient(45deg,{candidate.partido.color1},{candidate.partido
			.color2}); {partyId && partyId !== candidate.partido.id ? 'filter: opacity(0.5);':''}; {widthSize ? 'width:'+widthSize+'px':''}"
	    >   
		
		<div class="info-candidate">
			<figure class="image mx-auto candidate-avatar">
				<img src={CandidateImg(candidate)} alt={candidate.name} />
			</figure>
			{#if showPartyName}
			<span class="tag candidate-name has-text-weight-semibold has-background-black has-text-white p-5 w-100" style="{partyId && partyId !== candidate.partido.id && 'filter: opacity(0.5);'}">{candidate.partido.name}</span>
			{/if}
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
		border-radius: 20px;
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
		font-size: 1rem;
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
			padding: 5% 10%!important;
			height: auto;
			font-size: .85rem;
		}
		.button-candidate {
			width: 100%!important;
			height: 100%
	}
		.candidate-wrapper{
			width: 40%;
		}
		.candidate-avatar{
			height: 100%;
			display: flex;
			justify-content: center;
		}
		.candidate-avatar img{
			height: 100%;
			width: auto;
			max-width: none;
		}
		.info-candidate{
			height: 100%;
		}		
	}
</style>
