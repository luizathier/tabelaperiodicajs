const container = document.getElementById('tabela-periodica');

colecaoElementos.forEach(el => {
  const div = document.createElement('div');
  div.className = 'elemento';
  div.style.gridColumnStart = el.coluna;
  div.style.gridRowStart = el.linha;
  div.style.backgroundColor = el.corGrupo || '#ccc';
  div.innerHTML = `<strong>${el.simbolo}</strong><br>${el.numeroAtomico}`;
  container.appendChild(div);


  
  div.addEventListener('mousemove', (e) => {
    minecraft.style.display = 'block';
    minecraft.style.left = e.pageX + 15 + 'px';
    minecraft.style.top = e.pageY + 15 + 'px';
    minecraft.innerHTML = `
      <strong>${el.nome} (${el.simbolo})</strong><br>
      Número Atômico: ${el.numeroAtomico}<br>
      Massa Atômica: ${el.massaAtomica}<br>
      Eletronegatividade: ${el.eletronegatividade || 'N/A'}<br>
      Ponto de Fusão: ${el.pontoDeFusao || 'N/A'} K<br>
      Estado: ${el.estadoPadrao}<br>
      Grupo: ${el.grupo}
    `;
  });
 
  div.addEventListener('mouseleave', () => {
    minecraft.style.display = 'none';
  });
});
const minecraft = document.getElementById('minecraft');
