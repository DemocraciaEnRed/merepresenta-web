<script>
    export let background;
    export let title;
    export let subtitle;
    export let url;
    export let textColor;
    export let delay

</script>
<div>
    <a class="{delay} has-background-white mx-auto is-half background-trivia is-flex is-flex-direction-column is-justify-content-center" href="{url}" target="_blank">
        <div style="background-image:url({background})"  class="background-effect" ></div>
        <div class="content">
            <h1 class="is-size-2  is-4 has-text-{textColor} has-text-weight-bold">{title}</h1>
            <span class="is-size-4 mt-5 "><p class="px-5 has-text-white">{subtitle}</p> </span>
        </div>
    </a>
</div>
<style>
    @keyframes anim{
        0% {box-shadow: none;}
        50% {box-shadow: 0 0 10px #ffffffcc, 0 0 21px #ffffff96, 0 0 21px #ffffff4a}
        100%{box-shadow: none;}
    }
    a {
    border-radius: 10px;
    animation-name: anim;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    }
    a.delay{
     animation-delay:2.5s   
    }
    a{
        position: relative;
        
        min-height: 250px;
    }
    .content{
        z-index: 2;
    }
    .background-effect{
        position: absolute;
        border-radius: 10px;
        filter: blur(1.5px);
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: right;
    }
    a{
        font-family: 'Nippo', Helvetica, Arial ,sans-serif; 

    }
</style>