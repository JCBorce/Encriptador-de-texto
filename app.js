// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para obtener el texto del campo de entrada y mostrar el resultado en la pantalla
function mostrarTextoEncriptado() {
    let texto = document.getElementById("input-texto").value;
    let resultado = encriptarTexto(texto);
    document.getElementById("resultado-texto").value = resultado;
}

function mostrarTextoDesencriptado() {
    let texto = document.getElementById("input-texto").value;
    let resultado = desencriptarTexto(texto);
    document.getElementById("resultado-texto").value = resultado;
}

// Función para copiar el texto encriptado o desencriptado
function copiarTexto() {
    let textoCopiar = document.getElementById("resultado-texto");
    textoCopiar.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}