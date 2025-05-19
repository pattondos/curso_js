const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    document.getElementById("hora").innerHTML = `${hr} : ${min} : ${seg}`;

    const MESES = ["ENE", "FEB", "MAR", "ABR", "MAYO", "JUN", "JUL", "AGS", "SEP", "OCT", "NOV", "DIC"];
    let mes = MESES[fecha.getMonth()];

    const DIAS = ["LUN", "MART", "MIE", "JUV", "VIER", "SAB", "DOM"];
    let diasSemana = DIAS[fecha.getDay()];
    let dia = fecha.getDay();

    let fechaCompleta = `${diasSemana}, ${dia}/${mes}`;
    document.getElementById("fecha").innerHTML = fechaCompleta;

    document.getElementById("contenedor").classList.toggle("animar");
}

const formatoHora = (hora) =>{
    if (hora < 10) {
        hora = "0" + hora;
    } 
    return hora
}

setInterval(mostrarReloj, 1000);