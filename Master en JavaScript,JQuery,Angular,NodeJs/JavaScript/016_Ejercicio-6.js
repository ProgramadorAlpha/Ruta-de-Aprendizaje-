"Use strict"
/*
Hacer un programa que nos diga si un numero es par o impar
1. Ventana Prompt
2. Si no es Valido que nos pida de nuevo el numero
*/
let numero;

do {
  numero = parseInt(prompt("Introduce un número:"));
} while (isNaN(numero));

if (numero % 2 === 0) {
  console.log(numero + " es un número par");
} else {
  console.log(numero + " es un número impar");
}
