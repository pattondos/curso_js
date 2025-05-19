function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }

}

Persona.prototype.telefono = "";

let padre = new Persona("Fernanda", "Manjarrez", "ferni@mail.com");
padre.telefono = "456465321";
console.log(padre);

let madre = new Persona("Malena", "Santiago", "male@mail.com");
madre.telefono = "1514121623";
console.log(madre);

// let persona = {
//     nombre: "César",
//     apellido: "Medina",
//     edad: 27,
//     email: "cesar@gmail.com",
//     idioma: "es",
//     get lang(){
//         return this.idioma.toUpperCase();
//     },
//     set lang(lang){
//         this.idioma = lang.toUpperCase();
//     },
//     get nombreCompleto(){
//         return this.nombre +" "+ this.apellido;
//     }
// }

// persona.telefono = "1123564"
// console.log(persona)

// delete persona.telefono;
// console.log(persona)
// for (const i in persona) {
//     console.log(i);
//     console.log(persona[i]);
    
// }


