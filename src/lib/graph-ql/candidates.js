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
      profesion
      resumen_experiencia
      partido {
        id
        name
        color1
        color2
        logo{
          id
        }
        ejes{
          ejes_id{
            name
            slug
            color
            icon_file{
              id
            }
          }
          summary
          propuestas{
            id
            summary
          }
        }
        alianzas{
          related_partido_id{
            id
            name
          }
        }
        district {
          id
          name
          slug
        }
      }
      avatar {
        id
      },
      cargo
      cargos_publicos
      childrens
      razon_social
      tipo_societario
      instagram_page
      facebook_page
      facebook_profile
      twitter_user
      twitter_profile
      formacion
      twitter_tweets
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
      age
      profesion
      instagram_page
      facebook_page
      facebook_profile
      twitter_user
      twitter_profile
      formacion
      twitter_tweets
      twitter_followers
      twitter_created_at
      twitter_friends
      twitter_verified
      avatar {
        id
      }
      partido {
        id
        color1
        color2
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

export function getCandidatesByPartyList (partyListId){
  const query = partyListId.length >= 1 && partyListId.map(partyId => `{partido:{id:{_eq:${partyId}}}}`)
  return(`
  {
    candidato(filter:{_or:[${query}]},sort: ["position","-cargo"]){
      name
      cargo
      genre
      id
      position
      age
      profesion
      avatar {
        id
      }
      partido {
        id
        name
        color1
        color2
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
    candidato(filter:{cargo:{_eq:"${cargo}"},distrito_nacional:{slug:{_eq :"${district}"}}${exceptId}}){
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
        alianzas{
          related_partido_id{
            id
            name           
          }
        }
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
    candidato(filter:{cargo:{_eq:"${cargo}"}},limit:-1){
      name
      cargo
      genre
      id
      position
      age
      profesion
      resumen_experiencia
      instagram_page
      facebook_page
      facebook_profile
      twitter_user
      twitter_profile
      formacion
      twitter_tweets
      twitter_followers
      twitter_created_at
      twitter_friends
      twitter_verified
      avatar {
        id
      }
      distrito_nacional {
        id
        name
        slug
      }
      partido {
        id
        name
        color1
        color2
        elecciones_generales
        alianzas{
          related_partido_id{
            id
            name
          }
        }
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

export function getCandidatesToLegislativeSection (district){
  return(`
  {
    candidato(filter:{_and:[{cargo:{_neq:"gobernador"}}, {cargo:{_neq:"vice-gobernador"}}],distrito_nacional:{slug:{_eq:"${district}"}}},sort: ["cargo","position"],limit:2000){
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
        alianzas{
          related_partido_id{
            id
            name
          }
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