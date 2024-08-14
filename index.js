/* Función para encriptar */
function encriptar() {
    /* Captura del texto escrito en el input */
    var textoEntrada = document.getElementById("textoEntrada").value;

    /* Lógica de la encriptación */
    var textoEncriptado = textoEntrada.replaceAll("e", "enter");
    textoEncriptado = textoEncriptado.replaceAll("i", "imes");
    textoEncriptado = textoEncriptado.replaceAll("a", "ai");
    textoEncriptado = textoEncriptado.replaceAll("o", "ober");
    textoEncriptado = textoEncriptado.replaceAll("u", "ufat");

    /* Mostrar el resultado del texto encriptado */
    document.getElementById("textoSalida").innerText = textoEncriptado;
}

/* Función para desencriptar */
function desencriptar() {
    /* Captura del texto escrito en el input */
    var textoEntrada = document.getElementById("textoEntrada").value;

    /* Lógica de la desencriptación */
    var textoDesencriptado = textoEntrada.replaceAll("enter", "e");
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");

    /* Mostrar el resultado del texto desencriptado */
    document.getElementById("textoSalida").innerText = textoDesencriptado;
}

/* Función para copiar */
function copiar() {
    /* Captura del texto resultado */
    var portapapeles = document.getElementById("textoSalida").innerText;

    /* Copiar el texto resultado al portapapeles */
    navigator.clipboard.writeText(portapapeles);
}