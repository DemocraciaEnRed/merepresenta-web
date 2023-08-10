<script>
	import { slide } from 'svelte/transition';
	import { CandidateImg, PoliciesIcons } from './utils';
	import Icon from './Icon.svelte';
	
	export let proposal;
	export let alianzas;
	export let candidates
	
	$: showCompleteProposal = [];
	$: isOpen = false;
	$: iconClass = isOpen ? 'fa-chevron-down' : 'fa-chevron-up';
	
	const addToShowComplete = (alianzaId) => {
		const index = showCompleteProposal.findIndex((el) => el === alianzaId);
		if (index < 0) showCompleteProposal = [...showCompleteProposal, alianzaId];
		else showCompleteProposal = showCompleteProposal.filter((el) => el !== alianzaId);
	};
</script>

<div class="the-drop-header {!isOpen ? 'border-radius' : ''} drop" >
	<button
		id="partido-{proposal.ejes_id.slug}"
		class="proposal-header is-flex is-flex-direction-row is-align-items-center has-background-white  {!isOpen
			? 'border-radius'
			: 'border-top-radius'}"
		on:click={() => (isOpen = !isOpen)}
	>
		<div class="icon-container" style="background-color: {proposal.ejes_id.color};">
			<img
				src={PoliciesIcons[proposal.ejes_id.slug]}
				class="image my-2 icon-proposal"
				alt="icono de {proposal.ejes_id.name}"
			/>
		</div>
		<div
			class="is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center has-text-centered"
			style="width:100%; height: 100%;"
		>
			<div class="is-flex is-flex-direction-row is-align-items-center" style="height: 100%;">
				<p class=" has-text-black is-inline mx-5 is-uppercase is-size-5 has-text-weight-medium">
					{proposal.ejes_id.name}
				</p>
			</div>
		</div>
		<span class="pr-6" ><Icon icon={iconClass} /></span>
	</button>
	{#if isOpen}
		<div class="proposal-body summary general-sans" transition:slide>
			<div class="">
				<div class=" has-text-centered-touch has-text-left-desktop">
					{#each alianzas as alianza}
						{#each alianza.ejes as proposalAlianza}
							{#if proposalAlianza.ejes_id.slug === proposal.ejes_id.slug}
								<div class="alianza-proposal p-5">
									<div class="is-flex mb-2 candidates-circles">
										{#each candidates as candidate}
											{#if candidate.partido.id === alianza.id}
												<a href="/partidos-y-candidaturas/candidates/{candidate.partido.id}/candidate/{candidate.id}">
													<figure class="image mx-3 candidate-avatar">
														<img class="is-rounded" src={CandidateImg(candidate)} alt="{candidate.name}" />
													</figure>
												</a>
												
											{/if}
										{/each}

									</div>
									<h1 class="has-text-weight-bold is-uppercase mb-2 has-text-black">
										Lista: {alianza.name}
									</h1>
									{#if !showCompleteProposal.includes(alianza.id)}
										<p>{proposalAlianza.summary}</p>
									{/if}
									{#if showCompleteProposal.includes(alianza.id)}
										<div class="column p-0">
											{#each proposalAlianza.propuestas as item, i}
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
									<button
										class="button is-link is-rounded is-uppercase has-text-weight-semibold mt-4 source-button"
										on:click={() => addToShowComplete(alianza.id)}>
										<u>{!showCompleteProposal.includes(alianza.id)
												? 'propuesta completa'
												: 'propuesta resumida'}</u>
									</button>
									{#if alianza.url_fuente}
										<p class="is-inline ml-2">
											<a
												href={alianza.url_fuente}
												target="_blank"
												class="button is-link is-outlined is-rounded is-uppercase has-text-weight-semibold mt-4 source-button"
												><u>fuente oficial</u></a
											>
										</p>
									{/if}
								</div>
							{/if}
						{/each}
					{/each}
				</div>
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
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		padding: 0 10px;
	}
	.the-drop-header > button {
		padding: 0;
		cursor: pointer;
	}


	.proposal-header {
		border: 2px solid black;
		width: 100%;
		margin-top: 1rem;
		font-family: 'Nippo', Helvetica, Arial, sans-serif;
	}
	.proposal-body {
		width: 100%;
		background-color: #fff;
		border-bottom: 2px solid #000;
		border-right: 2px solid #000;
		border-left: 2px solid #000;
		margin-bottom: 1rem;
	}
	.alianza-proposal:not(:last-child) {
		border-bottom: 1px solid #000;
	}
	.icon-proposal {
		width: 50px;
		height: 50px;
	}
	.icon-container {
		border-right: 2px solid #000;
		padding: 0 20px;
	}

	.summary {
		white-space: pre-line;
	}
	.source-button u {
		text-decoration: none !important;
	}
	.candidate-avatar {
		height: 65px;
		width: 65px;
	}
	.candidate-avatar img{
		border: 1px solid #000;
	}
	
	@media screen and (max-width: 1023px) {
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


		.proposal-body {
			border-bottom-left-radius: 20px !important;
			border-bottom-right-radius: 20px !important;
		}
		.candidates-circles{
				justify-content: center;
			}
	}
</style>
