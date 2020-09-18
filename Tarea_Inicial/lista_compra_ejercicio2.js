const addElemento = () =>{
    // Datos de la lista
    let lista = document.getElementById("lista");
    // Nuevo nodo
    let nodoLista = document.createElement("li");
    // Nuevo elemento
    let elemento = document.getElementById("elemento").value;
    let ingrediente = document.createTextNode(elemento);
    nodoLista.appendChild(ingrediente);
    //Cogemos los elementos de la lista
    let elementos = lista.getElementsByTagName("li");
    //Cogemos la posición del elemento
    let posicion = document.getElementById("posicion").value;
    let ingredientePosicion = elementos[posicion-1];
    // Añadir elementos
    lista.insertBefore(nodoLista,ingredientePosicion);
}

const eliminarElemento = () =>{

    // Datos de la lista
    let lista = document.getElementById("lista");
    // Cogemos todos los elementos de la lista
    let elementos = lista.getElementsByTagName("li");
    //Cogemos la posición de elemento
    let posicion = document.getElementById("posicion").value;
    //Seleccionamos al elemento de la lista que vamos a eliminar
    let ingrediente = elementos[posicion-1];
    //Eliminamos el elemento
    lista.removeChild(ingrediente);


}
