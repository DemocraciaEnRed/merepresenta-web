export function getDistricts(){
  return(`
  {
    distritos(filter: {slug: {_neq: "extranjero"}}){
      id
      name
      slug
    }
  }
  `);
}