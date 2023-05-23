(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones

  enum fuerzaSuperHeros {
    acuman = 0,
    batman = 1,
    flash = 5,
    superman = 100,
  }

  const fuerzaFlash = fuerzaSuperHeros.flash;
  const fuerzaSuperman = fuerzaSuperHeros.superman;
  const fuerzaBatman = fuerzaSuperHeros.batman;
  const fuerzaAcuaman = fuerzaSuperHeros.acuman;

  console.log({ fuerzaAcuaman, fuerzaBatman, fuerzaFlash, fuerzaSuperman });

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
