// Funciones Básicas
const sumar = (a: number, b: number): number => a + b;

const contar = (heroes: string[]): number => {
  return heroes.length;
};

const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = (llamar: string = "No hay"): void => {
  if (llamar) {
    console.log("Batiseñal activada");
  }
};

llamarBatman();

// Rest?
const unirheroes = (...personas: string[]): string => {
  return personas.join(", ");
};

// Tipo funcion
const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]): void => {
  console.log(`${numero} , ${texto} , ${booleano} , ${arreglo}`);
};

let noHace: (numero: number, texto: string, booleano: boolean, arreglo: string[]) => void;

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (
  numero: number,
  texto: string,
  booleano: boolean,
  arreglo: string[]
) => void;
noHaceNadaTampoco = noHaceNada;
