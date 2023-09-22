const imgRoute = "/themes/";

export const PoliciesIcons = {
  "economia"              : `${imgRoute}economiaIcon.svg`,
  "seguridad"             : `${imgRoute}seguridadIcon.svg`,
  "educacion"             : `${imgRoute}educacionIcon.svg`,
  "ambiente"              : `${imgRoute}ambienteIcon.svg`,
  "salud"                 : `${imgRoute}saludIcon.svg`,
  "democracia"            : `${imgRoute}democraciaIcon.svg`,
  "empleo"                : `${imgRoute}empleoIcon.svg`,
  "vivienda-y-transporte" : `${imgRoute}viviendaIcon.svg`,


}

export const cargosSlugs ={
  'presidente':{'m':'Presidente', 'f':'Presidenta'},
  'vice-presidente': {'m':'Vicepresidente', 'f':'Vicepresidenta'},
  'diputado-nacional': {'m':'Diputado Nacional','f':'Diputada Nacional'},
  'senador-nacional':{'m':'Senador Nacional','f':'Senadora Nacional'},
  'gobernador':{'m':'Jefe de gobierno','f':'Jefa de gobierno'},
  'vice-gobernador': {'m':'Vicegobernador','f':'Vicegobernadora'}
}

export const cargosSlugsAbbreviated ={
  'presidente':'Pdte',
  'vice-presidente': 'VPdte',
  'diputado-nacional': 'Dip. Nac.',
  'senador-nacional':'Sen. Nac.',
  'gobernador':'Gob.',
  'vice-gobernador': 'Vice Gob.'
}

export const ProvinciasSlugs = [
	{		"name": "Buenos Aires",		"slug": "buenos-aires"	},
	{		"name": "CABA",		"slug": "caba"	},
	{		"name": "Santa Fe",		"slug": "santa-fe"	},
	{		"name": "Córdoba",		"slug": "cordoba"	},
	{		"name": "Mendoza",		"slug": "mendoza"	},
	{		"name": "Tucumán",		"slug": "tucuman"	},
	{		"name": "Corrientes",		"slug": "corrientes"	},
	{		"name": "Catamarca",		"slug": "catamarca"	},
	{		"name": "Chubut",		"slug": "chubut"	},
	{		"name": "La Pampa",		"slug": "la-pampa"	},
	{		"name": "Entre Ríos",		"slug": "entre-rios"	},
	{		"name": "Chaco",		"slug": "chaco"	},
	{		"name": "Jujuy",		"slug": "jujuy"	},
	{		"name": "Misiones",		"slug": "misiones"	},
	{		"name": "Neuquén",		"slug": "neuquen"	},
	{		"name": "Salta",		"slug": "salta"	},
	{		"name": "San Juan",		"slug": "san-juan"	},
	{		"name": "San Luis",		"slug": "san-luis"	},
	{		"name": "Santa Cruz",		"slug": "santa-cruz"	},
	{		"name": "Santiago Del Estero",		"slug": "santiago-del-estero"	},
	{		"name": "Formosa",		"slug": "formosa"	},
	{		"name": "La Rioja",		"slug": "la-rioja"	},
	{		"name": "Río Negro",		"slug": "rio-negro"	},
	{		"name": "Tierra Del Fuego",		"slug": "tierra-del-fuego"	},
	{		"name": "Extranjero/a",		"slug": "extranjero"	},
	{		"name": "Nacion",		"slug": "nacion"	},
  
]

export const logosAcercaDe =[
  {"alt": "Directorio Legislativo",   "src":"./logos/logo-directorio-leslativo.png", "type":"square"},
  {"alt": "Democracia en Red",   "src":"./logos/logo-der-negro.svg", "type":"horizontal"},
  {"alt": "Poder Ciudadano",   "src":"./logos/logo-poder-ciudadano.png", "type":"horizontal"},
 
  /* {"alt": "CIPPEC",   "src":"./logos/logo-cippec.png", "type":"horizontal"},
  {"alt": "Observatorio de Redes",   "src":"./logos/logo-observatorio-de-redes.png", "type":"horizontal"},
  {"alt": "Acción Colectiva",   "src":"./logos/logo-accion-colectiva.png", "type":"horizontal"},
  {"alt": "ACIJ",   "src":"./logos/logo-acij.png", "type":"horizontal"},
  {"alt": "Nuestra Córdoba",   "src":"./logos/logo-nuestra-cordoba.png", "type":"horizontal"},
  {"alt": "Economía Feminita",   "src":"./logos/logo-eco-feminita.png" , "type":"square"},
  {"alt": "Conocimiento Abierto",   "src":"./logos/logo-conocimiento-abierto.png", "type":"horizontal"},
  {"alt": "Eco House",   "src":"./logos/logo-eco-house.png", "type":"square"},
  {"alt": "Fundeps",   "src":"./logos/logo-fundeps.png", "type":"horizontal"},
  {"alt": "REDACCIÓN",   "src":"./logos/logo-redaccion.png"},
  {"alt": "Nuestra Mendoza",   "src":"./logos/logo-nuestra-mendoza.png", "type":"square"},
  {"alt": "Sistema B",   "src":"./logos/logo-sistema-b.png", "type":"square"} */
]

