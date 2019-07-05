// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array


// Creo array vuoto e definisco la variabile n
var dispari = [];
var n;

// Imposto un ciclo che chieda sei volte di inserire n e definisco la condizione per cui aggiungere n all'array
for (var i=1; i<7; i++) {
  n = parseInt(prompt("Inserisci il numero"));
  if (n % 2 != 0) {
    dispari.push(n);                                 //se dispari, aggiungo n all'array
  }
}
// Visualizzo l'array sulla console
console.log(dispari);
