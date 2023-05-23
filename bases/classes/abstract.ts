(() => {
  abstract class Mutant {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutant {
    salvarMundo() {
      return "Mundo a Salvo!";
    }
  }

  class Villian extends Mutant {
    conquistarMundo() {
      return "Mundio Conquistado!";
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");
  const magento = new Villian("Magneto", "Magnus");

  // console.log(wolverine.salvarMundo());
  // console.log(magento.conquistarMundo());

  const printName = (character: Mutant) => {
    console.log(character.realName);
  };

  // printName(magento);
})();
