<script>
	import { CandidateImg} from '$lib/common/utils';

	export let candidate;
	export let proposalDisabled=false
</script>

<div
	class="column is-half-mobile is-one-third-tablet is-3-desktop is-2-widescreen has-text-centered"
>
	<div class="candidate-container">
		<div class="header is-flex is-justify-content-center is-align-content-center px-1">
			<p
				class="candidate-name is-size-6 has-text-weight-bold has-text-white is-uppercase general-sans has-text-weight-semibold is-flex is-flex-wrap-wrap is-align-content-center"
			>
				{candidate.name}
			</p>
		</div>
		<a href="/propuestas/partidos/{candidate.partido.id}">
			<figure
				class="image is-square candidate-img"
				style="background-image: url({CandidateImg(candidate)})"
			/>
		</a>
		<div
			class="candidate-content is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-3"
		>
			<p
				class="candidate-party is-size-6 has-text-weight-bold has-text-black is-uppercase general-sans has-text-weight-semibold"
			>
			{candidate.partido.alianzas[0].related_partido_id.name}
		</p>
		<p
		class="candidate-party is-size-7 has-text-weight-semibold has-text-black is-uppercase general-sans "
		>
		{candidate.partido.name}
			</p>
		</div>
		<div class="candidate-footer">
			{#if proposalDisabled}
			<a
				href="/propuestas/partidos/{candidate.partido.id}"
				disabled
				class="button is-fullwidth is-black has-text-weight-semibold">VER PROPUESTAS</a
			>
			{:else}
			<a
				href="/propuestas/partidos/{candidate.partido.id}"
				class="button is-fullwidth is-black has-text-weight-semibold">VER PROPUESTAS</a
			>
			
			{/if}
		</div>
	</div>
</div>

<style>
	.candidate-img {
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		border-bottom: 1px solid black;
		background-color: rgb(243, 243, 243);
	}
	.candidate-container {
		height: 100%;
		position: relative;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.candidate-container .header {
		padding: 8px 0;
		background-color: #000;
		flex: 1 1 0px;
	}
	.candidate-content {
		background-color: #fff;
		border-top: 0;
		height: 180px;
	}
	.candidate-name {
		line-height: normal;
	}
	.candidate-footer a {
		white-space: normal;
		height: fit-content;
	}
	.candidate-footer a {
		border-radius: 0;
	}
	@media screen and (max-width:758px){
		.column{
			padding: .2rem;
		}
	}
</style>
