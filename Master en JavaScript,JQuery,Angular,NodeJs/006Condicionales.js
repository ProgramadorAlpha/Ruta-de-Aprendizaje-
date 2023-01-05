"USE STRIC"

/*Condicionales: son una estrucutura de control o unas instrucciones que nos permiten comparar datos ejemplo: Si A es "igual" a B haz algo; El "igual" puede sustutuirse por
//Variantes como "diferente" o "mayor que" y asi....


//CONDICIONAL IF :

var edad1 = 30;
var edad2 = 12;

// Si esto sucede 
if (edad1 > edad2) {
    //if= a "si!!" tal cosa....

    //Ejecuta esto 
    console.log('Edad1 es mayor a edad2'); //Aqui se mostrara este resultado que es la condicon que se esta cumpliendo ok.
 
} 
//Tambien podria pasar que: 

else (edad1 < edad2) {  
    console.log('Edad1 es inferior que edad2');

    //else es = a "si_no!!"
      
}

Operadores Relacionales: 

Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Diferente: !=

*/


var edad= 71
var nombre= "David Suarez"; // Ojo tambien se pueden anidar los "if" para dar varias condiciones dentro de un mismo flujo de trabajo ejemplo:


if (edad >= 18) {

    //Usuario es mayor de edad

    console.log(nombre+" tiene "+edad+" anos,es mayor de edad"); //Nota! en estas declaraciones los espacios entre las comillas se representan en la Consola ok...

    if (edad == 33) {
        console.log('Todavia eres Milenial'); //Asi al cambiar la edad a 33 anos la consola arrojaria : (David Suarez tiene 33 anos,es mayor de edad_Todavia eres Milenial)
       
        
        }

        else if (edad >=70) //Tambien esta esta mantequilla el "else if" es para meter otra condicio mas dentro de los anidamientos.....
        
        {console.log('Eres un Anciano');// Aqui al cambiar a 71 anos el resulado seria: (David Suarez tiene 71 anos,es mayor de edad_Y Eres un anciano) 
        
            
        }

        else 
        
        console.log('"Ya no eres Milenial"');// Aqui al cambiar a 34 anos el resulado seria: (David Suarez tiene 34 anos,es mayor de edad_Y Ya no eres Milenial) 
         {
            
        }
      
}

//En el caso de que este un "else" asi seria el ejemplo: 

else  {

    //Usuario es menor de edad

    console.log(nombre+" tiene "+edad+" anos,es menor de edad");

}


// Tambien estan los OPeradores Logicos:

/*AND (Y) : &&
OR  (O)  :  ||
NEGACION : !

*/

var Year = 2018;

//Negacion:

if (Year != 2016) { 
    console.log('El Ano no es 2016 realmente es: ' +  Year );
        
}

// AND: 

if (Year >= 2000 && Year <= 2020) {
    console.log('Estamos en la era actual');
    
}

// OR :

if (Year == 2008 || (Year >= 2018 && Year == 2028 )) {
    console.log('El Ano aca en 8');
}else 
{console.log('Ano no Registrado');

/* 

Resumen de los Resultados de la consola:

El Ano no es 2016 realmente es: 2018
 Estamos en la era actual
 Ano no Registrado
 
 */
        
    
}


