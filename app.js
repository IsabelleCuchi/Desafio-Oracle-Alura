let textarea = document.querySelector('#ponhaTexto') 
let botaoCriptografar = document.querySelector('#encripitando')
let botoaDescripitando = document.querySelector('#descripitando')
let textarea2 = document.querySelector('#areaDescripto')
let botaoDeCopiar = document.querySelector('#botaoCopiar')

function encripitandoLetras(letras) {
    return letras
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descriptoLetras(letrasDescripto) {
  return letrasDescripto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function textoMostra(texto){
    textarea2.style.display = "block";
    textarea2.textContent = texto;

  document.getElementById("titulo").style.display = "none";
  document.getElementById("paragrafo").style.display = "none";
  document.getElementById("imagem_alerta").style.display = "none";
}

function showInformation(){
  document.getElementById("titulo").style.display = "block";
  document.getElementById("paragrafo").style.display = "block";
  document.getElementById("imagem_alerta").style.display = "block";

  textarea2.style.display = "none";
}

// função para encriptografar palavras
function encripitando() {
  let texto = textarea.value.trim();

  if (texto !== "") {
    if (/^[a-z ]+$/.test(texto)) {
      let textoEncripto = texto.split(" ").map(encripitandoLetras).join(" ");
      textoMostra(textoEncripto);
    } else {
      alert("Por favor, digite apenas letras minusculas.");
    }
  } else {
    alert("Por favor, digite um texto antes de criptografar");
  }
}


function descripitando() {
  let texto = textarea2.textContent.trim();

  if (texto !== "") {
    if (/^[a-z ]+$/.test(texto)) {
      let textoDescripto = texto.split(" ").map(descriptoLetras).join(" ");
      textoMostra(textoDescripto);
    } else {
      alert("Texto descriptografado inválido. Certifique-se de usar apenas letras minúsculas e os caracteres especiais utilizados na criptografia.");
    }
  } else {
    alert("Nenhum texto criptografado para descriptografar");
  }
}

botaoCriptografar.addEventListener("click", encripitando);
botoaDescripitando.addEventListener("click", descripitando);


botaoDeCopiar.addEventListener("click", function () {
  let tempTextArea = document.createElement("textarea");

  tempTextArea.value = textarea2.textContent;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  document.execCommand("copy");
  alert("Texto copiado para área de transferência");
 
  tempTextArea.style.display = "none";
})