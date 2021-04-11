var valorEmEuroTexto = prompt("Qual o valor do euro que você quer converter?")

var valorEmEuroNumero = parseFloat(valorEmEuroTexto)

var valorEmReal = valorEmEuroNumero * 6.57
var valorEmReaFixado = valorEmReal.toFixed(2)

alert(valorEmReaFixado)
