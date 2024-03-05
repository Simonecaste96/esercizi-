const save = document.getElementById('save');
const reset = document.getElementById('reset');
const testo = document.getElementById('testo');
const precedente = document.getElementById('precedente');


  
save.addEventListener('click',(e) => {
e.preventDefault(); 
const nome = testo.value;
localStorage.setItem('nome', nome)
nomeSalvato()
});



reset.addEventListener('click', (e)=>{
  e.preventDefault();

localStorage.clear('testo')
}) 


function nomeSalvato() {
  const nome = localStorage.getItem('nome');
  if (nome || nome === nome) {
      precedente.value = nome;
  } else {
      precedente.value = 'Nessun valore salvato.';
  }
}





