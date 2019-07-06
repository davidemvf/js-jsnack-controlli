// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array Controlla il formato inserito.


// Creo array vuoto e definisco la variabile n
var dispari = [];
var n;


// Imposto un ciclo che chieda sei volte di inserire n e definisco la condizione per cui aggiungere n all'array
for (var i=1; i<7; i++) {
  n = prompt("Inserisci il numero");
  while (isNaN(n) || n < 0 || n === null || (n - parseInt(n) != 0)){                                     //Imposto un ciclo while di controllo che impedisca al ciclo for di continuare nel caso in cui il valore inserito non sia un numero >= 0 intero
    alert("Il valore inserito non è accettabile. Inserire un numero intero positivo o, al più, nullo.");
    n = prompt("Inserisci il numero");

  }
  if (n % 2 != 0) {                                                               //Aggiungo n nell'array solo se è dispari
    dispari.push(n);
  }
}

//Visualizzo l'array tramite console
console.log(dispari);
