//*************Manejo de CLASES ********** */

class Persona {
    constructor(nombre, edad, profesiones = []){
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones = profesiones;
    }

    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad} años. Trabajos: `;
        this.profesiones.forEach((profesiones) => {
            biografia += `${profesiones}, `
        })
        return biografia;
    }
}

class Empleado extends Persona{
    constructor(nombre, edad, profesiones = [], sueldo, puesto){
        super(nombre, edad, profesiones);
        this.sueldo = sueldo;
        this.puesto = puesto;
    }

    getBiografia(){
        return super.getBiografia() + `Puesto: ${this.puesto}, Sueldo: ${this.sueldo}`
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    get sueldo(){
        return this._sueldo;
    }


}

const persona1 = new Empleado("Mariano", 21, ["Programador", "Developer"], 1500, "Gerente");
const persona2 = new Persona("Juan", 30, ["Profesor"]);

console.log(persona1.getBiografia());
console.log(persona2.getBiografia());

const datos = {
    get ubicacion(){
        return this._ubicacion;
    },
    set ubicacion(valor){
        this._ubicacion = valor;
    }
}

datos.ubicacion = "Buenos Aires";
console.log(datos.ubicacion);
console.log(datos);