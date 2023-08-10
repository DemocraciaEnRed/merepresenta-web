<script>
  export let icon;
  export let brand = false;
  let type = brand ? "fab" : "fas"
  export let size
  export let color = 'has-text-black'
  let sizeIs = size ? `is-${size}` : ""
  let fasize = size === "large" ? "fa-2x" : "fa-large"
</script>
<span class="icon {sizeIs}">
  <i class="{type} {fasize}  {icon}  {color}"></i>
</span>