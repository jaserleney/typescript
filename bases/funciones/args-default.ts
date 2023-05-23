(() => {
  const fullName = (firstName: string, lastName?: string, edad: number = 0): string => {
    return `Hola soy ${firstName} ${lastName} y mi edad ${edad} `;
  };

  const name = fullName("Tony", "Stark");

  console.log(name);
})();
