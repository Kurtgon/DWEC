//Crear array con las provincias
let provincias = ["Sevilla","Cadiz","Huelva","Malaga","Granada","Almeria","Jaen","Cordoba"];

//Pintar la tabla con la apertura de la tabla y fila
document.write('<table border = "1"><tr>');

//Recorrer los elementos
provincias.forEach(provincia => {
    //columna
    document.write('<td>');
    document.write(provincia);
    //cierre de la columna
    document.write('</td>');
});

//Cierre de fila y tabla
document.write('</tr></table>');

const ordenar = () => {
    //Ordenar las provincias
    provincias.sort();

    //Pintar la tabla
    document.write('<table border = "1">');

    //Recorremos las provincias
    provincias.forEach(provincia => {
        //Creamos la fila y la columna por provincia
        document.write('<tr><td>');
        //Añadimos la provincia
        document.write(provincia);
        //Cerramos la columna y la fila
        document.write('</td></tr>');

    });
    
    //Cerramos la tabla
    document.write('</table>');

}