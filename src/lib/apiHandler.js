import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://content.merepresenta.info'
})

const API = (query) => {
  return instance.post('/graphql',{query});
}

export default API;

/**
 * 
 * @param {AxiosResponse} res 
 * @param {string} prop the name of the prop as we wanted in the component
 * @param {string} original the name of the key comming from the api
 * @returns 
 */

export function handleResponse(res, prop, original){
  if(res.statusText === 'OK'){
    return {
      props:{
        [`${prop}`]: res.data.data[`${original}`]
      }
    }
  }
  return {
    status: res.status,
    error: new Error(`Could not load ${res.response.error}`)
  }
}