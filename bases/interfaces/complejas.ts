(() => {
  interface Client {
    name: string;
    age?: number;
    address?: Address;
    getFullAdrress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Fernando",
    age: 25,
    address: {
      id: 125,
      zip: "XYH",
      city: "Ottawa",
    },
    getFullAdrress() {
      return "Hola";
    },
  };

  const clientTwo: Client = {
    name: "Mellisa",
    age: 30,
    getFullAdrress() {
      return "Hola";
    },
  };
})();
