// Traccia 06 · La durata del film
// La consegna è nel README, alla voce "06 · La durata del film".

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
function formattaDurata (minuti) {
const ore = Math.floor(minuti / 60) 
const minutiRimanenti = (minuti % 60)

if (ore === 0) return (minutiRimanenti + " minuti")
else if (ore === 1 && minutiRimanenti === 0) return "1 ora"
else if (minutiRimanenti ===0) return (ore + " ore")
if (ore === 1 ) return (" 1 ora e " + minutiRimanenti + " minuti")
else return (ore + " ore e " + minutiRimanenti + " minuti")
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(formattaDurata(148))
console.log(formattaDurata(95))
console.log(formattaDurata(120))
console.log(formattaDurata(60))
console.log(formattaDurata(45))
console.log(formattaDurata(0))