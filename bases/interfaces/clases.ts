(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPowers(id: number): void;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    constructor(public age: number, public name: string, public realName: string) {
      this.age = age;
      this.name = name;
      this.realName = realName;
    }

    mutantPowers(id: number) {
      return this.name;
    }
  }
})();
