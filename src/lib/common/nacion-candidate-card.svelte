<script>
	import { page } from '$app/stores';
	import { CandidateImg, cargosSlugs, directusImg } from '$lib/common/utils';
	import { afterUpdate } from 'svelte';
	import Icon from './Icon.svelte';
	import CandidateCircle from './candidate-circle.svelte';

	export let candidate;
	export let noProfetion = false
	let url = `/candidate/${candidate.id}`;
	afterUpdate(() => {
		url = `/partidos-y-candidaturas/candidates/candidate/${candidate.id}`;
	});
	let screenSize
</script>

<svelte:window bind:innerWidth={screenSize} />


	<div class="candidate-header p-3 has-text-centered">
		<p class="has-text-black is-size-7">
			
			<span class="general-sans is-size-6 is-uppercase has-text-weight-bold"
				>{cargosSlugs[candidate.cargo][candidate.genre]}</span
			>
		</p>
	<CandidateCircle candidate={candidate} showPartyName={false} />
	</div>
	<div class="candidate-content">

		<p
			class="candidate-name is-size-6 has-text-weight-semibold has-text-black is-uppercase general-sans has-text-weight-semibold is-underlined mb-3"
		>
			{candidate.name}
		</p>
		{#if candidate.age}
        <div class=" has-text-black mb-3 is-flex is-flex-direction-column is-justify-content-end is-flex-grow-1">    
              <p class="has-text-weight-medium">{candidate.age} años {!noProfetion && candidate.profesion ? `- ${candidate.profesion}`:''}</p>
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
			>+ sobre {candidate.genre === 'm' ? 'el': 'la' } candidat{candidate.genre === 'm' ? 'o': 'a' }</a
		>
	</div>


<style>
	a:has(.candidate-img) {
		display: flex;
		justify-content: center;
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
	.button-candidate{
		border: none;
		border-radius: 99999px;
		white-space: break-spaces;
		letter-spacing: 2px;
		height: fit-content;
	}
	@media screen and (max-width: 768px) {

		.candidate-content{
			padding: 0.5rem 8px 1.5rem 8px;
		}

		.button-candidate{
		letter-spacing: 0;
		padding: 8px 8px;
	}
	}
</style>
