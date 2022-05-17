//********* */ ES6 Variables *********
/*
const nombre = "pedro";
let edad = 21;
let = "mariano";
console.log(let);

// ********Bloques y alcance de las variables ********

{
const a = 3;
let b = 4;
var c = 5;
}
// console.log(a+b);
console.log(c);
*/

// ****** Template String ********

// let nombre  = "Mariano";
// let apellido = "Lazzos";
// const ciudad = "Unquillo"
// const nacimiento = 1999;

// function calcularEdad(year){
// return 2020 - year;
// }

// //EM5
// console.log(nombre + " " + apellido + ", nacio en " + ciudad +", edad: " + calcularEdad(nacimiento));

// //EM6 Template Strings
// console.log(`${nombre} ${apellido}, nacio en ${ciudad}, edad: ${calcularEdad(nacimiento)}`);


//********* Funciones de cadenas ES6 **********/
// let nombreCompleto = `${nombre} ${apellido}`;
// console.log(nombreCompleto);
// console.log(`${nombre} `.repeat(5));
// console.log(nombreCompleto.includes("ar"));
// console.log(nombreCompleto.startsWith("Mar"));
// console.log(nombreCompleto.endsWith("os"));


//********* Arrow Functions (Funciones Flecha) ************/

// const years = [1990, 2010, 2020, 2005];

// //ES5
// var edad = years.map(function(el){
//     return 2020 - el;
// })
// console.log(edad);

// //ES6
// let edad1 = years.map(el => 2020 - el);
// console.log(edad1);

// edad1 = years.map((el, index) => `Edad ${index + 1}: ${2020 - el}`);
// console.log(edad1);

// edad1 = years.map(
//     (el, index) => {
//         const yearActual = new Date().getFullYear();
//         const edad = yearActual - el;
//         return `Edad ${index + 1}: ${edad}`;
//     }
// );

// console.log(edad1);


// const cuadrado = (num) =>  num * num;

// console.log(cuadrado(5));

// const personas = [
//     {
//         nombre: "Mariano",
//         edad: 21,
//     },
//     {
//         nombre: "David",
//         edad: 25,
//     },
//     {
//         nombre: "Carlos",
//         edad: 30,
//     },
//     {
//         nombre: "Pepe",
//         edad: 35
//     }
// ];

// // const menores30 = personas.filter(function(persona){
// //     return persona.edad < 35;
// // })
// const menores30 = personas.filter((persona) => persona.edad < 35);

// console.log(menores30);



// ************* Destructuracion - Destruccion - Destructuring *********
//ES5
// var datos = ["Mariano", 25];

// var nombre = datos[0];
// var edad = datos[1];
// console.log(nombre);
// console.log(edad);

//ES6
// let [nombre, edad] = ["Mariano", 25];
// console.log(nombre);
// console.log(edad);

// const persona = {
//     nombre1: "Mariano",
//     edad1: 30
// }

// const {nombre1, edad1} = persona;
// console.log(nombre1);
// console.log(edad1);

// const {nombre1: n, edad1: e} = persona;
// console.log(n);
// console.log(e);


// const calcularMayorEdad = (year) => {
//     const edad = new Date().getFullYear() - year;
//     const mayoria =  edad >= 18 ? true : false;
//     return [edad, mayoria];
// }

// const [edad2, mayoria] = calcularMayorEdad(1990);
// console.log(edad2);
// console.log(`Es mayor de edad: ${mayoria}`);


// ************* MAPAS *****************
// const datos = new Map();

// datos.set("nombre", "Mariano");
// datos.set("edad", 30);
// datos.set(1, "mariano@gmail.com");
// datos.set(2, "lazzos@gmail.com");
// datos.set("telefono", 35170309020);

// console.log(datos.get("nombre"));
// console.log(datos.get(2));
// console.log(datos.size);

// // datos.delete(2);
// // datos.clear();

// datos.forEach((valor, key) => {
//     console.log(`${key} : ${valor}`);
// });


// ************ Spread Operator ***********

// const suma = (a, b, c, d) =>  a + b + c + d;

// const ope1 = suma(10, 20, 30, 40);

// console.log(ope1);

// const valores = [10, 20, 30, 40];

// const ope2 = suma(...valores);

// console.log(ope2);

// const rrhh = ["Pedro", "Pablo", "Ana"];
// const contabilidad = ["Felipe", "Carlos", "Maria"];

// const empresa = [...rrhh, ...contabilidad];

// console.log(empresa);















