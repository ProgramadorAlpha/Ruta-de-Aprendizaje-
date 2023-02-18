'USE STRICT'

//Constanes= es igual a una variable un contenedor de informacion O DATOS pero en este caso el valor de la misma no cambia en nuestro flujo de trabajo....


var web = "htpps://victorroblesweb.es";

const ip = "1982.88.0.12";

web = "htpps://victorroblescursos.es"; /* Aqui le estamos cambiando el valor a la variable" como hemos dicho antes no tiene que colocar la palabra reservada (var)
 Ya que el valor de "web" esta definido y expresado en el flujo anteriormente....*/

 ip = "222.128.88.128"; /*esto es un ejemplo de lo que"NO" se puede hacer ya que el valor de una constante no puede cambiar en el flujo de trabajo si esta ya esta 
definida ya que la consola inidcaria el siguiente error:  004Constantes.js:13 Uncaught TypeError: Assignment to constant variable.*/

console.log(web,ip);

// AQUI luego de Asignar otro valor a web que es una variable si cambio A : htpps://victorroblescursos.es 1982.88.0.12.....