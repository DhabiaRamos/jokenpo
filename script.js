const spanPlayerScore = document.querySelector('.player-score')
const spanComputerScore = document.querySelector('.computer-score')
const pResul = document.querySelector('.p-resul')

let playerCount = 0
let computerCount = 0


function choicePlayer(choice) {
    startGame(choice, choiceComputer())
}

function choiceComputer() {
    choices = ['rock', 'paper', 'scissors']
    numberRandom = Math.floor(Math.random() * 3)

    return choices[numberRandom]
}


// rock <- paper <- scissors <- rock


function startGame(player, computer) {

    // Condição para ver quem ganha no jokenpo

    if (player === computer) {
        pResul.textContent = 'Empatou!'

    } else if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper') {
        pResul.textContent = 'Player ganhou!'

        playerCount++
        spanPlayerScore.textContent = playerCount

    } else {
        pResul.textContent = 'Computador ganhou!'

        computerCount++
        spanComputerScore.textContent = computerCount
    }

    // Condição para caso o player ou computador atingir 3 pontos 

    if (playerCount === 3) {
        pResul.innerHTML = 'Player ganhou a rodada! <br> Reiniciando..'

        setInterval(() => {
            window.location.reload()
        }, 4000);

    } else if (computerCount == 3) {
        pResul.innerHTML = 'Computador ganhou a rodada! <br> Reiniciando..'

        setInterval(() => {
            window.location.reload()
        }, 4000);

    }
}



