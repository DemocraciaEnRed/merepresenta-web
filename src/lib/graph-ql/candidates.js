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
        slug
      }
    }
  }
`)
}
export function getCandidatesByParty (partyId){
  return(`
  {
    candidato(filter:{partido:{id:{_eq:${Number(partyId)}}}},sort: ["position","-cargo"]){
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
      distrito_nacional {
        id
        name
        slug
      }
    }
  }`)
}

export function getCandidatesByPartyList (partysId){
  const idsToquery = partysId.map(id => `{partido:{id:{_eq:${id.related_partido_id.id}}}}`)
  return(`
  {
    candidato(filter:{_or:[${idsToquery}]},sort: ["position","-cargo"]){
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
        district {
          id
          name
          slug
        }
        logo{
          id
        }
      }
      distrito_nacional {
        id
        name
        slug
      }
    }
  }`)
}

export function getCandidatesByCargo ({idExcept, cargo,district}){
  
  const exceptId = idExcept ? `id:{_neq: ${Number(idExcept)}}`:''
  return(`
  {
    candidato(filter:{cargo:{_eq:"${cargo}"},distrito_nacional:{id:{_eq :${Number(district)}}}${exceptId}}){
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
        logo{
          id
        }
        district {
          id
          name
          slug
        }
      }
    }
  }`)
}