"USE STRICT"


/* OPERADORES  

Operadores matemáticos: Estos operadores se utilizan para realizar operaciones matemáticas básicas, como sumar, restar, multiplicar y dividir. 
Algunos ejemplos de operadores matemáticos son +, -, * y /.

*/

var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;

alert ("El Resultado de la operacion es: " +operacion); 


// Tipos de Datos: Estos son Enteros, String  o cadena de texto o caracteres, Coma flotante o decimal, boolean que es <true o false>, Arrays y Objetos....

var numero_entero = 44; //Dato entero
var cadena_texto =  "Hola que Tal"; // Cadena de caracteres
var verdadero_o_falso = false; // booleano

var numero_falso = "33";

//Tambien tenemos las "Funciones"

//Number ();  este number es una de las funciones covertir por ejemplo esta variable: var numero_falso = "33" que es un string en un numero entero ejemplo= 

console.log(Number(numero_falso)+7);  //Aqui el resultado en la consola va a ser 40 ya que 33 se conivirtio en un numero operable, osea un Entero.... 

//Tambien estan las funciones: parseInt y parseFloat para numeros decimales. Ademas del String para covertir a texto por ejemplo un numero_entero
//Por ultimo en esta leccion tenemos a  typeof esto el console.log(''); nos va a detectar cualquier tipo de dato ejemplo:

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);  // Aqui el resultado en la consola seria : number,string,boolean...
 

