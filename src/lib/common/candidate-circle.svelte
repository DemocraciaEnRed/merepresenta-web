<script>
	import { CandidateImg } from "./utils";

	export let candidate
	export let changeParty
</script>

<div class="is-relative candidate-wrapper" on:click={changeParty} data-party={candidate.partido.id}>
	<span class="tag is-light candidate-name" >{candidate.name}</span>
	<button class="button-candidate" style="background: linear-gradient(45deg,{candidate.partido.color1},{candidate.partido.color2})" >
		<figure class="image mx-auto candidate-avatar">
			<img class="is-rounded" src={CandidateImg(candidate)} alt="{candidate.name}" />
		</figure>
	</button>

</div>

<style>

	.button-candidate {
		padding: 4px;
		border-radius: 999px;
		border: none;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		height: 90px;
		width: 90px;
	}

	.candidate-wrapper{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.candidate-wrapper:hover > span{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.candidate-name {
		border: 1px solid #000;
		border-radius: 5px;
		cursor: pointer;
		display: none;
		text-align: center;
		position: absolute;
		top: 0;
		height: fit-content;
		z-index: 10;
		padding: 4px 8px;
	}
	.candidate-wrapper:first-of-type > .candidate-name{
		left: 60%;
	}
	.candidate-wrapper:last-of-type > .candidate-name{
		left: -60%;
	}
	
	@media screen and (max-width: 768px) {
	.candidate-name {
		top: auto;
		bottom: 0;

	}
	.button-candidate {
		height: 70px;
		width: 70px;
	}

	}

</style>