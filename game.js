let playerWins = 0;
let computerWins = 0;


function rockPaperScissors (playerThrow) {
    debugger;
    let possibleThrows = ['rock', 'paper', 'scissors'];
    let computerThrow = possibleThrows[Math.floor(Math.random() * 3)];

    if ((playerThrow === 'rock' && computerThrow === 'scissors') || (playerThrow === 'paper' && computerThrow === 'rock') || (playerThrow === 'scissors' && computerThrow === 'paper')) {
        playerWins++;

        document.getElementById('results').innerHTML = `${playerThrow} beats ${computerThrow}. You win!`;
    }

    else if ((playerThrow === 'rock' && computerThrow === 'rock') || (playerThrow === 'paper' && computerThrow === 'paper') || (playerThrow === 'scissors' && computerThrow === 'scissors')) {
        
        document.getElementById('results').innerHTML = `You both threw ${playerThrow}. You tie.`;
    }
    
    else {
        computerWins++;

        document.getElementById('results').innerHTML = `${playerThrow} loses to ${computerThrow}. You lose!`;
    }

    document.getElementById('playerWins').innerHTML = playerWins;
    document.getElementById('computerWins').innerHTML = computerWins;
}