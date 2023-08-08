<script>
    export let showOnPx = 150;
    export let showUpToTop
    let hidden = true;

function goTop() {
  document.body.scrollIntoView({behavior: "smooth" });
}

function scrollContainer() {
  return document.documentElement || document.body;
}

function handleOnScroll() {
  if (!scrollContainer()) {
    return;
  }

  if (scrollContainer().scrollTop > showOnPx) {
    hidden = false;
  } else {
    hidden = true;
  }
}
</script>

<svelte:window on:scroll={handleOnScroll} />
<button class="up-to-top" style="display: {!hidden ? 'block':'none'};" on:click={goTop}>
    <figure class="image is-64x64">
        <img class="is-rounded" src="/upToTop.svg">
      </figure>
</button>

<style>
     .up-to-top{
        background-color: transparent;
        border: none;
        bottom: 24px;
        right: 24px;
        position: fixed;
        cursor: pointer;
    }
</style>