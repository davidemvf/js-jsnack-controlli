// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.
var utente = prompt("Il cognome prego");
var invitati = ["Pisolo", "Gongolo", "Cucciolo", "Mammolo", "Brontolo", "Eolo", "Dotto"];
var invitato = "No in array, no party";


// verifico se il suo cognome è presente nella lista

for (i=0; i < invitati.length; i++) {
  if (invitati[i] === utente){
    invitato = "Prego, puoi entrare!"
  }
}


// Output della variabile in base al controllo effettuato

document.writeln(invitato);
