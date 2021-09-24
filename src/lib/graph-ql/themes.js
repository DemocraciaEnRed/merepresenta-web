export function getThemes(){
  return(`
    {
      ejes{
        id
        name
        slug
        color
        icon_file{
          id
        }
      }
    }
  `)
}