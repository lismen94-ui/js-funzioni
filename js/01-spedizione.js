// Traccia 01 · Lo stato della spedizione
// La consegna è nel README, alla voce "01 · Lo stato della spedizione".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaStatoSpedizione
  Di quali dati ha bisogno? del codice stato  valori ammessi 1 elab, 2 sped,3 conseg
  Deve restituire qualcosa? restituisce lo stato!1 → `In elaborazione`, 2 → `Spedito`, 3 → `Consegnato`;
  - 4 → `Stato sconosciuto`, 0 → `Stato sconosciuto`;
  Di che tipo? stringa

  STEPS
  1 -dichiaro la funzione 
  2 -
  3 -
*/

// # La funzione


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

function trovaStatoSpedizione(codiceStato) {
  if (codiceStato==1) return "in elaborazione";
  else if (codiceStato==2) return "spedito";
  else if (codiceStato==3) return "consegnato";
  else return "stato sconosciuto";

}
const codiceInsetitoDaUtente = parseInt(prompt("inserisci il codice di stato della spedizione"));
 console.log (trovaStatoSpedizione(codiceInsetitoDaUtente)) ;
