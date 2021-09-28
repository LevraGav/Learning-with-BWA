// console.log("hello elfin")

// var a = 5;
// var b = 10;
// console.log(a + b);

// function tambah(a,b){
//     return a + b;
// }

// console.log(tambah(10,2));

// const fs = require('fs'); 

// fs.copyFileSync("text.txt", "text2.txt");
// console.log("text.txt is copied to text2.txt")

// const hero = require('superheroes');
// for(let i = 0; i < 10; i++){
//     console.log(hero.random())
// }
// const nameHero = hero.random();
// console.log(nameHero);

const op = require("./module")

const moduleTitle = op.title;
const modulePertambahan = op.tambah(10,5);
const modulePerkalian = op.kali(10,5);

console.log(moduleTitle);
console.log(modulePertambahan);
console.log(modulePerkalian);

