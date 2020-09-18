const add = () => {

    // Datos del formulario
    let posicion = document.getElementById("posicion").value;
    let equipo = document.getElementById("equipo").value;
    let puntos = document.getElementById("puntos").value;
    
    // Datos de la tabla y la fila
    let tabla = document.getElementById("tabla");
    let fila = tabla.getElementsByTagName("tr")[posicion];
    
    // Datos de la posición
    let posicionAnterior = fila.getElementsByTagName("td")[0];
    let posicionPosterior = document.createElement("td");
    posicionPosterior.appendChild(document.createTextNode(posicion));
    
    // Datos del equipo
    let equipoAnterior = fila.getElementsByTagName("td")[1];
    let equipoPosterior = document.createElement("td");
    equipoPosterior.appendChild(document.createTextNode(equipo));
    
    // Datos de los puntos 
    let puntosAnterior = fila.getElementsByTagName("td")[2];
    let puntosPosterior = document.createElement("td");
    puntosPosterior.appendChild(document.createTextNode(puntos));
    
    // Crear la fila nueva
    let filaNueva = document.createElement("tr");
    filaNueva.appendChild(posicionPosterior);
    filaNueva.appendChild(equipoPosterior);
    filaNueva.appendChild(puntosPosterior);

    // Cambiar la fila vieja por la nueva
    fila.parentNode.replaceChild(filaNueva,fila);
    
    
   


}