var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;


var IMCLuis = pesoLuis/(Math.pow(alturaLuis, 2));

var IMCCarlos = pesoCarlos/(Math.pow(alturaCarlos, 2));

console.log("IMC Luis: " + IMCLuis);
console.log("IMC Carlos: " + IMCCarlos);
var comparacion = IMCCarlos > IMCLuis;

console.log("Indice de Carlos mayor al de Luis?: " + comparacion);
