let acumulador = 0;
let numeroMaximo = 5;
let i = 1

// for (let i = 1; i <= numeroMaximo; i++) {
//     //acumulador = acumulador + i;
//     acumulador += i;
//     console.log(acumulador);
    
// }
do{
    acumulador += i;
    i++;  
}while(i <= numeroMaximo);

console.log(acumulador);