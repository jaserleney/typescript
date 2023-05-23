(() => {
  let flash: { name: string; age: number; powers: string[]; getName?: () => string } = {
    name: "Barry Allen",
    age: 24,
    powers: ["SuperVelocidad", "Viajar en el tiempo"],
  };

  let superman: { name: string; age: number; powers: string[]; getName?: () => string } = {
    name: "Clark Kent",
    age: 60,
    powers: ["SuperFuerza"],
  };

  // flash = {
  //   name: "Clark Kent",
  //   age: 25,
  //   powers: ["SuperFuerza"],
  //   getName() {
  //     return this.name;
  //   },
  // };

  // console.log(flash);
  // console.log(flash.getName());
})();
