// import { getPokemons } from "./generics/getPokemons";

import { Pokemon } from "./decorators/pokemon-class";

// getPokemons(150)
//   .then((p) => console.log(p.name))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Fin de getPokemons"));

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype as any).customName = "Pikachu";
// charmander.publicApi = "https://api.twitch.co";

console.log(charmander);
charmander.savePokemon(50);
