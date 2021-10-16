import {filterById} from './utils';

export function getCandidates (id){
  return(`
    {
    candidato${filterById(id)} {
      id
      name
      position
      genre
      age
      partido {
        id
        name
        logo{
          id
        }
        district {
          id
          name
        }
      }
      avatar {
        id
      },
      cargo
      cargos_publicos
      profession {
        name
      }
      childrens
      razon_social
      tipo_societario
      twitter_user
      twitter_tweets
      twitter_profile
      twitter_followers
      twitter_created_at
      twitter_friends
      twitter_verified
      otros_partidos
      distrito_nacional {
        id
        name
      }
    }
  }
`)
}
export function getCandidatesByParty (partyId){
  return(`
  {
    candidato(filter:{partido:{id:{_eq:${Number(partyId)}}}},sort: ["position"]){
      name
      cargo
      genre
      id
      position
      avatar {
        id
      }
      partido {
        id
        name
      }
    }
  }`)
}