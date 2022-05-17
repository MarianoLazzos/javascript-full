//********* Arrays ********** */
// const ceviche = ["Pescado", "Mariscos", "Cebolla"];

const ceviche = [
    {
        codigo: 1,
        titulo: "Pescado"
    },
    {
        codigo: 2,
        titulo: "Mariscos"
    },
    {
        codigo: 3,
        titulo: "Cebolla"
    }
]
/*
//agregar elemento
ceviche.push("Limon");
//quitar elemento
ceviche.pop();
//agregar elemento al principio del arreglo
ceviche.unshift();
//quitar elemento del principio del arreglo
ceviche.shift();
*/


//*********** Metodo Splice *********** */

// ceviche.splice(1,1);
// ceviche.splice(1,0,"Limon");
// console.log(ceviche);

//********** Recorrer arreglos ******** */

// ceviche.forEach((item, index) => {
//     console.log(index);
//     console.log(item);
// });

// for(let i = 0; i < ceviche.length; i++){
//     console.log(`Indece ${i}: ${ceviche[i]}`);
// }

//*********** Busqueda ********** */

// console.log(ceviche.indexOf("Cebolla"));

// const buscarIngrendiente = (ceviche , titulo) => {
//     const index = ceviche.findIndex((ing, index) => {
//         return ing.titulo === titulo;
//     })
//     return index;
// }

// const index = ceviche.findIndex((ing, index) => {
//     console.log(ing);
//     return ing.titulo === "Mariscos";
// })

// console.log(ceviche[buscarIngrendiente(ceviche, "Pescado")]);


//************* Filtrado ************* */

// const paises = ["Colombia", "Ecuador", "Peru", "España", "Mexico"];
// console.log(paises.filter(pais => pais.includes("s")));

// const filtrarIngredientes = ceviche.filter((ing, index) => {
//     const ingredientes = ing.titulo.includes("Mar");
//     return ingredientes;
// })

// console.log(filtrarIngredientes);


//************* Ordenacion de un arreglo ************ */

console.log(ceviche);

ceviche.sort((a,b) => {
    if(a.titulo > b.titulo){
        return 1;
    }
    if(a.titulo < b.titulo)
    {
        return -1;
    }
    return 0;
})

console.log(ceviche);