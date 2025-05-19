let miPromesa = new Promise((resolve, rejected) =>{

    let bandera = true;

    if(bandera){
        resolve("Resolvió correctamente");

    }else{
        rejected("Se produjo un error");
        
    }

});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// miPromesa
// .then(valor => console.log(valor))
// .catch(error => console.log(error));

let promesa = new Promise((resolve) => {

    setTimeout( ()=> resolve("kmara ia c la sábanas"), 3000);
});
// promesa.then(valor => console.log(valor));

/**/
async function funcionPromesa() {
    return "Simona la mona pelona";
}
// funcionPromesa().then(valor => console.log(valor));

/** */
async function conAwaitAsync() {

    let miPromesa = new Promise((resolve) => {
       resolve("Promesa con await") 
    });

    console.log( await miPromesa);
}
// conAwaitAsync();

/** */
async function funcionPrometida() {
    
    let prometida = new Promise((resolve) => {
       
        setTimeout( () => resolve("Promesa esperada y terminada"), 3000);
    });

    console.log( await prometida);
}
funcionPrometida();