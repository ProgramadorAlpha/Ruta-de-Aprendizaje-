"Use Strict Mode"

/*
Hacer un Programa que muestre todos los numeros entre dos numeros 
introducidos por el usuario .
*/



let numero1 = parseInt(prompt("Introduce el primer número:"));
let numero2 = parseInt(prompt("Introduce el segundo número:"));

document.write("<h1>Aquí están los números de " + numero1 + " a " + numero2 + ":</h1>");

if (numero1 <= numero2) {
  for (let i = numero1; i <= numero2; i++) {
    document.write("<p>" + i + "</p>");
  }
} else {
  for (let i = numero2; i <= numero1; i++) {
    document.write("<p>" + i + "</p>");
  }
}
