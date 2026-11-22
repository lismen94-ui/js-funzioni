// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

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
function calcolaMediaPonderata ( scritto, orale){
  const media = (scritto*2 + orale) /3;
  return (media)
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(`Media: ${calcolaMediaPonderata(6, 9).toFixed(1)}`);
console.log(`Media: ${calcolaMediaPonderata(9, 6).toFixed(1)}`);
console.log(`Media: ${calcolaMediaPonderata(8, 6).toFixed(1)}`);
console.log(`Media: ${calcolaMediaPonderata(5, 8).toFixed(1)}`);
console.log(`Media: ${calcolaMediaPonderata(10, 10).toFixed(1)}`);