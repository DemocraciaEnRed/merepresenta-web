<script>
  import { page } from "$app/stores";
  export let proposal;
</script>
<div class="card">
  <div class="card-content">
    <div class="content">
      {proposal.description}
    </div>
  </div>
  <footer class="card-footer">
    <a href="{$page.path}/propuestas/{proposal.id}" class="card-footer-item">Leer más</a>
  </footer>
</div>