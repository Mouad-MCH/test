// const prompt = require("prompt-sync")();

// let x = prompt("Ecrire un nombre de lignes : ");
let x = 10

for(let i = 1; i<=x; i++) {
  let b = "*";
  for(let j = 1; j<=x; j+=2) {
    console.log(b.repeat(j));
  }
}