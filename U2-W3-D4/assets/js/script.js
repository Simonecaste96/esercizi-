const card = document.getElementById('container');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const buttonIndex = document.getElementById('buttonIndex');
let text = document.getElementById('text');
const baseURL = 'https://api.pexels.com/v1/search?query=';
const KEY = '4MhTzAD5yOOYQWhaqGCE81lB3PPTM9WPpuAimaSWkecdbwGpmQipcbNL';
let query = 'javascript';
let arrayVuoto = [];


window.addEventListener('load', init);

 function init() {
  api(query)
}

const api = async (query) => {
  try {
    let content = await fetch(baseURL + query, {
      headers: {
        Authorization: KEY,
      },
    });
    let search = await content.json();
    arrayVuoto = search;
    console.log(arrayVuoto)
  }
  catch (error) {
    console.log(error);
  }
};

function popolation(){
for (let i = 0; i < arrayVuoto.length; i++) {
  const img = arrayVuoto[i].src.small;


  let div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML = `
  <div class="card mb-4 shadow-sm">
    <img src="${img}" class="bd-placeholder-img card-img-top" />
    <div class="card-body">
      <h5 class="card-title">Lorem Ipsum</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Edit
          </button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>`;

  card.appendChild(div);
}};








