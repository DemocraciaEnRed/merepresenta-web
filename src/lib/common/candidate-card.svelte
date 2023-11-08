<script>
	import { page } from '$app/stores';
	import { CandidateImg, cargosSlugs, directusImg } from '$lib/common/utils';
	import { afterUpdate } from 'svelte';
	import Icon from './Icon.svelte';

	export let candidate;
	export let size = "is-half-mobile is-one-third-tablet is-3-desktop is-3-widescreen"
	let url=`/partidos-y-candidaturas/candidates/candidate/${candidate.id}`;

</script>

<div
	class="column {size} has-text-centered"
>
	<div class="candidate-container">
		<a href={url}>
			<figure
				class="candidate-img image"
				style="background-image: url({CandidateImg(candidate)})"
			/>
		</a>
		<div class="candidate-content is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center p-3 }">
			<p class="candidate-name is-size-6 has-text-weight-bold  is-uppercase general-sans has-text-weight-semibold flex">
				{candidate.name}
			</p>
			<p class=" is-size-6 has-text-weight-light pb-4">
				Candidat{candidate.genre === 'm' ? 'o' : 'a'} a <br />
				<span class="general-sans is-size-6 has-text-weight-light">{cargosSlugs[candidate.cargo][candidate.genre]}</span>
			</p>	
			<a href={url}
			   class="button is-fullwidth is-active  has-text-weight-semibold is-rounded pr-5">
			   Ver perfil
			</a>
		</div>
	</div>
</div>

<style>
	.candidate-img {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		border-bottom: 0;
		border-radius: 50%;
		padding-top: 70%;
		margin: 16px auto;
		width: 70%;
		background-color: rgb(243, 243, 243);
	}
	.candidate-container {
		border: 1px solid black;
		background-color: #242A38;
		position: relative;
		color: #fff;
		border-radius: 16px;
		
	}
	.candidate-position {
		position: absolute;
		top: 1px;
		left: 1px;
		z-index: 10;
		border-bottom-right-radius: 5px;
	}
	.candidate-content {
		border-top: 0;
		height: 190px;
	}
	.gobernor-content{
		height: 125px!important;

	}
	.candidate-name {
		flex: 1;
		line-height: normal;
	}
</style>
