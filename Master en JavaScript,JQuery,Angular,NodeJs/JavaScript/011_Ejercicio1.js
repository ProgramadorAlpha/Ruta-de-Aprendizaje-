"Use Strict"
/*Programa que pida dos umeros y que diga cual es mayor, cual es menor y si son iguales
Plus:  añade un bucle while para asegurarte de que si los números son iguales o menores que cero, o si no son números,
se le pida al usuario que vuelva a ingresar los valores
*/
let numero1 = 0;
let numero2 = 0;

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) || numero1 === numero2) {
  numero1 = parseInt(prompt("Ingresa el primer número (debe ser mayor que cero y no igual al segundo número):"));
  numero2 = parseInt(prompt("Ingresa el segundo número (debe ser mayor que cero y no igual al primer número):"));
}

let mensaje = "";
if(numero1 > numero2) {
  mensaje = numero1 + " es mayor que " + numero2;
} else if(numero2 > numero1) {
  mensaje = numero2 + " es mayor que " + numero1;
} else {
  mensaje = numero1 + " y " + numero2 + " son iguales.";
}

console.log("Primer número: " + numero1 + "\nSegundo número: " + numero2 + "\n\n" + mensaje);

alert("Primer número: " + numero1 + "\nSegundo número: " + numero2 + "\n\n" + mensaje);




