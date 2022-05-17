/*
let nombre = ["Mariano", "Lazzos", "David"];
let cosas = new Array("Mouse", "Teclado", "Monitor");

console.log(nombre[1]);



let cosas = ["Mouse", "Teclado", "Monitor", "Pad"];

cosas.forEach(function(value, index, array){
    console.log(value, index);
})


cosas.push("Compu");
cosas.unshift("Joystick");

console.log(cosas);

cosas.pop();
cosas.shift();

console.log(cosas);


let pos = cosas.indexOf("Pad");
console.log(pos);

cosas.splice(1,2);
console.log(cosas);


let persona = {
    nombre: "Mariano",
    apellido: "Lazzos",
    gustos: ["Autos", "Gaming"],
    trabajo: "No tiene",
    esCasado: false
};

console.log(persona.apellido);


let persona = new Object();

persona.nombre = "Mariano";
persona.apellido = "Lazzos";
persona["trabajo"] = "No tiene";

console.log(persona);

*/

let persona = {
    // Propiedades
    nombre: "Mariano",
    apellido: "Lazzos",
    gustos: ["Autos", "Gaming"],
    trabajo: "No tiene",
    esCasado: false,
    yearNac: 1999,

    //Metodos 
    calcularEdad: function(){
        this.edad = 2020 - this.yearNac;
    }
};

persona.calcularEdad();
console.log(persona);
