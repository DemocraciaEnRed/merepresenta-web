<script>
	import { page } from '$app/stores';
	import { CandidateImg, PartyImg, cargosSlugs, directusImg } from '$lib/common/utils';
	import { afterUpdate } from 'svelte';

	export let size
	export let candidate;
	export let showListButton 
	export let showProposalButton
	export let proposalDisbled
	let url=`/partidos-y-candidaturas/candidates/${candidate.partido.id}/candidate/${candidate.id}`;

</script>

<div class="column {size}">
	<div class="card  candidate-container is-flex is-flex-direction-column">
		<header class="card-header is-align-items-center ">
			<div class="image-wrapper">
				<div class="image-party is-rounded  m-2" style="background-image: url()">
					<img src={PartyImg(candidate.partido)} alt="{candidate.partido.name}" />
				</div>
			</div>
			<div class="name-partido has-text-left">
				<p class="card-header-title px-1 is-size-6 has-text-white has-text-weight-semibold">
					{candidate.partido.name}
				</p>
			</div>
			
		</header>
		<a href={url}>
			<figure
				class="image is-square candidate-img"
				style="background-image: url({CandidateImg(candidate)})"
			/>
		</a>
		<div class="candidate-content is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center p-3">
			<p class="candidate-name is-size-6 has-text-weight-bold has-text-black is-uppercase general-sans has-text-weight-semibold has-text-centered">
				{candidate.name}
			</p>
			<p class="has-text-black is-size-7">
				Candidat{candidate.genre === 'm' ? 'o' : 'a'} a <br />
				
				<span class="general-sans is-size-6 has-text-weight-semibold has-text-centered">{cargosSlugs[candidate.cargo][candidate.genre]}</span>
			</p>

			<a href={url} class="button is-outlined is-fullwidth is-active has-text-black has-text-weight-semibold">VER MÁS</a
			>
		</div>
		<div class="card-actions">
			{#if showListButton}
				<a href="/partidos-y-candidaturas/candidates/{candidate.partido.alianzas[0].related_partido_id.id}/gobernacion"
				class=" button is-black mx-auto is-rounded is-uppercase my-4 ">Ver Interna</a>	
				
			{/if}
			{#if showProposalButton}
				{#if proposalDisbled}
				<a  disabled
					class=" button is-gray mx-auto is-rounded is-uppercase is-outlined has-background-white view-proposal"
					>VER PROPUESTAS</a>
				{:else}
				<a  href="/propuestas/partidos/{candidate.partido.id}"
					class=" button is-black mx-auto is-rounded is-uppercase is-outlined has-background-white view-proposal"
					>VER PROPUESTAS</a>
				
				{/if}
				
			{/if}
		</div>
	</div>
</div>

<style>
	.candidate-img {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		border: 1px solid black;
		border-bottom: 0;
		background-color: rgb(243, 243, 243);
	}
	.candidate-container {
		position: relative;
		height: 100%;
	}
	.card{
		background-color: transparent;
		box-shadow: none;
	}
	.card-header {
		flex: 1 1 0px;
		background-color: #000;
	}
	.image-wrapper {
		padding-left: 8px;
	}
	.view-proposal:hover{
		color: #000;
	}

	.image-party {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(255, 255, 255);
		border-radius: 50%;
		z-index: 10;
		width: 48px;
		height: 48px;
		position: relative;
		overflow: hidden;
	}
	.candidate-content {
		border: 1px solid black;
		background-color: #fff;
		border-top: 0;
		height: 220px;
	}
	.candidate-name {
		line-height: normal;
	}
	.card-actions a{
		width: 90%;
	}

</style>
