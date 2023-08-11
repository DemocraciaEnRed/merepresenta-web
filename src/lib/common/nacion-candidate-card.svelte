<script>
	import { page } from '$app/stores';
	import { CandidateImg, cargosSlugs, directusImg } from '$lib/common/utils';
	import { afterUpdate } from 'svelte';

	export let candidate;
	export let noRounded
	let url = `${$page.path}/candidate/${candidate.id}`;
	afterUpdate(() => {
		url = `/partidos-y-candidaturas/candidates/${candidate.partido.id}/candidate/${candidate.id}`;
	});
</script>

<div class="column is-half has-text-centered p-0 candidate-container is-flex is-flex-direction-column {noRounded && 'force-no-rounded'}">
	<a href={url}>
		<figure class="image candidate-img" style="background-image: url({CandidateImg(candidate)})" />
	</a>
	<div
		class="candidate-content is-flex is-flex-direction-column is-justify-content-flex-end is-align-items-center p-3"
	>
		<p
			class="candidate-name is-size-6 has-text-weight-bold has-text-black is-uppercase general-sans has-text-weight-semibold"
		>
			{candidate.name}
		</p>
		<p class="has-text-black is-size-7 my-2">
			
			<span class="general-sans is-size-6 has-text-weight-semibold"
				>{cargosSlugs[candidate.cargo][candidate.genre]}</span
			>
		</p>

		<a
			href={url}
			class="button  is-fullwidth is-active is-black has-text-weight-semibold"
			>VER PERFIL</a
		>
	</div>
</div>

<style>
	a:has(.candidate-img) {
		display: flex;
		justify-content: center;
	}
	.candidate-img {
		width: 90%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		margin-top: 8px;
		border: 1px solid #000;
		background-color: rgb(243, 243, 243);
	}

	.candidate-img::before {
		content: '';
		display: block;
		padding-top: 100%; /* Esto establecerá la relación de aspecto 1:1 (cuadrado) */
	}
	.candidate-container {
		border: 1px solid black;
		position: relative;
		background-color: #fff;
	}
	.candidate-container:last-of-type {
		border-bottom-right-radius: 10px;
	}
	.candidate-container:first-of-type {
		border-bottom-left-radius: 10px;
	}

	.candidate-content {
		/* background-color: #fff; */
		border-top: 0;
		flex: 1;
	}
	.candidate-name {
		line-height: normal;
		white-space: normal;
		flex: 1;
		display: flex;
		align-items: center;
	}

	.force-no-rounded{
		border-radius: 0!important;
	}
	@media screen and (max-width: 768px) {
		.candidate-img {
			width: 100%;
			margin-top: 0;
			border: none;
		}
	}
</style>
