<script>
  export let candidate
</script>
<div>
  <table class="bord">
    <td class="candidate-image" style="background-image: url({candidate.img});">
    </td>
    <td class="has-text-left">
      <strong>2021</strong><br/>
      Se postula para {candidate.position_full}
    </td>
  </table>
  <table class="history">
    {#each candidate.political_history as pos}
      <tr>
        <td class="empty"></td>
        <td class="year">{pos.year}</td>
        <td class="has-text-left">{pos.title}</td>
      </tr>
    {/each}
  </table>
</div>
<style>
  .year{
    border-left: 2px solid black;
  }
  .empty{
    border: 0
  }
  .history tr{
    padding-left: 20px;
  }
  .bord{
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
  .candidate-image{
    width: 50%;
    height: 100px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>