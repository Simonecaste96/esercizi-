/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numeroa1=10;
let numeroa2=100;
if(numeroa1<numeroa2){
document.getElementById("a").innerHTML = numeroa2 + " è il numero maggiore";
}
else{
  document.getElementById("a").innerHTML = "I numeri sono uguali";
}




/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let numeroa3 = 10;
if (numeroa3!==5){
  document.getElementById("b").innerHTML = "not equal"
}
else{
  document.getElementById("b").innerHTML = "equal"
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numeroa4=20;
if(numeroa4%5==0){
  document.getElementById("c").innerHTML ="è divisibile per 5"
}
else{
  document.getElementById("c").innerHTML ="non è divisibile per 5"
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*DA TERMINARE
let numeroa5=16;
let numeroa6=1;
let risultatoaddizione=numeroa5+numeroa6;
let risutlatosottrazione=numeroa5+numeroa6;
if(numeroa5||numeroa6==risultato || numeroa5-numeroa6==risultato||numeroa5+numeroa6==risultato){
  document.getElementById("d").innerHTML ="Uno dei due numeri è "+ risultato+" e la loro sottrazione da come risultato "+risultato+"la loro addizione da come risultato";
}
else{
  document.getElementById("d").innerHTML ="In questa operazione non c'è nessun numero 8";
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart=50;
let spedizione=10;
let totalShoppingCartnotfree=totalShoppingCart+spedizione;

if(totalShoppingCart>=50){
  document.getElementById("e").innerHTML ="L'ammontare totale è "+totalShoppingCart+ ", la spedizione è gratuita!";
}
else{
  document.getElementById("e").innerHTML ="L'ammontare totale è "+totalShoppingCartnotfree;
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


let totalShoppingCart2=50;
let spedizione2=10;
let totalShoppingCartnotfree2=totalShoppingCart+spedizione;
let blackfriday=totalShoppingCart2*20/100;
let totalShoppingCartBf=totalShoppingCart2-blackfriday;
let totalShoppingCartBfnotfree2=totalShoppingCart2-blackfriday+spedizione2;

if(totalShoppingCartBf>=50){
  document.getElementById("f").innerHTML ="L'ammontare totale è "+totalShoppingCartBf+ ", applicato sconto del 20% più la spedizione è gratuita!";
}
else{
  document.getElementById("f").innerHTML ="L'ammontare totale è "+totalShoppingCartBfnotfree2+ ", applicato sconto del 20%, più costo spedizione 10!";
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const numeri=[
numeroa7=35,
numeroa8=16,
numeroa9=57,
]
numeri.sort();
numeri.reverse()
document.getElementById("g").innerHTML = numeri;

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numeroa10=20;
if(typeof numeroa10==="number"){
  document.getElementById("h").innerHTML = "Il valore fornito è un numero";
}
else{
  document.getElementById("h").innerHTML = "Il valore fornito non è un numero";
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numeroa11=10;
if(numeroa11%2===0){
document.getElementById("i").innerHTML="Il numero è pari"
}
else{
  document.getElementById("i").innerHTML="Il numero è dispari"
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7;
  if (val < 5) {
    d;document.getElementById("m").innerHTML=("Meno di 5")
    } else if (val < 10) {
      ;ocument.getElementById("m").innerHTML=("Meno di 10")
    } else (val>=10) 
      document.getElementById("m").innerHTML=("Uguale a 10 o maggiore");
    
   
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city:"Toronto",
}
document.getElementById("n").innerHTML=me;
document.getElementById("n").innerHTML=me;
document.getElementById("n").innerHTML=me;
document.getElementById("n").innerHTML=me;


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let q=[];
q.getElemnetById("g")

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