export const logosChicosAcercaDe =[
  {"alt": "fundeps",   "src":"./logos/logos-chicos/logo-fundeps.png", "type":"horizontal"},
  {"alt": "minu asociacion civil",   "src":"./logos/logos-chicos/logo-minu.png", "type":"square"},
  {"alt": "Nuestra Mendoza",   "src":"./logos/logos-chicos/logo-nm.png", "type":"square"},
  {"alt": "Salta transparente",   "src":"./logos/logos-chicos/logo-salta-transparente.png", "type":"horizontal"},
 
]


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
  return candidate.avatar?.id ? `${directusImg}${candidate.avatar.id}?width=500&height=500&format=jpg&fit=cover&quality=50` : 
  '/candidate.svg'
  //getDefaultCandidateImgByGender(candidate.genre)
}
export function getDefaultCandidateImgByGender (gender){
  return gender === 'm' ? '/candidato.png' : '/candidata.png';
}

export class Color {
  constructor(r, g, b) {
    this.set(r, g, b);
  }
  
  toString() {
    return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
  }

  set(r, g, b) {
    this.r = this.clamp(r);
    this.g = this.clamp(g);
    this.b = this.clamp(b);
  }

  hueRotate(angle = 0) {
    angle = angle / 180 * Math.PI;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    this.multiply([
      0.213 + cos * 0.787 - sin * 0.213,
      0.715 - cos * 0.715 - sin * 0.715,
      0.072 - cos * 0.072 + sin * 0.928,
      0.213 - cos * 0.213 + sin * 0.143,
      0.715 + cos * 0.285 + sin * 0.140,
      0.072 - cos * 0.072 - sin * 0.283,
      0.213 - cos * 0.213 - sin * 0.787,
      0.715 - cos * 0.715 + sin * 0.715,
      0.072 + cos * 0.928 + sin * 0.072,
    ]);
  }

  grayscale(value = 1) {
    this.multiply([
      0.2126 + 0.7874 * (1 - value),
      0.7152 - 0.7152 * (1 - value),
      0.0722 - 0.0722 * (1 - value),
      0.2126 - 0.2126 * (1 - value),
      0.7152 + 0.2848 * (1 - value),
      0.0722 - 0.0722 * (1 - value),
      0.2126 - 0.2126 * (1 - value),
      0.7152 - 0.7152 * (1 - value),
      0.0722 + 0.9278 * (1 - value),
    ]);
  }

  sepia(value = 1) {
    this.multiply([
      0.393 + 0.607 * (1 - value),
      0.769 - 0.769 * (1 - value),
      0.189 - 0.189 * (1 - value),
      0.349 - 0.349 * (1 - value),
      0.686 + 0.314 * (1 - value),
      0.168 - 0.168 * (1 - value),
      0.272 - 0.272 * (1 - value),
      0.534 - 0.534 * (1 - value),
      0.131 + 0.869 * (1 - value),
    ]);
  }

  saturate(value = 1) {
    this.multiply([
      0.213 + 0.787 * value,
      0.715 - 0.715 * value,
      0.072 - 0.072 * value,
      0.213 - 0.213 * value,
      0.715 + 0.285 * value,
      0.072 - 0.072 * value,
      0.213 - 0.213 * value,
      0.715 - 0.715 * value,
      0.072 + 0.928 * value,
    ]);
  }

  multiply(matrix) {
    const newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
    const newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
    const newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
    this.r = newR;
    this.g = newG;
    this.b = newB;
  }

  brightness(value = 1) {
    this.linear(value);
  }
  contrast(value = 1) {
    this.linear(value, -(0.5 * value) + 0.5);
  }

  linear(slope = 1, intercept = 0) {
    this.r = this.clamp(this.r * slope + intercept * 255);
    this.g = this.clamp(this.g * slope + intercept * 255);
    this.b = this.clamp(this.b * slope + intercept * 255);
  }

