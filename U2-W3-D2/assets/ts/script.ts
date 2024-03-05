const save: HTMLButtonElement = document.getElementById('save') as HTMLButtonElement;
const reset: HTMLButtonElement = document.getElementById('reset') as HTMLButtonElement;
const testo: HTMLInputElement = document.getElementById('testo') as HTMLInputElement;
const precedente: HTMLInputElement = document.getElementById('precedente') as HTMLInputElement;

save.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault(); 
    const nome: string = testo.value;
    localStorage.setItem('nome', nome);
    nomeSalvato();
});

reset.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('nome');
    nomeSalvato();
});

function nomeSalvato() {
    const nome: string | null = localStorage.getItem('nome');
    if (nome) {
        precedente.value = nome;
    } else {
        precedente.value = 'Nessun valore salvato.';
    }
}