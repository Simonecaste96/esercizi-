const row = document.getElementById("row");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const buttonIndex = document.getElementById("buttonIndex");
let text = document.getElementById("text");


const baseURL = `https://api.pexels.com/v1/search?query=`;
const KEY = "4MhTzAD5yOOYQWhaqGCE81lB3PPTM9WPpuAimaSWkecdbwGpmQipcbNL";

window.addEventListener("load", init);

function init() {
  buttonIndex.addEventListener("click", GET);
}

const GET = async (e) => {
  e.preventDefault();
  
let textValue = text.value;
  
  try {
    let content = await fetch(baseURL + textValue, {
      headers: {
        Authorization: KEY,
      },
    });
    let search = await content.json();

    console.log(search);

    if (search) {
      
      for (let i = 0; i < search.photos.length; i++) {
        const id = search.photos[i].id;
        const photographer = search.photos[i].photographer;
        const src = search.photos[i].src.original;
        let div = document.createElement("div");
        div.classList.add("col-2");
        div.innerHTML = `
        <div class="card mb-4 shadow-sm">
          <img src="${src}" class="bd-placeholder-img card-img-top" />
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

        row.appendChild(div);
        
      }
    text.value = '';
    }
  } catch (error) {
    console.log(error);
  }
};


