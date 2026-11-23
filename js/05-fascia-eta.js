// Traccia 05 · La fascia d'età
// La consegna è nel README, alla voce "05 · La fascia d'età".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama?
  Di quali dati ha bisogno?
  Deve restituire qualcosa?
  Di che tipo?

  STEPS
  1 -
  2 -
  3 -
*/

// # La funzione
function trovaFasciaEta (eta){
if (eta < 0) return "età non valida"
else if (eta < 18) return "minorenne"
else if (eta <= 35) return "giovane adulto"
else if (eta <= 60) return "adulto"
else return "senior"

}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log (trovaFasciaEta(0))
console.log (trovaFasciaEta(17))
console.log (trovaFasciaEta(25))
console.log (trovaFasciaEta(50))
console.log (trovaFasciaEta(70))
console.log (trovaFasciaEta(-3))