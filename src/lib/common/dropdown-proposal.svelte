<script>
	import Icon from './Icon.svelte';
	$: isOpen = false;
	$: iconClass = isOpen ? 'fa-chevron-down' : 'fa-chevron-up';
	export let proposal;
	export let partido;
	import { slide } from 'svelte/transition';
	import { PoliciesIcons } from './utils';
	export let darkMode;
	let color = darkMode ? 'white' : 'black';
	export let backgroundHeader;
	let showCompleteProposal = false;
	let backgroundHeaderColor = backgroundHeader ? 'black' : '';
	let borderSolid = backgroundHeader ? 'border-solid p-2' : '';
</script>

<div class="the-drop-header drop" style="border-color: {color};">
	<div
		id="partido-{proposal.ejes_id.slug}"
		class="proposal-header is-flex is-flex-direction-row is-align-items-center has-background-white  {!isOpen
			? 'border-radius'
			: 'border-top-radius'}"
		on:click={() => (isOpen = !isOpen)}
	>
		<div class="icon-container" style="background-color: {proposal.ejes_id.color};">
			<img
				src={PoliciesIcons[proposal.ejes_id.slug]}
				class="image m-3 icon-proposal"
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
		<span class="pr-6" style="color:{color}"><Icon icon={iconClass} /></span>
	</div>
	{#if isOpen}
		<div class="proposal-body summary general-sans p-5" transition:slide>
			<!-- <div class="columns"> -->
			<div class="">
				<div class="my-4 has-text-centered-touch has-text-left-desktop">
					{#if !showCompleteProposal}
						<h1 class="has-text-weight-bold is-uppercase mb-2 has-text-black">Resumen</h1>
						<p>{proposal.summary}</p>
					{/if}
					{#if showCompleteProposal}
						<div class="column">
							{#each proposal.propuestas as item, i}
								<div class="my-4 has-text-centered-touch has-text-left-desktop">
									<h1 class="has-text-weight-bold is-uppercase mb-2 has-text-black is-inline mr-1">
										Propuesta {i + 1}: 
									</h1>
									<p class="is-inline"> {item.summary}</p>
								</div>
							{/each}
						</div>
					{/if}
					<button	class="button is-link is-rounded is-uppercase has-text-weight-semibold mt-4 source-button"
							on:click={() => (showCompleteProposal = !showCompleteProposal)}>
						<u>{!showCompleteProposal ? 'propuesta completa': 'propuesta resumida'}</u>
					</button>
					{#if partido.url_fuente}
						<!-- <p>Podés leer las propuestas completas en la <a href="{policyUrl}{proposal.ejes_id.slug}/{partido.id}" class="is-uppercase has-text-black has-text-weight-semibold"><u>fuente oficial</u></a></p> -->
						<p class="is-inline ml-3">
							<a href={partido.url_fuente}
							   target="_blank"
							   class="button is-link is-outlined is-rounded is-uppercase has-text-weight-semibold mt-4 source-button">
								<u>fuente oficial</u>
							</a>
						</p>
					{/if}
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
		cursor: pointer;
	}

	.proposal-header {
		border: 2px solid black;
		width: 100%;
		margin-top: 1rem;
	}
	.proposal-body {
		width: 100%;
		background-color: #fff;
		border-bottom: 2px solid #000;
		border-right: 2px solid #000;
		border-left: 2px solid #000;
		margin-bottom: 1rem;
	}
	.icon-proposal {
		width: 40px;
		height: 40px;
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
	@media screen and (max-width: 1023px) {
		.border-radius {
			border-radius: 20px !important;
			transition-delay: 0.3s;
		}
		.border-top-radius {
			border-top-left-radius: 20px !important;
			border-top-right-radius: 20px !important;

			transition-delay: 0s;
		}

		.proposal-body {
			border-bottom-left-radius: 20px !important;
			border-bottom-right-radius: 20px !important;
		}
	}
</style>
