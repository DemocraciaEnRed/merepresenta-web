<script>
  import Icon from "./Icon.svelte";
  $: isOpen = false;
  $: iconClass =  isOpen ? "fa-chevron-down" : "fa-chevron-up"
  export let name;

</script>
<div class="drop" on:click={()=>isOpen = !isOpen}>
  <h2>
    {name}
    <span>
      <Icon icon={iconClass} />
    </span>
  </h2>
  {#if isOpen}
    <div class="content">
      <slot/>
    </div>
  {/if}
</div>
<style>
  .drop{
    text-align: center;
    border: 1px solid #000;
    padding: 10px 0;
    cursor: pointer;
  }
  .content{
    padding: 10px
  }
</style>