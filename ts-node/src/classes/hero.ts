const powers = [
  { id: 1, power: "Volar" },
  { id: 2, power: "correr" },
];

export class Hero {
  constructor(public name: string, public powerId: number, public age: number) {
    this.name = name;
    this.powerId = powerId;
    this.age = age;
  }

  get power(): string {
    return powers.find((power) => power.id === this.powerId)?.power.toString() || "No Found";
  }
}
