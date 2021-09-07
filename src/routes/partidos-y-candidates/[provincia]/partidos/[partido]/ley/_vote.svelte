<script>
  export let def;
  export let vote;
  export let openModal
  function getColorClass(){
    if(def)
      return def
    return vote.vote
  }

</script>
<div class="flex voto {getColorClass()}" on:click={openModal(vote)}>
  {#if vote && vote.candidate.img}
    <img src={vote.candidate.img} alt="Foto de {vote.candidate.fullname}"/>
  {/if}
</div>
<style>
  .voto{
    border-radius: 50%;
    width: 26px;
    height: 26px;
    display: block;
  }
  .voto img{
    background-color: white;
    position: relative;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .positivo{
    background-color: #17AB14;
  }
  .negativo{
    background-color: #FB2D11;
  }
  .abstencion{
    background-color: #EEFF26;
  }
</style>