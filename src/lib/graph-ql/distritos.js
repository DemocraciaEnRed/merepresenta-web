export function getDistricts(){
  return(`
  {
    distritos(filter: {slug: {_nin: ["nacion","extranjero"]}}){
      id
      name
      slug
    }
  }
  `);
}