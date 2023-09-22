<script>
	import Icon from '$lib/common/Icon.svelte';
	import { CandidateImg, cargosSlugs } from '$lib/common/utils';

  export let candidate;
  import Binary from "./_binary.svelte";
  import { slide } from 'svelte/transition';
</script>
<div class="box is-rounded">
  <div class="group-header is-flex is-flex-direction-row is-align-items-center is-top-rounded" >
    <div class="is-flex-grow-1 is-flex is-flex-direction-column is-align-items-center has-text-centered">
        <p class=" is-size-5 has-text-black is-inline has-text-weight-bold" >Curriculum del candidato/a</p>
    </div>

  </div>
  <div class="group-content is-bottom-rounded" transition:slide>
    <div class="columns is-align-content-stretch">
      <div class="column is-one-third candidate-perfil">
        <div class="column is-12-touch is-narrow-desktop candidate-logo-container">
          <div class="border-img  mx-auto" style="background: linear-gradient(45deg,{candidate.partido.color1},{candidate.partido.color2})"
        >
        <img src={CandidateImg(candidate)} class="image candidate-logo" alt="foto de {candidate.name}">
      </div>
        </div>
        <div class=" has-text-black mb-3">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
            <p class=" has-text-weight-bold is-size-4">{candidate.name}</p>
            <p class="has-text-weight-light">Candidat{candidate.genre === 'm' ? 'o': 'a' } a {cargosSlugs[candidate.cargo][candidate.genre]}</p>
          </div>
      </div>

      {#if candidate.profesion && candidate.profesion !== " "}
      <div class=" has-text-black mb-3">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
            <p class=" has-text-weight-medium">Profesión / Ocupación</p>
            <p class="is-lowercase is-capitalized">{candidate.profesion}</p>
          </div>
      </div>
      {/if}
        {#if candidate.age}
        <div class=" has-text-black mb-3">    
            <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
              <p class="has-text-weight-medium">Edad</p>
              <p class="">{candidate.age} años</p>
            </div>
        </div>
        {/if}
        <!-- {#if candidate.formacion && candidate.formacion !== " "}
          <div class=" has-text-black mb-3">    
            <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
              <p class="has-text-weight-medium">Formación</p>
              <p class="">{candidate.formacion}</p>
            </div>
          </div>
          
        {/if} -->
        {#if candidate.twitter_profile || candidate.twitter_user || candidate.facebook_page || candidate.facebook_profile || candidate.instagram_page}
        <div class=" has-text-black">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
            <p class="has-text-weight-medium">Redes sociales</p>
            <div class="is-flex">
              {#if candidate.twitter_profile}
              <a href="{candidate.twitter_profile}" target="_blank" class="has-text-black"><Icon icon="fa-twitter-square" brand size="large"/></a>
              {/if}
              {#if candidate.twitter_user && candidate.twitter_user !== candidate.twitter_profile}
              <a href="{candidate.twitter_user}" target="_blank" class="has-text-black"><Icon icon="fa-twitter-square" brand size="large"/></a>
              {/if}
              {#if candidate.facebook_page}
              <a href="{candidate.facebook_page}" target="_blank" class="has-text-black"><Icon icon="fa-facebook-square" brand size="large"/></a>
              {/if}
              {#if candidate.facebook_profile}
              <a href="{candidate.facebook_profile}" target="_blank" class="has-text-black"><Icon icon="fa-facebook-square" brand size="large"/></a>
              {/if}
              {#if candidate.instagram_page}
              <a href="{candidate.instagram_page}" target="_blank" class="has-text-black"><Icon icon="fa-instagram-square" brand size="large"/></a>
              {/if}
  
            </div>
  
          </div>
        </div>
          
        {/if}
      </div>
      <div class="column">
        {#if candidate.resumen_experiencia}
        <div class=" has-text-black">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
            <p class="has-text-weight-bold is-size-5"><Icon icon="fa-briefcase"/> Experiencia</p>
            <p class="is-size-6 pl-4 pt-4 has-text-weight-light">{@html candidate.resumen_experiencia}</p>
          </div>
        </div>
          
        {/if}
        {#if candidate.formacion}
          
        <div class=" has-text-black mt-5">    
          <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
            <p class="has-text-weight-bold is-size-5"><Icon icon="fa-scroll"/> Ultimo grado de estudios alcanzado</p>
            <p class="is-size-6 pl-4 pt-4 has-text-weight-light">{candidate.formacion}</p>
          </div>
        </div>
        {/if}
      </div>
    </div>
    <!-- {#if candidate.childrens != null && candidate.childrens > 0}
    <div class="column has-text-black has-text-centered">    
        <div class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center element-group">
          <p class="is-uppercase">Hijos</p>
          <p class="is-uppercase has-text-weight-medium">{candidate.childrens} Hijxs</p>
        </div>
    </div>
    {/if}
    {#if candidate.cargos_publicos != null}
    <div class="column has-text-black has-text-centered">    
        <div class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center element-group">
          <p class="is-uppercase">¿Tuvo cargos?</p>
          <Binary value={candidate.cargos_publicos}/>
        </div>
    </div>
    {/if}
    {#if candidate.otros_partidos != null}
    <div class="column has-text-black has-text-centered">    
        <div class="is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center element-group">
          <p class="is-uppercase is-size-7">¿Estuvo en varios partidos?</p>
          <Binary value={candidate.otros_partidos}/>
        </div>
    </div>
    {/if} -->
    <!-- <div class="column"></div> -->
  </div>
</div>
<style> 
.border-img{
  padding: 5px;
		border-radius: 999px;
		border: none;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		height: 170px;
		width: 170px;
}
.box{
  border: 1px solid #CFCFCF;
  border-bottom: 0;
  padding: 0;
  border-radius: 0;
}
.group-header{
  background-color: #FFF;
  padding: 1rem;
  border-bottom: 1px solid #CFCFCF;
}
.group-content{
  padding: 2rem 1rem;
  background-color: #FFF;
  /* border-top: 1px solid #CFCFCF;; */
  border-bottom: 1px solid #CFCFCF;
}
.element-group{
  margin: 0 20px;
}
.group-content .columns .column:not(:first-child){
  border-left: 1px solid #CFCFCF;
}
.is-rounded{
    border-radius: 10px;
  }
.is-top-rounded{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.is-bottom-rounded{
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.candidate-perfil{
  height: 100%;
}
.candidate-logo{
    border-radius: 50%;
    width: 170px;
  }
  @media screen and (max-width: 1023px) {
    .candidate-logo{
          width: auto;
          max-height: 200px;
        }
    .element-group{
    height: auto;
    margin: 0 20px;
  }
  .candidate-logo-container{
      padding-bottom: 0;
    }
  .group-content{
    padding: 1rem 1rem;
    background-color: #FFF;
    /* border-top: 1px solid #CFCFCF;; */
    border-bottom: 1px solid #CFCFCF;
  }
  .element-group p:first-child{
    margin-bottom: 10px;
  }
  .group-content .columns .column:not(:first-child){
    border-left: 0;
  }
}
@media screen and (max-width: 768px) {
  .group-content .columns .column:not(:first-child){
    border-left: 0;
    border-top: 1px solid #CFCFCF;
  }
}
</style>
