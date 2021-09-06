<script>
  export let data;
  export let image;
  export let position;
</script>
<div>
  <div>
    <img src={image} alt="">
  </div>
  <div class="description has-text-left">
    2021 <br/>
    Se postula para {position}
  </div>
  <table>
    {#each data as pos}
      <tr>
        <td>{pos.year}</td>
        <td>{pos.title}</td>
      </tr>
    {/each}
  </table>
</div>
<style>
  img{
    width: 50%;
    border-radius: 50%;
    float: left;
    height: 120px;
    width: 120px;
  }
</style>