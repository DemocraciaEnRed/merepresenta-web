export const baseURL = 'https://content.merepresenta.info'

//native svelte fetch cause svelte doesnt like axios aparently
const API = (fetch, query) => {
  const body = JSON.stringify({query});
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
 * @param {string} prop the name of the props as we wanted in the component separated by ','
 * @param {string} original the name of the key comming from the api separated by ','
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