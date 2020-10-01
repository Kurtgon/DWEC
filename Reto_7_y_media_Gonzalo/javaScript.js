//JUEGO DE LAS SIETE Y MEDIA
//Iniciamos la partida para ello lo primero es crear la baraja
// Array con todos los palos
let arrayPalos = ["Bastos","Copas","Oros","Espadas"];
//Creamos las variables para los puntos del jugador y de la banca y la iniciamos a 0
let puntosJugador=0;
let puntosBanca=0;
//Creamos un array para colocar las cartas para comprobar si ya ha salido o no
let arrayCartasMostradas = [];
//Recuperar mazo del jugador
let mazoJugador = document.getElementById("cartaAleatoriaJugador");

//EMPIEZA LA PARTIDA Y EL JUGADOR PIDE CARTA
//Creamos el evento click de pedir carta del jugador
mazoJugador.addEventListener("click", (e)=>{
    //Sacar carta el jugador si los puntos son menos de 7,5 y la banca no ha empezado a jugar
    if(puntosJugador <7.5 && puntosBanca==0){
        sacarCarta("jugador");
        //Comprobamos que la puntuación del jugador no supera los 7,5
        if(puntosJugador>7.5){
            //Lanzamos el mensaje que se ha pasado y pierde el jugador
            mensajes("banca");
        }
    }
})

//BOTÓN PLANTARSE DEL JUGADOR
//Recuperamos el botón plantarse
let botonPlantarse = document.getElementById("botonPlantarse");
//Creamos el evento click de plantarse del jugador
botonPlantarse.addEventListener("click",(e)=>{
    //Comprobamos que la puntuación del jugador no es mayor que 7.5
    if(puntosJugador<=7.5){
        //Juega la banca
        while(puntosBanca<=puntosJugador){
            sacarCarta("banca");
        }
        //Si la banca tiene más de 7,5 lanza un mensaje donde gana el jugador
        if(puntosBanca>7.5){
            mensajes("jugador");
        //Sino la banca gana    
        }else{
            mensajes("banca");
        }
    }
})

//MENSAJES DE LA PARTIDA
//Creamos una función para recoger los mensajes de la partida
const mensajes = (jugador)=>{
    //creamos el elemento párrafo
    let fraseBancaPierde = document.createElement("p");
    //Modificamos sus atributos
    fraseBancaPierde.setAttribute("id","ganador");
    //Mensajes para el jugador
    if(jugador=="jugador"){
        fraseBancaPierde.appendChild(document.createTextNode("GANA EL JUGADOR"));
    }else{
        if(puntosJugador>7.5){
            fraseBancaPierde.appendChild(document.createTextNode("Te has pasado, GAME OVER"));    
        }else{
            fraseBancaPierde.appendChild(document.createTextNode("GANA LA BANCA"));
        }
    }
    //Obtenemos el anterior elemento para poder cambiarlo por el nuevo
    let fraseBancaPierdeViejo=document.getElementById("ganador");
        fraseBancaPierdeViejo.parentNode.replaceChild(fraseBancaPierde,fraseBancaPierdeViejo);
}

//CARTAS
//Función sacar carta
const sacarCarta = (mostrarJugadores) =>{
    let CartaFuera = true;
    while(CartaFuera){
        //Creamos las variables para el número de carta y la posición del array de los Palos de la baraja
        //Obtenemos un número aleatorio entre 1 y 10
        let numCarta =Math.floor(Math.random()*(11-1))+1;
        //Obtenemos objeto en una posición aleatoria del array
        let palo = arrayPalos[Math.floor(Math.random()*4)];
        let rutaCarta =`imagenes/${numCarta}${palo}.jpg`;
        //Comprobamos si está o no la carta en el array
        if(!arrayCartasMostradas.includes(rutaCarta)){
            if(mostrarJugadores=="jugador"){
               //Llamamos a los métodos mostrar cartas del jugador y a las miniaturas
                mostrarCartasJugador(rutaCarta,numCarta);
                mostrarMiniaturas(rutaCarta,"jugador");
                CartaFuera=false;
            }else{
                //Llamamos a los métodos de mostrar cartas de la banca y las miniaturas
                mostrarCartasBanca(rutaCarta,numCarta);
                mostrarMiniaturas(rutaCarta,"banca");
                CartaFuera=false;
            }
        }
    }
}

