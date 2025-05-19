class Persona{
    static contadorPersonas = 0;

    static get MAX_OBJ(){
        return 5;
    }
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersonas;
        } else {
            console.log("Se te acabaron las monedas maik");
        }

    }

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }

    toString(){
        return this.idPersona + " " + this.nombreCompleto() ;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento
    }
    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + " " + this._departamento;

    }
}

let persona1 = new Persona("César", "Medina");
console.log(persona1);

let empleado1 = new Empleado("César", "Manjarrez", "UPF");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());