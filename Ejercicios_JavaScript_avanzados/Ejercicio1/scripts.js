
//Ejercicio 1
let capa = document.getElementById("box");

capa.addEventListener("mouseenter",(e)=>{
    e.preventDefault();
    capa.classList.replace('box','boxVerde');

})

capa.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    capa.classList.replace('boxVerde', 'box');
})

capa.addEventListener("mousedown",(e)=>{
    e.preventDefault();
    console.log("Has pulsado la caja");
})

capa.addEventListener("mouseout",(e)=>{
    e.preventDefault();
    console.log("Has soltado el botón izquierdo dentro de la caja");
})

//Ejercicio 2
let tecla = document.getElementById("cajaTexto");

tecla.addEventListener("keydown", (e)=>{
    //e.preventDefault();
    console.log("Has pulsado una tecla");
})

tecla.addEventListener("keyup",(e)=>{
    e.preventDefault();
    console.log("Has soltado una tecla");
})

tecla.addEventListener("keypress",(e)=>{
    let letra = e.key;
    console.log(`La tecla pulsada es ${letra}`);
})

//Ejercicio 3
let boton = document.getElementById("botonEnvio");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    capturaTecla();
    //Para sacar información y ver las propiedades
    console.log(e.target);

})
//Creamos la función para capturar el input del formulario
 const capturaTecla = ()=>{
     
    let textoCapturado = document.getElementById("nombre");
    //Creamos el evento de la captura de teclas
    textoCapturado.addEventListener("keyup",(e)=>{
        console.log(e.key);
    })

 }

 //Tablero
 let galeria = document.getElementById("gallery");
 
 galeria.addEventListener("click",(e)=>{
     e.preventDefault();
     if(e.target.className.match("gallery_item")){
     e.target.classList.replace('gallery_item','gallery_click');
    }else{
        e.target.classList.replace('gallery_click','gallery_item');
    }
     
 })


