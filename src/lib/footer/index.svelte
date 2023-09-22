<script>
	import Icon from "$lib/common/Icon.svelte";
	import UpToTop from "$lib/common/upToTop.svelte";

	export let backgroundColor;

</script>
<footer class="footer has-background-{backgroundColor}">
    <div class="container">
        <div class="columns invert-mobile">
            <div class="mx-auto column is-three-quarters has-text-centered-touch is-flex-desktop is-align-items-flex-start ">
                <div>
                    <img src="/logo-merepresenta.svg" class="mb-4 image {backgroundColor === 'black' ? null : 'logo-mere'} logo-footer" width="200" alt="Logo de Me Representa">
                    <p class="has-text-{backgroundColor === 'black' ? 'white' : 'black'} ">Si encontrás algún dato incorrecto o querés sumar tu aporte,
                        podés contactarnos en: <a class="general-sans has-text-weight-semibold {backgroundColor === 'black' ? 'has-text-white' : 'has-text-black'}" href="mailto:contacto@democracyos.io">contacto@democraciaenred.org</a></p>
                </div>
                
            
            </div>
            <div class="column  has-text-centered-touch is-flex is-align-items-center">
              <a href="https://twitter.com/fundacionDER?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" class="has-text-black"><Icon color="white" icon="fa-twitter" brand size="large"/></a>
              <a href="https://www.instagram.com/democraciaenred/?hl=es-la" target="_blank" class="has-text-black"><Icon color="white" icon="fa-instagram" brand size="large"/></a>
              <a href="https://democraciaenred.org/" target="_blank" class="has-text-black"><Icon color="white" icon="fa-globe" size="large"/></a>
              <a href="https://www.linkedin.com/company/democracia-en-red/mycompany/" target="_blank" class="has-text-black"><Icon color="white" icon="fa-linkedin" brand size="large"/></a>
              <a href="https://www.tiktok.com/@democraciaenred" target="_blank" class="has-text-black"><Icon color="white" icon="fa-tiktok" brand size="large"/></a>
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
        .logo-footer{
            margin: auto;
        }

        .invert-mobile{
            display:flex;
            flex-direction: column-reverse;
        }
	}
</style>