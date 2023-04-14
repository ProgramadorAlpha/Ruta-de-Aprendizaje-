"Use strict"
/*
Muestre todos los numeros divisores de un numero introducido por un Prompt .
*/
let numero = parseInt(prompt("Introduce un número:"));
let divisores = [];

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    divisores.push(i);
  }
}

console.log("Los divisores de " + numero + " son: " + divisores.join(", "));
