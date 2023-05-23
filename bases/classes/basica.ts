(() => {
  class Avenger {
    // private name: string = "";
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    constructor(private name: string, public team: string, public realName?: string) {}

    public bio() {
      return `${this.name} ${this.team} ${this.realName}`;
    }
  }

  const antman: Avenger = new Avenger("Atman", "Capitan", "Scott Lang");
  // console.log(Avenger.avgAge);
  // console.log(Avenger.getAvgAge());
  // console.log(antman);
  // console.log(antman.bio());
})();
