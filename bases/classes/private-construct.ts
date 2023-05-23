(() => {
  class Apocalipsis {
    static intance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.intance) {
        Apocalipsis.intance = new Apocalipsis("Soy Apocalipsis...El Unico");
      }

      return Apocalipsis.intance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  // const apocalipsis = new Apocalipsis("Soy Apocalipsis...El Unico");
  // const apocalipsis2 = new Apocalipsis("Soy Apocalipsis...El Unico");
  // const apocalipsis3 = new Apocalipsis("Soy Apocalipsis...El Unico");
  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis1.changeName("Xavier");

  // console.log(apocalipsis1);
  // console.log(apocalipsis2);
  // console.log(apocalipsis3);
})();
