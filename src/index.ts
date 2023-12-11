let mensaje: string = 'Hola mundo';
mensaje = 'chanchito feliz';
mensaje = 'chao mundo';
console.log(mensaje);

console.log(typeof []);
/**
 * > tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 *
 * > tipos de TS
 * any ( trataremos de no usarlo)
 * unknown
 * never
 * arrays
 * tuplas
 * Enum
 *
 * > tipos inferidos
 */

let extincionDinosaurios: number = 76_000_000;
let dinosauriofavorito: string = 'T-Rex';
let extintos: boolean = true;

let mivaribale: string;
mivaribale = 'Soy una varibale (any)';

function chanchitoFeliz(config: any) {
  return config;
}

let animales: string[] = ['chanchito', 'felix', 'felipe'];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

// animales.map(x => x.) // el autocompletado sugiere métodos del tipo de dato

// -- Tuplas: es una variable que contiene un set de datos que se encuentran ordenados
let tupla: [number, string] = [1, 'chanchito'];
let tupla2: [number, string[]] = [1, ['chanchito', 'chanchita']];
// tupla.push(12) => este método no funciona con las tuplas

// -- Enum: Tipo de dato enumerado. Lista de constantes a las cuales nosotros podemos referenciar en un futuro.
// Se utiliza mucho para representar estados en la bbdd (activo, pendiente, eliminado), para representar tallas (pequeña, mediana, grande, extra-grande).

// También se utiliza mucho para representar un estado esta cargando.
// Por ejemplo, cuando estamos llamando a una API, y esta nos devuelve unos datos, normalmente vamos a tener 3 estados.

/** Estados de carga
 * Aún no se llama a la API: IDLE
 * Se llama a la API: Loading
 * Respuesta exitosa: SUCCESS
 * Error en la respuesta: ERROR
 */

const pequeña = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';

// PascalCase
enum Talla {
  Pequeña = 's',
  Mediana = 'm',
  Grande = 'l',
  ExtraGrande = 'xl',
}

const variable1 = Talla.Mediana;
console.log(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success;
console.log(estado);

// -- Objetos:
type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona = {
  readonly id: number; // la propiedad solo será de lectura
  name?: string; // hacemos que la propiedad sea opcional
  nombre: string;
  talla: Talla;
  direccion: Direccion;
};
const objeto: Persona = {
  id: 1,
  nombre: 'Felipe',
  talla: Talla.Mediana,
  direccion: {
    numero: 1,
    calle: 'Industria',
    pais: 'Francia',
  },
};
