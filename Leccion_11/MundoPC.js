class DispositoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    set marca(marca){
        this._marca = marca;
    }

}


// Clase ratón
class Raton extends DispositoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){

        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones;
        
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Ratón: [ID Ratón: ${this._idRaton}, Entrada: ${this._tipoEntrada}, Marca: ${this._marca}],`;
    }
}

let raton1 = new Raton("USB", "HP");
let raton2= new Raton("Bluetooth", "Logitech");
// console.log(raton1.toString());
// console.log(raton2.toString());

// Clase teclado
class Teclado extends DispositoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){

        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;
        
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [ID Teclado: ${this._idTeclado}, Entrada: ${this._tipoEntrada}, Marca: ${this._marca}],`;
    }
}
let teclado1 = new Teclado("USB", "Yeyian");
let teclado2= new Teclado("Bluetooth", "Logitech");

// console.log(teclado1.toString())
// console.log(teclado2.toString())

// Clase monitor
class Monitor{

    static contadorMonitores = 0; 

    constructor(tamaño, marca){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._tamaño = tamaño;
        this._marca = marca;
    }

    get idMonitor(){
        return this._idMonitor;
    }
    
    toString(){
        return `Monitor: [ID Monitor: ${this._idMonitor}, Tamaño: ${this._tamaño}, Marca: ${this._marca}],`;
    }

}

let monitor1 = new Monitor(14, "Samsung");
let monitor2= new Monitor(15.2, "LG");
// console.log(monitor1.toString());
// console.log(monitor2.toString());

// Clase computadora que recibirá monitor, ratón y teclado
class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString(){
        return ` ID Computadora: ${this._idComputadora}, Computadora: ${this._nombre}.
         Nombre: ${this._nombre}.
         Monitor: ${this._monitor}. 
         Ratón: ${this._raton}. 
         Teclado: ${this._teclado}`;
    }
}

let computadora1 = new Computadora("Lenovo", monitor1, raton1, teclado1)
//console.log(computadora1.toString());

let computadora2 = new Computadora("Asus - RoG", monitor2, raton2, teclado2)
//console.log(computadora2.toString());

class Orden{

    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._arrComputadoras = []
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){

        this._arrComputadoras.push(computadora);

    }

    mostrarOrden(){
        let computadorasOrden = 0;

        for (let computadora of this._arrComputadoras) {

            computadorasOrden += `\n${computadora}`;
            
        }
        console.log(`Orden No. ${this._idOrden}. Computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden()