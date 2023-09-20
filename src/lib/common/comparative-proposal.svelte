<script>
	import { slide } from 'svelte/transition';
	import { CandidateImg, PoliciesIcons } from './utils';
	import Icon from './Icon.svelte';

	export let eje;
	export let partysToCompare;
	export let candidates;

	$: showCompleteProposal = [];
	$: isOpen = false;
	$: iconClass = isOpen ? 'fa-chevron-down' : 'fa-chevron-up';

	const addToShowComplete = (alianzaId) => {
		const index = showCompleteProposal.findIndex((el) => el === alianzaId);
		if (index < 0) showCompleteProposal = [...showCompleteProposal, alianzaId];
		else showCompleteProposal = showCompleteProposal.filter((el) => el !== alianzaId);
	};
</script>

<div class="box the-drop-header {!isOpen ? 'border-radius' : ''} drop">
	<button
		id="partido-{eje.slug}"
		class="proposal-header is-flex is-flex-direction-row is-align-items-center {!isOpen
			? 'border-radius'
			: 'border-top-radius'}"
		style="background-color: {eje.color};"
		on:click={() => (isOpen = !isOpen)}
	>
		<div class="icon-container" style="background-color: {eje.color};">
			<img
				src={PoliciesIcons[eje.slug]}
				class="image my-2 icon-proposal"
				alt="icono de {eje.name}"
			/>
		</div>
		<div class="is-flex-grow-1 is-flex is-align-items-center" style="width:100%; height: 100%;">
			<div class="is-flex is-flex-direction-row is-align-items-center" style="height: 100%;">
				<p
					class=" has-text-black is-inline mx-5 is-uppercase is-size-5 is-size-6-touch has-text-weight-bold"
				>
					{eje.name}
				</p>
			</div>
		</div>
		<span class="dropdown-icon"><Icon icon={iconClass} /></span>
	</button>
	{#if isOpen}
		<div class="proposal-body summary general-sans" transition:slide>
			<div class=" has-text-centered-touch has-text-left-desktop">
				{#each partysToCompare as party}
					{#each party.ejes as proposalParty}
						{#if proposalParty.ejes_id.slug === eje.slug}
							<div class="alianza-proposal is-flex p-5">
								<div
									class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between has-text-centered px-3 candidates-circles"
								>
									{#each candidates as candidate}
										{#if candidate.partido.id === party.id}
											<p
												class="nippo-font candidate-name is-size-5 has-text-weight-bold has-text-black"
											>
												{candidate.name}
											</p>
											<a
												href="/partidos-y-candidaturas/candidates/{candidate.partido
													.id}/candidate/{candidate.id}"
											>
												<figure class="image mx-3 candidate-avatar">
													<img
														class="is-rounded"
														src={CandidateImg(candidate)}
														alt={candidate.name}
													/>
												</figure>
											</a>
											<p class="nippo-font is-size-7 has-text-weight-medium has-text-black w-50">
												{candidate.partido.name}
											</p>
										{/if}
									{/each}
								</div>
								<div class="proposals">
									<h1 class="has-text-weight-bold is-uppercase mb-2 has-text-black">
										Lista: {party.name}
									</h1>
									{#if !showCompleteProposal.includes(party.id)}
										<p>{proposalParty.summary}</p>
									{/if}
									{#if showCompleteProposal.includes(party.id)}
										<div class="column p-0">
											{#each proposalParty.propuestas as item, i}
												<div class="my-4 has-text-centered-touch has-text-left-desktop">
													<h1
														class="has-text-weight-bold is-uppercase mb-2 has-text-black is-inline mr-1"
													>
														Propuesta {i + 1}:
													</h1>
													<p class="is-inline">{item.summary}</p>
												</div>
											{/each}
										</div>
									{/if}
									<div class="action-proposal">
										<button
											class="button is-link is-rounded is-uppercase has-text-weight-semibold mt-4 source-button"
											on:click={() => addToShowComplete(party.id)}
										>
											<u
												>{!showCompleteProposal.includes(party.id)
													? 'propuesta completa'
													: 'propuesta resumida'}</u
											>
										</button>
										{#if party.url_fuente}
											<a
												href={party.url_fuente}
												target="_blank"
												class="button is-link is-outlined is-rounded is-uppercase has-text-weight-semibold mt-4 source-button"
												><u>fuente oficial</u></a
											>
										{/if}
									</div>
								</div>
							</div>
						{/if}
					{/each}
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.drop {
		text-align: left;
		/* border-top: 1px solid #000; */
		margin-top: -1px;
	}
	.the-drop-header {
		border-radius: 20px;
		padding: 0;
	}
	.the-drop-header > button {
		padding: 0;
		cursor: pointer;
	}

	.proposal-header {
		width: 100%;
		cursor: pointer;
		border: none;
		font-family: 'Nippo', Helvetica, Arial, sans-serif;
	}
	.proposal-body {
		width: 100%;
		background-color: #fff;
		border: 1px solid #747474;
		margin-bottom: 1rem;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	.candidates-circles {
		width: 20%;
	}
	.candidate-name {
		width: min-content;
		display: table-caption;
	}
	.alianza-proposal:not(:last-child) {
		border-bottom: 1px solid #747474;
	}
	.icon-proposal {
		width: 50px;
		height: 50px;
	}
	.icon-container {
		padding: 0 20px;
	}
    .proposals{
        width: 80%;
    }

	.summary {
		white-space: pre-line;
	}
	.source-button u {
		text-decoration: none !important;
	}
	.source-button:not(:first-child) {
		margin-left: 1rem;
	}
	.candidate-avatar {
		height: 65px;
		width: 65px;
	}
	.candidate-avatar img {
		border: 1px solid #000;
	}
	.dropdown-icon {
		padding-right: 3rem;
	}

	.border-radius {
		border-radius: 20px !important;
		transition-delay: 0.3s;
		overflow: hidden;
	}
	.border-top-radius {
		border-top-left-radius: 20px !important;
		border-top-right-radius: 20px !important;
		overflow: hidden;
		transition-delay: 0s;
	}
	@media screen and (max-width: 1023px) {
		.dropdown-icon {
			padding-right: 0.5rem;
		}
		.source-button:last-of-type {
			margin-left: 0;
		}

		.proposal-body {
			border-bottom-left-radius: 20px !important;
			border-bottom-right-radius: 20px !important;
		}
		.candidates-circles {
			justify-content: center;
		}
		.action-proposal {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
		}
		.action-proposal .source-button {
			width: 90%;
		}
	}
</style>
