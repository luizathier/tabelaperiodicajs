const container = document.getElementById('tabela-periodica');

colecaoElementos.forEach(el => {
  const div = document.createElement('div');
  div.className = 'elemento';
  div.style.gridColumnStart = el.coluna;
  div.style.gridRowStart = el.linha;
  div.style.backgroundColor = el.corGrupo || '#ccc';
  div.innerHTML = `<strong>${el.simbolo}</strong><br>${el.numeroAtomico}`;
  container.appendChild(div);
});
