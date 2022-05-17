//***********Manejo de Fechas y Horas ******** */
//Unix Epoch - 01 Enero 1970 00:00:00
// const ahora = new Date();
// const timestamp = ahora.getTime()
// const fecha1 = new Date("December 17, 1995 06:20:00")

// console.log(timestamp.toString());

// const fechaActual = new Date(timestamp);
// console.log(fechaActual.getFullYear()); 

// console.log(ahora.toString());
// console.log(fecha1.toString());


// console.log(`Año: ${ahora.getFullYear()}`);
// console.log(`Mes: ${ahora.getMonth()}`);
// console.log(`Dia: ${ahora.getDate()}`);
// console.log(`Dia: ${ahora.getDay()}`);
// console.log(`Hora: ${fecha1.getHours()}`);
// console.log(`Minutos: ${fecha1.getMinutes()}`);
// console.log(`Segundos: ${fecha1.getSeconds()}`);


//***********Ejercicio ************** */

const ahora1 = new Date("August 18, 1999 08:30:00");
const actual = new Date();

if(ahora1 > actual)
{
    console.log(`Es mayor: ${ahora1.toString()}`);
}else{
    console.log(`Es mayor: ${actual.toString()}`);
}

