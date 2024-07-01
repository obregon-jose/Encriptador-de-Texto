let result = null;
let notResult = null;
let textInput = null;
let resultado = null;
let loadingScreen = null;
let textoCifrado = null;
let clear = null;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

function app(){
    result = document.getElementById('result');
    notResult = document.getElementById('notResult');
    textInput = document.getElementById("texto").value;
    resultado = document.getElementById("resultText");
    loadingScreen = document.getElementById("loadingScreen");
    clear = document.getElementById("clear");

    loadingScreen.style.display = "block";
}

function encrypt() {
    app();
    asignarTextoElemento('result-title', 'Texto cifrado');

    textoCifrado = textInput
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    
    processText(); 
}

function decrypt(){
    app();
    asignarTextoElemento('result-title', 'Texto descifrado');
    
    textoCifrado = textInput
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    
    processText();
}

function processText(){
    setTimeout(function() {
        loadingScreen.style.display = "none";
        if (textInput.length != 0) {
            showResult();
        } else {
            emptyText();
        }
    }, 1000);
}

function showResult(){
    resultado.innerHTML = textoCifrado;
    notResult.style.display = "none"
    result.style.display = "block";
    clear.style.display = "block";
}

function emptyText(){
    notResult.style.display = "block";
    result.style.display = "none";
    clear.style.display = "none";
}

function clearText(){
    var textInput = document.getElementById("texto"); 
    textInput.value = ""; 
    emptyText();
    textInput.focus();

    let elemento = document.getElementById('alerta');
    elemento.style.color = 'initial';
    asignarTextoElemento('messageT', 'No hay mensajes para mostrar en este momento');
}
function copyText(){
    resultado.select();
	resultado.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(resultado.value);
}

document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('texto');
    textInput.addEventListener('input', function() {
        const regex = (/^([a-z-!\s]+)$/g);
        const currentValue = textInput.value;

        let elemento = document.getElementById('alerta');
    
        if (regex.test(currentValue)) {
            elemento.style.color = 'initial';
            asignarTextoElemento('messageT', 'No hay mensajes para mostrar en este momento');
        } else {
            textInput.value = currentValue.slice(0, -1);
            asignarTextoElemento('messageT', 'Solo se permiten letras minúsculas y sin acentos');
            elemento.style.color = 'red';
            
        }
    });
});
