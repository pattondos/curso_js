class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;    
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    get edad(){
        return this._edad;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `Persona No. [${this._idPersona}] ${this._nombre} ${this._apellido}, edad: ${this._edad}`;
    }
}


class Empleado extends Persona{

    static contadorEmpleado = 0;

    constructor(sueldo, nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }


    toString(){
        return `Empleado No. {${this._idEmpleado}}, ${super.toString()}. Sueldo de: \$${this._sueldo}`;

    }
}


class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(fechaRegistro, nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `Cliente No. (${this._idCliente}) ${super.toString()}. Ingresado el: ${this._fechaRegistro}`;
    }
} 

let persona1 = new Persona("César", "Medina", 27);
console.log(persona1.toString());
let persona2 = new Persona("Katia", "Manjarrez", 27);
console.log(persona2.toString());
/********************************************************************************/
let empleado1 = new Empleado(7864.5, "Fernanda", "Manjarrez", 24);
console.log(empleado1.toString());
/********************************************************************************/
const fecha = new Date();
const fechaReg = fecha.getDay() + "/" + fecha.getUTCMonth() + "/" + fecha.getFullYear();
let cliente1 = new Cliente(fechaReg, "Jesús", "Manjarrez", 23);
console.log(cliente1.toString())