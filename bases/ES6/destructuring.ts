(() => {
  type AttAvengers = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    poder: number;
  };

  const avengers: AttAvengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey",
    vision: "Paul Bettani",
    activos: true,
    poder: 1500,
  };

  // const { poder, vision } = avengers;

  // console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvengers = ({ ironman, ...rest }: AttAvengers): void => {
    console.log(ironman, rest);
  };

  printAvengers(avengers);

  const avengersArr: string[] = ["Ironman", "Capitan", "Hulk"];

  const [ironman, , hulk] = avengersArr;

  console.log({ hulk, ironman });
})();
