// Traccia 08 · Dal nome al numero del giorno
// La consegna è nel README, alla voce "08 · Dal nome al numero del giorno".

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
function trovaNumeroGiorno(nomeGiorno){
const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]
for (let i = 0; i < giorniSettimana.length; i++) {
if (giorniSettimana [i] === nomeGiorno){
return i+ 1
}}
return 0
}
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"


console.log (trovaNumeroGiorno("lunedì"))
console.log (trovaNumeroGiorno("Lunedì"))
console.log (trovaNumeroGiorno("Domenica"))
