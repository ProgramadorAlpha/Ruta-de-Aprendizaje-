"Use strict"

/*
Hacer un Programa que muestre todos los numeros impares entre dos numeros 
introducidos por el usuario .
*/


let numero1 = parseInt(prompt("Introduce el primer número:"));
let numero2 = parseInt(prompt("Introduce el segundo número:"));

if (numero1 <= numero2) {
  for (let i = numero1; i <= numero2; i++) {
    if (i % 2 !== 0) {
      console.log("El número " + i + " es impar");
    }
  }
} else {
  for (let i = numero2; i <= numero1; i++) {
    if (i % 2 !== 0) {
      console.log("El número " + i + " es impar");
    }
  }
}
