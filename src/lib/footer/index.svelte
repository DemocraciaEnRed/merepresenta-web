<script>
	export let backgroundColor;  
</script>
<footer class="footer has-background-{backgroundColor}">
    <div class="container">
        <div class="columns invert-mobile">
            <div class="column is-narrow has-text-centered-touch">
                <img src="/logo-merepresenta.svg" class="image mx-auto {backgroundColor === 'black' ? null : 'logo-mere'}" width="300" alt="Logo de Me Representa">
                <p class="has-text-{backgroundColor === 'black' ? 'white' : 'black'} mt-5">Desarrollado con ❤️ por</p>
                <img src="/logo-der-{backgroundColor === 'black' ? 'white' : 'negro'}.svg" width="150"  class="image logo-der" alt="Logo de Democracia en Red">
            
            </div>
            <div class="column is-offset-1 has-text-centered-touch">
                <h3 class="general-sans  is-size-7 {backgroundColor === 'black' ? 'has-text-white has-text-weight-normal' : 'has-text-weight-normal has-text-black'}" >Si encontrás algún dato incorrecto o querés sumar tu aporte,
                    podés contactarnos en: <a class="general-sans has-text-weight-semibold {backgroundColor === 'black' ? 'has-text-white' : 'has-text-black'}" href="mailto:contacto@democracyos.io">contacto@democraciaenred.org</a>
                </h3>
            </div>
        </div>
        <!-- <div class="is-flex-tablet is-justify-content-space-evenly is-align-items-center">
        </div>
        
        <div class="is-uppercase has-text-centered-tablet is-size-6 mt-5">
        </div> -->

        <!-- <figure class=" ml-0 image is-hidden-tablet logo-der">
            <img class="" src="{backgroundColor === 'black' ? '/logo-der-white.svg' : '/logo-der-negro.svg'}" alt="Logo de Democracia en Red">
          </figure> -->

    </div>
</footer>

<style>
    .logo-mere{
        filter: invert(0%) sepia(100%) saturate(24%) hue-rotate(77deg) brightness(0%) contrast(107%);
    }
    .logo-der{
        width: 200px;
        
    }
    .footer{
        padding: 3rem 1.5rem;
    }
    @media screen and (max-width: 1024px){
		.logo-der{
			margin: 0 auto;
		}
        .invert-mobile{
            display:flex;
            flex-direction: column-reverse;
        }
	}
</style>