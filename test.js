// const prompt = require("prompt-sync")();

// let x = prompt("Ecrire un nombre de lignes : ");


function keyValuePrinter(obj) {
  for(let key in obj) {
    if(typeof obj[key] !== "object") {
      console.log("[" + key + " : " + obj[key] + "]");
    }else {
      keyValuePrinter(obj[key])
    }
  }
}

let obj = {
  nom:"name",
  type:"type",
}
keyValuePrinter(obj)