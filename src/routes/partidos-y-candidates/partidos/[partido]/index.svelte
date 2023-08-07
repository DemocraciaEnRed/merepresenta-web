<script context="module">
	import { getPartyById, getPartyByalianzas, getPartysByDistrict } from '$lib/graph-ql/partidos.js';
	import API, { handleResponse } from '$lib/apiHandler';
	export async function load({ fetch, page }) {
		const res = await API(fetch, getPartyById(page.params.partido));
		const globalProps = await handleResponse(res, 'partidos', 'partido');
		const resTwo = await API(fetch, getCandidatesByParty(page.params.partido));
		const propsTwo = await handleResponse(resTwo, 'candidates', 'candidato');
		const firstCandidate = propsTwo.props.candidates[0]
		if (firstCandidate) {
			const resThree = await API(fetch, getCandidatesByCargoAndDistrict({idExcept:firstCandidate.id, cargo:firstCandidate.cargo, district:firstCandidate.distrito_nacional.id}))
			const propsThree = await handleResponse(resThree, 'candidates', 'candidato');
			globalProps.props.otherProposal = shuffleArray(propsThree.props.candidates.filter((party) => party.id !== globalProps.props.partidos[0].id)).slice(0, 4);
			
		}
		if (globalProps.props.partidos[0].district.slug === 'nacion' &&	globalProps.props.partidos[0].tipo === 'partido') {
			const resListAlianzas = await API(fetch, getPartyByalianzas(page.params.partido));
			const propsListAlianzas = await handleResponse(resListAlianzas, 'partidos', 'partido');
			globalProps.props.alianzas = propsListAlianzas.props.partidos;
			const resFour = await API(fetch,getPartysByDistrict(globalProps.props.partidos[0].district.slug));
			const responseFour = await handleResponse(resFour, 'partidos', 'partido');
			const otherProposal = responseFour.props.partidos.filter((partido) => partido.tipo === globalProps.props.partidos[0].tipo);
			globalProps.props.otherProposal = shuffleArray(otherProposal.filter((party) => party.id !== globalProps.props.partidos[0].id)).slice(0, 4);
		}
		
		globalProps.props.candidates = propsTwo.props.candidates;
		return globalProps;
	}
</script>

<script>
	import {
		directusImg,
		PartyImg,
		ProvinciasSlugs,
		Color,
		Solver,
		hexToRgb,
		CandidateImg,

		shuffleArray

	} from '$lib/common/utils';
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import Proposal from './_proposal.svelte';
	import { getCandidatesByCargoAndDistrict, getCandidatesByParty } from '$lib/graph-ql/candidates';
	import PartyProposalCard from '$lib/common/card-party/party-proposal-card.svelte';
	import ProposalCandidateCard from '$lib/common/proposal-candidate-card.svelte';

	export let partidos;
	export let candidates;
	export let alianzas;
	export let otherProposal;

	let partido = partidos[0];
	let svgLoad;

	// this is for svg loading, necesary to paint them from here
	onMount(() => {
		svgLoad = true;
	});
	afterUpdate(() => {
		svgLoad = true;
		partido = partidos[0];
	});
</script>

<svelte:head>
	<script src="https://unpkg.com/external-svg-loader@1.3.1/svg-loader.min.js"></script>
</svelte:head>
<div class="section py-5">
	<div class="container">
		<nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
			<ul>
				<li><a href="/partidos-y-candidates" class="has-text-black">Partidos y Candidaturas</a></li>
				<li class="is-active">
					<a href class="has-text-black text-wrap-wrap" aria-current="page">{partido.name}</a>
				</li>
			</ul>
		</nav>
	</div>
