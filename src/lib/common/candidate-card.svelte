<script>
	import { page } from '$app/stores';
	import { CandidateImg, cargosSlugs, directusImg } from '$lib/common/utils';
	import { afterUpdate } from 'svelte';

	export let candidate;
	export let showParty;
	let url=`/partidos-y-candidaturas/candidates/${candidate.partido.id}/candidate/${candidate.id}`;

</script>

<div
	class="column is-half-mobile is-one-third-tablet is-3-desktop is-2-widescreen has-text-centered"
>
	<div class="candidate-container">
		<div class="candidate-position">
			{#if showParty}
				<!-- <figure class="image is-48x48">
				<img src="{directusImg}/{candidate.partido.logo.id}" class="is-rounded" alt="{candidate.partido.name}"/>

			</figure> -->
				<img
					src="{directusImg}/{candidate.partido.logo.id}"
					class="image is-48x48"
					alt={candidate.partido.name}
				/>
			{/if}
			<!-- <span class="is-size-5 general-sans has-text-black has-text-weight-bold"
				>{candidate.position}°</span
			> -->
		</div>
		<a href={url}>
			<figure
				class="image is-square candidate-img"
				style="background-image: url({CandidateImg(candidate)})"
			/>
		</a>
		<div
			class="candidate-content is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center p-3 {candidate.cargo === 'gobernador' && 'gobernor-content'}"
		>
			<p
				class="candidate-name is-size-6 has-text-weight-bold has-text-black is-uppercase general-sans has-text-weight-semibold"
			>
				{candidate.name}
			</p>
			{#if candidate.cargo !== 'gobernador'}
			<p class="has-text-black is-size-7">
				Candidat{candidate.genre === 'm' ? 'o' : 'a'} a <br />
				<span class="general-sans is-size-6 has-text-weight-semibold">{cargosSlugs[candidate.cargo][candidate.genre]}</span>
			</p>
			
			{/if}

			<a
				href={url}
				class="button is-outlined is-fullwidth is-active has-text-black has-text-weight-semibold"
				>VER MÁS</a
			>
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
	}
	.candidate-position {
		position: absolute;
		top: 1px;
		left: 1px;
		z-index: 10;
		background-color: #fff;
		border-bottom-right-radius: 5px;
		border-right: 1px solid black;
		border-bottom: 1px solid black;
	}
	.candidate-position > img {
		border-bottom-right-radius: 5px;
	}
	.candidate-content {
		border: 1px solid black;
		background-color: #fff;
		border-top: 0;
		height: 220px;
	}
	.gobernor-content{
		height: 125px!important;

	}
	.candidate-name {
		line-height: normal;
	}
</style>
