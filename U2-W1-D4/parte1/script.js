document.addEventListener("DOMContentLoaded", function() {
    const postitElements = document.querySelectorAll('.postit');
  
    postitElements.forEach(function(postit) {
      const pElement = postit.querySelector('p');
      pElement.addEventListener('click', function() {
        modificaTesto(pElement);
      });
    });
  
    function modificaTesto(elemento) {
      // Rimuove il contenuto del paragrafo
      elemento.textContent = '';
  
      const inputElement = document.createElement('textarea');
      inputElement.value = localStorage.getItem(elemento.parentElement.id) || '';
      
      inputElement.addEventListener('blur', function() {
        salvaTesto(elemento.parentElement.id, inputElement.value);
        // Se il testo è vuoto, mostra un segnaposto
        elemento.textContent = inputElement.value || 'Clicca qui per inserire il testo';
        inputElement.remove();
      });
  
      // Inserisce l'input nel paragrafo
      elemento.appendChild(inputElement);
      inputElement.focus();
    }
  
    function salvaTesto(id, testo) {
      localStorage.setItem(id, testo);
    }
  
  });
  