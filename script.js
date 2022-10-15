
let newGameBtn = document.getElementById('newGameBtn')
let PlayerVsPlayer = document.getElementById('PlayerVsPlayer')
let vsCPU = document.getElementById('vsCPU')
let playerTurn;

function newGame(){
    newGameBtn.href ='new game.html'

}
function newGameVsPlayer() {
    PlayerVsPlayer.href = 'playerVsplayer.html'
}
let theme1 = document.getElementById('theme1');

let choiceXO = document.querySelectorAll('.choice')
let choiceBackground = document.getElementById('choice-background')
let choiceX = document.getElementById('x-icon')
let choiceO = document.getElementById('o-icon')

// irchevs X s an O is tamashis dawyebamde
choiceXO.forEach(each =>{
    each.addEventListener('click' , choice);
    
})
// archevis shemdeg playerTurn mienicheba shesabamisi mnishvneloba
// X = 1
// O = 0
// archeuls playerTurns vinaxavt localstorage shi
function choice (event){
    if(event.target.id == 'x-cont' || event.target.id == 'x-icon'){
        playerTurn = 1
        cpuTurn = 0
        console.log(playerTurn)
        choiceBackground.style = "transform: translateX(0%) ;"
        choiceX.src = 'assets/icon-x-black.svg'
        choiceO.src = 'assets/icon-o-gray.svg'
    } else if (event.target.id == 'o-cont' || event.target.id == 'o-icon') {
        playerTurn = 0
        cpuTurn = 1
        console.log(playerTurn)
        choiceBackground.style = "transform: translateX(100%) ;"
        choiceO.src = 'assets/icon-o-black.svg'
        choiceX.src = 'assets/icon-x-gray.svg'
    }
    localStorage.setItem('playerTurn' , playerTurn);
}
