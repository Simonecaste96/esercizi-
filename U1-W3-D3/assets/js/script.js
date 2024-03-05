
const newTask = document.getElementById('newtask');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const mission = document.getElementById('testo');

newTask.addEventListener('keydown', (e)=>{
if(e.key === 'Enter'){  
submit.click();    
}    
    

});

submit.addEventListener('click', (e)=>{
 const testo = newTask.value;
    
    // Verifica se il campo del nuovo task è vuoto
    if (testo) {
     const newText = document.createElement('li');
     newText.textContent = testo;
    mission.appendChild(newText);
    newTask.value = ""
    }
    else{
    alert('Inserisci un task valido.');
    } 

     
});

// Aggiungi un gestore di eventi al click del bottone "Pulisci tutto"
reset.addEventListener('click', (e) =>{
mission.innerText = '';

    // Rimuovi tutti gli elementi di lista (li) dalla lista delle attività
    
});

mission.addEventListener('click', (e)=>{
mission.style.textDecoration ='line-through';

})