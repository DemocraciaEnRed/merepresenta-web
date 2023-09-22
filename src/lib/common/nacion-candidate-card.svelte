<script>
	import { page } from '$app/stores';
	import { CandidateImg, cargosSlugs, directusImg } from '$lib/common/utils';
	import { afterUpdate } from 'svelte';
	import Icon from './Icon.svelte';
	import CandidateCircle from './candidate-circle.svelte';

	export let candidate;
	export let noRounded
	let url = `${$page.path}/candidate/${candidate.id}`;
	afterUpdate(() => {
		url = `/partidos-y-candidaturas/candidates/${candidate.partido.id}/candidate/${candidate.id}`;
	});
	let screenSize
</script>

<svelte:window bind:innerWidth={screenSize} />
<div class="column is-half has-text-centered p-0 candidate-container is-flex is-flex-direction-column {noRounded && 'force-no-rounded'}">

	<div class="candidate-header p-3 has-text-centered">
		<p class="has-text-black is-size-7">
			
			<span class="general-sans is-size-6 is-uppercase has-text-weight-bold"
				>{cargosSlugs[candidate.cargo][candidate.genre]}</span
			>
		</p>
	<CandidateCircle candidate={candidate}  />
	<!-- <a href={url} class="my-3">
		<figure class="image is-96x96 m-auto">
			<img class="is-rounded" src={CandidateImg(candidate)} alt={candidate.name}>
		  </figure>
	</a> -->
		
	</div>
	<div class="candidate-content">

		<p
			class="candidate-name is-size-6 has-text-weight-semibold has-text-black is-uppercase general-sans has-text-weight-semibold is-underlined mb-3"
		>
			{candidate.name}
		</p>
		{#if candidate.age}
        <div class=" has-text-black mb-3 is-flex-grow-1">    
            <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
              <p class="has-text-weight-medium">{candidate.age} años - {candidate.profesion}</p>
            </div>
        </div>
        {/if}
		{#if candidate.twitter_profile || candidate.twitter_user || candidate.facebook_page || candidate.facebook_profile || candidate.instagram_page}
        <div class=" has-text-black mb-3">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
            <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
              {#if candidate.twitter_profile}
              <a href="{candidate.twitter_profile}" target="_blank" class="has-text-black"><Icon icon="fa-twitter-square" brand size={screenSize > 768 ? 'large':'medium'}/></a>
              {/if}
              {#if candidate.twitter_user && candidate.twitter_user !== candidate.twitter_profile}
              <a href="{candidate.twitter_user}" target="_blank" class="has-text-black"><Icon icon="fa-twitter-square" brand size={screenSize > 768 ? 'large':'medium'}/></a>
              {/if}
              {#if candidate.facebook_page}
              <a href="{candidate.facebook_page}" target="_blank" class="has-text-black"><Icon icon="fa-facebook-square" brand size={screenSize > 768 ? 'large':'medium'}/></a>
              {/if}
              {#if candidate.facebook_profile}
              <a href="{candidate.facebook_profile}" target="_blank" class="has-text-black"><Icon icon="fa-facebook-square" brand size={screenSize > 768 ? 'large':'medium'}/></a>
              {/if}
              {#if candidate.instagram_page}
              <a href="{candidate.instagram_page}" target="_blank" class="has-text-black"><Icon icon="fa-instagram-square" brand size={screenSize > 768 ? 'large':'medium'}/></a>
              {/if}
  
            </div>
  
          </div>
        </div>
          
        {/if}
		<a
			href={url}
			class="button is-active is-size-7 has-text-weight-semibold is-uppercase button-candidate is-dark"
			>+ sobre el candidato</a
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
		padding-top: 100%;
	}
	.candidate-container {
		border-top: 1px solid black;
		border-bottom: 1px solid black;

		position: relative;
		background-color: #fff;
	}
	.candidate-container:last-of-type {
		border-right: 1px solid black;
		border-bottom-right-radius: 10px;
		border-top-right-radius: 10px;
	}
	.candidate-container:not(:last-of-type):after {
	content: "";
	background: #C4C4C4;
	position: absolute;
	bottom: 25%;
	right: 0;
	height: 50%;
	width: 1px;
	}


	.candidate-content {
		/* background-color: #fff; */
		border-top: 0;
		flex: 1;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.candidate-name {
		line-height: normal;
		white-space: normal;
		flex: 1;
	}

	.force-no-rounded{
		border-radius: 0!important;
	}
	.button-candidate{
		border: none;
		border-radius: 99999px;
		white-space: break-spaces;
		letter-spacing: 2px;
		height: fit-content;
	}
	@media screen and (max-width: 768px) {
		.candidate-img {
			width: 100%;
			margin-top: 0;
			border: none;
		}
		.candidate-container{
			border: 1px solid #000;
			
		}
		.candidate-container:last-of-type {
			border-left: none;
		}
		.candidate-container:nth-of-type(odd):after {
			content: none;
			background: #C4C4C4;
			position: absolute;
			bottom: 25%;
			right: 0;
			height: 50%;
			width: 1px;
			}
		.candidate-content{
			padding: 0.5rem 8px 1.5rem 8px;
		}
		.candidate-container:last-of-type {
		border-right: 1px solid black;
		border-bottom-right-radius: 10px;
		border-top-right-radius: 0;
		}
		.candidate-container:first-of-type {
		border-bottom-left-radius: 10px;
		}
		.button-candidate{
		letter-spacing: 0;
		padding: 8px 8px;
	}
	}
</style>
