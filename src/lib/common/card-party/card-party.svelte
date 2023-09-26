<script>
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByParty } from '$lib/graph-ql/candidates';
	import { getPartyById } from '$lib/graph-ql/partidos';
	import { onMount } from 'svelte';
	import { PartyImg } from '../utils';
	import NacionCandidateCard from '../nacion-candidate-card.svelte';

	export let showListButton;
	export let showProposalButton;
	export let district;
	export let partySelected;
	let partyCandidates;
	export let verticalTitle
	const getCandidates = async () => {
		if (partySelected) {
			const res2 = await API(fetch, getCandidatesByParty(partySelected.id));
			const response2 = await handleResponse(res2, 'candidatos', 'candidato');
	
			partyCandidates = response2.props.candidatos;
		}
	};
	$: partySelected, getCandidates()
</script>

{#if partySelected && partyCandidates}
	<div
		class="is-flex is-flex-direction-column is-align-items-center mx-auto {district.slug ===
		'nacion'
			? 'card-party-wrapper'
			: 'card-party-wrapper-legislative'}"
	>
		{#if district.slug === 'nacion'}
			<div class="card card-party is-flex ">
				<div class="card-header is-align-items-center is-justify-content-center">
					<!-- <div class="image-wrapper">
						<div class="image-party is-rounded  m-2" style="background-image: url()">
							<img src={PartyImg(partySelected)} alt="{partySelected.name}" />
						</div>
					</div> -->
					<!-- <div class="name-partido">
						<p class="card-header-title pb-2 is-size-5 has-text-white has-text-weight-semibold pl-0">
							{partySelected.name}
						</p>
						<p class=" pb-4 has-text-white is-size-6 has-text-weight-light pl-0">
							{#each partySelected.alianzas as alianza}
								{alianza.related_partido_id.name}
							{/each}
						</p>
					</div> -->
					<div class="is-uppercase has-text-white has-text-vertical verticalTitle">
						{verticalTitle}
					</div>
				</div>
				<div
					class="card-content p-0 columns is-mobile is-multiline is-justify-content-center is-flex is-flex-wrap-wrap m-0"
				>
				{#if partyCandidates}
					{#each partyCandidates as candidate}
					<div class="column is-half has-text-centered p-0 candidate-container is-flex is-flex-direction-column ">
						<NacionCandidateCard {candidate} />

					</div>
					{/each}
					
				{/if}
				</div>
			</div>
		{:else}
		{#if partyCandidates.some(candidate => candidate.cargo === 'diputado-nacional')||partyCandidates.some(candidate => candidate.cargo === 'diputado-nacional')} 
			{#if partyCandidates.some(candidate => candidate.cargo === 'senador-nacional')}
			<div class="card card-party my-1 is-flex">
				<div class="card-header is-align-items-center is-justify-content-center">
					<div class="is-uppercase has-text-white has-text-vertical verticalTitle">
						P.L. Senadores
					</div>
				</div>
				<div class="card-content p-0 columns is-mobile is-multiline is-justify-content-center is-flex is-flex-wrap-wrap m-0">
					{#each partyCandidates as candidate}
						{#if  candidate.cargo === 'senador-nacional'}
						<div class="column is-half has-text-centered p-0 candidate-container is-flex is-flex-direction-column ">

							<NacionCandidateCard {candidate} />
						</div>
						{/if}
					{/each}
				</div>
			</div>
			{/if}
			{#if partyCandidates.some(candidate => candidate.cargo === 'diputado-nacional')}
			<div class="card card-party my-1 is-flex">
				<div class="card-header is-align-items-center is-justify-content-center">
					<div class="is-uppercase has-text-white has-text-vertical verticalTitle">
						P.L. Diputados
					</div>
				</div>
				<div class="card-content p-0 columns is-mobile is-multiline is-justify-content-center is-flex is-flex-wrap-wrap m-0">
					{#each partyCandidates as candidate}
						{#if candidate.cargo === 'diputado-nacional'}
						<div class="column is-half has-text-centered p-0 candidate-container is-flex is-flex-direction-column ">
							<NacionCandidateCard {candidate} />

						</div>	
						{/if}
					{/each}
				</div>
			</div>
			{/if}
		{/if}
		{/if}
		<!-- <div class="actions is-flex is-justify-content-center my-6 is-centered">
			{#if showListButton}
				<a
					href="/partidos-y-candidaturas/candidates/{partySelected.alianzas[0].related_partido_id.id}"
					class=" button is-black is-rounded is-uppercase ">Ver Interna</a
				>
			{/if}
			{#if showProposalButton}
				<a
					href="/propuestas/partidos/{partySelected.id}"
					class=" button is-black is-rounded is-uppercase is-outlined has-background-white view-proposal"
					>VER PROPUESTAS</a
				>
			{/if}
		</div> -->
	</div>
{:else}
	<div class="fill-select is-flex is-justify-content-center" >
		<progress class="progress is-medium is-dark" max="100"></progress>
	</div>
{/if}

<style>
	.fill-select {
		height: 575px;
		width: 100%;
	}
	.fill-select .progress {
		width: 80%;
	}

	.card-party-wrapper {
		width: 80%;
	}
	.card-party-wrapper-legislative {
		width: 90%;
	}

	.card-party {
		width: 80%;
		flex: 1;
	}
	.card-party .card-header {
		background-color: #242A38;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
		border-top-right-radius: 0;
		width: 2em;
	}
	.card-content{
		flex: 1;
	}

	.has-text-vertical{
  -webkit-transform: rotate(-90deg); 
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.candidate-container {
		position: relative;
	}
	.candidate-container:last-of-type {
		border-bottom-right-radius: 10px;
		border-top-right-radius: 10px;
	}
	.candidate-container:not(:last-of-type):after {
	content: "";
	background: #C4C4C4;
	position: absolute;
	bottom: 25%;
	right: 0;
	height: 50%;
	width: 1px;
	}

	@media screen and (max-width: 768px) {
		.candidate-container{
			border: 1px solid #000;
			
		}
		.candidate-container:last-of-type {
			border-left: none;
		}
		.candidate-container:nth-of-type(odd):after {
			content: none;
			background: #C4C4C4;
			position: absolute;
			bottom: 25%;
			right: 0;
			height: 50%;
			width: 1px;
			}
		.candidate-container:last-of-type {
		border-right: 1px solid black;
		border-bottom-right-radius: 10px;
		border-top-right-radius: 0;
		}
		.candidate-container:first-of-type {
		border-bottom-left-radius: 10px;
		}
	}

	@media screen and (max-width: 768px) {
		.card-party-wrapper {
			width: 100%;
		}
		.card-party-wrapper-legislative {
		width: 100%;
		}
		/* .actions {
			width: 90%;
			flex-direction: column;
		}
		.actions a {
			margin-bottom: 8px;
			width: 100%;
		} */

		.card-party {
			width: 100%;
			flex-direction: column;
		}
		.card-party .card-header {
			border-bottom-left-radius: 0;
			border-top-right-radius: 10px;
			width: auto
		}
		.has-text-vertical{
			padding: 8px 0;
			transform: none;
		}

	}
</style>
