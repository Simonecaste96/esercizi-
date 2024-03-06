
const newTask = document.getElementById('newtask');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const mission = document.getElementById('testo');
let arrayVuoto = [];

//funzione che permette di utilizzare anhce la key Invio e non solo il mouse
newTask.addEventListener('keydown', (e)=>{
if(e.key === 'Enter'){  
submit.click();    
}    
    

});


//Funzione principale che prende il valore text dell'input, crea un elemento li e a questo aggiunge il testo, poi lo pusha in un array vuoto e salva l'intero array nel local storage ( da terminare)
submit.addEventListener('click', (e)=>{
 
    const testo = newTask.value;
    
    if (testo) {
     const newText = document.createElement('li');
     newText.textContent = testo;
    mission.appendChild(newText);
    arrayVuoto.push(testo);
    let contenuto = localStorage.setItem('contenuto', JSON.stringify(arrayVuoto));
    newTask.value = "";
    }
    else{
    alert('Inserisci un task valido.');
    } 

     
});

// Bottone reset cancella tutto anche il local storage
reset.addEventListener('click', (e) =>{
mission.innerText = '';   
localStorage.clear();
});



 // Se clicco sopra un elemento nella lista posso sbarlarlo per indicare che l'ho terminato
mission.addEventListener('click', (e)=>{
if(mission.style.textDecoration === 'line-through'){
mission.style.textDecoration = 'none';    
}
else{
    mission.style.textDecoration = 'line-through';    
}
});