//CARTAS
//Función mostrar cartas del jugador
const mostrarCartasJugador = (rutaCarta,numCarta) =>{
    //Nos creamos una nueva carta
    let cartaNueva = document.createElement("img");
    cartaNueva.setAttribute('src',rutaCarta);
    cartaNueva.setAttribute("id","cartaJugador");
    //Obtenemos la carta anterior
    let cartaVieja = document.getElementById("cartaJugador");
    //Sustituimos la carta vieja por la carta nueva
    cartaVieja.parentNode.replaceChild(cartaNueva,cartaVieja);
    //añadimos la carta al array
    arrayCartasMostradas.push(rutaCarta);
    //Calculamos los puntos
    puntosJugador=calcularPuntos(puntosJugador,numCarta);
    //Llamamos a la función
    puntuacionJugador();
}

//CARTAS
//Función mostrar cartas de la banca
const mostrarCartasBanca = (rutaCarta,numCarta) =>{
    //Nos creamos una nueva carta
    let cartaNueva = document.createElement("img");
    cartaNueva.setAttribute('src',rutaCarta);
    cartaNueva.setAttribute("id","cartaBanca");
    //Obtenemos la carta anterior
    let cartaVieja = document.getElementById("cartaBanca");
    //Sustituimos la carta vieja por la carta nueva
    cartaVieja.parentNode.replaceChild(cartaNueva,cartaVieja);
    //añadimos la carta al array
    arrayCartasMostradas.push(rutaCarta);
    //Calculamos los puntos
    puntosBanca=calcularPuntos(puntosBanca,numCarta);
    //Llamamos a la función
    puntuacionBanca();
}

//CARTAS
//Función mostrar cartas miniaturas
const mostrarMiniaturas = (rutaCarta,jugador) =>{
    let miniaturas;
    //Nos creamos el nodo de la miniatura
    let miniatura = document.createElement("img");
    miniatura.setAttribute('src',rutaCarta);
    miniatura.setAttribute("class","miniatura");
    //Añadimos las miniaturas
    if(jugador == "jugador"){
        miniaturas = document.getElementById("miniaturaJugador");
    }else{
        miniaturas = document.getElementById("miniaturaBanca");
    }
    miniaturas.appendChild(miniatura);
}

//PUNTUACIÓN DEL JUEGO
//Función calcular los puntos del juego
const calcularPuntos = (puntos,numCarta) =>{
    //Le damos el valor a las cartas que son figuras de 0,5 puntos
    if(numCarta == 8 || numCarta == 9 || numCarta == 10){
        puntos= puntos + 0.5;
    }else{
        puntos= puntos + numCarta;
    }
    return puntos;
}

//PUNTUACIÓN DEL JUEGO
//Función cargar los puntos del jugador
const puntuacionJugador = () =>{
    //Creamos la nueva puntuación
    let nuevaPuntuacion = document.createElement("p");
    //Modificamos sus atributos
    nuevaPuntuacion.setAttribute("id","puntosJugador");
    //Creamos un nodo texto para colocar la puntuación
    nuevaPuntuacion.appendChild(document.createTextNode(puntosJugador));
    //Obtenemos la puntuación anterior
    let viejaPuntuacion = document.getElementById("puntosJugador");
    //Sustituimos la puntuación anterior por la nueva
    viejaPuntuacion.parentNode.replaceChild(nuevaPuntuacion,viejaPuntuacion);
}

//PUNTUACIÓN DEL JUEGO
//Función cargar los puntos de la banca
const puntuacionBanca = () =>{
    //Creamos la nueva puntuación
    let nuevaPuntuacion = document.createElement("p");
    //Modificamos sus atributos
    nuevaPuntuacion.setAttribute("id","puntosBanca");
    //Creamos un nodo texto para colocar la puntuación
    nuevaPuntuacion.appendChild(document.createTextNode(puntosBanca));
    //Obtenemos la puntuación anterior
    let viejaPuntuacion = document.getElementById("puntosBanca");
    //Sustituimos la puntuación anterior por la nueva
    viejaPuntuacion.parentNode.replaceChild(nuevaPuntuacion,viejaPuntuacion);
}

//BOTÓN REINICIAR PARTIDA
//Función reiniciar partida
//Recuperamos el botón de reiniciar partida
let botonReiniciar = document.getElementById("reiniciar");
//Creamos un evento click y recargamos la página
botonReiniciar.addEventListener("click",(e)=>{
    location.reload();
})