</div>
<div class="party-container">
	<div class="container is-fluid mx-6">
		<div class="columns is-mobile is-multiline is-vcentered">
			<div class="column is-12-touch is-narrow-desktop party-logo-container">
				<img src={PartyImg(partido)} class="image mx-auto party-logo" alt="" />
			</div>

			<div class="column candidates is-12-touch is-narrow-desktop is-flex">
				{#each candidates as candidate}
					{#if partido.district.slug !== 'nacion'}
						{#if candidate.position === 1}
							<div class="card mx-1">
								<div class="card-image">
									<a href="/partidos-y-candidates/candidates/{candidate.partido.id}/candidate/{candidate.id}">
										<figure class="image is-128x128">
											<img src={CandidateImg(candidate)} alt="Placeholder image" />
										</figure>
									</a>

								</div>
								<div class="card-content">
									<div class="content">
										<p class="title is-7">{candidate.name}</p>
									</div>
								</div>
							</div>
						{/if}
					{:else}
						<div class="card my-6 mx-1">
							<div class="card-image">
								<a href="/partidos-y-candidates/candidates/{candidate.partido.id}/candidate/{candidate.id}">
									<figure class="image is-128x128">
										<img src={CandidateImg(candidate)} alt="Placeholder image" />
									</figure>
								</a>
							</div>
							<div class="card-content">
								<div class="content">
									<p class="title is-7">{candidate.name}</p>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>

			<div class="column is-12-touch is-normal-desktop has-text-centered-touch">
				<div class="party-content p-4">
					{#if partido.tipo === 'lista'}
						<p>Lista:</p>
					{/if}
					<h1
						class="general-sans is-size-2 is-size-4-touch has-text-black has-text-weight-bold is-uppercase mb-4"
					>
						{partido.name}
					</h1>
					<!-- <div class="content">
            <p>{partido.summary || 'No hay descripcion de este partido'}</p>
          </div> -->
				</div>
			</div>
		</div>
	</div>
</div>
<!-- <div class="section tetris-background"> -->
<div class="section has-white-background tetris-background">
	<div class="container">
		<h1
			class="subtitle is-3 is-size-5-touch has-text-centered has-text-black my-6"
			style="font-weight: 500!important;"
		>
			¿Qué proponen?
		</h1>
		{#if partido.district.slug === 'nacion' && partido.tipo === 'partido'}
			<Proposal {alianzas} {partido} />
		{:else}
			<Proposal proposals={partido.ejes} {partido} />
		{/if}

		<br />
		{#if partido.url_fuente && partido.district.slug !== 'nacion'}
			<div class="columns is-centered">
				<div class="column is-8">
					<h1
						class="subtitle is-4 is-size-5-touch has-text-centered has-text-black my-5"
						style="font-weight: 500!important;"
					>
						Podés acceder a la información oficial ingresando a la plataforma oficial de {partido.name}.
					</h1>
					<div class="buttons is-centered mb-6">
						<a
							href={partido.url_fuente}
							target="_blank"
							class="button is-uppercase has-text-weight-semibold is-black is-active is-medium"
							>Ir a la plataforma oficial</a
						>
					</div>
				</div>
			</div>
		{/if}
		{#if partido.district.slug !== 'nacion'}
			<div class="columns is-centered">
				<div class="column is-8">
					<h1
						class="subtitle is-3 is-size-5-touch has-text-centered has-text-black my-5"
						style="font-weight: 500!important;"
					>
						¿Querés conocer sus candidaturas?
					</h1>
					<div class="buttons is-centered mb-6">
						<a
							href="/partidos-y-candidates/candidates/{partido.id}"
							class="button is-uppercase has-text-weight-semibold is-black is-outlined is-active is-medium"
							>ver candidaturas</a
						>
					</div>
				</div>
			</div>
		{/if}
		<h1 class=" is-size-2 is-size-5-touch has-text-centered has-text-black mt-5"
			style="font-weight: 500!important;">
			Comprá la interna de otros partidos
		</h1>
		<div class="columns is-centered is-multiline is-mobile mx-auto mt-4">
			{#if alianzas}
					{#each otherProposal as partido}
						<PartyProposalCard {partido} />
					{/each}
				{:else}
				{#if otherProposal}
					{#each otherProposal as candidate}
						<ProposalCandidateCard {candidate} />
					{/each}
					
				{/if}
			{/if}
		</div>
	</div>
</div>

<style>
	nav.breadcrumb .is-active {
		font-weight: 600;
	}
	.tetris-background {
		background-image: url('/white-background-desktop.png');
		background-size: auto;
		background-attachment: fixed;
	}
	.party-container {
		border: 1px solid #000;
		border-left: 10px solid #000;
		border-right: 10px solid #000;
	}
	.party-logo {
		width: 300px;
	}
	.candidates .card {
		width: min-content;
		border: 2px solid #000;
	}
	/* .partido-img{
    height: 200px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .description{
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    border-left: 4px solid black;
    border-right: 2px solid black;
    
  }
  svg{
    width: 25px;
    height: 25px;
    background-color: black;
  } */
	/*
  .social-networks{
    display: flex;
    justify-content: center;
  }
  .social-networks a{
    color: black
  }
  */
	@media screen and (max-width: 1023px) {
		.tetris-background {
			padding-left: 0;
			padding-right: 0;
		}
		.party-logo {
			width: auto;
			max-height: 200px;
		}
		.party-container {
			padding: 1rem;
			border: 1px solid #000;
			border-top: 1px solid #000;
			border-left: 10px solid #000;

			border-right: 10px solid #000;
		}
		.party-container .container {
			margin: 0 !important;
			padding: 0 !important;
		}
		.candidates {
			justify-content: center;
		}
		.party-logo-container {
			padding-bottom: 0;
		}
	}
</style>
