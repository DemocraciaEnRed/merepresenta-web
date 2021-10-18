<script>
    import Icon from "$lib/common/Icon.svelte";
    export let name;
    export let url;
    export let iconType;
    export let brand;
</script>
<a class="button mb-3 is-uppercase is-black" target="_blank" href="{url}">{name} <span class="ml-3"><Icon {brand} icon="{iconType}"/></span></a>