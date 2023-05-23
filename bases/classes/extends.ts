(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      // console.log("Constructor Avenger Llamado");
    }

    protected getFuillName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      // console.log("Constructing Xmen Calling");
    }

    getFullNameDesdeXmen() {
      console.log(super.getFuillName());
    }

    get getFullName() {
      return `${this.name} - ${this.realName}`;
    }

    set setFullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe ser mayor a 3 letras");
      }
      this.name = name;
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  // console.log(wolverine);
  // wolverine.getFullNameDesdeXmen();
  // console.log(wolverine.getFullName);
  wolverine.setFullName = "Fernando";
  // console.log(wolverine.getFullName);
  // console.log(wolverine);
})();
