<script>
	import { slide } from 'svelte/transition';
	import { CandidateImg, PoliciesIcons } from './utils';
	import Icon from './Icon.svelte';
	import CandidateCircle from './candidate-circle.svelte';

	export let eje;
	export let partysToCompare;
	export let candidates;

    let screenSize;
	$: showCompleteProposal = [];
	$: partyOpen = [];
	$: isOpen = false;
	$: iconClass = isOpen ? 'fa-chevron-down' : 'fa-chevron-up';

	const handlePartyOpen = (partyId)=>{ 
		const index = partyOpen.findIndex((el) => el === partyId);
		if (index < 0) partyOpen = [...partyOpen, partyId];
		else partyOpen = partyOpen.filter((el) => el !== partyId);

	}

	const addToShowComplete = (partyId) => {
		const index = showCompleteProposal.findIndex((el) => el === partyId);
		if (index < 0) showCompleteProposal = [...showCompleteProposal, partyId];
		else showCompleteProposal = showCompleteProposal.filter((el) => el !== partyId);
	};
</script>

<svelte:window bind:innerWidth={screenSize} />
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
				class="image icon-proposal"
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
						{#if !partyOpen.includes(party.id)}
						<button class="proposal-body-header  py-3 pr-0 w-100 " on:click={handlePartyOpen(party.id)}>
							<div class="candidate-proposal-header">
							<CandidateCircle partyId={party.id} candidate={candidates.find(candidate => candidate.partido.id === party.id)} showPartyName={false} imageSize='80px' /> 
								<p class="nippo-font candidate-name-header-proposal is-size-5 has-text-weight-bold has-text-black">
									{candidates.find(candidate => candidate.partido.id === party.id).name}
								</p>
						</div>
						<span class="dropdown-icon"><Icon icon={iconClass} size='large' /></span>
						</button>
						{/if}
							{#if partyOpen.includes(party.id)}
							<div class="party-proposal is-flex py-5">
								<div
									class="is-flex is-align-items-center is-justify-content-center has-text-centered px-3 candidates-circles"
								>
									{#each candidates as candidate}
										{#if candidate.partido.id === party.id}
											<p
												class="nippo-font candidate-name is-size-5 has-text-weight-bold has-text-black"
											>
												{candidate.name}
											</p>
                                            <CandidateCircle partyId={candidate.partido.id} {candidate} showPartyName={screenSize > 960}  />
										{/if}
									{/each}
								</div>
								<div class="proposals">
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
											class="button is-black is-rounded is-uppercase has-text-weight-semibold mt-4 source-button"
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
												class="button is-black is-outlined is-rounded is-uppercase has-text-weight-semibold mt-4 source-button"
												><u>fuente oficial</u></a
											>
										{/if}
									</div>
								</div>
								<span class="dropdown-icon is-clickable" on:click={handlePartyOpen(party.id)}><Icon icon='fa-chevron-up' size='large' /></span>

							</div>
							{/if}
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
        flex-direction: column;
	}
	.candidate-name {
		width: min-content;
		display: table-caption;
	}
	.candidate-name-header-proposal{
		width: min-content;
		display: table-caption;
		padding-left: 3rem;
	}
	.candidate-proposal-header{
		display: flex;
		align-items: center;
		padding-left: 3rem;
	}
	.party-proposal{
		padding-left: 1.5rem;
	}
	.party-proposal:not(:last-child) {
		border-bottom: 1px solid #747474;
	}
	.icon-proposal {
        width: 50px;
		height: 50px;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.icon-container {
		padding: 0 20px;
	}
    .proposals{
		display: flex;
   		flex-direction: column;
    	justify-content: center;
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
	.proposal-body-header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
	.proposal-body-header:not(:last-child){
		border-bottom: 1px solid #747474;
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
	@media screen and (max-width: 960px) {

		.icon-proposal {
			margin-top: 0;
			margin-bottom: 0;
		}
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
            flex-direction: row-reverse;
            padding-bottom: 1rem;
			justify-content: center;
		}
		.action-proposal {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
		}
        .candidate-name {
		    margin-left: 1rem;
	    }
		.candidate-name-header-proposal{
		    margin-left: 1rem;
			text-align: left;
			padding-left: 0;
		}
		.candidate-proposal-header{
			padding-left: 1rem;
		}
		.action-proposal .source-button {
			width: 90%;
		}
        .candidates-circles {
		width: 100%;
	    }
        .proposals{
            width: 100%;
        }   
        .party-proposal{
			padding-left: 0;
        flex-direction: column;       
        }
	}
</style>
