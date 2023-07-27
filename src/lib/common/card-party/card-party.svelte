<script>
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByParty } from '$lib/graph-ql/candidates';
	import { getPartyById } from '$lib/graph-ql/partidos';
	import { onMount } from 'svelte';
	import { PartyImg, directusImg } from '../utils';
	import NacionCandidateCard from '../nacion-candidate-card.svelte';

	export let partyId;
	export let showListButton;
	export let showProposalButton;

	let partySelected;
	let partyCandidates;

	onMount(async () => {
		const res = await API(fetch, getPartyById(partyId));
		const response = await handleResponse(res, 'partido', 'partido');

		const res2 = await API(fetch, getCandidatesByParty(partyId));
		const response2 = await handleResponse(res2, 'candidatos', 'candidato');

		partySelected = response.props.partido[0];
		partyCandidates = response2.props.candidatos;
	});
</script>

{#if partySelected}
	<div class="is-flex is-flex-direction-column is-align-items-center card-party-wrapper">
		<div class="card card-party">
			<header class="card-header is-align-items-center ">
				<div class="image-wrapper">
					<div class="image-party is-rounded  m-2" style="background-image: url()">
						<img src={PartyImg(partySelected)} alt="" />
					</div>
				</div>
				<div class="name-partido">
					<p class="card-header-title pb-2 is-size-5 has-text-white has-text-weight-semibold">
						{partySelected.name}
					</p>
					<p class="pl-4 pb-4 has-text-white is-size-6 has-text-weight-light">
						{#each partySelected.alianzas as alianza}
							{alianza.related_partido_id.name}
						{/each}
					</p>
				</div>
			</header>
			<div
				class="card-content p-0 columns is-mobile is-multiline is-justify-content-center is-flex is-flex-wrap-wrap m-0
    "
			>
				{#each partyCandidates as candidate}
					<NacionCandidateCard {candidate} />
				{/each}
			</div>
		</div>
		<div class="actions is-flex is-justify-content-center my-6 is-centered">
			{#if showListButton}
				<a
					href="/partidos-y-candidates/candidates/{partySelected.alianzas[0].related_partido_id.id}"
					class=" button is-black mx-3 is-rounded is-uppercase ">Ver Interna</a
				>
			{/if}
			{#if showProposalButton}
				<a
					href="/partidos-y-candidates/partidos/{partySelected.id}"
					class=" button is-black mx-3 is-rounded is-uppercase is-outlined has-background-white view-proposal"
					>VER PROPUESTAS</a
				>
			{/if}
		</div>
	</div>
{:else}
	<div class="fill-select" />
{/if}

<style>
	.fill-select {
		height: 575px;
	}

	.card-party-wrapper {
		width: 50%;
		margin: auto;
	}
	.actions {
		width: 100%;
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
	}
	.card-party .card-header {
		background-color: #252525;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.image-wrapper {
		width: 20%;
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
	.image-party img {
	}
	@media screen and (max-width: 768px) {
		.card-party-wrapper {
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
	}
</style>
