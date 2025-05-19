function sumar(){
    const formulario = document.getElementById("formularioCalculadora");

    let op1 = formulario["op1"];
    let op2 = formulario["op2"];
    let resultado = parseInt(op1.value) + parseInt(op2.value);

    if(isNaN(resultado)){
        resultado = "Se debe proporcionar números";
    }
    
    document.getElementById("resultado").innerHTML = `Resultado de la suma: ${resultado}`
}