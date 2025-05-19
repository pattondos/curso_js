function Saludar(target: Function): void{
    target.prototype.saludos = function():void{
        console.log("HOLA DESDE EL DECORADOR");
    }
}

@Saludar
class Hola{
    constructor(){}
}

let hola1 = new Hola()
hola1.saludos();