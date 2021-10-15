const imgRoute = "/themes/";

export const PoliciesIcons = {
  "economia"          : `${imgRoute}money.svg`,
  "ambiente"          : `${imgRoute}nature.svg`,
  "salud"             : `${imgRoute}health.svg`,
  "educacion"         : `${imgRoute}book.svg`,
  "genero"            : `${imgRoute}gender.svg`,
  "seguridad"         : `${imgRoute}security.svg`,
  "empleo"            : `${imgRoute}job.svg`,
  "justicia"          : `${imgRoute}justice.svg`,
  "institucionalidad"        : `${imgRoute}search.svg`,
  "vivienda"          : `${imgRoute}house.svg`,
}

export const directusImg = 'https://content.merepresenta.info/assets/'

/**
 * Converts Hex code to rgb
 * @param {string} hex 
 * @returns {string} rgb 
 */
export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
export function PartyImg (party){
  return party.logo?.id ? `${directusImg}${party.logo.id}` : '/partido-politico.png'
}

export function CandidateImg (candidate){
  return candidate.avatar?.id ? `${directusImg}${candidate.avatar.id}` : 
  '/candidate.svg'
  //getDefaultCandidateImgByGender(candidate.genre)
}
export function getDefaultCandidateImgByGender (gender){
  return gender === 'm' ? '/candidato.png' : '/candidata.png';
}