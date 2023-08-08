<script>
	import UpToTop from "$lib/common/upToTop.svelte";

	export let backgroundColor;

</script>
<footer class="footer has-background-{backgroundColor}">
    <div class="container">
        <div class="columns invert-mobile">
            <div class="mx-auto column is-one-quarter has-text-centered-touch is-flex-desktop is-align-items-flex-start ">
                <div>
                    <img src="/logo-merepresenta.svg" class="mb-4 image mx-auto {backgroundColor === 'black' ? null : 'logo-mere'}" width="200" alt="Logo de Me Representa">
                    <p class="has-text-{backgroundColor === 'black' ? 'white' : 'black'} ">Desarrollado con ❤️ por <br> Democracia en Red</p>
                </div>
                
            
            </div>
            <div class="column is-offset-1 has-text-centered-touch">
                <h3 class="general-sans  is-size-6 {backgroundColor === 'black' ? 'has-text-white has-text-weight-normal' : 'has-text-weight-normal has-text-black'}" >Si encontrás algún dato incorrecto o querés sumar tu aporte,
                    podés contactarnos en: <a class="general-sans has-text-weight-semibold {backgroundColor === 'black' ? 'has-text-white' : 'has-text-black'}" href="mailto:contacto@democracyos.io">contacto@democraciaenred.org</a>
                </h3>
            </div>
        </div>
        <UpToTop />
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
        padding: 2rem 1.5rem;
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