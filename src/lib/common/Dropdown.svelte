<script>
  import Icon from "./Icon.svelte";
  $: isOpen = false;
  $: iconClass =  isOpen ? "fa-chevron-down" : "fa-chevron-up"
  export let name;
  import { slide } from 'svelte/transition';
  export let darkMode;
  let color = darkMode ? 'white' : 'black';
  export let backgroundHeader;
  let backgroundHeaderColor = backgroundHeader ? 'black' : '';
  let borderSolid= backgroundHeader ? 'border-solid p-2' : '';

</script>
<div class="drop my-2" style="border-color: {color};">
  <div class="the-drop-header has-background-{backgroundHeaderColor}" on:click={()=>isOpen = !isOpen}>
    <h2 style="color: {color}" >{@html name}</h2>
    <span style="color:{color}"><Icon icon={iconClass} /></span>
  </div>
  {#if isOpen}
    <div class="{borderSolid} px-2 pt-2 content has-background-white pb-5" transition:slide>
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
  .border-solid{
    border: 2px solid #000

  }
</style>