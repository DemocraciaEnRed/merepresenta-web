<script>
    export let background;
    export let delay
    export let url

</script>
<div>
    <a style="background-image:url({background})" class="{delay} has-background-white  mx-auto p-5  background-trivia  is-flex is-flex-direction-column is-justify-content-center" href="{url}" target="_blank">
        <h1 class="is-size-2 title is-4 has-text-black has-text-weight-bold is-flex is-flex-direction-column">
            <span class=" has-background-success has-text-white py-1">Verdadero</span>
            <p class="my-1">ó</p>
            <span class=" has-background-danger has-text-white py-1 ">Falso</span>
        
        </h1>
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
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 250px;
    }
    a{
        font-family: 'Nippo', Helvetica, Arial ,sans-serif; 

    }
    a > h1 >span{
        margin: 10px;
    }
</style>