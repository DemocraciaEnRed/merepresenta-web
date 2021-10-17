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
<style>
  .item{
    border: 1px solid #000;
    padding: 3px 15px;
    font-weight: 500;
  }
</style>