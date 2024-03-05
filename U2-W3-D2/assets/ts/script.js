var save = document.getElementById('save');
var reset = document.getElementById('reset');
var testo = document.getElementById('testo');
var precedente = document.getElementById('precedente');
save.addEventListener('click', function (e) {
    e.preventDefault();
    var nome = testo.value;
    localStorage.setItem('nome', nome);
    nomeSalvato();
});
reset.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('nome');
    nomeSalvato();
});
function nomeSalvato() {
    var nome = localStorage.getItem('nome');
    if (nome) {
        precedente.value = nome;
    }
    else {
        precedente.value = 'Nessun valore salvato.';
    }
}
