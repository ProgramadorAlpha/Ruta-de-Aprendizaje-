"Use Strict Mode"
/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
hasta introducir un numero negativo y ahi mostar el resultado.
*/

let suma = 0;
let contador = 0;
let numero;

do {
  numero = parseInt(prompt("Introduce un número:"));
  
  if (numero >= 0) {
    suma += numero;
    contador++;
  }
} while (numero >= 0);

let media = suma / contador;

console.log("La suma de los números introducidos es: " + suma);
console.log("La media de los números introducidos es: " + media);
