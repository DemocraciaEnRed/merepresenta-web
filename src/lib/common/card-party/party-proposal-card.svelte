<script>
	import { PartyImg } from "../utils";

    export let partido
</script>

<div class="column is-half-mobile is-one-quarter-tablet is-2-desktop has-text-centered">
  <a href="/partidos-y-candidates/partidos/{partido.id}" >
    <div class="party-container">
        <figure class="image is-square party-logo" style="background-image: url({PartyImg(partido)})"></figure>
        <div class="name-partido has-background-black is-flex is-align-items-center is-justify-content-center has-text-white py-4">
          <p>{partido.name}</p>
        </div>

    </div>
  </a>
</div>


<style>
    .party-container{
      background-color: #fff;
    border: 1px solid black;

    }
      .party-logo{
    /* height: 150px; */
    width: 100%;
    /* margin: 0 auto; */
    border-bottom: 0;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
    .name-partido{
  text-transform: uppercase;
  padding: 2px 10px;
  height: 100px;
  line-height: normal;
  font-weight: 500;
}
</style>