export function getPartysByDistrict (district){
  return(`
  {
    partido(filter:{district:{slug:{_eq:"${district}"}}}){
      id
      name
      tipo
      alianzas{
        related_partido_id{
          id
          name
        }
      }
      district{
        id
      }
      logo{
        id
      }
    }
  }`)
}
export function getPartyById (id){
  return(`
  {
    partido(filter:{id:{_eq:${Number(id)}}}){
      id
      name
      url_facebook
      url_instagram
      url_twitter
      url_youtube
      summary
      url_web
      url_fuente
      tipo
      alianzas{
        related_partido_id{
          id
          name
        }
      }
      district{
        id
        slug
      }
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
    }
  }`)
}

export function getpartyAliansazId (partyId){
 
  return(`
  {
    partido(filter:{alianzas:{related_partido_id:{id:{_eq:${Number(partyId)}}}},district:{slug:{_eq:"nacion"}}}){
      id
      
    }
  }`)
}


export function getPartyByalianzas (partyId){
  return(`
  {
    partido(filter:{alianzas:{related_partido_id:{id:{_eq:${Number(partyId)}}}},district:{slug:{_eq:"nacion"}}}){
      id
      name
      url_facebook
      url_instagram
      url_twitter
      url_youtube
      summary
      url_web
      url_fuente
      alianzas{
        related_partido_id{
          id
          name
        }
      }
      district{
        id
      }
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
    }
  }`)
}

export function getThemeProposalsByParty(tema, provincia){
  return(`
  {
    ejes(filter:{slug:{_eq:"${tema}"}}){
			name
    	slug
      color
      diagnostico
    	icon_file{
        id
      }	
  	}
    partido(filter:{district:{slug:{_eq:"${provincia}"}}}){
      id
      name
      summary
      url_web
      district{
        id
      }
      logo{
        id
      }
      ejes(filter:{ejes_id:{slug:{_eq:"${tema}"}}}){
        ejes_id{
          name
          slug
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
    }
  }
  `)
}
export function getThemeProposalsByPartyId(tema, partido){
  return(
  ` {
      partido(filter:{id:{_eq:${Number(partido)}}}){
      id
      name
    	summary
    	url_web
      url_fuente
      district{
        id
      }
      logo{
        id
      }
    	ejes(filter:{ejes_id:{slug:{_eq:"${tema}"}}}){
        ejes_id{
          name
          slug
          color
          resources{
            url_label
            url
          }
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
    }
  
  

}`
  )
}