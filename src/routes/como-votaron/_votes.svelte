<script>
  export let votes;
</script>
<div class="votes">
  {#each votes as vote}
    <div class="vote my-4">
      <span class="party">{vote.party_name}</span>
      <span class="percentage">{vote.percentage}%</span>
    </div>
  {/each}
</div>
<style>
  .votes{
    border-left: 3px solid black;
    position: relative;
    left: -10px;
    padding: 10px;
  }
  .vote{
    padding: 5px;
    background-image: linear-gradient(116deg, #000000 7.14%, #ffffff 7.14%, #ffffff 50%, #000000 50%, #000000 57.14%, #ffffff 57.14%, #ffffff 100%);
    background-size: 7.79px 15.97px;
  
  }
  span{
    margin-left: 20px;
  }
  .percentage{
    background-color: black;
    color: white;
    padding: 6px;
    float: right;
    position: relative;
    top: -6px
  }
  .party{
    background-color: white;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0 5px
  }
</style>