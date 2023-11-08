<script context="module">
	import API, { handleResponse } from '$lib/apiHandler';
	import { getCandidatesByCargo } from '$lib/graph-ql/candidates';
	export async function load({ fetch }) {
		const res = await API(fetch, getCandidatesByCargo('presidente'));
		const candidates = await handleResponse(res, 'candidates', 'candidato');
		return candidates;
	}
</script>

<script>
	import CandidateCircle from '$lib/common/candidate-circle.svelte';
	import { cargosSlugs } from '$lib/common/utils';
	import Icon from '$lib/common/Icon.svelte';
	export let candidates;
	
	let candidate1 = candidates.filter(candidate => candidate.partido.elecciones_generales)[1];
	let candidate2 = candidates.filter(candidate => candidate.partido.elecciones_generales)[0];
</script>

<main class="pb-6 has-background-white white-background-desktop">
	<div class="section tetris-background">
		<div class="container">
			<div class="has-text-centered has-text-black">
				<h1 class="is-size-2 has-text-weight-medium has-text-black">Compará candidaturas</h1>
				<h3 class="is-size-4 is-size-6-mobile has-text-weight-light">
					¿Querés analizar las similitudes y diferencias entre las candidaturas?
					<br />
					Acá podés elegir y comparar sus perfiles
				</h3>
			</div>
		</div>
		<table class="table is-fullwidth has-text-centered is-hidden-mobile">
			<thead>
				<tr>
					<th class="info-header-table" />
					<th class="header-table">Candidato/a 1</th>
					<th class="header-table">Candidato/a 2</th>
				</tr>
			</thead>
			{#if candidate1 || candidate2}
				<tfoot>
					<tr>
						<th />
						<th>Candidato/a 1</th>
						<th>Candidato/a 2</th>
					</tr>
				</tfoot>
			{/if}
			<tbody>
				<tr>
					<td />
					<td>
						<div class="select is-medium mx-3 is-white">
							<select
								id="candidate1"
								class="has-background-grey-dark has-text-white has-text-weight-light"
								bind:value={candidate1}
							>
								<option value={null} disabled selected>elegi una candidatura</option>
								{#each candidates as candidate}
									<option value={candidate} disabled={true}>{candidate.name}</option>
								{/each}
							</select>
						</div>
					</td>
					<td>
						<div class="select is-medium mx-3 is-white">
							<select
								id="candidate2"
								class="has-background-grey-dark has-text-white has-text-weight-light"
								bind:value={candidate2}
							>
								<option value={null} disabled selected>elegi una candidatura</option>
								{#each candidates as candidate}
									<option value={candidate} disabled={true}>{candidate.name}</option>
								{/each}
							</select>
						</div>
					</td>
				</tr>
				{#if candidate1 || candidate2}
					<tr>
						<td class="info">Candidato/a</td>
						<td>
							{#if candidate1}
								<div>
									<CandidateCircle candidate={candidate1} showPartyName={false} />
									<div class=" has-text-black mb-3">
										<div
											class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
										>
											<p class=" has-text-weight-bold is-size-4">{candidate1.name}</p>
											<p class="has-text-weight-light">
												Candidat{candidate1.genre === 'm' ? 'o' : 'a'} a {cargosSlugs[candidate1.cargo][candidate1.genre]}
											</p>
										</div>
									</div>
									<div class=" has-text-black mb-3">
										<div
											class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
										>
											<p class=" has-text-weight-bold is-size-5">Partido:</p>
											<p class="has-text-weight-light">{candidate1.partido.name}</p>
										</div>
									</div>
								</div>
							{/if}
						</td>
						<td
							>{#if candidate2}
								<div>
									<CandidateCircle candidate={candidate2} showPartyName={false} />
									<div class=" has-text-black mb-3">
										<div
											class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
										>
											<p class=" has-text-weight-bold is-size-4">{candidate2.name}</p>
											<p class="has-text-weight-light">
												Candidat{candidate2.genre === 'm' ? 'o' : 'a'} a {cargosSlugs[candidate2.cargo][candidate2.genre]}
											</p>
										</div>
									</div>
									<div class=" has-text-black mb-3">
										<div
											class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
										>
											<p class=" has-text-weight-bold is-size-5">Partido:</p>
											<p class="has-text-weight-light">{candidate2.partido.name}</p>
										</div>
									</div>
								</div>
							{/if}
						</td>
					</tr>
					<tr>
						<td class="info">Biografía</td>
						<td>
							{#if candidate1}
								<div class=" has-text-black mb-3">
									<div
										class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
									>
										<p class=" has-text-weight-bold is-size-5 is-uppercase">edad:</p>
										<p class="has-text-weight-light">{candidate1.age} AÑOS</p>
									</div>
								</div>
								<br />
								<!--  <div class=" has-text-black mb-3">    
                  <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
                    <p class=" has-text-weight-bold is-size-5 is-uppercase">Lugar de Nacimiento:</p>
                    <p class="has-text-weight-light">{candidate1.distrito_nacional.name}</p>
                  </div>
                </div>
                <br/> -->
								<div class=" has-text-black mb-3">
									<div
										class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
									>
										<p class=" has-text-weight-bold is-size-5 is-uppercase">
											último grado de estudios:
										</p>
										<p class="has-text-weight-light">{candidate1.formacion}</p>
									</div>
								</div>
								<br />
								<div class=" has-text-black mb-3">
									<div
										class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
									>
										<p class=" has-text-weight-bold is-size-5 is-uppercase">Profesión:</p>
										<p class="has-text-weight-light">{candidate1.profesion}</p>
									</div>
								</div>
								<br />
							{/if}
						</td>
						<td>
							{#if candidate2}
								<div class=" has-text-black mb-3">
									<div
										class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
									>
										<p class=" has-text-weight-bold is-size-5 is-uppercase">edad:</p>
										<p class="has-text-weight-light">{candidate2.age} AÑOS</p>
									</div>
								</div>
								<br />
								<!--  <div class=" has-text-black mb-3">    
                  <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
                    <p class=" has-text-weight-bold is-size-5 is-uppercase">Lugar de Nacimiento:</p>
                    <p class="has-text-weight-light">{candidate2.distrito_nacional.name}</p>
                  </div>
                </div>
                <br/> -->
								<div class=" has-text-black mb-3">
									<div
										class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
									>
										<p class=" has-text-weight-bold is-size-5 is-uppercase">
											último grado de estudios:
										</p>
										<p class="has-text-weight-light">{candidate2.formacion}</p>
									</div>
								</div>
								<br />
								<div class=" has-text-black mb-3">
									<div
										class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
									>
										<p class=" has-text-weight-bold is-size-5 is-uppercase">Profesión:</p>
										<p class="has-text-weight-light">{candidate2.profesion}</p>
									</div>
								</div>
								<br />
							{/if}
						</td>
					</tr>
					<tr>
						<td class="info">Recorrido politico</td>
						<td>
							{#if candidate1}
								<div class=" has-text-black my-5">
									<div
										class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
									>
										<p class="is-size-6 resume has-text-weight-light">
											{@html candidate1.resumen_experiencia}
										</p>
									</div>
								</div>
							{/if}
						</td>
						<td>
							{#if candidate2}
								<div class=" has-text-black my-5">
									<div
										class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
									>
										<p class="is-size-6 resume has-text-weight-light">
											{@html candidate2.resumen_experiencia}
										</p>
									</div>
								</div>
							{/if}
						</td>
					</tr>
					<tr>
						<td class="info">Mas info</td>
						<td>
							{#if candidate1}
								<div class=" has-text-black">
									<div
										class="is-flex is-flex-direction-column is-justify-content-center element-group"
									>
										<p class=" has-text-weight-bold is-size-5 is-uppercase">Redes sociales:</p>
										<div class="is-flex is-justify-content-center">
											{#if candidate1.twitter_profile}
												<a href={candidate1.twitter_profile} target="_blank" class="has-text-black">
                          <Icon icon="fa-twitter-square" brand size="large" />
                        </a>
											{/if}
											{#if candidate1.twitter_user && candidate1.twitter_user !== candidate1.twitter_profile}
												<a href={candidate1.twitter_user} target="_blank" class="has-text-black">
                          <Icon icon="fa-twitter-square" brand size="large" />
                        </a>
											{/if}
											{#if candidate1.facebook_page}
												<a href={candidate1.facebook_page} target="_blank" class="has-text-black">
                          <Icon icon="fa-facebook-square" brand size="large" />
                        </a>
											{/if}
											{#if candidate1.facebook_profile}
												<a href={candidate1.facebook_profile} target="_blank" class="has-text-black">
                          <Icon icon="fa-facebook-square" brand size="large" />
                        </a>
											{/if}
											{#if candidate1.instagram_page}
												<a href={candidate1.instagram_page} target="_blank" class="has-text-black">
                          <Icon icon="fa-instagram-square" brand size="large" />
                        </a>
											{/if}
										</div>
									</div>
								</div>
							{/if}
						</td>
						<td>
							{#if candidate2}
								<div class=" has-text-black">
									<div
										class="is-flex is-flex-direction-column is-justify-content-center element-group"
									>
										<p class=" has-text-weight-bold is-size-5 is-uppercase">Redes sociales:</p>
										<div class="is-flex is-justify-content-center">
											{#if candidate2.twitter_profile}
												<a href={candidate2.twitter_profile} target="_blank" class="has-text-black">
                          <Icon icon="fa-twitter-square" brand size="large" />
                        </a>
											{/if}
											{#if candidate2.twitter_user && candidate2.twitter_user !== candidate2.twitter_profile}
												<a href={candidate2.twitter_user} target="_blank" class="has-text-black">
                          <Icon icon="fa-twitter-square" brand size="large" />
                        </a>
											{/if}
											{#if candidate2.facebook_page}
												<a href={candidate2.facebook_page} target="_blank" class="has-text-black">
                          <Icon icon="fa-facebook-square" brand size="large" />
                        </a>
											{/if}
											{#if candidate2.facebook_profile}
												<a href={candidate2.facebook_profile} target="_blank" class="has-text-black">
                          <Icon icon="fa-facebook-square" brand size="large" />
                        </a>
											{/if}
											{#if candidate2.instagram_page}
												<a href={candidate2.instagram_page} target="_blank" class="has-text-black">
                          <Icon icon="fa-instagram-square" brand size="large" />
                        </a>
											{/if}
										</div>
									</div>
								</div>
							{/if}
						</td>
					</tr>
				{/if}
			</tbody>
		</table>
		<table class="table is-fullwidth has-text-centered is-hidden-tablet mobile-version">
			<thead>
				<tr>
					<th />
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>
						<p>Candidato/a 1</p>
						<div class="select is-medium mx-3 is-white">
							<select
								id="candidate1"
								class="has-background-grey-dark has-text-white has-text-weight-light"
								bind:value={candidate1}
							>
								<option value={null} disabled selected>elegi una candidatura</option>
								{#each candidates as candidate}
									<option value={candidate} disabled={true}>{candidate.name}</option>
								{/each}
							</select>
						</div>
						<p>Candidato/a 2</p>
						<div class="select is-medium mx-3 is-white">
							<select
								id="candidate2"
								class="has-background-grey-dark has-text-white has-text-weight-light"
								bind:value={candidate2}
							>
								<option value={null} disabled selected>elegi una candidatura</option>
								{#each candidates as candidate}
									<option value={candidate} disabled={true}>{candidate.name}</option>
								{/each}
							</select>
						</div>
					</td>
				</tr>
				{#if candidate1 || candidate2}
					<tr>
						<td>
							<div class="card">
								<div class="card-header">
									<p class="card-header-title is-justify-content-center">Candidato/a</p>
								</div>
								<div class="card-content">
									{#if candidate1}
										<div>
											<CandidateCircle candidate={candidate1} showPartyName={false} />
											<div class=" has-text-black mb-3">
												<div
													class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
												>
													<p class=" has-text-weight-bold is-size-4">{candidate1.name}</p>
													<p class="has-text-weight-light">
														Candidat{candidate1.genre === 'm' ? 'o' : 'a'} a {cargosSlugs[candidate1.cargo][candidate1.genre]}
													</p>
												</div>
											</div>
											<div class=" has-text-black mb-3">
												<div
													class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
												>
													<p class=" has-text-weight-bold is-size-5">Partido:</p>
													<p class="has-text-weight-light">{candidate1.partido.name}</p>
												</div>
											</div>
										</div>
									{/if}
									{#if candidate2}
										<hr class="w-50 mx-auto" />
										<div>
											<CandidateCircle candidate={candidate2} showPartyName={false} />
											<div class=" has-text-black mb-3">
												<div
													class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
												>
													<p class=" has-text-weight-bold is-size-4">{candidate2.name}</p>
													<p class="has-text-weight-light">
														Candidat{candidate2.genre === 'm' ? 'o' : 'a'} a {cargosSlugs[candidate2.cargo][candidate2.genre]}
													</p>
												</div>
											</div>
											<div class=" has-text-black mb-3">
												<div
													class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
												>
													<p class=" has-text-weight-bold is-size-5">Partido:</p>
													<p class="has-text-weight-light">{candidate2.partido.name}</p>
												</div>
											</div>
										</div>
									{/if}
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div class="card">
								<div class="card-header">
									<p class="card-header-title is-justify-content-center">Biografias</p>
								</div>
								<div class="card-content">
									{#if candidate1}
										<CandidateCircle candidate={candidate1} showPartyName={false} />

										<div class=" has-text-black mb-3">
											<div
												class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
											>
												<p class=" has-text-weight-bold is-size-5 is-uppercase">edad:</p>
												<p class="has-text-weight-light">{candidate1.age} AÑOS</p>
											</div>
										</div>
										<br />
										<!--  <div class=" has-text-black mb-3">    
                      <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
                        <p class=" has-text-weight-bold is-size-5 is-uppercase">Lugar de Nacimiento:</p>
                        <p class="has-text-weight-light">{candidate1.distrito_nacional.name}</p>
                      </div>
                    </div>
                    <br/> -->
										<div class=" has-text-black mb-3">
											<div
												class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
											>
												<p class=" has-text-weight-bold is-size-5 is-uppercase">
													último grado de estudios:
												</p>
												<p class="has-text-weight-light">{candidate1.formacion}</p>
											</div>
										</div>
										<br />
										<div class=" has-text-black mb-3">
											<div
												class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
											>
												<p class=" has-text-weight-bold is-size-5 is-uppercase">Profesión:</p>
												<p class="has-text-weight-light">{candidate1.profesion}</p>
											</div>
										</div>
									{/if}
									{#if candidate2}
										<hr class="w-50 mx-auto" />
										<CandidateCircle candidate={candidate2} showPartyName={false} />

										<div class=" has-text-black mb-3">
											<div
												class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
											>
												<p class=" has-text-weight-bold is-size-5 is-uppercase">edad:</p>
												<p class="has-text-weight-light">{candidate2.age} AÑOS</p>
											</div>
										</div>
										<br />
										<!--  <div class=" has-text-black mb-3">    
                      <div class="is-flex is-flex-direction-column is-justify-content-space-between element-group">
                        <p class=" has-text-weight-bold is-size-5 is-uppercase">Lugar de Nacimiento:</p>
                        <p class="has-text-weight-light">{candidate2.distrito_nacional.name}</p>
                      </div>
                    </div>
                    <br/> -->
										<div class=" has-text-black mb-3">
											<div
												class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
											>
												<p class=" has-text-weight-bold is-size-5 is-uppercase">
													último grado de estudios:
												</p>
												<p class="has-text-weight-light">{candidate2.formacion}</p>
											</div>
										</div>
										<br />
										<div class=" has-text-black mb-3">
											<div
												class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
											>
												<p class=" has-text-weight-bold is-size-5 is-uppercase">Profesión:</p>
												<p class="has-text-weight-light">{candidate2.profesion}</p>
											</div>
										</div>
										<br />
									{/if}
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div class="card">
								<div class="card-header">
									<p class="card-header-title is-justify-content-center">Recorrido político</p>
								</div>
								<div class="card-content">
									{#if candidate1}
										<CandidateCircle candidate={candidate1} showPartyName={false} />

										<div class=" has-text-black my-5">
											<div
												class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
											>
												<p class="is-size-6 resume has-text-weight-light">
													{@html candidate1.resumen_experiencia}
												</p>
											</div>
										</div>
									{/if}
									{#if candidate2}
										<hr class="w-50 mx-auto" />
										<CandidateCircle candidate={candidate2} showPartyName={false} />

										<div class=" has-text-black my-5">
											<div
												class="is-flex is-flex-direction-column is-justify-content-space-between element-group"
											>
												<p class="is-size-6 resume has-text-weight-light">
													{@html candidate2.resumen_experiencia}
												</p>
											</div>
										</div>
									{/if}
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div class="card">
								<div class="card-header">
									<p class="card-header-title is-justify-content-center">Mas info</p>
								</div>
								<div class="card-content">
									{#if candidate1}
										<CandidateCircle candidate={candidate1} showPartyName={false} />

										<div class=" has-text-black">
											<div
												class="is-flex is-flex-direction-column is-justify-content-center element-group"
											>
												<p class=" has-text-weight-bold is-size-5 is-uppercase">Redes sociales:</p>
												<div class="is-flex is-justify-content-center">
													{#if candidate1.twitter_profile}
														<a
															href={candidate1.twitter_profile}
															target="_blank"
															class="has-text-black"
															>
                              <Icon icon="fa-twitter-square" brand size="large" />
                            </a>
													{/if}
													{#if candidate1.twitter_user && candidate1.twitter_user !== candidate1.twitter_profile}
														<a href={candidate1.twitter_user} target="_blank" class="has-text-black"
															>
                              <Icon icon="fa-twitter-square" brand size="large" />
                            </a>
													{/if}
													{#if candidate1.facebook_page}
														<a
															href={candidate1.facebook_page}
															target="_blank"
															class="has-text-black"
															>
                              <Icon icon="fa-facebook-square" brand size="large" />
                            </a>
													{/if}
													{#if candidate1.facebook_profile}
														<a
															href={candidate1.facebook_profile}
															target="_blank"
															class="has-text-black"
															>
                              <Icon icon="fa-facebook-square" brand size="large" />
                            </a>
													{/if}
													{#if candidate1.instagram_page}
														<a
															href={candidate1.instagram_page}
															target="_blank"
															class="has-text-black"
															>
                              <Icon icon="fa-instagram-square" brand size="large" />
                            </a>
													{/if}
												</div>
											</div>
										</div>
									{/if}
									{#if candidate2}
										<hr class="w-50 mx-auto" />
										<CandidateCircle candidate={candidate2} showPartyName={false} />

										<div class=" has-text-black">
											<div
												class="is-flex is-flex-direction-column is-justify-content-center element-group"
											>
												<p class=" has-text-weight-bold is-size-5 is-uppercase">Redes sociales:</p>
												<div class="is-flex is-justify-content-center">
													{#if candidate2.twitter_profile}
														<a
															href={candidate2.twitter_profile}
															target="_blank"
															class="has-text-black"
															>
                              <Icon icon="fa-twitter-square" brand size="large" />
                            </a>
													{/if}
													{#if candidate2.twitter_user && candidate2.twitter_user !== candidate2.twitter_profile}
														<a href={candidate2.twitter_user} target="_blank" class="has-text-black"
															>
                              <Icon icon="fa-twitter-square" brand size="large" />
                            </a>
													{/if}
													{#if candidate2.facebook_page}
														<a
															href={candidate2.facebook_page}
															target="_blank"
															class="has-text-black"
															>
                              <Icon icon="fa-facebook-square" brand size="large" />
                            </a>
													{/if}
													{#if candidate2.facebook_profile}
														<a
															href={candidate2.facebook_profile}
															target="_blank"
															class="has-text-black"
															>
                              <Icon icon="fa-facebook-square" brand size="large" />
                            </a>
													{/if}
													{#if candidate2.instagram_page}
														<a
															href={candidate2.instagram_page}
															target="_blank"
															class="has-text-black"
															>
                              <Icon icon="fa-instagram-square" brand size="large" />
                            </a>
													{/if}
												</div>
											</div>
										</div>
									{/if}
								</div>
							</div>
						</td>
					</tr>
				{/if}
			</tbody>
		</table>
	</div>
</main>

<style>
	td.info {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
		-webkit-writing-mode: vertical-rl;
		writing-mode: vertical-rl;
	}
	.mobile-version {
		background-color: transparent;
	}
	.mobile-version td {
		border: none;
		padding: 16px 0;
	}
	.mobile-version td .card-content {
		padding: 0.5rem;
	}
	.header-table {
		width: 45%;
	}
	.info-header-table {
		width: 10%;
	}
</style>
