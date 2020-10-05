/* Ejercicio2: Desarrolla una aplicación web que funcione de alarma.
Mostrar hora actual y preguntar al usuario a qué hora sonará. Una vez que 
llegue a la hora introducida por el usuario,debe preguntarle si quiere 
descansar un poco más y vuelva a mostrar el mensaje a los dos minutos. */

//Creamos las variables de la hora
let fecha,hora,minuto,segundo;

//Creamos una función para obtener la hora actual
const obtenerHora = () => {
    fecha = new Date();
    hora = fecha.getHours();
    minuto = fecha.getMinutes();
    segundo = fecha.getSeconds();
    //Usamos un template String para devolverlo
    let fechaActual =`${hora}:${minuto}:${segundo}`;
    return fechaActual;
}

//Creamos una función para obtener la hora
const obtenerHoraAlarma =() => {
    fecha = new Date();
    hora = fecha.getHours();
    minuto = fecha.getMinutes() + 2;
    segundo = fecha.getSeconds();
    //Usamos un template String para devolverlo
     let fechaActual =`${hora}:${minuto}:${segundo}`;
     return fechaActual;

}
//Función para mostrar la hora
const mostrarCronometro = () =>{
    setInterval(() => {   
        //Obtenemos la fecha de hoy
        let fechaHoy = obtenerHora();
        //Creamos un elemento div
        let horaRelojNuevo = document.createElement("div");
        ////Creamos un nodo texto para colocar la fecha
        horaRelojNuevo.appendChild(document.createTextNode(fechaHoy));
        //Modificamos sus atributos
        horaRelojNuevo.setAttribute("id","horaReloj");
        //Obtenemos el div anterior
        let horaRelojOld = document.getElementById("horaReloj");
        //Sustituimos el anterior por el nuevo
        horaRelojOld.parentNode.replaceChild(horaRelojNuevo,horaRelojOld);
        //Añadimos los segundos
    }, 1000);

}

//Mostramos la hora
mostrarCronometro();

//Obtenemos el botón para agregar la alarma
let boton = document.getElementById("alarma");
let horaUsuario;
let alarma;
//Añadimos el evento click al botón
boton.addEventListener("click",()=>{
    //Prompt para pedir la hora de la alarma
    horaUsuario= prompt("Introduce la hora para agregar la alarma: (HH:MM:S)");
    alarma=`${horaUsuario}`;
    setInterval(()=>{
        let horaNueva = obtenerHora();
        if(horaNueva == alarma){
            //Lanzamos un prompt para postponer 2 minutos la alarma
            let aplazar = prompt("¿Quieres descansar un poco más? la alarma se postpone 2 minutos si escribes : (S/s)?");
            if(aplazar == 'S' || aplazar == 's'){
                alarma = obtenerHoraAlarma();
        }
    }
    }, 1000);
})



