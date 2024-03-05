 // Funzione per avviare il contatore
 function avviaContatore() {
    // Ottieni il valore precedente dal sessionStorage
    let valorePrecedente = sessionStorage.getItem('contatore');
    let contatore;

    if (valorePrecedente) {
        // Se esiste un valore precedente, usa quello e convertilo in un numero
        contatore = parseInt(valorePrecedente);
    } else {
        // Altrimenti, inizia il contatore da zero
        contatore = 0;
    }

    
    setInterval(() => {
        contatore++;
        
        document.getElementById('contatore').textContent = contatore;
        
        sessionStorage.setItem('contatore', contatore);
    }, 1000);
}


window.addEventListener('load', avviaContatore);