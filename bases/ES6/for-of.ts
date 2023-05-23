(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman = {
    name: "ironman",
    weapon: "Armor suit",
  };
  const captainAmerica = {
    name: "Capitan america",
    weapon: "Shield",
  };
  const thor = {
    name: "thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [ironman, thor, captainAmerica];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }
})();
