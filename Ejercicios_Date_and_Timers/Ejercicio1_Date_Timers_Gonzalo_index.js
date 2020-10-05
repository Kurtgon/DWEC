/* Crea una página que muestre por pantalla un cronómetro y la fecha actual.
El formato que deberá aparecer es lo siguiente:
Hoy es 30 - 9 - 2019 y son las 21:4:23 horas */

//Creamos las variables
let fecha,hora,minuto,segundo,day,month,year;

const obtenerHora = () => {
    //Obtenemos la fecha y la hora de hoy
    fecha = new Date();
    //Como es un array usamos el getDate en lugar del getDay
    day = fecha.getDate();
    //Sumamos 1 al mes porque enero empieza en la primera posición del array 0
    month = fecha.getMonth()+1;
    year = fecha.getFullYear();
    hora = fecha.getHours();
    minuto = fecha.getMinutes();
    segundo = fecha.getSeconds();
    //Usamos un template String para mostrarlo
    let fechaActual =`Hoy es ${day} - ${month} - ${year} y son las ${hora}:${minuto}:${segundo}`;
    return fechaActual;
}

const mostrarCronometro = () =>{
    setInterval(() => {   
        //Obtenemos la fecha de hoy
        let fechaHoy = obtenerHora();
        //Creamos un elemento h1
        let h1Nuevo = document.createElement("h1");
        ////Creamos un nodo texto para colocar la fecha
        h1Nuevo.appendChild(document.createTextNode(fechaHoy));
        //Modificamos sus atributos
        h1Nuevo.setAttribute("id","fecha");
        //Obtenemos el h1 anterior
        let h1Old = document.getElementById("fecha");
        //Sustituimos el anterior por el nuevo
        h1Old.parentNode.replaceChild(h1Nuevo,h1Old);
        //Añadimos los segundos
    }, 1000);

}
//Mostramos la fecha al completo
mostrarCronometro();



