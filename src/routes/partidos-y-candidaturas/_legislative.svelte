<script>
	import API, { handleResponse } from '$lib/apiHandler';
	import Dropdown from '$lib/common/Dropdown.svelte';
	import SelectDistrict from '$lib/common/SelectDistrict.svelte';
	import { CandidateImg, cargosSlugs, cargosSlugsAbbreviated } from '$lib/common/utils';
	import { getCandidatesToLegislativeSection } from '$lib/graph-ql/candidates';
	import { getPartysByDistrict } from '$lib/graph-ql/partidos';
	let partys;
	let partyList;
	let candidates;
	async function handleSelect() {
		const res = await API(fetch, getPartysByDistrict(this.value));
		const response = await handleResponse(res, 'partidos', 'partido');
		const res2 = await API(fetch, getCandidatesToLegislativeSection(this.value));
		const response2 = await handleResponse(res2, 'candidates', 'candidato');

		partys = response.props.partidos.filter((partido) => partido.tipo === 'partido');
		partyList = response.props.partidos.filter((partido) => partido.tipo === 'lista');
		candidates = response2.props.candidates

	}
</script>

<section class="">
	<section class="container p-2">
		<div class="has-text-centered  has-text-black">
			<img src="/deputies-chamber.png" alt="camara de diputados" />
			<h3 class="is-size-3 has-text-weight-medium">Poder Legislativo Nacional</h3>
			<h1 class="is-size-2 has-text-weight-medium has-text-black">¿Dónde votás?</h1>
		</div>
	</section>
	<div class="select-district mb-5">
		<SelectDistrict on:change={handleSelect} />
	</div>
	<div class="wrapper">
		{#if partys}
			<div class="dropdown-wrapper">
				
				{#each partys as party}
				{#if candidates.some(candidate => candidate.partido.alianzas[0].related_partido_id.id === party.id)}
					
				<Dropdown class="has-text-black " darkMode backgroundHeader name={party.name}>
					<div class="is-flex is-justify-content-center is-flex-direction-column">
						<div class="columns mx-auto is-flex-wrap-wrap">
							{#each partyList as list}
								{#if list.alianzas.some((partyInList) => partyInList.related_partido_id.id === party.id)}
									{#if candidates.some(candidate => candidate.partido.id === list.id)}
										
									<div class="column is-4">
										<div
											class="card has-text-white is-flex is-flex-direction-column is-justify-content-space-between has-background-dark card-list-legislative"
										>
											<div class=" pt-6">
												<figure class="image is-128x128 m-auto">
													<img
														src={candidates.filter(
															(candidate) => candidate.partido.id === list.id
														)[0]
															? CandidateImg(
																	candidates.filter(
																		(candidate) => candidate.partido.id === list.id
																	)[0]
															  )
															: '/candidate.svg'}
														class="is-rounded"
														alt="Placeholder image"
													/>
												</figure>
											</div>
											<div class="card-content ">
												<div class="content ">
													<div class="">
														<h3 class=" has-text-white is-size-5 has-text-weight-light">
															Lista: <strong class=" has-text-white ">{list.name}</strong>
														</h3>
													</div>
													<br />
													<div class="candidates-list">
														{#each candidates as candidate}
															{#if candidate.partido.id === list.id && candidate.position <= 2}
																<p class="is-size-6">
																	{candidate.position}º {candidate.name} - {cargosSlugsAbbreviated[
																		candidate.cargo
																	]}
																</p>
															{/if}
														{/each}
													</div>
												</div>
											</div>
											<div class="card-footer is-justify-content-center py-6">
												<a
													href="/partidos-y-candidaturas/candidates/{list.id}"
													class="button is-outlined is-rounded has-background-white has-text-black is-black"
													>Ver Lista</a
												>
											</div>
										</div>
									</div>
									{/if}
								{/if}
							{/each}
						</div>
						<div class="is-flex is-flex-direction-row is-justify-content-center">
	
							<a
								href="/partidos-y-candidaturas/candidates/{party.id}"
								class=" button is-black m-3 is-rounded is-uppercase list-button">Ver Interna</a
							>
						</div>
					</div>
				</Dropdown>
				{/if}
				{/each}
			</div>
			{:else}
				<div class="fill-select pt-6">
					<div class="skeleton-candidate">
						<figure class="image is-96x96 my-6">
							<img src="/candidate.svg" alt="candidatos"  style="filter: opacity(0.5);"/>
						</figure>
						<h2 class="is-size-4">Elegí un distrito y conocé la fórmula completa</h2>
					</div>
				</div>
			{/if}
		</div>
</section>

<style>
	.fill-select {
		width: 100%;
		height: 575px;
		text-align: center;
		display: flex;
		justify-content: center;
	}
	.skeleton-candidate {
		background-color: #d9d9d980;
		border: 3px dashed #9f9f9f;
		border-radius: 10px;
		min-height: 90%;
		width: 60%;
		display: flex;
		padding: 16px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #00000071;
	}

	.skeleton-candidate h2 {
		width: 50%;
	}
	.dropdown-wrapper {
		width: 80%;
		margin: auto;
	}
	.columns {
		width: 100%;
		justify-content: center;
	}
	.card-list-legislative {
		border-radius: 30px;
		height: 100%;
	}
	.card-list-legislative img {
		border: 1px solid #000;
	}
	.select-district {
		width: 100%;
		text-align: center;
	}
	.candidates-list {
		width: 90%;
		margin: auto;
	}
	.card-list-legislative .card-footer {
		border: none;
	}
	.card-footer a {
		padding: 0.5rem 3rem;
	}
	.list-button{
		padding: .5rem 6rem;
	}
	@media screen and (max-width:768px){
		.skeleton-candidate {
			width: 90%;
		}
		.skeleton-candidate h2 {
			width: 100%;
		}
	}
</style>
