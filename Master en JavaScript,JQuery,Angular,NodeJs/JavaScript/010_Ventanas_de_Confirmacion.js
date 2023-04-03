"USE STRICT"

//fUNCIONES: ES un conjunto de instrucciones que se pueden repetir tantas veces queremos invocando dicha funcion..... Estas pueden
//recibir parametros Ojo.

//ALERTA:

alert ("esta es una alerta")

//Alertas de Confirmacion:

confirm ("Estas seguro de querer continuar:")

var mi_Resultado = confirm("Estás seguro de querer continuar:");

if (mi_Resultado) {
  console.log("Has decidido continuar");
} else {
  console.log("Has decidido no continuar");
}

/*En este ejemplo, al ejecutar el código se mostrará una alerta con el mensaje "Estás seguro de querer continuar:". Si el usuario hace clic en "Aceptar", 
se guarda el valor true en la variable miResultado y se imprime "Has decidido continuar" en la consola. Si el usuario hace clic en "Cancelar", se guarda
 el valor false en la variable miResultado y se imprime "Has decidido no continuar" en la consola.*/
  

 //Ingreso de Datos:


 var miResultado = prompt("¿Qué edad tienes?", 18);
 console.log(miResultado);
 




