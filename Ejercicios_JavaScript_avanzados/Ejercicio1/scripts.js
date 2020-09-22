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