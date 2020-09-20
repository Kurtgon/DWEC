const add = () =>{
    //Datos del formulario
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    
    //Datos de la tabla y de la fila
    let tabla = document.getElementById("tabla");
    let filas = tabla.getElementsByTagName("tr");
    
    //Recorremos las filas con la posición
    let posicion=-1;
    
    for(i=1; i<filas.length;i++){
        let fila=filas[i];
        //Recorremos las columnas
        let columnas = fila.getElementsByTagName("td");
        //Comprobamos si la columna coincide con el dni del formulario
        if(columnas[1].textContent == dni){
            posicion=i;
        }
    }

    if(posicion!=-1){
        alert("Error, el empleado ya existe")
   
    }else{
        //Obtenermos el número de empleados
        let numeroEmpleados = filas.length;
        //Nos quedamos con la última fila del empleado
        let ultimoEmpleado = filas[numeroEmpleados-1];
        let numeroUltimoEmpleado = ultimoEmpleado.getElementsByTagName("td")[0].textContent;
        let numeroNuevoEmpleado =parseInt(numeroUltimoEmpleado)+1;
        //Creamos la columna numero de empleado
        let numEmpleado = document.createElement("td");
        numEmpleado.appendChild(document.createTextNode(numeroNuevoEmpleado));
        //Creamos la columna del dni
        let dniNuevo = document.createElement("td");
        dniNuevo.appendChild(document.createTextNode(dni));
        //Creamos la columna del nombre
        let nombreNuevo=document.createElement("td");
        nombreNuevo.appendChild(document.createTextNode(nombre));
        //Creamos la columna apellidos
        let apellidosNuevos=document.createElement("td");
        apellidosNuevos.appendChild(document.createTextNode(apellidos));
        //Creamos la fila nueva y añadimos las columnas
        let filaNueva = document.createElement("tr");
        filaNueva.appendChild(numEmpleado);
        filaNueva.appendChild(dniNuevo);
        filaNueva.appendChild(nombreNuevo);
        filaNueva.appendChild(apellidosNuevos);
        //Añadimos la fila a la tabla
        tabla.appendChild(filaNueva);
        //Cambiamos el número total de empleados de h1
        let totalEmpleados =parseInt(filas.length-1);
        //Creamos el nuevo h1
        let h1Nuevo = document.createElement("h1");
        //Creamos centrar el texto
        let centrar = document.createElement("center");
        centrar.appendChild(document.createTextNode(`Número total de empleados: ${totalEmpleados}`));
        h1Nuevo.appendChild(centrar);
        //Cogemos el anterior h1
        let h1Anterior =document.getElementsByTagName("h1")[0];
        //Cambiamos el nuevo h1 por el anterior h1    
        h1Anterior.parentNode.replaceChild(h1Nuevo,h1Anterior);
    }
    
}

const borrar = () =>{
     //Datos del formulario
     let dni = document.getElementById("dni").value;
     
     //Datos de la tabla y de la fila
     let tabla = document.getElementById("tabla");
     let filas =tabla.getElementsByTagName("tr");
     
     //Recorremos las filas con la posición
     let posicion=-1;
     
     for(i=1; i<filas.length;i++){
         let fila=filas[i];
         //Recorremos las columnas
         let columnas = fila.getElementsByTagName("td");
         //Comprobamos si la columna coincide con el dni del formulario
         if(columnas[1].textContent == dni){
             posicion=i;
         }
     }
     //Controlamos el error si no encuentra el dni
     if(posicion ==-1){
         alert("Error, el empleado no existe.")
    
     }else{
        //Creamos una variable para elimnar la fila sabiendo su posición
        let eliminarFila = filas[posicion];
        //eliminamos la fila
        eliminarFila.parentNode.removeChild(eliminarFila);      
        //Cambiamos el número total de empleados de h1
        let totalEmpleados =parseInt(filas.length-1);
        //Creamos el nuevo h1
        let h1Nuevo = document.createElement("h1");
        //Creamos centrar el texto
        let centrar = document.createElement("center");
        centrar.appendChild(document.createTextNode(`Número total de empleados: ${totalEmpleados}`));
        h1Nuevo.appendChild(centrar);
        //Cogemos el anterior h1
        let h1Anterior =document.getElementsByTagName("h1")[0];
        //Cambiamos el nuevo h1 por el anterior h1    
        h1Anterior.parentNode.replaceChild(h1Nuevo,h1Anterior);
     }


}

const modificar = () =>{
     //Datos del formulario
     let dni = document.getElementById("dni").value;
     let nombre = document.getElementById("nombre").value;
     let apellidos = document.getElementById("apellidos").value;
     
     //Datos de la tabla y de la fila
     let tabla = document.getElementById("tabla");
     let filas =tabla.getElementsByTagName("tr");
     
     //Recorremos las filas con la posición
     let posicion=-1;
     
     for(i=1; i<filas.length;i++){
         let fila=filas[i];
         //Recorremos las columnas
         let columnas = fila.getElementsByTagName("td");
         //Comprobamos si la columna coincide con el dni del formulario
         if(columnas[1].textContent == dni){
             posicion=i;
         }
     }
 
     if(posicion==-1){
         alert("Error, el empleado no existe")
    
     }else{
        //Recuperamos la fila anterior
        let filaAnterior = filas[posicion];
        //Recuperamos las columnas
        let columnas = filaAnterior.getElementsByTagName("td");

        //Creamos la columna del nombre
        let nombreNuevo=document.createElement("td");
        nombreNuevo.appendChild(document.createTextNode(nombre));
        //Creamos la columna apellidos
         let apellidosNuevos=document.createElement("td");
         apellidosNuevos.appendChild(document.createTextNode(apellidos));
         //Modificar la fila
         let nombreAnterior = columnas[2];
         let apellidosAnterior = columnas[3];
         filaAnterior.replaceChild(nombreNuevo,nombreAnterior);
         filaAnterior.replaceChild(apellidosNuevos,apellidosAnterior);
     
     }

}