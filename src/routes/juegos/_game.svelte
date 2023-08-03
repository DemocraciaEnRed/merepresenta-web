<script>
    export let image
    export let title
    export let url;
    export let delay

</script>
<div>
    <a  class="{delay} is-offset-one-quarter mx-auto is-half mb-6 " href="{url}" target="_blank">
        <img src="{image}" alt={title}>
        <!-- <h1 class="is-size-3 title is-4 has-text-{textColor} has-text-weight-bold">{title}</h1>
        <span class="has-background-black"><p class="has-text-white">{subtitle}</p> </span> -->
    </a>
</div>
<style>
@media screen and (max-width: 768px){
a img{
    width: 85%;
}
}
</style>