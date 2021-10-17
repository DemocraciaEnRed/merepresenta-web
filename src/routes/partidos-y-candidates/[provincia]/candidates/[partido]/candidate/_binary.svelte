<script>
  export let value;
</script>
  <div class="">
    <div class="is-inline-block item {value ? 'has-background-black' : null}">
      <p class="{value ? 'has-text-white' : 'has-text-black'}">SI</p>
    </div><div class="is-inline-block item {value ? null : 'has-background-black'}">
      <p class="{value ? 'has-text-black' : 'has-text-white'}">NO</p>
    </div>
  </div>
<!-- <table class="my-4 binary">
  {#if value}
  <td class:active={value}><img src="/positive.png" alt="Ícono de check"></td>
  {/if}
  {#if !value}
  <td class:active={!value}><img src="/negative.png" alt="Ícono de cruz"></td>
  {/if}
</table> -->
<style>
  .item{
    border: 1px solid #000;
    padding: 3px 15px;
    font-weight: 500;
  }
  .binary .active{
  background-color: #000;
  color: white;
}
.binary {
  border: 2px #000 solid;
  max-width: 50px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
table td{
    width: 50%;
  }
</style>