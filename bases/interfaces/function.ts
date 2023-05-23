(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbers: addTwoNumbers;

  addNumbers = (a: number, b: number): number => {
    return 10;
  };
})();
