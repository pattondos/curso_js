/**
 * SE CREAN LOS VALORES DE PRUEBA DE INGRESOS Y EGRESOS
 */
const ingresos = [
    new Ingreso("Sueldo", 23400),
    new Ingreso("Venta auto", 63400)
];

const egresos = [
    new Egreso("Renta casa", 3500.00),
    new Egreso("Ropa", 1760.45)
];

// SE CALCULAN LOS INGRESOS
let totalIngresos = ()=>{
    let totalIngreso = 0;

    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

// SE CALCULAN LOS EGRESOS
let totalEgresos = ()=>{
    let totalEgreso = 0;

    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

//SE REALIZAN CÁLCULOS PARA INGRESOS, EGRESOS Y PORCENTAJE DE EGRESOS
let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = (((totalEgresos()/totalIngresos())*100)).toFixed(2);

    document.getElementById("prespuestoTotal").innerHTML = `\$ ${presupuesto}`;
    document.getElementById("porcentaje").innerHTML = `${porcentajeEgreso}%`;
    document.getElementById("ingresos").innerHTML = `+\$ ${totalIngresos()}`;
    document.getElementById("egresos").innerHTML = `-\$ ${totalEgresos()}`;
}

// SE CARGA LA APP
let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}
/******************************************************************************************* */
//SE ITERA LA LISTA DE LOS INGRESOS
const cargarIngresos = ()=>{
    let ingresosHTML = "";
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
        
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

// SE CREA EL TEMPLATE DE HTML PARA LOS INGRESOS
const crearIngresoHTML= (ingreso) =>{
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">+\$ ${ingreso.valor}</div>
                    <div class="elemento_eliminar">                            
                        <button class="elemento_eliminar--btn">
                            <ion-icon  name="close-circle-outline" onclick='eliminarIngreso(${ingreso.idIngreso})'>
                            </ion-icon>
                        </button>
                    </div>
                </div>
        </div>
    `;
    return ingresoHTML;
}
// PARA ELIMINAR UN ELEMENTO DE LOS INGRESOS
const eliminarIngreso = (idIngreso)=>{
    let idEliminar = ingresos.findIndex(ingreso => ingreso.idIngreso === idIngreso);
    ingresos.splice(idEliminar, 1);

    cargarCabecero();
    cargarIngresos();

}
/******************************************************************************************* */
//SE ITERA LA LISTA DE LOS EGRESOS
const cargarEgresos = ()=>{
    let egresosHTML = "";
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
        
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

// SE CREA EL TEMPLATE DE HTML PARA LOS EGRESOS
const crearEgresoHTML= (egreso) =>{
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">-\$ ${egreso.valor}</div>
                    <div class="elemento_porcentaje">${((egreso.valor/totalEgresos())*100).toFixed(2)}%</div>
                    <div class="elemento_eliminar">                            
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline" onclick='eliminarEgreso(${egreso.idEgreso})'>
                            </ion-icon>
                        </button>
                    </div>
                </div>
        </div>
    `;
    return egresoHTML;
}

// PARA ELIMINAR UN ELEMENTO DE LOS EGRESOS
const eliminarEgreso = (idEgreso)=>{
    let idEliminar = egresos.findIndex(egreso => egreso.idEgreso === idEgreso);
    egresos.splice(idEliminar, 1);

    cargarCabecero();
    cargarEgresos();
}
/********************************************************************************** */
// Para que se agreguen los ingresos o egresos
const agregarDato = () =>{

    let formulario = document.forms["formulario"];
    let tipo = formulario["tipo"];
    let descripcion = formulario["descripcion"];
    let valor = formulario["valor"];

    if (descripcion.value != "" && valor.value != "") {

        if (tipo.value === "ingreso") {
            ingresos.push( new Ingreso(descripcion.value, +valor.value));
            
            cargarCabecero();
            cargarIngresos();

        }else if(tipo.value === "egreso"){
            egresos.push( new Egreso(descripcion.value, +valor.value));

            cargarCabecero();
            cargarEgresos();
        }
    } else{
        alert("POS NO PUEDES AGREGAR ESTO MAIK, NO SEAS BESTIA :v");
    }
}