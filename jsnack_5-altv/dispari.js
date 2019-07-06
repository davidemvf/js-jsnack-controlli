// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array Controlla il formato inserito.

var dispari = [];
var n;

for (var i=1; i<7; i++) {
  n = prompt("Inserisci il numero");
  while (isNaN(n) || n < 0 || n === null || (n - parseInt(n) != 0)){
    alert("Il valore inserito non è accettabile. Inserire un numero intero positivo o, al più, nullo.");
    n = prompt("Inserisci il numero");

  }
  if (n % 2 != 0) {
    dispari.push(n);
  }
}
console.log(dispari);
