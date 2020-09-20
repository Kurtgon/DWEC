const inicializar = () =>{
    
    //Creamos las variables y el array vacío
    let nombres = [];
    let nombre;
    let encontrado;

    //Usamos un bucle para pedir los nombres
    while(nombres.length<5){
        nombre = prompt("Introduzca el nombre: ");
        //buscamos el nombre en el array y lo guardamos en una variable booleana
        encontrado = nombres.includes(nombre);
        //Si el nombre ya está en el array salta un error
        if(encontrado){
            alert("Error, el nombre ya existe.");
        //Si no está repetido el nombre se añade al array.
        }else{
            nombres.push(nombre);
        }

    }

    //Pasamos todos los elementos a mayúculas
    for(i=0; i<nombres.length;i++){
        nombres[i]=nombres[i].toUpperCase();
    }

    //Ordenamos el array
    nombres.sort();
    //Creamos una variable para el resultado
    let letras = "";
    //Recorremos con un bucle el array para poner cada elemento en mayúsculas y luego quedarnos con la primera
    nombres.forEach(element => {
        let letraInicial = element.charAt(0);
        letras = letras + letraInicial;   
    });

    //Imprimimos por consola el resultado de las letras de los nombres
    console.log(letras);

}