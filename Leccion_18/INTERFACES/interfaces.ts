interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPWD?:string;
}

let usuario1:Usuario = {nombreUsuario: "César", password:"123", confirmarPWD: "123"};
 console.log(usuario1.nombreUsuario);

 interface Abordar{
    abordarTransporte():void;
 }

 let avion:Abordar = {
    abordarTransporte: function (){
        console.log("Abordando")
    }
 }

 avion.abordarTransporte();