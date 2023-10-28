const texto_lateral = document.querySelector("#texto_lat");
const imagen_lateral = document.querySelector("#img_lat");
const efecto_poster = document.querySelector("#img_poster_efecto");
const contenedor_titulo = document.querySelector(".contenedor_titulo");

const estados_posibles = {
    visisble: "texto_visible",
    oculto: "texto_oculto"
}

let estado_actual = estados_posibles.oculto



function clickeado(...argumentos){
    if(estado_actual == estados_posibles.oculto){
        texto_lateral.classList.add("texto_lateral_anim")
        imagen_lateral.classList.add("imagen_lateral_anim")
        document.body.style.overflow="hidden"

        let entrada_encontrada = Catalogo.find((entrada) => entrada.id == argumentos[1]) ?? {texto: "Parece que no tenemos ese dato", img: "https://i.redd.it/floofy-sleep-time-hololive-v0-3oxipphrpjtb1.jpg?s=a8c4a0940c5ce6c2210bcc08baacca61b253fd06"}

        texto_lateral.querySelector("#titulo_place").innerText = entrada_encontrada.texto.titulo ?? "Erro 404"
        texto_lateral.querySelector("#anyo_place").innerText = entrada_encontrada.texto.anyo ?? ""
        texto_lateral.querySelector("#autor_place").innerText = entrada_encontrada.texto.autor ?? ""
        texto_lateral.querySelector("#sobre_obra_place").innerText = entrada_encontrada.texto.acerca_obra ?? "Parece que encontraste un error... y no sabemos. \nComentalo para usarlo"

        if(entrada_encontrada.texto.tecnica){
            texto_lateral.querySelector("#tecnica_place").innerText = entrada_encontrada.texto.tecnica
            texto_lateral.querySelector("#tecnica").classList.remove("display_hide")
        }
        else{
            texto_lateral.querySelector("#tecnica").classList.add("display_hide")
        }

        if(entrada_encontrada.texto.material){
            texto_lateral.querySelector("#material_place").innerText = entrada_encontrada.texto.material
            texto_lateral.querySelector("#material").classList.remove("display_hide")
        }
        else{
            texto_lateral.querySelector("#material").classList.add("display_hide")
        }

        if(argumentos[2] == 'video'){
            console.log("video")

            imagen_lateral.querySelector("img").style.display = 'none'
            imagen_lateral.querySelector("video").style.display = 'flex'
            imagen_lateral.querySelector("video").src = entrada_encontrada.video

            imagen_lateral.style.width = "100vw"
            imagen_lateral.style.height = "65vh"

            texto_lateral.style.width = "100vw"
            texto_lateral.style.height = "35vh"
            texto_lateral.style.marginTop ="65vh"

        }
        
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

        document.body.style.overflow="auto"

        imagen_lateral.querySelector("img").style.display = 'flex'
        imagen_lateral.querySelector("video").style.display = 'none'

        imagen_lateral.style.width = "50vw"
        imagen_lateral.style.height = "100%"

        texto_lateral.style.width = "50vw"
        texto_lateral.style.height = "100%"
        texto_lateral.style.marginTop ="0"
    }
}

function en_mouse_movimiento(evento){
    efecto_poster.style["left"] = ((evento.clientY * 0.05) + calcular_height_efecto()) + "px"
    efecto_poster.style["top"] = ((evento.clientX * 0.02)) + "px"
}

function calcular_height_efecto(){
    if(window.innerWidth > 1280){
        return -300
    }

    else if(window.innerWidth > 768){
        return -100
    }

    return -150
}

