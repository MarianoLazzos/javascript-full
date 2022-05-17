//**************** LocalStorage */
//****** Setear y leer datos del LocalStorage */
// localStorage.setItem("nombreUsuario", "LazzosMariano");
// localStorage.setItem("ubicacion", "Unquillo"); 
// console.log(localStorage.getItem('nombreUsuario'));
// console.log(localStorage.getItem("ubicacion"));


//************* Remover y limpiar datos LocalStorage **** */

// localStorage.removeItem("ubicacion");
// localStorage.clear();


//********* Notacion JSON ******** */

const usuario = {
    nombre: "Mariano",
    edad: 30
}

const usuarioJSON = JSON.stringify(usuario);
localStorage.setItem("usuario", usuarioJSON);

const userJSON = localStorage.getItem("usuario");
const usuarioObjeto = JSON.parse(userJSON);
console.log(`${usuarioObjeto.nombre} : ${usuarioObjeto.edad}`);

// console.log(usuarioJSON);
// console.log(usuarioObjeto);


