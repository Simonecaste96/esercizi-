
const add = document.getElementById('add');
const del = document.getElementById('del');
const row = document.getElementById('row');

let arrayVuoto = [];

window.addEventListener('load', init);
function init(){
asin()
}




const asin = async () => {
    await fetch('https://striveschool-api.herokuapp.com/books')
        .then(response => {
            return response.json();
        })
        .then(data => {
            arrayVuoto = data;
            console.log(arrayVuoto);
            popolazioneHTML();
        })
        .catch(err => {
            console.log('Errore nel recupero dei dati: ', err);
        });
};



function popolazioneHTML() {
    for (let i = 0; i < arrayVuoto.length; i++) {
    const div = document.createElement("div");
    const cardAsin = arrayVuoto[i].asin;
    const img = arrayVuoto[i].img;
    const title = arrayVuoto[i].title;
    const price = arrayVuoto[i].price;
    const category = arrayVuoto[i].category;

     div.classList.add('col');
     div.innerHTML = `<div class="card" style="width: 18rem; height:40rem" id="${cardAsin}">
     <img src="${img}" class="card-img-top" style="height:25rem" alt="Immagine libro :${title}">
     <div class="card-body">
       <p class="card-title text-danger">${title}</p>
       <p class="card-text">Price: ${price}€</p>
       <p class="card-text">Category: ${category}</p>
       <a class="btn btn-primary">Add to cart</a>
     </div>
   </div>`;
   row.appendChild(div);   
}

}




