<script>
  export let value;
</script>
<table class="my-4 binary">
  <td class:active={value}>SI</td>
  <td class:active={!value}>NO</td>
</table>
<style>
  .binary .active{
  background-color: #000;
  color: white;
}
.binary {
  border: 2px #000 solid;
  max-width: 100px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
}
table td{
    width: 50%;
  }
</style>