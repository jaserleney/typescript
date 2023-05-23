(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
  const saveTheWorld = (): string => `El mundo esta salvado`;

  let myFunction: () => string;

  // myFunction = 10;
  // console.log(myFunction);

  // myFunction = addNumbers;
  // console.log(myFunction(4, 5));

  // myFunction = greet;
  // console.log(myFunction("Jasser"));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
