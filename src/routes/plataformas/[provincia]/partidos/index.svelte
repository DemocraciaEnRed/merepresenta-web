<script>
  import { page } from "$app/stores";
  import provincias from '$lib/provincias.json'
  let provincia;
  page.subscribe((page)=>{
    let currentSlug = page.params.provincia
    // this is a fetch
    provincia = provincias.find((prov)=>{return prov.slug===currentSlug})
  })
  
  // get partidos by provincia
</script>
<h1 class="has-text-center">Plataformas electorales en {provincia.name}</h1>