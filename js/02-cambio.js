// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? `calcolaDollariRicevuti`
  Di quali dati ha bisogno?euro tasso commissine
  Deve restituire qualcosa? che euro sia superiore al tasso di cambio 
  Di che tipo?

  STEPS
  1 -
  2 -
  3 -
*/

// # La funzione
function calcolaDollariRicevuti(euro, tassoCambio, commissione) {
  if (euro <= commissione) {
    return 0
  }

  return (euro - commissione) * tassoCambio
}
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(`100 € diventano ${calcolaDollariRicevuti(100, 1.08, 5).toFixed(2)} $`);
console.log (`250 € diventano ${calcolaDollariRicevuti(250, 1.08, 5).toFixed(2)}$`);
console.log (`100 € diventano ${calcolaDollariRicevuti(100, 1.12, 0).toFixed(2)}$`);
console.log(`3 € diventano ${calcolaDollariRicevuti(3, 1.08, 5).toFixed(2)} $`);
console.log(`100 € diventano ${calcolaDollariRicevuti(100, 5, 1.08).toFixed(2)} $`);
// il risultato è sbagliato perchè è come se facessi euro - tasso cambio * commissione!
// ANDRE COMUNQUE MI SENTO DI NON ESSERCI! ='(