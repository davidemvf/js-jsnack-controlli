// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

//Definisco le variabili e l'array
var utente = prompt("Il cognome prego");
var invitati = ["Pisolo", "Gongolo", "Cucciolo", "Mammolo", "Brontolo", "Eolo", "Dotto"];
var invitato = "No in array, no party";

//Ciclo di controllo sul valore del prompt
while (Number(utente)) {
  alert("Inserire un valore valido");
  utente = prompt("Il cognome prego");
}

// verifico se il suo cognome è presente nella lista

  for (i=0; i < invitati.length; i++) {
    if (invitati[i] === utente){
      invitato = "Prego, puoi entrare!"
    }
  }

//stampo a video la variabile "invitato"
 document.writeln(invitato);
