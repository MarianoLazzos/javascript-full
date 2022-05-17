/* ***********Examinando el DOM************

console.log(document.title);

document.title = "Prueba";

console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all);

*/

// console.log(document.all[10]);

// console.log(document.forms);


// *********** getElementById() ************

/*
let mainHeader = document.getElementById("main-header");
let headerTitle = document.getElementById("header-title");

// console.log(headerTitle);

headerTitle.textContent = "Hola";
headerTitle.innerText = "Adios"; 

headerTitle.innerHTML = "<h3>Prueba</h3>";

*/
/*
// ********* getElementsByClassName(); **********

let items = document.getElementsByClassName("list-group-item");

console.log(items[3]);

items[0].textContent = "Prueba";

*/
/*
// *********** getElementsByTagName(); ***************

let items = document.getElementsByTagName("li");
items[2].textContent = "Prueba 02";
console.log(items);

*/


// ********** querySelector ***********
/*
let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

let input = document.querySelector("input");
input.value = "Hola Mundo";

let submit = document.querySelector('input[type="submit"]');
submit.value = "Enviar";

let item = document.querySelector(".list-group-item");
item.style.color = "red";
*/
/*
 // ************* querySelectorAll *****************
 let items = document.querySelectorAll(".list-group-item");
 items[2].style.color = "red";

 let titulos = document.querySelectorAll(".title");

 titulos[0].textContent = "Prueba";

 let impar = document.querySelectorAll("li:nth-child(odd)");
 let par = document.querySelectorAll("li:nth-child(even)");

 for(let i = 0; i < impar.length; i++){
    impar[i].style.backgroundColor = "#ccc";
    par[i].style.backgroundColor = "#f4f4f4";
 }
*/

//  ************* ParentNode ************
// let itemList = document.querySelector("#items");
// console.log(itemList.parentNode);

// let main = itemList.parentNode;
// main.style.backgroundColor = "#f4f4f4";
// console.log(main.parentNode.parentNode);

// // ************ ParentElement ***********
// let itemList = document.querySelector("#items");
// console.log(itemList.parentElement);

// let main = itemList.parentElement;
// main.style.backgroundColor = "#f4f4f4";
// console.log(main.parentElement.parentElement);




// ********** childNodes **********



// console.log(items.childNodes);

// ********** children ************
// console.log(items.children);

// ********** firstChild ************
// console.log(items.firstChild);
// console.log(items.firstElementChild);
// items.firstElementChild.textContent = "Prueba"; 


// ********** lastChild ************
// console.log(items.lastChild);
// console.log(items.lastElementChild);
// items.lastElementChild.textContent = "Prueba2";




// ************ Elementos Hermanos ************

// let items = document.querySelector("#items")

// *********** previousSibling **************
// console.log(items.previousSibling);
// console.log(items.previousElementSibling);

// *********** nextSibling ****************
// console.log(items.nextSibling);
// console.log(items.nextElementSibling)



// ********** Crear Elementos ************
// ******* createElement   tagName **************
/*
let nuevoDiv = document.createElement("div");

nuevoDiv.className = "holas";
nuevoDiv.id = "div-hola";
nuevoDiv.setAttribute("title", "HolaMundo");
*/


//************* createTextNode ************ */
/*
let nuevoNodoText = document.createTextNode("Hola mundo");

nuevoDiv.appendChild(nuevoNodoText);

console.log(nuevoDiv);

let contendor = document.querySelector("header .container");

console.log(contendor);

let h1 = document.querySelector("h1");
console.log(h1);

contendor.insertBefore(nuevoDiv, h1)
*/


//****************** EVENTOS ************ */

// document.getElementById("boton").addEventListener("click", function(){
//    console.log("Click2");
// });

// document.getElementById("boton").addEventListener("click", hacerClick);

// function hacerClick(){
//    // console.log("Usted Hizo Click")
//    document.getElementById("header-title").textContent = "Texto Cambiado";


// ************** Agregar Elementos a la lista *************

let form = document.getElementById("formAgregar");
let lista = document.getElementById("items");
let filtro = document.getElementById("filtro");

//Evento submit del formulario
form.addEventListener("submit", agregarItem);

//Evento click de la lista
lista.addEventListener("click", eliminarItem);

//Evento del teclado en el campo de filtro
filtro.addEventListener("keyup", filtrarItems);

//Funcion para agregar un Item a la lista
function agregarItem(e){
   e.preventDefault();
   let newItem = document.getElementById("item").value;
   
   let li = document.createElement("li");
   li.className = "list-group-item";
   li.appendChild(document.createTextNode(newItem));

   let botonDel = document.createElement("button");
   botonDel.className = "btn btn-danger btn-sm float-right eliminar";
   botonDel.appendChild(document.createTextNode("X"));
   li.appendChild(botonDel);

   lista.appendChild(li);
}


//Funcion para eliminar un Item de la lista
function eliminarItem(e){
   if(e.target.classList.contains("eliminar")){
      if(confirm("¿Seguro que desea eliminar el elemento?")){
         let li = e.target.parentElement;
         lista.removeChild(li);
      }    
   }
}


//Funcion para buscar un Item de la lista
function filtrarItems(e){
   let texto = e.target.value.toLowerCase();
   let items = lista.getElementsByTagName("li");
   Array.from(items).forEach(function(item){
      let itemNombre = item.firstChild.textContent;
      if(itemNombre.toLowerCase().indexOf(texto) != -1){
         item.style.display = "block";
      }else{
         item.style.display = "none";
      }
   });
}







