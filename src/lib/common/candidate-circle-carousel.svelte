<script>
	import Icon from '$lib/common/Icon.svelte';
	import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';
	import CandidateCircle from '$lib/common/candidate-circle.svelte';
	import CandidateAvatarSelect from '$lib/common/candidate-avatar-select.svelte'
	import { shuffleArray } from './utils';

	export let candidates;
	export let changeParty;
	let randomCandidates = shuffleArray(candidates);

	// Valor reactivo para controlar el ancho de la ventana
	
	
	
	let partyId;

	function handleSelectParty(){
		partyId = this.dataset.party
		changeParty.bind(this)()
	}


</script>

<div class="is-flex is-justify-content-space-evenly">
	{#each randomCandidates as candidate}
		<CandidateAvatarSelect {partyId} {candidate} {handleSelectParty} />
		<!-- <CandidateCircle {partyId} {candidate} {handleSelectParty} /> -->
	{/each}

</div>

<style>
	.arrow-wrapper {
		display: flex;
		align-items: center;
	}
	.circle_arrow_button {
		cursor: pointer;
		width: 50px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		font-size: 3rem;
		border: none;
	}
	@media screen and (max-width: 768px) {
		.circle_arrow_button {
			cursor: pointer;
			height: 40px;
			width: 40px;
			font-size: 1.8rem;
		}
	}
</style>
