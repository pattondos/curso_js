class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(fechaRegistro){
        // super(nombre, apellido, edad);
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