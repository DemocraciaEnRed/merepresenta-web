<script>
  export let value;
</script>
<table class="my-4 binary">
  {#if value}
  <td class:active={value}><img src="/positive.png" alt="Ícono de check"></td>
  {/if}
  {#if !value}
  <td class:active={!value}><img src="/negative.png" alt="Ícono de cruz"></td>
  {/if}
</table>
<style>
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