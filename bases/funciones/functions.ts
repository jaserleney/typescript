(() => {
  const hero: string = "flash";

  function returnName(): string {
    return hero;
  }

  const activated = (): string => "Batisenial";

  console.log(typeof activated());

  const heroName = returnName();
})();
