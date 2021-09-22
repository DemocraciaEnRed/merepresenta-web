<script>
  export let candidate;
</script>
<div class="mt-6 has-text-left p-4">
  <h2 class="has-text-black title is-5">Biografia</h2>
  <p class="has-text-left">
    {candidate.twitter_profile}
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
<style>
/**
.tweeter-profile{
  height: 45px;
  width: 45px;
  border-radius: 50%;
}*/
</style>