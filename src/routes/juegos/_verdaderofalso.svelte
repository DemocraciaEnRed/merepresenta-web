<script>
    export let background;
    export let delay

</script>
<div>
    <a style="background-image:url({background})" class="{delay} has-background-white is-offset-one-quarter mx-auto p-5 column is-half background-trivia mb-6 is-flex is-flex-direction-column is-justify-content-center" href="{null}" target="_blank">
        <h1 class="is-size-3 title is-4 has-text-black has-text-weight-bold">
            <span class="is-uppercase has-background-success has-text-white px-1">verdadero</span>
            <br> o <br>
            <span class="has-background-danger is-uppercase has-text-white px-1 ">falso</span>
        
        </h1>

        <span class="has-background-black"><p class="has-text-white">próximamente</p> </span>
    </a>
</div>
<style>
    @keyframes anim{
        0% {box-shadow: none;}
        50% {box-shadow: 0 0 10px #ffffffcc, 0 0 21px #ffffff96, 0 0 21px #ffffff4a}
        100%{box-shadow: none;}
    }
    a {
    animation-name: anim;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    }
    a.delay{
     animation-delay:2.5s   
    }
    a{
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 200px;
    }
    a{
        font-family: 'Nippo', Helvetica, Arial ,sans-serif; 

    }
</style>