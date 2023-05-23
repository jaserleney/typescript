// import { Hero } from "./classes/hero";

import { printObject } from "../generics/generics";
import { Villian, Hero } from "../interfaces";

// // console.log("Hola Mundo");

// const ironman = new Hero("ironman", 1, 25);

// // console.log(ironman);
// // console.log(ironman.power);

// console.log(printObject(123).toFixed(2));
// console.log(printObject(new Date()).getDate());
// console.log(printObject("Hola mundo").includes("mundo"));

const deadpool = {
  name: "Deadpool",
  realName: "Wade Wisnton Wilson",
  dangerLevel: 130,
};

console.log(printObject<Villian>(deadpool).dangerLevel);
