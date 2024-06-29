let result = null;
let notResult = null;
let texto = null;
let resultado = null;
let loadingScreen = null;
let textoCifrado = null;
let exchange = null;

function app(){
    result = document.getElementById('result');
    notResult = document.getElementById('notResult');
    texto = document.getElementById("texto").value;
    resultado = document.getElementById("resultText");
    loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.display = "block";
    exchange = document.getElementById("exchange");
}

function encrypt() {
    app();

    textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    
    processText(); 
}

function decrypt(){
    app();
    
    textoCifrado = texto
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
        if (texto.length != 0) {
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
    // exchange.style.display = "block";
}

function emptyText(){
    notResult.style.display = "block";
    result.style.display = "none";
    // exchange.style.display = "none";
}

function copyText(){
    resultado.select();
	resultado.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(resultado.value);
}

// function exchangeText(){
//     texto = document.getElementById("texto").value;
//     resultado = document.getElementById("resultText").value;
//     let aux = texto; 
//     texto.innerHTML = resultado;
//     resultado.innerHTML = aux;
//     // textoCifrado = texto;
// }

function validateTexto(text){

}
