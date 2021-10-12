<script>
  import { onMount } from "svelte";
  import { TwitterApi } from '$lib/apiHandler';
  export let candidate;
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
  onMount( async ()=>{
    const res = await TwitterApi(candidate.twitter_user)
    const response = await res.json();
    loading = false
    if(res.ok){
      // console.log(response.data)
      twitter = response.data;

    } else {
      error = true
    }
    
  })
</script>
{#if loading}
<p class="has-text-centered has-text-centered">
Cargando... <i class="fas fa-spin fa-sync"></i>
</p>
  <progress class="progress is-medium is-dark" max="100">100%</progress>
{/if}
{#if !loading && !error}
<div class="">
  <h1 class="title is-3 has-text-centered">@{twitter.profile.screen_name}
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
        <p class="heading">Tweets</p>
        <p class="title">{twitter.profile.statuses_count}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Seguidores</p>
        <p class="title">{twitter.profile.followers_count}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Siguiendo</p>
        <p class="title">{twitter.profile.friends_count}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Likes</p>
        <p class="title">{twitter.profile.favourites_count}</p>
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
  <!-- <h2 class="has-text-black title is-5">Palabras más usadas</h2>
  <img src="" alt="">
  <h2 class="has-text-black title is-5">Cuentas con las que más interactúa</h2>
  <div class="columns is-mobile"> -->
    <!-- {#each twitter.most_interactions as account}
      <div class="has-text-centered column is-half">
        <img src={account.profile_img} class="tweeter-profile" alt=""><br>
        <span>{account.name}</span>
      </div>
    {/each} -->
  <!-- </div> -->
 
  </div>
{/if}
{#if error}
  <span> No se obtuvieron datos </span>
{/if}
<style>
/* .tweets-container > .twitter-tweet{
  margin-left: auto;
  margin-right: auto;
} */
</style>