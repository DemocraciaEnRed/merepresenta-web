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
	$: isOpen = screenSize > 768;
	$: iconClass = isOpen ? 'fa-chevron-down' : 'fa-chevron-up';

	const handleOpen = ()=>{ 
		if(screenSize < 768) isOpen = !isOpen
	}

	const addToShowComplete = (partyId) => {
		const index = showCompleteProposal.findIndex((el) => el === partyId);
		if (index < 0) showCompleteProposal = [...showCompleteProposal, partyId];
		else showCompleteProposal = showCompleteProposal.filter((el) => el !== partyId);
	};
</script>

<svelte:window bind:innerWidth={screenSize} />
<div class="box the-drop-header {!isOpen ? 'border-radius' : 'header-open'} drop" id={eje.slug}>
	<button
		id="partido-{eje.slug}"
		class="proposal-header is-flex  is-align-items-center {!isOpen
			? 'border-radius'
			: 'border-top-radius'}"
		style="background-color: {eje.color};"
		on:click={handleOpen}
	>
		<div class="icon-container" style="background-color: {eje.color};">
			<img
				src={PoliciesIcons[eje.slug]}
				class="image icon-proposal"
				alt="icono de {eje.name}"
			/>
		</div>
		<div class="eje-name-wrapper is-flex-grow-1 is-flex is-align-items-center" >
				<p
					class=" has-text-black is-inline mx-5 is-uppercase is-size-5 is-size-6-touch has-text-weight-bold"
				>
					{eje.name}
				</p>
		</div>
		<span class="dropdown-icon">
			{#if screenSize < 768}
				<Icon icon={iconClass} />
			{/if}
		</span>
	</button>
	{#if isOpen}
		<div class="proposal-body summary general-sans" transition:slide>
			<div class=" has-text-centered-touch has-text-left-desktop proposal-group">
				{#each partysToCompare as party}
					{#each party.ejes as proposalParty}
						{#if proposalParty.ejes_id.slug === eje.slug}
						
							<div class="party-proposal is-flex is-flex-direction-column is-justify-content-space-between py-5">
								<div
									class="is-flex is-align-items-center is-justify-content-center has-text-centered px-3 candidates-circles pb-4"
								>
									{#each candidates as candidate}
										{#if candidate.partido.id === party.id}
											
                                            <CandidateCircle partyId={candidate.partido.id} {candidate}  imageSize='70px' />
										{/if}
									{/each}
								</div>
								<div class="proposals has-text-left">
									{#if !showCompleteProposal.includes(party.id)}
									<!-- <p>{proposalParty.summary.split('.')}</p> -->
										<ol>{#each proposalParty.summary.split('\n') as item}
											<li>
												{item}
											</li>
										{/each}</ol>
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
        flex-direction: column;
	}
	
	.proposal-group{
		display: flex;
		height: 100%;
	}
	.party-proposal{
		padding: 0 .5rem;
		width: 50%;
	}
	.party-proposal:not(:last-child) {
		border-right: 1px solid #747474;
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
		flex: 1;
		display: flex;
   		flex-direction: column;
    	justify-content: space-between;
		padding: 16px;
    }
	.proposals ol {
		list-style-position: inside;
		margin-bottom: 8px;
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
	@media screen and (min-width: 960px) {
		.header-open{
		display:flex;
		margin-bottom: 0;
	}
	.header-open .proposal-body{
		margin-bottom: 0;
		border-bottom-left-radius: 0;
	}
	.header-open > button{
		cursor: initial;
		flex-direction: column-reverse!important;
		width: fit-content;
		border-top-right-radius: 0!important;
		overflow: hidden;
	}
	.header-open:not(:first-of-type) > button{
		border-top-left-radius: 0!important;

	}
	.header-open:last-of-type > button{
		border-bottom-left-radius: 20px;

	}
	.header-open:first-of-type > .proposal-body{
		border-top-right-radius: 20px;

	}
	.header-open:not(:last-of-type) > .proposal-body{
		border-bottom-right-radius: 0;

	}
	
	.header-open:not(:first-child) > .proposal-body > .proposal-group > .party-proposal > .candidates-circles {
		display: none!important;
	}
	.header-open > button > .dropdown-icon {
		height: calc(56px + .5rem);
	}
	.header-open > button > .icon-container {
		padding: 16px 8px;
	}
	.header-open > button > .icon-container > img {
		width: 40px;
		height: 40px;
	}
	.header-open > button > .eje-name-wrapper {
		width: 2em;
		justify-content: center;
	}
	.header-open > button > .eje-name-wrapper > p {
		transform: rotate(180deg);
		writing-mode: tb;
	}
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
		.proposal-group{
			flex-direction: column;
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
			width: 100%;
        	flex-direction: column;       
        }
		.party-proposal:not(:last-child) {
			border-right: none;
			border-bottom: 1px solid #747474;
		}
	}
</style>
