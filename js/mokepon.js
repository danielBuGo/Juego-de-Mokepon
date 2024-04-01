let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
function iniciarJuego(){
    let botonMascotajugador = document.getElementById("boton-mascota");
    let botonAgua = document.getElementById("boton-agua");
    let botonFuego = document.getElementById("boton-fuego");
    let botonTierra = document.getElementById("boton-tierra");
    let botonReiniciar = document.getElementById("boton_reiniciar");
    let seleccionAtaque = document.getElementById("seleccion_ataque");
    let seccionReiniciar = document.getElementById("reiniciar");

    botonMascotajugador.addEventListener("click", seleccionarMascotaJugador);
    botonAgua.addEventListener("click", ataqueAgua);
    botonFuego.addEventListener("click", ataqueFuego);
    botonTierra.addEventListener("click", ataqueTierra);
    botonReiniciar.addEventListener("click",reiniciarJuego);
    seleccionAtaque.style.display = "none";
    seccionReiniciar.style.display = "none";
}

function seleccionarMascotaJugador(){
    let seleccionMascota = document.getElementById("seleccion_mascota");
    let seleccionAtaque = document.getElementById("seleccion_ataque");
    let inputMegalodon = document.getElementById("Megalodon");
    let inputGodzilla = document.getElementById("Godzilla");
    let inputOptimus = document.getElementById("Optimus");
    let spanMascotaJugador = document.getElementById("mascota_jugador");
    seleccionAtaque.style.display = "block";
    seleccionMascota.style.display = "none";

    if (inputMegalodon.checked){
        alert("Elegiste a Megalodon");
        spanMascotaJugador.innerHTML = "Megalodon";
    } else if (inputGodzilla.checked){
        alert("Elegiste a Godzilla");
        spanMascotaJugador.innerHTML = "Godzilla";
    } else if (inputOptimus.checked){
        alert("Elegiste a Optimus");
        spanMascotaJugador.innerHTML = "Optimus";
    } else {
        alert("Selecciona un personaje");
    }
    seleccionMascotaEnemigo();  
}

function seleccionMascotaEnemigo(){
    let mascotaEnemigo = aleatorio(1,3);
    let spanMascotaEnemiga = document.getElementById("mascota_enemigo");

    if (mascotaEnemigo == 1){
        alert("El enemigo eligió a Megalodon")
        spanMascotaEnemiga.innerHTML = "Megalodon"
    } else if (mascotaEnemigo == 2){
        alert("El enemigo eligió a Godzilla")
        spanMascotaEnemiga.innerHTML = "Godzilla"
    }else {
        alert("El enemigo eligió a Optimus")
        spanMascotaEnemiga.innerHTML = "Optimus"
    }
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo();
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo();
}

function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);    

    if( ataqueAleatorio == 1){
        ataqueEnemigo = "Agua";        
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "Fuego"        
    } else {
        ataqueEnemigo = "tierra";        
    }
    combate();
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas_jugador");
    let spanVidasEnemigo = document.getElementById("vidas_enemigo");
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empate");
        
    } else if ((ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") ||
        (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") ||
        (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua")
    ) {
        crearMensaje("Ganaste");
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo        
    } else {
        crearMensaje("Perdiste");
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador 
    }

    revisarVidas();
    
}

function revisarVidas(){
    if(vidasJugador == 0){
        crearMensajeFinal("Perdiste la batalla! ≡(▔﹏▔)≡");
    }else if(vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones ^_^, Ganaste!! ✨✨🎆✨✨")
        
    }
    
}

function crearMensaje(resultado){
    let seccionMensajes = document.getElementById("resultados");
    let ataquesDelJugador = document.getElementById("ataquesDelJugador");
    let ataquesDelEnemigo = document.getElementById("ataquesDelEnemigo");

    
    let nuevoAtaqueDelJugador = document.createElement("p");
    let nuevoAtaqueDelEnemigo = document.createElement("p");

    seccionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;    
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);

}

function crearMensajeFinal(resultadoFinal){
    let seccionMensajes = document.getElementById("resultados");
    let parrafo = document.createElement("p");
    let botonAgua = document.getElementById("boton-agua");
    let botonFuego = document.getElementById("boton-fuego");
    let botonTierra = document.getElementById("boton-tierra");
    let seccionReiniciar = document.getElementById("reiniciar");
    
    seccionMensajes.innerHTML = resultadoFinal;      
    botonAgua.disabled = true;
    botonFuego.disabled = true;
    botonTierra.disabled = true;
    seccionReiniciar.style.display = "block";
}

function reiniciarJuego(){
    location.reload();
}

function aleatorio (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego);