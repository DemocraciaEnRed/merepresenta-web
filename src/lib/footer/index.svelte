<script>
	export let backgroundColor;  
</script>
<footer class="pb-6 footer has-background-white has-background-{backgroundColor}">

    <div class="content">
        <div class="is-flex is-justify-content-space-evenly is-align-items-center">
            <figure class="image  mb-0 ml-0-mobile">
                <img src="/logo-merepresenta.svg" class="{backgroundColor === 'black' ? '' : 'logo-mere'}" alt="Logo de Me representa">
            </figure>
            <figure class="image mt-0 is-hidden-mobile">
                <img src="{backgroundColor === 'black' ? '/logo-der-white.svg' : '/logo-der-negro.svg'}" alt="Logo de Democracia en Red">
            </figure>
        </div>
        
        <div class="is-uppercase has-text-centered-tablet is-size-5 mt-5">
            <h3 class="{backgroundColor === 'black' ? 'has-text-white is-size-5 has-text-weight-normal' : 'has-text-weight-normal has-text-black  is-size-5'}" >Si encontrás algún dato incorrecto o querés sumar tu aporte, <br>
                podés contactarnos en: <a class="{backgroundColor === 'black' ? 'has-text-white' : 'has-text-black'}" href="mailto:contacto@democracyos.io">contacto@democracyos.io</a>
            </h3>
        </div>
        <figure class="ml-0 image is-hidden-tablet">
            <img class="logo-der-mobile" src="{backgroundColor === 'black' ? '/logo-der-white.svg' : '/logo-der-negro.svg'}" alt="Logo de Democracia en Red">
          </figure>

    </div>
</footer>

<style>
    .logo-mere{
        filter: invert(0%) sepia(100%) saturate(24%) hue-rotate(77deg) brightness(0%) contrast(107%);
    }
    a{
        font-family: 'Nippo', Helvetica, Arial ,sans-serif;
    }
    .logo-der-mobile{
        width: 60%;
    }
</style>