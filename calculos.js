function calcularCarga() {
const formula = 1.6e-19;
const cargafoda = Number(document.getElementById('cargas').value);
const resultadin = cargafoda * formula;
 document.getElementById('resultadoCarga').innerHTML = `Q = ${resultadin} C`;
}


function calcularForca() {
const k = 9e9;
const cargapog1 = parseFloat(document.getElementById('carga1').value);
const cargapog2 = parseFloat(document.getElementById('carga2').value);
const distancia = parseFloat(document.getElementById('distancia').value);
const forca = (k * cargapog1 * cargapog2) / (distancia * distancia);
document.getElementById('resultadoForca').innerHTML = `F = ${forca.toFixed(2)} N`; }


document.getElementById("botaotabela").addEventListener("click", function() {
window.location.href = "./index.html"; 
});