function verificaChute(chute) {
    const numero = + chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML = `<div>Valor invalido!</div>`
        return
    }
    if (numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML = `Valor invalido: O numero precisa estar entre ${menorValor} e ${maiorValor}`

        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = 
        `<h1>ACERTOU!</h1>
        <h3>O numero secreto era ${numeroSecreto}</h3>`
    } else if ( numero > numeroSecreto) {
        elementoChute.innerHTML = `<div>O numero secreto é menor <i class="fa-solid fa-arrow-turn-down"></i></div>`
    } else if (numero <numeroSecreto) {
        elementoChute.innerHTML= `<div>O número secreto é maior <i class="fa-solid fa-arrow-turn-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}