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
  export let fontSizeTitle;

</script>
<div class="drop my-2" style="border-color: {color};">
  <div class="the-drop-header {!isOpen ? 'border-radius' : ''} has-background-{backgroundHeaderColor}" on:click={()=>isOpen = !isOpen}>
    <h2 class="{fontSizeTitle}" style="color: {color}" >{@html name}</h2>
    <span style="color:{color}"><Icon icon={iconClass} /></span>
  </div>
  {#if isOpen}
    <div class="{borderSolid} the-drop-content px-2 pt-2  content has-background-white pb-5" transition:slide>
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
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 25px 10px;
    cursor: pointer;
  }
  .border-radius{
    border-radius: 20px!important;
    transition-delay: .3s;
  }
  .the-drop-content{
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
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