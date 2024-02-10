const tombolone=document.getElementById('tombolone')
const button=document.getElementById('button')
const numeriEstratti=[];

for(let i=1; i<91 ;i++){
const contenitoreNumero= document.createElement('div')
contenitoreNumero.textContent=i;
numeriEstratti.push(contenitoreNumero)
tombolone.appendChild(contenitoreNumero)
}   


function estraiNumero(){
    const numeroCasuale = Math.floor(Math.random() * 90) + 1;

    
}

button.addEventListener('click', estraiNumero);
