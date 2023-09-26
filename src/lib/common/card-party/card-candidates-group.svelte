<script>
	import NacionCandidateCard from '../nacion-candidate-card.svelte';

	export let candidates;
	export let verticalTitle;
</script>

{#if candidates}
	<div class="is-flex my-1 is-flex-direction-column is-align-items-center mx-auto">
		<div class="card card-party is-flex">
			<div class="card-header is-align-items-center is-justify-content-center">
				<div class="is-uppercase has-text-white has-text-vertical verticalTitle">
					{verticalTitle}
				</div>
			</div>
			<div
				class="card-content p-0 is-mobile is-flex m-0"
			>
				{#if candidates}
					{#each candidates as candidate}
						<div
							class=" has-text-centered  candidate-container is-flex is-flex-direction-column"
						>
							<NacionCandidateCard {candidate} noRounded noProfetion/>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
{:else}
	<div class="fill-select is-flex is-justify-content-center">
		<progress class="progress is-medium is-dark" max="100" />
	</div>
{/if}

<style>
	.candidate-container {
		position: relative;
		min-width: 25%;
	}

	.candidate-container:not(:last-of-type):after {
		content: '';
		background: #c4c4c4;
		position: absolute;
		bottom: 25%;
		right: -1px;
		height: 50%;
		width: 1px;
	}

	.fill-select {
		height: 575px;
		width: 100%;
	}
	.fill-select .progress {
		max-width: 80%;
	}

	.card-party {
		max-width: 80%;
		flex: 1;
		border-radius: 10px;
    	overflow: hidden;
	}
	.card-party .card-header {
		background-color: #242a38;
		width: 2em;
	}
	.card-content {
		overflow: auto;
	}

	.has-text-vertical {
		-webkit-transform: rotate(-90deg);
		-moz-transform: rotate(-90deg);
		-o-transform: rotate(-90deg);
		transform: rotate(-90deg);
	}
	.verticalTitle {
		white-space: nowrap;
	}
	.card-header{border-radius: 0;}

	@media screen and (max-width: 768px) {
		.candidate-container {
			min-width: 50%;
		}
		.candidate-container:last-of-type {
			border-left: none;
		}
		.candidate-container:nth-of-type(odd):after {
			content: none;
			background: #c4c4c4;
			position: absolute;
			bottom: 25%;
			right: 0;
			height: 50%;
			width: 1px;
		}
		

		.card-party {
			width: 100%;
			flex-direction: column;
		}
		.card-party .card-header {
			width: auto;
		}
		.has-text-vertical {
			padding: 8px 0;
			transform: none;
		}
	}
</style>
