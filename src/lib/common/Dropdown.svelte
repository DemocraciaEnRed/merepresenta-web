<script>
  import Icon from "./Icon.svelte";
  $: isOpen = false;
  $: iconClass =  isOpen ? "fa-chevron-down" : "fa-chevron-up"
  export let name;
  import { slide } from 'svelte/transition';
</script>
<div class="drop" on:click={()=>isOpen = !isOpen}>
  <h2>
    {name}
    <span>
      <Icon icon={iconClass} />
    </span>
  </h2>
  {#if isOpen}
    <div class="content" transition:slide >
      <slot/>
    </div>
  {/if}
</div>
<style>
  .drop{
    text-align: center;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 30px 0;
    cursor: pointer;
    margin-top: -1px;
  }
  h2{
    font-weight: 500;
    color: black;
  }
  .content{
    padding: 10px
  }
</style>