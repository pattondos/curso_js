class Producto{
    static contadorProductos = 0;
    
    constructor(nombreProducto, precioProducto){
        this._nombreProducto = nombreProducto;
        this._precioProducto = precioProducto;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto(){
        return this._idProducto
    }
    
    get nombreProducto(){
        return this._nombreProducto;
    }

    get precioProducto(){
        return this._precioProducto
    }

    set nombreProducto(nombreProducto){
        this._nombreProducto = nombreProducto;
    }

    set precioProducto(precioProducto){
        this._precioProducto = precioProducto;
    }

    toString(){
        return `ID Producto: ${this._idProducto}, Nombre Producto: ${this._nombreProducto}.... Precio: \$ ${this._precioProducto}`;
    }
}

class Orden{
    static contadorOrdenes = 0;
    
    static get MAX_PROD(){
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._arrProductos = [];
        
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._arrProductos.length < Orden.MAX_PROD){

            this._arrProductos.push(producto);

        }else{
            console.log("Chafiastes maik");
        }
    }

    calcularTotal(){
        let totalVenta = 0;

        for (let producto of this._arrProductos) {
            
            totalVenta += producto.precioProducto;

        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = "";

        for(let producto of this._arrProductos){
            productosOrden += '\n{' + producto.toString() + "}";
        }

        console.log(`Oden No. ${this._idOrden} Total: \$ ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let prod1 = new Producto("Camisa", 200.00);
let prod2 = new Producto("Pantalón", 300.00);

let orden1 = new Orden();
orden1.agregarProducto(prod1);
orden1.agregarProducto(prod2);

orden1.mostrarOrden();