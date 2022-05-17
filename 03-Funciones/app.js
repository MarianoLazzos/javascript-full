/*
function conversorGrados(far)
{
    var celsius = (far - 32) * (5/9);
    return celsius;
}

var grados = 68;
var celsius = conversorGrados(grados);
console.log(celsius);


function edad(fecha)
{
    var res = 2020 - 1999;
    return res;
}

var fechaNac = 1999;
var res = edad(fechaNac);
console.log(res);


function jubilacion(fechaNac, nombre)
{
    var years = 2020 - fechaNac;
    
    if(years >= 65)
    {
        console.log(nombre + " Ya se encuentra en condiciones de jubilacion");
    }
    else
    {
        console.log(nombre + " Faltan: " + (65 - years) + " años para la jubilacion");
    }
}

var fechaNac = 1950;
var nombre = "Antonio";
jubilacion(fechaNac, nombre);


//Argumentos undefined
var nombre;

var prueba = function(n)
{
    return "Hola " + n;
}

console.log(prueba(nombre));



var sumar = function(a, b, c = 3)
{
    return a + b + c;
}

console.log(sumar(10, 4, 200));

*/

let nombre = "Mariano";
console.log(`El nombre es: ${nombre}`);
nombre = "hola";
