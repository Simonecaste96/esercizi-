const tombolone=document.getElementById('tombolone')
const button=document.getElementById('button')
const numeriEstratti=[];

for(let i=1; i<91 ;i++){
let contenitoreNumero= document.createElement('div')
contenitoreNumero.textContent=i;
numeriEstratti.push(contenitoreNumero)
tombolone.appendChild(contenitoreNumero)
}   

   
 
function estraiNumero(){
  let numeriCasuali = Math.floor(Math.random() * 90) + 1;
  for(let i=0; i<numeriEstratti.length;i++){
  if(numeriCasuali==parseInt(numeriEstratti[i].textContent)){
   numeriEstratti[i].style.color="red";
   numeriEstratti.splice(i,1)
  break;
  }
  } 
}

document.addEventListener('click', estraiNumero);
