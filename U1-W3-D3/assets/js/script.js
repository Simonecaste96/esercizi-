
   /* const taskBtn = document.getElementById("taskBtn")
    const pulisciBtn = document.getElementById("pulisciBtn")
    const input = document.getElementById("newtask")

    taskBtn.addEventListener("click", () => {
        console.log("Task nuovo")

    })

    pulisciBtn.addEventListener("click", () => {
        console.log("Task pulito")


        
    })
    
    input.addEventListener("keypress", (element) => {
      
        
    })
*/

// Ottieni riferimenti agli elementi del DOM
const newTaskInput = document.getElementById('newtask');
const addTaskButton = document.getElementById('taskBtn');
const clearButton = document.getElementById('pulisciBtn');
const todoList = document.getElementById('todolist');

// Aggiungi un gestore di eventi al click del bottone "Aggiungi Task"
addTaskButton.addEventListener('click', function() {
    // Ottieni il valore dell'input del nuovo task
    const taskText = newTaskInput.value.trim();
    
    // Verifica se il campo del nuovo task è vuoto
    if (taskText === '') {
        alert('Inserisci un task valido.');
        return;
    }
    
    // Crea un nuovo elemento di lista (li)
    const newTaskItem = document.createElement('h4');
    
    // Aggiungi il testo del task all'elemento di lista
    newTaskItem.textContent = taskText;
    
    // Aggiungi l'elemento di lista alla lista delle attività
    todoList.appendChild(newTaskItem);
    
    // Pulisci il campo dell'input del nuovo task
    newTaskInput.value = '';
});

// Aggiungi un gestore di eventi al click del bottone "Pulisci tutto"
clearButton.addEventListener('click', function() {
    // Rimuovi tutti gli elementi di lista (li) dalla lista delle attività
    todoList.innerHTML = '';
});