const personas = [
    new Persona("Cesar", "Medina"),
    new Persona("Katia", "Manjarrez")
];

function mostrarPersonas(){
    console.log("Entré a mostrar personas")
    console.log(personas);

    let texto = "";

    for (let persona of personas) {
        texto +=`<li> ${persona.nombre} ${persona.apellido} </li>`;
    }
    document.getElementById("listaPersonas").innerHTML = texto;
}

function agregarPersona() {
  const formulario = document.forms["formulario"];
  const nombre = formulario["nombre"];
  const apellido = formulario["apellido"];

  if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona(nombre.value, apellido.value);
    personas.push(persona);
    nombre.value = "";
    apellido.value = "";
    mostrarPersonas();
  }else{
    alert("Agrega primero el nombre maistro!:v Seas animal!:3");
  }
}