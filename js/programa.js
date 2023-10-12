const texto_lateral = document.querySelector("#texto_lat");
const imagen_lateral = document.querySelector("#img_lat");

const estados_posibles = {
    visisble: "texto_visible",
    oculto: "texto_oculto"
}

let estado_actual = estados_posibles.oculto



function clickeado(...argumentos){
    console.log(argumentos)

    if(estado_actual == estados_posibles.oculto){
        texto_lateral.classList.add("texto_lateral_anim")
        imagen_lateral.classList.add("imagen_lateral_anim")

        let entrada_encontrada = Catalogo.find((entrada) => entrada.id == argumentos[1]) ?? {texto: "Parece que no tenemos ese dato", img: "https://i.redd.it/floofy-sleep-time-hololive-v0-3oxipphrpjtb1.jpg?s=a8c4a0940c5ce6c2210bcc08baacca61b253fd06"}
        console.log(entrada_encontrada)

        texto_lateral.querySelector("#min_texto").innerText = entrada_encontrada.texto
        imagen_lateral.querySelector("img").src = entrada_encontrada.img

        estado_actual = estados_posibles.visisble
    }

    else if(estado_actual == estados_posibles.visisble){
        texto_lateral.classList.remove("texto_lateral_anim")
        imagen_lateral.classList.remove("imagen_lateral_anim")

        estado_actual = estados_posibles.oculto
    }
}


function cerrar_ventanas(...argumentos){
    if(estado_actual == estados_posibles.visisble){
        texto_lateral.classList.remove("texto_lateral_anim")
        imagen_lateral.classList.remove("imagen_lateral_anim")

        estado_actual = estados_posibles.oculto
    }
}


