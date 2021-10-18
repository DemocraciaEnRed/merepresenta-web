<script>
    export let background;
    export let title;
    export let subtitle;
    export let url;
    export let textColor;

</script>
<div>
    <a style="background-image:url({background})" class="has-background-white is-offset-one-quarter mx-auto p-5 column is-half background-trivia mb-6 is-flex is-flex-direction-column is-justify-content-center" href="{url}" target="_blank">
        <h1 class="is-size-3 title is-4 has-text-{textColor} has-text-weight-bold">{title}</h1>
        <span class="has-background-black"><p class="has-text-white">{subtitle}</p> </span>
    </a>
</div>
<style>
    a{
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 200px;
    }
    a{
        font-family: 'Nippo', Helvetica, Arial ,sans-serif; 

    }
</style>