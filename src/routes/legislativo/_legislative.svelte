<script>
	import API, { handleResponse } from '$lib/apiHandler';
	import BannerParty from '$lib/common/banner-party.svelte';
	import CandidateCircle from '$lib/common/candidate-circle.svelte';
	import FlourishCard from '$lib/common/flourish-card.svelte';
	import FlourishDiputies from '$lib/common/flourish-diputies.svelte';
	import { getCandidatesByParty, getCandidatesByPartyList } from '$lib/graph-ql/candidates';
	import { getPartyById, getPartysByAlianza } from '$lib/graph-ql/partidos';

	const images = ['paridad', 'edad', 'estudios'];

	export let candidates;
	let senator_chamber = true;
	let partyId;
	let partySelected;
	let candidatesSelected;

	let errorOnImage=0



	$: senator_chamber, change()

	async function change() {
		errorOnImage = 0
		//partySelected=null
		//partyId=null
		if(partySelected && partyId){
			fetchPartyAndCandidates()
		}		
	}

	function errorImage(){
		this.style.display = 'none'
		errorOnImage = errorOnImage + 1
		if(errorOnImage > 2) this.parentNode.parentNode.style.display = 'none'
	}

	async function changeParty() {
		errorOnImage = 0
		partySelected = null;
		partyId = await this.dataset.party;
		fetchPartyAndCandidates()
	}

	async function fetchPartyAndCandidates(){
		const res = await API(fetch, getPartyById(partyId));
		const response = await handleResponse(res, 'partido', 'partido');
		const alianza = response.props.partido[0].alianzas[0].related_partido_id.id;
		const resTwo = await API(fetch, getPartysByAlianza(alianza));
		const responseTwo = await handleResponse(resTwo, 'partido', 'partido');
		const partyList = responseTwo.props.partido.map((partido) => partido.id);
		const resThree = await API(fetch, getCandidatesByPartyList(partyList));
		const responseThree = await handleResponse(resThree, 'candidates', 'candidato');
		partySelected = response.props.partido[0];
		candidatesSelected = responseThree.props.candidates.filter(candidate => {
			if(senator_chamber) return candidate.cargo === 'diputado-nacional'
			else return candidate.cargo === 'senador-nacional'
		});
	}
</script>

<section class="">
	<section class="container p-2">
		<div class="mt-6 has-text-centered has-text-black">
			<img src="/deputies-chamber.png" alt="camara de diputados" />
			<h1 class="is-size-2 has-text-weight-medium">
				¿Quiénes ocuparán bancas a partir de diciembre?
			</h1>
			<h3 class="is-size-4 has-text-weight-light has-text-black">
				Conocé todas las candidaturas que avanzaron y cómo quedará compuesto el Poder Legislativo
			</h3>
		</div>
		<div class="type-button-group mt-5 is-flex is-justify-content-center">
			<button
				class="button {!senator_chamber &&
					'is-outlined'} is-black is-rounded is-uppercase button-type"
				on:click={() => {
					senator_chamber = true;
				}}
			>
				diputados
			</button>
			<button
				class="button {senator_chamber &&
					'is-outlined'} is-black is-rounded is-uppercase button-type"
				on:click={() => {
					senator_chamber = false;
				}}
			>
				senadores
			</button>
		</div>
	</section>
	<div>
		<h1 class="is-size-4 has-text-weight-medium has-text-centered has-text-black my-6">
			¿Quiénes son los Diputados que ingresan a la Cámara?
		</h1>
		<div class="candidate-group is-flex is-justify-content-space-evenly is-flex-wrap-wrap mx-auto">
			{#each candidates as candidate}
			<div class="min-content">
				<CandidateCircle {partyId} {candidate} handleSelectParty={changeParty} />

			</div>
			{/each}
		</div>
		{#if partySelected}
			<section class="is-flex is-justify-content-center is-flex-direction-column has-text-black my-6">
				<BannerParty {partySelected} />
			</section>
			{#if senator_chamber }
				<div>
					<h1 class="is-size-4 has-text-weight-medium has-text-centered has-text-black my-6">
						Las candidaturas en datos
					</h1>
	
					<div class="is-flex is-justify-content-center is-flex-wrap-wrap">
						{#each images as image}
							<img src="/data-card/{partySelected.alianzas[0].related_partido_id.id}/{image}.png"
								alt="{image}" on:error={errorImage}/>
						{/each}
					</div>
					<hr class="w-75 mx-auto">
				</div>
			{/if}
			{#if candidatesSelected.length > 0}
				<h1 class="is-size-4 has-text-weight-medium has-text-centered has-text-black my-6">
					¿Quiénes son los diputados/as que ingresan a la Cámara?
				</h1>
				<div class="is-flex is-justify-content-center is-flex-wrap-wrap w-75 mx-auto">
					{#each candidatesSelected as candidate }
					<div class="is-flex is-flex-direction-column legislative-candidate mb-3">
						<CandidateCircle {candidate} showPartyName={false}/>
						<p class="is-size-7">
							{candidate.name}
						</p>
					</div>
					{/each}
				</div>
				<hr class="w-75 mx-auto">
				
			{/if}
			{/if}
			<h1 class="is-size-4 has-text-weight-medium has-text-centered has-text-black my-6">
				Como queda la camara posterior a las elecciones generales
			</h1>
			<div class="flourish-wrapper">
				<FlourishDiputies flourishEmbedCode='{senator_chamber?'15509044':'15508986'}'/>
			</div>
	</div>
</section>

<style>
	.dropdown-wrapper {
		width: 80%;
		margin: auto;
	}
	.columns {
		width: 100%;
		justify-content: center;
	}
	.select-district {
		width: 100%;
		text-align: center;
	}
	.button-type {
		margin: 0 3rem;
		font-size: 1.3rem;
	}
	.legislative-candidate{
		width: min-content;
	}
	.legislative-candidate p{
		padding: 4px ;
		white-space: pre-wrap;
		text-align: center;
	}
	.min-content{
		width: min-content;
	}
	.flourish-wrapper{
		width: 50%;
		margin: auto;
	}
	.candidate-group{
		width: 50%;
	}
	@media screen and (max-width: 1024px) {
		.flourish-wrapper{
			width: 80%;
		}
	}
	@media screen and (max-width: 768px) {
		.candidate-group{
			width: 100%;
		}
		.type-button-group {
			border: 1px solid #0a0a0a;
			border-radius: 9999px;
			padding: 2px;
		}
		.button-type {
			margin: 0;
			width: 50%;
			border: none;
			font-size: 1rem;
		}
		.flourish-wrapper{
			width: 95%;
		}
	}
</style>
