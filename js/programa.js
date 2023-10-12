const texto_lateral = document.querySelector("#texto_lat");
const imagen_lateral = document.querySelector("#img_lat");



function clickeado(...argumentos){
    console.log("Hola mundo")
    console.log(argumentos)

    texto_lateral.classList.add("texto_lateral_anim")
    imagen_lateral.classList.add("imagen_lateral_anim")
}


function cerrar_ventanas(...argumentos){
    texto_lateral.classList.remove("texto_lateral_anim")
    imagen_lateral.classList.remove("imagen_lateral_anim")
}


