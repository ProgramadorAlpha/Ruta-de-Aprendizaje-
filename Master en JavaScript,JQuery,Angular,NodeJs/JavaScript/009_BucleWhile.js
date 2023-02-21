"USE STRICT"

/*

while (condición) {
  // Código a ejecutar mientras se cumpla la condición
}


Cada vez que se ejecuta el bucle, se evalúa la condición. Si la condición es verdadera, se ejecuta el bloque de código del bucle. Luego, se vuelve a evaluar 
la condición y, si sigue siendo verdadera, se vuelve a ejecutar el bloque de código. Esto se repite hasta que la condición sea falsa, momento en el que el bucle se detiene.

Por ejemplo, aquí hay un bucle while que imprime los números del 1 al 100 en la consola:

*/

var numero = 1;

while (numero <= 100) {
  console.log(numero);
  numero++;
}

/*


Este bucle se inicializa con la variable numero establecida en 1. Luego, se evalúa la condición numero <= 100, que es verdadera. Por lo tanto, 
se imprime el valor de numero en la consola y se incrementa en 1. Luego, se vuelve a evaluar la condición y, si sigue siendo verdadera, se vuelve a ejecutar 
el bloque de código. Esto se repite hasta que numero sea mayor que 100, momento en el que el bucle se detiene.

*/



var year = 2018;

do {
  console.log("Vamos en el año " + year);
  year++;
} while (year <= 2051);


/*

En este caso, el bloque de código se ejecuta primero y luego se evalúa la condición. Si la condición es verdadera, el bucle se ejecuta de nuevo y se vuelve a evaluar 
la condición. Esto se repite hasta que la condición sea falsa.

Aquí tienes un ejemplo de cómo podrías escribir un bucle do while que imprima los años desde 2018 hasta 2051 en la consola.



La sintaxis de un bucle do while es la siguiente:

do {
  // Código a ejecutar
} while (condición);

*/


/*

La instrucción break se utiliza para terminar prematuramente un bucle, una estructura de control de flujo o una declaración switch.

Aquí tienes un ejemplo de cómo podrías utilizar break dentro de un bucle for para terminar prematuramente el bucle cuando se alcance un valor específico:

*/  


  
  for (var i = 1; i <= 100; i++) {
    console.log(i);
    if (i === 50) {
      break;
    }
  }

 /*Este bucle for se inicializa con la variable i establecida en 1. Luego, se ejecuta el bloque de código y se incrementa el valor de i en 1. 
 Dentro del bloque de código, se utiliza una estructura de control de flujo if para evaluar si i es igual a 50. Si es así, se utiliza la instrucción break 
 para terminar prematuramente el bucle. */



  
  
 


  