  invert(value = 1) {
    this.r = this.clamp((value + this.r / 255 * (1 - 2 * value)) * 255);
    this.g = this.clamp((value + this.g / 255 * (1 - 2 * value)) * 255);
    this.b = this.clamp((value + this.b / 255 * (1 - 2 * value)) * 255);
  }

  hsl() {
    // Code taken from https://stackoverflow.com/a/9493060/2688027, licensed under CC BY-SA.
    const r = this.r / 255;
    const g = this.g / 255;
    const b = this.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return {
      h: h * 100,
      s: s * 100,
      l: l * 100,
    };
  }

  clamp(value) {
    if (value > 255) {
      value = 255;
    } else if (value < 0) {
      value = 0;
    }
    return value;
  }
}

export class Solver {
  constructor(target, baseColor) {
    this.target = target;
    this.targetHSL = target.hsl();
    this.reusedColor = new Color(0, 0, 0);
  }

  solve() {
    const result = this.solveNarrow(this.solveWide());
    return {
      values: result.values,
      loss: result.loss,
      filter: this.css(result.values),
    };
  }

  solveWide() {
    const A = 5;
    const c = 15;
    const a = [60, 180, 18000, 600, 1.2, 1.2];

    let best = { loss: Infinity };
    for (let i = 0; best.loss > 25 && i < 3; i++) {
      const initial = [50, 20, 3750, 50, 100, 100];
      const result = this.spsa(A, a, c, initial, 1000);
      if (result.loss < best.loss) {
        best = result;
      }
    }
    return best;
  }

  solveNarrow(wide) {
    const A = wide.loss;
    const c = 2;
    const A1 = A + 1;
    const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
    return this.spsa(A, a, c, wide.values, 500);
  }

  spsa(A, a, c, values, iters) {
    const alpha = 1;
    const gamma = 0.16666666666666666;

    let best = null;
    let bestLoss = Infinity;
    const deltas = new Array(6);
    const highArgs = new Array(6);
    const lowArgs = new Array(6);

    for (let k = 0; k < iters; k++) {
      const ck = c / Math.pow(k + 1, gamma);
      for (let i = 0; i < 6; i++) {
        deltas[i] = Math.random() > 0.5 ? 1 : -1;
        highArgs[i] = values[i] + ck * deltas[i];
        lowArgs[i] = values[i] - ck * deltas[i];
      }

      const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
      for (let i = 0; i < 6; i++) {
        const g = lossDiff / (2 * ck) * deltas[i];
        const ak = a[i] / Math.pow(A + k + 1, alpha);
        values[i] = fix(values[i] - ak * g, i);
      }

      const loss = this.loss(values);
      if (loss < bestLoss) {
        best = values.slice(0);
        bestLoss = loss;
      }
    }
    return { values: best, loss: bestLoss };

    function fix(value, idx) {
      let max = 100;
      if (idx === 2 /* saturate */) {
        max = 7500;
      } else if (idx === 4 /* brightness */ || idx === 5 /* contrast */) {
        max = 200;
      }

      if (idx === 3 /* hue-rotate */) {
        if (value > max) {
          value %= max;
        } else if (value < 0) {
          value = max + value % max;
        }
      } else if (value < 0) {
        value = 0;
      } else if (value > max) {
        value = max;
      }
      return value;
    }
  }

  loss(filters) {
    // Argument is array of percentages.
    const color = this.reusedColor;
    color.set(0, 0, 0);

    color.invert(filters[0] / 100);
    color.sepia(filters[1] / 100);
    color.saturate(filters[2] / 100);
    color.hueRotate(filters[3] * 3.6);
    color.brightness(filters[4] / 100);
    color.contrast(filters[5] / 100);

    const colorHSL = color.hsl();
    return (
      Math.abs(color.r - this.target.r) +
      Math.abs(color.g - this.target.g) +
      Math.abs(color.b - this.target.b) +
      Math.abs(colorHSL.h - this.targetHSL.h) +
      Math.abs(colorHSL.s - this.targetHSL.s) +
      Math.abs(colorHSL.l - this.targetHSL.l)
    );
  }

  css(filters) {
    function fmt(idx, multiplier = 1) {
      return Math.round(filters[idx] * multiplier);
    }
    return `filter: invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%);`;
  }
}
export const get4FirstRandomItems = (array) => {
  var longitud = array.length;
  var randomItems = [];
  if(array.length > 4)
  while (randomItems.length < 4) {
    var randomIndex = Math.floor(Math.random() * longitud);
    var randomItem = array[randomIndex];

    if (!randomItems.includes(randomItem)) {
      randomItems.push(randomItem);
    }
  }
  else randomItems = array

  return randomItems;
}


export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}