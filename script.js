const PossibleMoves = ['sissors', 'paper', 'stone'];
//const playerPlay = "stone";
const PossibleStates = ['Draw!', 'Player Wins!', 'Computer Wins!']

let player_counter = 0

let computer_counter = 0;

let Winner = '';

let GameMessage = '';

let playerMoves = '';

function randomComputerPlay(){
   RandomMove =  PossibleMoves[Math.floor(Math.random() * PossibleMoves.length)]; 
   return RandomMove;
}

const PlayerOptions = document.querySelectorAll('.ButtonText');


PlayerOptions.forEach(ButtonText => {
    ButtonText.addEventListener('click' , ()=>{
        PlayerOption = ButtonText['id'];
        ComputerOption  = randomComputerPlay()
        RoundWinner = (PlayRound(PlayerOption,ComputerOption));
        scoreCounter(RoundWinner);
        keepPlayerScore();
        keepComputerScore();
        ResetGame(player_counter,computer_counter);
        RoundMessage(RoundWinner);
        PlayerDisplay(PlayerOption);
        CPUDisplay(ComputerOption);
    })
    
});


function scoreCounter(VarInput){
    if (VarInput === 1){
        player_counter ++;
    }
    if (VarInput === 2){
        computer_counter ++;
    };
};

function PlayRound(playerPlay, computerPlay){
    if ( computerPlay === playerPlay){
        Winner = 0;
    };

    if (computerPlay=== 'sissors' && playerPlay === 'paper'||
        computerPlay === 'stone' && playerPlay === 'sissors'|| 
        computerPlay === 'paper' && playerPlay === 'stone' ){
        Winner =  2;
    };

    if (computerPlay === 'sissors' && playerPlay === 'stone' ||
        computerPlay === 'stone' && playerPlay === 'paper' ||
        computerPlay === 'paper' && playerPlay === 'sissors'){
        Winner =  1;

    };
    return Winner
};

function keepPlayerScore() {
    const playerScoreBox = document.querySelector("#HumanScoreNumber");
    playerScoreBox.textContent = player_counter;
}

function keepComputerScore(){
    const CPUScoreBox = document.querySelector('#ComputerScoreNumber');
    CPUScoreBox.textContent = computer_counter;
};


function RoundMessage(num){
    const RoundMessage = document.querySelector('#GameLog');
    RoundMessage.textContent = PossibleStates[num];
};


function PlayerDisplay(str){
    const PlayerDisMsg = document.querySelector('#disP');
    PlayerDisMsg.textContent = `Player played ${str}!`;
}

function CPUDisplay(str){
    const CPUDisMsg = document.querySelector('#disC');
    CPUDisMsg.textContent = `Computer played ${str}!`;
}

function ResetGame(playersc,CPUsc){
 if (playersc === 5){
    window.alert('You have won! Please Click to restart the game');
    window.location.href = 'index.html';
 };
 if (CPUsc === 5){
    window.alert('The Computer have won! Please Click to restart the game');
    window.location.href = 'index.html';
 };
};
// Fix an error where the first console log is different from the second console log; 
//store the random number generated inside computer_play //

//let playerMoves = prompt("please input either: sissors, paper, stone", "stone").toLocaleLowerCase();

//console.log(playerMoves)
//console.log(computer_play)
//console.log(SingleRound(playerMoves, computer_play))