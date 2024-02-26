const tombolone = document.getElementById('tombolone');
const button = document.getElementById('button');
const ultimoNumero = document.getElementById('lastNumber');
const numeriEstratti = [];
let reset= document.getElementById('buttonRes')

for (let i = 1; i <= 90; i++) {
    let contenitoreNumero = document.createElement('div');
    contenitoreNumero.textContent = i;
    numeriEstratti.push(contenitoreNumero);
    tombolone.appendChild(contenitoreNumero);
}

function mostraUltimoNumero() {
    if (numeriEstratti.length > 0) {
        ultimoNumero.textContent = "Ultimo numero estratto: " + numeriEstratti[numeriEstratti.length - 1].textContent;
    } else {
        ultimoNumero.textContent = "Tutti i numeri sono stati estratti.";
    }
}

function estraiNumero() {
    if (numeriEstratti.length > 0) {
        let numeriCasuali = Math.floor(Math.random() * numeriEstratti.length);
        let numeroEstratto = numeriEstratti[numeriCasuali].textContent;

        if (numeriEstratti[numeriCasuali].style.color === "red") {
            estraiNumero(); // Richiama la funzione ricorsivamente per estrarre un altro numero
            return;
        }

        ultimoNumero.textContent = "Ultimo numero estratto: " + numeroEstratto;
        numeriEstratti[numeriCasuali].style.color = "red"; // Evidenzia il numero estratto
        numeriEstratti.splice(numeriCasuali, 1);
    } else {
        ultimoNumero.textContent = "Tutti i numeri sono stati estratti.";
    }
}

button.addEventListener('click', estraiNumero);
