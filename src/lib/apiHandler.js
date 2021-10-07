//URL de la api
export const baseURL = 'https://content.merepresenta.info'

//native svelte fetch cause svelte doesnt like axios aparently
const API = (fetch, query) => {
  const body = JSON.stringify({query});
  //devuelve una promesa de fetch
  return fetch(
    `${baseURL}/graphql`,
    {
      method: "POST",
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    });
}

export default API;

/**
 * Handle response for API calls
 * @param {Response} res 
 * @param {string} prop the name of the props as we wanted in the component
 * @param {string} original the name of the key comming from the api 
 * @returns 
 */

export async function handleResponse(res, prop, original){
  const jsonResponse = await res.json()

  if(res.ok){
    return {
      props:{
        [`${prop}`]: jsonResponse.data[`${original}`]
      }
    }
  }
  return {
    status: res.status,
    error: jsonResponse.errors
  }
}

export function TwitterApi(user){
  //TODO : Juli, cambia el url de esta api por la que te de guille
  const apiUrl = 'https://service.merepresenta.info/twitter/'
  return fetch(`${apiUrl}${user}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}