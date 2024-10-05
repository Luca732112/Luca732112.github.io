var ocultar = false;

function muestra_texto() {
    if (!ocultar) {
        document.getElementById("texto").innerHTML = "esto es magía de la progrmación wowowow";
        ocultar = true;
        document.getElementById("mostrar").innerHTML = "Mostrar menos";
    } else {
        document.getElementById("texto").innerHTML = "";
        ocultar = false;
        document.getElementById("mostrar").innerHTML = "Mostrar más";
    }
}

function lanzar_dado() {
    var numero = Math.floor(Math.random() * 6) + 1;
    document.getElementById("imagen_dado").innerHTML = "<img src='dado-" + numero + ".png' width='100px'>";
}