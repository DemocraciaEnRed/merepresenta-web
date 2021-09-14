<script>
  export let image;
  export let imgAlt
  export let subtitle;
  export let textCenter;
  export let title;
</script>
<section class="hero">
  <div class="hero-body" class:has-text-centered={textCenter}>
    <figure class="image py-4">
      <img src={image} alt={imgAlt} class="is-fullwidth" />
    </figure>
    <p >
      <strong>{title}</strong>
    </p>
    <p >
      {subtitle}
    </p>
  </div>
</section>
<style>
  strong{
    color: white;
    font-weight: 600;
  }
  p{
    font-size: 1.3rem;
    color: white;
    font-weight: 400;
  }
</style>