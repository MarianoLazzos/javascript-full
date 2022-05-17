//********* Objectos Basicos ********* */

let miLibroA = {
    titulo: "El libro de JavaScript",
    autor: "Mariano David Lazzos",
    paginas: 400,
    publicado: false
}

// console.log(miLibro.titulo);
// console.log(`${miLibro.titulo} escrito por: ${miLibro.autor}`);
// miLibro.paginas = 500;
// console.log(miLibro.paginas);

//*********Objetos con funciones **********/

let miLibroB = {
    titulo: "Programacion Orientada a Objetos",
    autor: "Mariano Lazzos",
    paginas: 700,
    publicado: true
}


const getResumen = (libro) => {
    return {
        resumen: `${libro.titulo} escrito por: ${libro.autor}`,
        resumenPaginas: `${libro.titulo} tiene ${libro.paginas} paginas`
    }
}

let libroAResumen = getResumen(miLibroA);
let libroBResumen = getResumen(miLibroB);

// console.log(libroAResumen.resumen);
// console.log(libroBResumen.resumenPaginas);


//*********** Referencia de Objetos ********** */

// let persona = {
//     nombre: "Mariano",
//     edad: 21,
//     sueldo: 1200
// }

// let cambiarSueldo = (pers, monto) => {
//     pers.sueldo += monto;
//     console.log(pers);
// }

// cambiarSueldo(persona, 500);

// console.log(persona);

//*********** METODOS **************/

let persona = {
    nombre: "Mariano",
    edad: 21,
    sueldo: 1200,
    
    metodoPrueba: function(){
        // console.log("Escribiendo desde el meotodo Prueba");
        return "Resultado desde prueba";
    },

    cambiarEdad: function(edad){
        this.edad += edad;
    }
}

// let result = persona.metodoPrueba();
// console.log(result);
// persona.cambiarEdad(3);
// console.log(persona);


//********** Objeto String *********** */

// let nombre = "Mariano Lazzos";
// console.log(nombre.length);
// console.log(nombre[2]);
// console.log(nombre.toUpperCase());
// console.log(nombre.toLowerCase());
// console.log(nombre.includes("Laz"));


//*********** Destructuracion de Objetos *********** */

const getPersonaDatos = () => {
    const respuesta = [
        {
            codigo: 200,
            data: {
                persona: {
                    nombre: "Mariano",
                    direccion: {
                        ciudad: "Unquillo",
                        pais: "Argentina"
                    }
                }
            }
        },
        {
            codigo: 300,
            data: {
                persona: {
                    nombre: "Ana",
                    direccion: {
                        ciudad: "Mendiolaza",
                        pais: "Chile"
                    }
                }
            }
        },
        {
            codigo: 400,
            data: {
                persona: {
                    nombre: "Jose",
                    direccion: {
                        ciudad: "Villa Allende",
                        pais: "Uruguay"
                    }
                }
            }
        }
    ]
    return respuesta;
}


let { codigo : status, data : {persona: {nombre : nom}}} = getPersonaDatos()[0];

for(const {codigo : status, data : {persona : {nombre : nom}}} of getPersonaDatos()){
    console.log(nom)
}
