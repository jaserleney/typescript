function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId(constructor: Function) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    // console.log({ target, propertyKey, descriptor });
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        console.error("El id del pokemon debe de estar entre 1 y 800");
        return false;
      } else {
        return originalMethod(id);
      }
    };
  };
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    // console.log({ target, propertyKey });

    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return "Fernando";
      },

      set(this, value) {
        // console.log(this, value);
        Object.defineProperty(this, propertyKey, {
          value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  @readOnly(true)
  public publicApi: string = `https://pokeapi.co`;

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemon(id: number) {
    console.log(`Pokemon saved a la DB: ${id}`);
  }
}
