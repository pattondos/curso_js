let persona1 ={
    nombre: "César",
    apellido: "Medina",
    nombreCompleto: function(titulo, telefono){
        //return this.nombre + " " + this.apellido;
        return titulo + " " + this.nombre + " " + this.apellido + " " + telefono;
    }
}

let persona2 ={
    nombre: "Katy",
    apellido: "Manjarrez"
}

//console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto("Ing.", 72251593456));

let arr = ["Ing.", 826154645]
console.log(persona1.nombreCompleto.apply(persona2, arr));
//console.log(persona1.nombreCompleto.call(persona2, "Ingeniera", 7296140480));
//console.log(persona1.nombreCompleto.apply(persona2));
