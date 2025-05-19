function funcion2(parametro){
    console.log("Holi 2: "+parametro);
}

function sumar(op1, op2, funcionCallBack) {
    let res = op1 + op2;
    funcionCallBack(res);

}

sumar(5, 3, funcion2);

function miFuncionCallBack() {
    console.log("Saludo después de 3 segundos");
}

setTimeout(miFuncionCallBack, 3000);