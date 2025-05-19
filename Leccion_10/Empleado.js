class Empleado extends Persona{

    static contadorEmpleado = 0;

    constructor(sueldo){
        // super(nombre, apellido, edad);
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