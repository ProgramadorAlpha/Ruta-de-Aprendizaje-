let numero = parseInt(prompt("Introduce un número:"));

document.write("<h1>La tabla de multiplicar del " + numero + ":</h1>");

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  document.write("<p>" + numero + " x " + i + " = " + resultado + "</p>");
}
