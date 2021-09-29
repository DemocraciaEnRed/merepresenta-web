const imgRoute = "/themes/";

export const PoliciesIcons = {
  "economia"          : `${imgRoute}money.svg`,
  "ambiente"          : `${imgRoute}nature.svg`,
  "salud"             : `${imgRoute}health.svg`,
  "educacion"         : `${imgRoute}book.svg`,
  "genero"            : `${imgRoute}gender.svg`,
  "seguridad"         : `${imgRoute}security.svg`,
  "empleo"            : `${imgRoute}house.svg`,
  "justicia"          : `${imgRoute}justice.svg`,
  "corrupcion"        : `${imgRoute}search.svg`,
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