class User {
    constructor(_FirstName, _lastName, _age = 0, _location) {
        this.firstName = _FirstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    comparazione() {
        if (userY.age > userX.age) {
            console.log(`${userY.firstName} è piu grande di ${userX.firstName}`)
        }
        else {
            console.log(`${userY.firstName} è piu piccolo di ${userX.firstName}`)
        }
    }
}
const userY = new User("Simone", "Castelluccio", 27, "Roma");
const userX = new User("Ajeje", "Brazzorf", 60, "Palermo");

userY.comparazione(userX);



/*----ES 2-------*/

class pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

}


const salva = document.getElementById('salva');
const dati = [];


salva.addEventListener('click', e => {
    e.preventDefault();

    let nomeAnimale = document.getElementById('nomeAnimale').value;
    let nomePadrone = document.getElementById('nomePadrone').value;
    let tipoAnimale = document.getElementById('tipoAnimale').value;
    let razzaAnimale = document.getElementById('razzaAnimale').value;


    let datiInseriti = new pet(nomeAnimale, nomePadrone, tipoAnimale, razzaAnimale)
    dati.push(datiInseriti)

    const listItem = document.createElement('li');


    listItem.textContent = `Nome animale: ${datiInseriti.petName} - Nome padrone: ${datiInseriti.ownerName} -  
    Tipo animale: ${datiInseriti.species} - Razza animale: ${datiInseriti.breed}`;
    lista.appendChild(listItem);

    console.log(dati)
});



