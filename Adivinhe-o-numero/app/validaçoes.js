function verificaChute(chute){
    const numero = parseInt(chute);
    if(gameOver(chute)){
        document.body.innerHTML = `<h1> Game over </h1>
        <h2>Você que pediu</h2>
        <button id="jogar-novamente" class="botao_jogar" onclick="reloadPagina()">Jogar novamente</button>`
    }
    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div> Chute inválido </div>'
        return
    }
    if(numeroMenorOuMaior(numero)){
        elementoChute.innerHTML += '<div> Chute inválido, verifique as regras do jogo </div>'
        return
    }
    if(acertouNúmero(numero)){
        document.body.innerHTML = `<h1>Você acertou</h1>
        <h2>O número era ${numeroSecreto}!</h2>
        <button id="jogar-novamente" class="botao_jogar" onclick="reloadPagina()">Jogar novamente</button>
        `
    }
    if(numeroÉMaior(numero)){
        elementoChute.innerHTML += '<div> O número secreto é maior <i class="fa-solid fa-up-long"></i></div>'
    }
    if(numeroÉMenor(numero)){
        elementoChute.innerHTML += '<div> O número secreto é menor <i class="fa-solid fa-down-long"></i></div>'
    }
    
}

function chuteInvalido(numero){
    return Number.isNaN(numero);
}

function numeroMenorOuMaior(numero){
    return numero > maiorValor || numero < menorValor
}

function acertouNúmero(numero){
    return numero === numeroSecreto;
}

function numeroÉMaior(numero){
    return numero < numeroSecreto;
}
function numeroÉMenor(numero){
    return numero > numeroSecreto;
}

function reloadPagina(){
    window.location.reload()
}

function gameOver(chute){
    return chute === 'game over'

}