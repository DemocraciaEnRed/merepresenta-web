<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  /* @type Partido*/
  /**
    * @type {Party}
    * @const
  */
  export let partido;
  
  function partylink(){
    const currentRoute = $page.path
    goto(`${currentRoute}/${partido.slug}`);
  }
</script>
<div on:click={partylink} class="box has-text-centered" >
  <figure class="image is-128x128">
    <img class="is-rounded" src={partido.logo} alt={`${partido.name} logo`}>
  </figure>
  <p>{partido.name}</p>
</div>
<style>
  figure{
    margin: 0 auto
  }
  .box{
    cursor: pointer;
  }
  p{
    text-transform: uppercase;
    font-size: 12px;
  }
</style>