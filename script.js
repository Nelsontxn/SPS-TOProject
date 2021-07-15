const PossibleMoves = ['sissors', 'paper', 'stone'];
//const playerPlay = "stone";

function computerPlay(){
   let RandomNumber = Math.floor(Math.random() * 3);
   return PossibleMoves[RandomNumber]; 
}

function SingleRound(playerPlay, computerPlay){
    if ( computerPlay === playerPlay){
        return "Draw!"
    }

    if (playerPlay === 'sissors' && computerPlay === 'paper'){
        return "Player Wins";
    }
    if ( computerPlay=== 'sissors' && playerPlay === 'paper'){
        return "Computer Wins";
    }
    if ( computerPlay === 'sissors' && playerPlay === 'stone'){
        return "Player Wins";
    }

    if ( computerPlay === 'stone' && playerPlay === 'sissors'){
        return "computer Wins";
    }

    if ( computerPlay === 'stone' && playerPlay === 'paper'){
        return "player Wins";
    }

    if ( computerPlay === 'paper' && playerPlay === 'stone'){
        return "computer Wins";
    }

}
// Fix an error where the first console log is different from the second console log; 
//store the random number generated inside computer_play //
let computer_play = computerPlay(); 

let playerMoves = prompt("please input either: sissors, paper, stone", "stone").toLocaleLowerCase();

console.log(playerMoves)
console.log(computer_play)
console.log(SingleRound(playerMoves, computer_play));