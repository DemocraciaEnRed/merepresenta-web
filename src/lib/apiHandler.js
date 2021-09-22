import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://content.merepresenta.info'
})

const API = (query) => {
  return instance.post('/graphql',{query});
}

export default API;
