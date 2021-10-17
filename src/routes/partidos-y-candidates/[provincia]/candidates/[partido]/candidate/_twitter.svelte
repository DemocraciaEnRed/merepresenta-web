<script>
  import { slide } from 'svelte/transition';
  import { page } from '$app/stores';
  import { onMount } from "svelte";
  import { TwitterApi } from '$lib/apiHandler';
  export let candidate;
  export let open;
  let isOpen = open
  let alreadyFetch = false
  /**
    @constant
    * @property {string} screen_name
    * @property {string} name
    * @property {string} profile_image_url
    * @property {string} followers_count
    * @property {string} description
   */
  let twitter;
  let error;
  let loading = true;
  function toggleDropdown(){
    console.log(alreadyFetch)
    console.log(isOpen)
    if(isOpen == false && alreadyFetch == false ){
      fetchTwitter()
      isOpen = true
      alreadyFetch = true
    } else {
      isOpen = !isOpen
    }
  }
  async function fetchTwitter(){
    const res = await TwitterApi(candidate.twitter_user)
    const response = await res.json();
    loading = false
    if(res.ok){
      // console.log(response.data)
      twitter = response.data;
      alreadyFetch = true

    } else {
      error = true
      alreadyFetch = false
    }
  }
</script>
<div class="box">
  <div class="group-header is-flex is-flex-direction-row is-align-items-center is-clickable" on:click={toggleDropdown}>
    <div class="is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center has-text-centered">
        <p class=" has-text-black is-inline has-text-weight-medium" >Twitter</p>
    </div>
    <div class="icon-container">
      <i class="fas {isOpen ? 'fa-angle-double-up' : 'fa-angle-double-down'} has-text-black fa-lg fa-fw"></i>
    </div>
  </div>
  {#if isOpen}
  <div class="group-content" transition:slide>

    {#if loading}
<p class="has-text-centered has-text-centered mb-3 has-text-black">
Cargando... <i class="fas fa-spin fa-sync"></i>
</p>
  <progress class="progress is-medium is-black" max="100">100%</progress>
{/if}
{#if !loading && !error}
<div class="has-text-black">
  <h1 class="title is-3 has-text-centered has-text-black">@{twitter.profile.screen_name}
    {#if twitter.profile.verified == 'TRUE'}
    &nbsp;<i class="fas fa-check-circle"></i>
    {/if}
  </h1>
  <p class="has-text-centered">
    {twitter.profile.description}
  </p>
  <nav class="level my-6">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading has-text-black">Tweets</p>
        <p class="title has-text-black">{twitter.profile.statuses_count}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading has-text-black">Seguidores</p>
        <p class="title has-text-black">{twitter.profile.followers_count}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading has-text-black">Siguiendo</p>
        <p class="title has-text-black">{twitter.profile.friends_count}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading has-text-black">Likes</p>
        <p class="title has-text-black">{twitter.profile.favourites_count}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Verificado</p>
        <p class="title">
        {#if twitter.profile.verified == 'TRUE'}
        Si
        {:else}
        No
        {/if}  
        </p>
      </div>
    </div>
  </nav>
  <!-- <blockquote class="twitter-tweet"><p lang="cs" dir="ltr">Fursuit Vs VRChat <a href="https://t.co/vhkVANYElU">pic.twitter.com/vhkVANYElU</a></p>&mdash; 🌹RoseGrump🌹 (@WolfangCerberus) <a href="https://twitter.com/WolfangCerberus/status/1448018570017918982?ref_src=twsrc%5Etfw">October 12, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  -->
  <h2 class="has-text-black title is-5 has-text-centered my-5">tweets más retwitteados</h2>
  <div class="tweets-container is-flex is-flex-direction-column is-justify-content-center is-align-content-center">

    {#each twitter.popularTweets as tweet, i}
    {@html tweet.html}
    {/each}
    {#if twitter.popularTweets.length > 0}
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    {/if}
  </div>
  </div>
{/if}
{#if error}
  <span> No se obtuvieron datos </span>
{/if}
  </div>
  {/if}
</div>
<style> 
.box{
  border: 1px solid #000;
  border-bottom: 0;
  padding: 0;
  border-radius: 0;
}
.group-header{
  background-color: #FFF;
  padding: 1rem;
  border-bottom: 1px solid #000;
}
.group-content{
  padding: 2rem 1rem;
  background-color: #FFF;
  /* border-top: 1px solid #000;; */
  border-bottom: 1px solid #000;
}
</style>
