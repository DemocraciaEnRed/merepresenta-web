<script>
  import Icon from "./Icon.svelte";
  $: isOpen = false;
  $: iconClass =  isOpen ? "fa-chevron-down" : "fa-chevron-up"
  export let name;
  import { slide } from 'svelte/transition';
  export let darkMode;
  let color = darkMode ? 'white' : 'black'

</script>
<div class="drop" style="border-color: {color};">
  <div class="the-drop-header" on:click={()=>isOpen = !isOpen}>
    <h2 style="color: {color}" >{@html name}</h2>
    <span style="color:{color}"><Icon icon={iconClass} /></span>
  </div>
  {#if isOpen}
    <div class="content pb-5" transition:slide>
      <slot/>
    </div>
  {/if}
</div>
<style>
  .drop{
    text-align: left;
    /* border-top: 1px solid #000; */
    border-bottom: 1px solid #000;
    margin-top: -1px;
  }
  .the-drop-header{
    padding: 30px 10px;
    cursor: pointer;
  }
  h2{
    font-weight: 500;
    color: black;
  }
  span{
    position: relative;
    right: 20px;
    bottom: 20px;
    float: right;
  }
</style>