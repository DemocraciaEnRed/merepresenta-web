<script>
  export let image;
  export let imgAlt
  export let subtitle;
  export let textCenter;
  export let title;
</script>
<section class="hero">
  <div class="hero-body" class:has-text-centered={textCenter}>
    <figure class="image py-4 mb-3">
      <img src={image} alt={imgAlt} class="main-logo mx-auto is-fullwidth" />
    </figure>
    <p class="has-text-centered-tablet">
      <strong>{title}</strong>
    </p>
    <p class="has-text-centered-tablet">
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
  .main-logo{
    max-width: 500px;
  }
</style>