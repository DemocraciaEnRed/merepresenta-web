<script>
	import API, { handleResponse } from "$lib/apiHandler";
	import { getCandidatesByCargo } from "$lib/graph-ql/candidates";
	import { onMount } from "svelte";

    onMount(()=>{
    getDistrictGobernor()
    })

    const getDistrictGobernor = async ()=>{
        const res = await API(fetch, getCandidatesByCargo('gobernador'))
        const response =await handleResponse(res, 'candidates', 'candidato')
        console.log(response);
    }
    
</script>

<div class="has-text-centered mt-6 has-text-black">
    <h1 class="is-size-2 has-text-weight-medium has-text-black">¿Vivís en CABA o Provincia de Buenos Aires?</h1>
    <h3 class="is-size-2 has-text-weight-light">
        Encontrá tus candidatos y candidatas
    </h3>
</div>