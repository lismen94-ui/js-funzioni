// Traccia 04 · Dal voto al giudizio
// La consegna è nel README, alla voce "04 · Dal voto al giudizio".

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
function trovaGiudizio (voto){
  if (voto < 1 || voto >10) return "voto non valido";
  else if (voto < 5) return "gravemente insufficiente";
else if (voto < 6) return "insufficiente";
else if (voto < 7) return "sufficiente";
else if (voto < 8) return "buono";
else return "ottimo"


}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log (trovaGiudizio(11))
console.log (trovaGiudizio(1))
console.log (trovaGiudizio(0))
console.log (trovaGiudizio(3))
console.log (trovaGiudizio(6))