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
        district {
          id
          name
          slug
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




export function getCandidatesByCargoAndDistrict ({idExcept, cargo,district}){
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

export function getCandidatesByCargo (cargo){
  return(`
  {
    candidato(filter:{cargo:{_eq:"${cargo}"}}){
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

export function getCandidatesByDistrict (district){
  return(`
  {
    candidato(filter:{distrito_nacional:{slug:{_eq:"${district}"}}},sort: ["cargo","position"]){
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