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
      console.log(response.data.data)
      twitter = response.data.data;

    }{
      error = true
    }
    
  })
</script>
{#if loading}
   <em>cargando...</em>
{/if}
{#if !loading && !error}
<div class="mt-6 has-text-left p-4">
  <h2 class="has-text-black title is-5">Biografia</h2>
  <p class="has-text-left">
    {twitter.description}
  </p>
  <!--
  <h2 class="has-text-black title is-5">tweets más retwitteados</h2>
  {#each most_shared_tweets as tweet}
    <blockquote>
      <i>{tweet}</i>
    </blockquote>
  {/each}
  <h2 class="has-text-black title is-5">Palabras más usadas</h2>
  <img src="" alt="">
  <h2 class="has-text-black title is-5">Cuentas con las que más interactúa</h2>
  <div class="columns is-mobile">
    {#each twitter.most_interactions as account}
      <div class="has-text-centered column is-half">
        <img src={account.profile_img} class="tweeter-profile" alt=""><br>
        <span>{account.name}</span>
      </div>
    {/each}
  </div>
  -->
  </div>
{/if}
{#if error}
  <span> No se obtuvieron datos </span>
{/if}
<style>
/**
.tweeter-profile{
  height: 45px;
  width: 45px;
  border-radius: 50%;
}*/
</style>