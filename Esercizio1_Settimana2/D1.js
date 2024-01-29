/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
let spiegazione = "I principali datatype in JS sono 5: Dato Stringa (viene scritto tra 'singoli apici' oppure 'doppi come questa spiegazione'), DATO Numerico (solo numero senza 'apici singo o doppi'), Dato Booleano (che fa ottenere come risultato solo True oppure False in base al 'paragone'), Null ( con Null specifichiamo che la variabile esiste ma ancora non gli abbiamo dato un valore in maniera volontaria! ) e Undefinided( indica che non è stato assegnato alcun valore alla variabile) comunque i bambini non usano JacaScript";

console.log(spiegazione);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
const myName="Simone";
console.log(myName)



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let primoNumero=12;
let secondoNumero=20;
console.log(primoNumero+secondoNumero)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x=12;
console.log(x)
/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
 
  DA DECOMMENTARE PER TESTARE
*/


/*  
const myName="Castelluccio"
console.log(myName)*/





/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let numero4=4;
console.log(numero4-x);
console.log("Oppure");
console.log(x-numero4);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1="jhon";
let name2="Jhon";
console.log(name1!==name2);
console.log(name1.toLowerCase===name2.toLowerCase);

