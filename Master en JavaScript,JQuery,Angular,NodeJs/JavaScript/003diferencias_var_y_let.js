'USE STRICT'

/*Diferncias VARIABLES entre var y let: Aqui podemos ver el alcance que tienen estas variables al definirlas con LAS palabras reservadas var o let 
que impacto o alcance tienen al bloque o declaracion que esta usando (let) ahora (var) lo hace Global sin importar el ambito del bloque; ahora lo veremos
con ejemplos: 

Primero para dejar claro Bloque o Declaracion no es mas que un trozo de codigo que comienza y termina dentro de todo!!! el Codigo»

if (true) {
	var numero = 50;
console.log(numero); }  = "ESto es un bloque o Declaracion."

*/


// PRUEBA CON var

var numero = 40;
console.log(numero); // igual a 40

if (true) {
	var numero = 50;
	console.log(numero);   // igual a 50
}


console.log (numero); // igual a 50


//PRUEBA CON let

var texto = "Curso Victor Robles JS";
console.log(texto); // valor JS

if (true) { 
let texto = "Curso laravel 5 Victor Robles"
console.log (texto); // valor laravel 5
}

console.log(texto); //valor es JS 

/*AQUI ELRESULTADO EN LA COSOLA ES EL CORRECTO: 
Curso Victor Robles JS
 Curso laravel 5 Victor Robles
  Curso Victor Robles JS. Aqui es el valor cambia ya que let define un valor limitado solo en el bloque en el que esta */






