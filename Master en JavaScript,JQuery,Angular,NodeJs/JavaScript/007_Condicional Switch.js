"USE STRICT"

//Condicional Switch : Tambien es una estructura de conttrol pero para manejar condicionales de manera digamos mas global en grupos osea muchas condiciones EJEMPLO:

var edad = 25;
var imprime = "";

switch (edad) {
  case 18:
    imprime = "Eres mayor de edad y puedes votar";
    break;
  case 25:
    imprime = "Tienes 25 años y eres joven y lleno de energía";
    break;
  case 45:
    imprime = "Tienes 45 años y tienes mucha experiencia en la vida";
    break;
  case 70:
    imprime = "Ya eres anciano y has vivido muchas cosas interesantes";
    break;
  default:
    imprime = "No puedo asignar una descripción a tu edad";
}

console.log(imprime);




