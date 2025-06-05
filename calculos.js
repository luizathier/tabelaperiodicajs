
function calcularCarga() {
const e = 1.6e-19;
const n = document.getElementById('cargas').value;
const Q = cargas * e;
document.getElementById('resultadoCarga').innerHTML = `Q = ${Q} C`;}

function calcularForca() {
const k = 9e9;
const cargapog1 = parseFloat(document.getElementById('carga1').value);
const cargapog2 = parseFloat(document.getElementById('carga2').value);
const distancia = parseFloat(document.getElementById('distancia').value);
const forca = (k * cargapog1 * cargapog2) / (distancia * distancia);
document.getElementById('resultadoForca').innerHTML = `F = ${forca.toFixed(2)} N`; }