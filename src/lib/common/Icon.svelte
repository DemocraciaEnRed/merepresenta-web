<script>
  export let icon;
  export let brand = false;
  let type = brand ? "fab" : "fas"
  export let size
  export let color
  let colorIs = color ? `has-text-${color}` : '';
  let sizeIs = size ? `is-${size}` : ""
  let fasize = size === "large" ? "fa-2x" : "fa-large"
  
  $: size, changeSizeIs()
  const changeSizeIs =()=>{
    sizeIs = size ? `is-${size}` : ""
    fasize = size === "large" ? "fa-2x" : "fa-large"
  }
</script>
<span class="icon {sizeIs}">
  <i class="{type} {fasize}  {icon} {colorIs} "></i>
</span>