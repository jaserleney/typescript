// Crear interfaces
// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villian {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Villian = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Villian): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion

interface FunctionCiudadanos {
  (ciudadanos: string[]): number;
}

const ciudadGotica: FunctionCiudadanos = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Person {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Persona implements Person {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  constructor(nombre: string, edad: number, sexo: string, estadoCivil: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }

  imprimirBio(): void {
    console.log(
      `Soy ${this.nombre} mi edad es ${this.edad} soy de sexo ${this.sexo} y estoy ${this.estadoCivil}`
    );
  }
}

const fernando: Persona = new Persona("Fernando", 25, "Masculino", "Casado");
const jasser: Person = new Persona("Jasser", 25, "Masculino", "Soltero");

// console.log(fernando);
// fernando.imprimirBio();
// console.log(jasser);
// jasser.imprimirBio();
