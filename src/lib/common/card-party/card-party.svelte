<script>
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByParty } from '$lib/graph-ql/candidates';
	import { getPartyById } from '$lib/graph-ql/partidos';
	import { onMount } from 'svelte';
	import { PartyImg } from '../utils';
	import NacionCandidateCard from '../nacion-candidate-card.svelte';

	export let partyId;
	export let showListButton;
	export let showProposalButton;
	export let district;
	let partySelected;
	let partyCandidates;
	const getPartyAndCandidates = async () => {
		partySelected = null
		const res = await API(fetch, getPartyById(partyId));
		const response = await handleResponse(res, 'partido', 'partido');

		const res2 = await API(fetch, getCandidatesByParty(partyId));
		const response2 = await handleResponse(res2, 'candidatos', 'candidato');

		partySelected = response.props.partido[0];
		partyCandidates = response2.props.candidatos;
	};
	$: partyId, getPartyAndCandidates()
</script>

{#if partySelected}
	<div
		class="is-flex is-flex-direction-column is-align-items-center mx-auto {district.slug ===
		'nacion'
			? 'card-party-wrapper'
			: 'card-party-wrapper-legislative'}"
	>
		{#if district.slug === 'nacion'}
			<div class="card card-party is-flex is-flex-direction-column">
				<header class="card-header is-align-items-center ">
					<div class="image-wrapper">
						<div class="image-party is-rounded  m-2" style="background-image: url()">
							<img src={PartyImg(partySelected)} alt="{partySelected.name}" />
						</div>
					</div>
					<div class="name-partido">
						<p class="card-header-title pb-2 is-size-5 has-text-white has-text-weight-semibold pl-0">
							{partySelected.name}
						</p>
						<p class=" pb-4 has-text-white is-size-6 has-text-weight-light pl-0">
							{#each partySelected.alianzas as alianza}
								{alianza.related_partido_id.name}
							{/each}
						</p>
					</div>
				</header>
				<div
					class="card-content p-0 columns is-mobile is-multiline is-justify-content-center is-flex is-flex-wrap-wrap m-0"
				>
					{#each partyCandidates as candidate}
						<NacionCandidateCard {candidate} />
					{/each}
				</div>
			</div>
		{:else}
		{#if partyCandidates.some(candidate => candidate.cargo === 'diputado-nacional')||partyCandidates.some(candidate => candidate.cargo === 'diputado-nacional')} 
		<div class="has-text-centered list-legislative-wrapper">
			<h1 class="is-size-2 has-text-weight-medium has-text-black my-3">{partySelected.name}</h1>
			<div class="is-flex candidates">
				{#if partyCandidates.some(candidate => candidate.cargo === 'diputado-nacional')}
				<div class="legislative-list">
					<h1 class="is-size-4 has-text-centered has-text-weight-medium has-text-black is-hidden-touch">
						Diputados/as Nacionales
					</h1>
					<div>
						{#each partyCandidates as candidate}
							{#if candidate.position < 3 && candidate.cargo === 'diputado-nacional'}
								<NacionCandidateCard {candidate} noRounded />
							{/if}
						{/each}
					</div>
				</div>
				{/if}
				{#if partyCandidates.some(candidate => candidate.cargo === 'senador-nacional')}
				<div class="legislative-list">
					<h1 class="is-size-4 has-text-centered has-text-weight-medium has-text-black is-hidden-touch">
						Senadores/as Nacionales
					</h1>
					<div>
						{#each partyCandidates as candidate}
							{#if candidate.position < 3 && candidate.cargo === 'senador-nacional'}
								<NacionCandidateCard {candidate} noRounded />
							{/if}
						{/each}
					</div>
				</div>
					
				{/if}
			</div>
		</div>
		{/if}
		{/if}
		<div class="actions is-flex is-justify-content-center my-6 is-centered">
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
		</div>
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
		width: 50%;
	}
	.card-party-wrapper-legislative {
		width: 90%;
	}
	.actions {
		width: 100%;
		gap: 16px;
		margin: auto;
	}
	.actions a {
		width: 50%;
		font-weight: 500;
		padding: 1.4rem;
		/* flex: 1 1 0px; */
	}
	.actions a:last-of-type:hover {
		color: #000;
	}
	.view-proposal:focus {
		color: #000;
	}
	.card-party {
		width: 70%;
		flex: 1;
	}
	.card-party .card-header {
		background-color: #252525;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.image-wrapper {
		padding: 8px;
	}

	.image-party {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(255, 255, 255);
		border-radius: 50%;
		z-index: 10;
		width: 68px;
		height: 68px;
		position: relative;
		overflow: hidden;
	}
	.list-legislative-wrapper {
		width: 80%;
	}
	.list-legislative-wrapper .candidates{
		justify-content: center;
	}
	.legislative-list {
		margin: 0 3rem;
		width: 40%;
	}

	.legislative-list div {
		display: flex;
	}
	.card-content{
		flex: 1;
	}
	@media screen and (max-width: 768px) {
		.card-party-wrapper {
			width: 100%;
		}
		.card-party-wrapper-legislative {
		width: 100%;
		}
		.actions {
			width: 90%;
			flex-direction: column;
		}
		.actions a {
			margin-bottom: 8px;
			width: 100%;
		}

		.card-party {
			width: 90%;
		}
		.image-party {
			height: 48px;
			width: 48px;
		}
		.list-legislative-wrapper .candidates {
			text-align: center;
			flex-direction: column;
		}
		.list-legislative-wrapper {
			width: 100%;
		}
		.legislative-list {
			margin: 0;
			margin-bottom: 16px;
			width: 100%;
		}
	}
</style>
