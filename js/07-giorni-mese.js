// Traccia 07 · I giorni del mese
// La consegna è nel README, alla voce "07 · I giorni del mese".

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
function contaGiorniDelMese (numeroMese) {
const giorniDeiMesi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
if (numeroMese <1 || numeroMese >12) return 0
return giorniDeiMesi [numeroMese - 1]

}
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log (contaGiorniDelMese(0))
console.log(contaGiorniDelMese(1))
console.log(contaGiorniDelMese(2))
console.log(contaGiorniDelMese(3))
console.log(contaGiorniDelMese(13))

