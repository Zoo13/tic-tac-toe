let buttons = document.querySelectorAll(".game-xo")
let turnIMG = document.getElementById('turnIMG')
let turn = 1; // ro gavarkviot visi jeria X = 1 da O = 0;
let player2Turn;
let player1Box = document.getElementById('footer-1');
let player2Box = document.getElementById('footer-cpu');
let tieBox = document.getElementById('footer-tie')
let player1Turn = parseInt(localStorage.getItem('playerTurn'));
let endGame = false
let winner;
let scorePlayer1 = 0
let scorePlayer2 = 0
let tie = 0
let maxTurn = 9
let theme1 = document.getElementById('theme1');
theme1.style.animation = 'bodyanim 1000ms'

// gamarjvebuls umatebs 1 qulas
// pres shemtxvevashi Ties emateba +1
function giveScore(W) {
    if (W == 'Tie') {
        tie += 1
    } else if (W == 1 && player1Turn == 1) {
        scorePlayer1 += 1

    } else if (W == 0 && player1Turn == 0) {
        scorePlayer1 += 1

    } else if (W == 1 && player2Turn == 1) {
        scorePlayer2 += 1

    } else if (W == 0 && player2Turn == 0) {
        scorePlayer2 += 1

    }
    setTimeout(function(){
        WinnerWindowActive(W)
    }, 1000)
    
    player1Box.children[1].innerHTML = scorePlayer1
    player2Box.children[1].innerHTML = scorePlayer2
    tieBox.children[1].innerHTML = tie
}

function changeWinnerColor(a,b,c,w) {
    if(w == 1){
        buttons[a].children[0].src = 'assets/icon-x-black.svg'
        buttons[b].children[0].src = 'assets/icon-x-black.svg'
        buttons[c].children[0].src = 'assets/icon-x-black.svg'
        buttons[a].style.backgroundColor = '#31C3BD'
        buttons[b].style.backgroundColor = '#31C3BD'
        buttons[c].style.backgroundColor = '#31C3BD'
    } else if (w == 0){
        buttons[a].children[0].src = 'assets/icon-o-black.svg'
        buttons[b].children[0].src = 'assets/icon-o-black.svg'
        buttons[c].children[0].src = 'assets/icon-o-black.svg'
        buttons[a].style.backgroundColor = '#F2B137'
        buttons[b].style.backgroundColor = '#F2B137'
        buttons[c].style.backgroundColor = '#F2B137'
    }
}
function clearButtons(){
    for(var i = 0; i < 9; i++){
        buttons[i].style.backgroundColor = ''
        buttons[i].style.filter = 'drop-shadow(0px 8px 0 #10212A)'
    }
}


// es punqcia yovel dasmul simboloze chekavs gamarjvebuls
// kombinaciiis mixedvit
function chekWinner() {
    // horizontaluri
    if (arr[0] == arr[1] && arr[1] == arr[2]) {
        if (arr[0] == 'X') {
            winner = 1;
            endGame = true
            changeWinnerColor(0,1,2,winner)
        } else {
            winner = 0;
            endGame = true

            changeWinnerColor(0,1,2,winner)
            giveScore(winner)
        }
    }
    else if (arr[3] == arr[4] && arr[4] == arr[5]) {
        if (arr[3] == 'X') {
            winner = 1;
            endGame = true

            changeWinnerColor(3,4,5,winner)
            giveScore(winner)
        } else {
            winner = 0;
            endGame = true

            changeWinnerColor(3,4,5,winner)
            giveScore(winner)
        }
    }
    else if (arr[6] == arr[7] && arr[7] == arr[8]) {
        if (arr[6] == 'X') {
            winner = 1;
            endGame = true

            changeWinnerColor(6,7,8,winner)
            giveScore(winner)
        } else {
            winner = 0;
            endGame = true

            changeWinnerColor(6,7,8,winner)
            giveScore(winner)
        }
    }
    // vertikaluri 
    else if (arr[0] == arr[3] && arr[3] == arr[6]) {
        if (arr[0] == 'X') {
            winner = 1;
            endGame = true

            changeWinnerColor(0,3,6,winner)
            giveScore(winner)
        } else {
            winner = 0;
            endGame = true
            changeWinnerColor(0,3,6,winner)
            giveScore(winner)

        }
    }
    else if (arr[1] == arr[4] && arr[4] == arr[7]) {
        if (arr[1] == 'X') {
            winner = 1;
            endGame = true
            changeWinnerColor(1,4,7,winner)
            giveScore(winner)

        } else {
            winner = 0;
            endGame = true
            changeWinnerColor(1,4,7,winner)
            giveScore(winner)

        }
    }
    else if (arr[2] == arr[5] && arr[5] == arr[8]) {
        if (arr[2] == 'X') {
            winner = 1;
            endGame = true
            giveScore(winner)
            changeWinnerColor(2,5,8,winner)
        } else {
            winner = 0;
            endGame = true
            changeWinnerColor(2,5,8,winner)
            giveScore(winner)

        }
    }
    // diagonaluri
    else if (arr[0] == arr[4] && arr[4] == arr[8]) {
        if (arr[0] == 'X') {
            winner = 1;
            endGame = true
            changeWinnerColor(0,4,8,winner)
            giveScore(winner)

        } else {
            winner = 0;
            endGame = true
            changeWinnerColor(0,4,8,winner)
            giveScore(winner)

        }
    }
    else if (arr[2] == arr[4] && arr[4] == arr[6]) {
        if (arr[2] == 'X') {
            winner = 1;
            endGame = true
            changeWinnerColor(2,4,6,winner)
            giveScore(winner)

        } else {
            winner = 0;
            endGame = true
            changeWinnerColor(2,4,6,winner)
            giveScore(winner)

        }
    }
    if (maxTurn == 0 && winner == undefined) {
        winner = 'Tie'
        endGame = true
        giveScore(winner)
    }
}

let arr = ['cont-1', 'cont-2', 'cont-3',
    'cont-4', 'cont-5', 'cont-6',
    'cont-7', 'cont-8', 'cont-9']


// archeuli X an O is mixedvit box da shignit motavsebuli texti
// icvlis pers da texts

if (player1Turn == 0) {
    player1Box.style.backgroundColor = '#F2B137'
    player1Box.children[0].innerHTML = 'Player1'
    player2Box.style.backgroundColor = '#31C3BD'
    player2Box.children[0].innerHTML = 'Player2'
    player2Turn = 1
} else {
    player2Turn = 0
}

// player 2 is tamashi
function action2(id) {
    if (endGame == false && turn == player2Turn) {
        let box = document.getElementById(id)
        let img = document.createElement('img')
        // tu motamashis mier archeuli box ar aris dakavebuli svla gadadis CPU ze 
        if (box != null && box.childNodes.length === 0) {
            maxTurn -= 1
            box.appendChild(img)
            if (turn == 1) {
                img.src = 'assets/icon-x.svg';
                img.style.width = '50px'
                turn -= 1
                // id = document.getElementById(id).id = 'X'
                console.log(id)
                if (arr.includes(id) == true) {
                    let C = arr.indexOf(id, 0)
                    arr[C] = 'X'
                }

            } else if (turn == 0) {
                img.src = 'assets/icon-o.svg';
                img.style.width = '50px'
                turn += 1
                // id = document.getElementById(id).id = 'O'
                console.log(id)
                if (arr.includes(id) == true) {
                    let C = arr.indexOf(id, 0)
                    arr[C] = 'O'
                }
            }
            // turn iconis shecvla turn is mixedvit
            box.style.filter = 'drop-shadow(0px 4px 0 #10212A)'
            turnImgChange()
            action2()
        } else {                  // tu motamashis mier archeuli box ukve dakavebulia isev motamashis jeria
            if (turn == 1) {
                turn = 1
            } else {
                turn = 0
            }
        }
        chekWinner()
    }

}




// gilakebis dacherisas idzaxebs chekbox punqcias
buttons.forEach(each => {
    each.addEventListener('click', chekbox);
})

// romel boxsac davachert action punqiacs gadaecema
// dacherili box is id romlis mixedvitac
// action punqcia daamatebs surats
function chekbox(event) {
    if(endGame == false && turn == player1Turn){
        action(event.target.id);
    } else if (endGame == false && turn == player2Turn){
        action2(event.target.id)
    }
    
}


function turnImgChange() {
    if (turn == 1) {
        turnIMG.src = "assets/icon-x-gray.svg"
    } else if (turn == 0) {
        turnIMG.src = "assets/icon-o-gray.svg"
    }
}
// tu archeuli box carielia xdeba shemdegi moqmedebebi
// X an O is potos damateba monishnul box shi
// shemdegi motamashis jeris archeva
// turn icon is shecvla motamashis jeris mixedvit
//
function action(id) {
    if (endGame == false && turn == player1Turn) {
        let box = document.getElementById(id)
        let img = document.createElement('img')
        // tu motamashis mier archeuli box ar aris dakavebuli svla gadadis CPU ze 
        if (box != null && box.childNodes.length === 0) {
            maxTurn -= 1
            box.appendChild(img)
            if (turn == 1) {
                img.src = 'assets/icon-x.svg';
                img.style.width = '50px'
                turn -= 1
                // id = document.getElementById(id).id = 'X'
                console.log(id)
                if (arr.includes(id) == true) {
                    let C = arr.indexOf(id, 0)
                    arr[C] = 'X'
                }

            } else if (turn == 0) {
                img.src = 'assets/icon-o.svg';
                img.style.width = '50px'
                turn += 1
                // id = document.getElementById(id).id = 'O'
                console.log(id)
                if (arr.includes(id) == true) {
                    let C = arr.indexOf(id, 0)
                    arr[C] = 'O'
                }
            }
            // turn iconis shecvla turn is mixedvit
            box.style.filter = 'drop-shadow(0px 4px 0 #10212A)'
            turnImgChange()
        } else {                  // tu motamashis mier archeuli box ukve dakavebulia isev motamashis jeria
            if (turn == 1) {
                turn = 1
            } else {
                turn = 0
            }
        }
        chekWinner()
    }

}




// Mausis mitanaze da gawevaze idzaxebs shesabamis punqciebs
buttons.forEach(each => {
    each.addEventListener('mouseenter', hover);
    each.addEventListener('mouseleave', unhover);
})

// tu box i carielia hoverad edeba shesabamisi backgroundi
function hover(event) {
        if (event.target.childNodes.length === 0) {
            if (turn == 1) {
                event.target.style = 'background-image: url(assets/icon-x-outline.svg)'
            } else if (turn == 0) {
                event.target.style = 'background-image: url(assets/icon-o-outline.svg)'
            }
        }
        event.target.style.backgroundRepeat = "no-repeat"
}
// mausis gawevaze hoveri shordeba boxs 
function unhover(event) {
    event.target.style.backgroundImage = 'none'
}


// call restart function 
let restartBnt = document.getElementById('restart-cont');
restartBnt.addEventListener('click', restart);

// cancel restart button
let cancelRestart = document.getElementById('cancel-restart');
cancelRestart.addEventListener('click', function () {
    endGame = false
    theme1.style = 'opacity: 100%'
    restartWindow.style.visibility = 'hiiden'
    restartWindow.style.opacity = '0'
    restartWindow.style.transform = 'translateY(100%)'
})
// restart function
let yesRestart = document.getElementById('yes-restart');

let restartWindow = document.getElementById('restart-window');


function restart() {
    theme1.style = "opacity: 50%"
    restartWindow.style.visibility = 'visible'
    restartWindow.style.opacity = '1'
    restartWindow.style.transform = 'translateY(-100%)'
   
    endGame = true
    yesRestart.addEventListener('click', function () {
        theme1.style = 'opacity: 100%'
        endGame = false
        scorePlayer1 = 0
        scorePlayer2 = 0
        tie = 0
        maxTurn = 9;
        winner = undefined
        player1Box.children[1].innerHTML = scorePlayer1
        player2Box.children[1].innerHTML = scorePlayer2
        tieBox.children[1].innerHTML = tie
        arr = ['cont-1', 'cont-2', 'cont-3',
            'cont-4', 'cont-5', 'cont-6',
            'cont-7', 'cont-8', 'cont-9']
        for (let i = 0; i < 9; i++) {
            buttons[i].innerHTML = ''
        }
        turn = 1
        turnImgChange()
        clearButtons()
        restartWindow.style.visibility = 'hiiden'
        restartWindow.style.opacity = '0'
        restartWindow.style.transform = 'translateY(100%)'
        theme1.style.animation = 'bodyanim 1000ms'
    })

}

let winnerWindow = document.getElementById('round-winner-window');

function WinnerWindowActive(W) {
    let whoWon = document.getElementById('whoWonGame')
    let whoWonImg = document.getElementById('winner-img')
    let roundTakerText = document.getElementById('round-taker-text')
    let XOwinner = document.getElementById('XO-winner')
    theme1.style = "opacity: 50%"
    XOwinner.style = 'display: flex'
    winnerWindow.style.opacity = '1'
    winnerWindow.style.visibility = 'visible'
    winnerWindow.style.transform = 'translateY(-100%)'
    endGame = true
    if (W == 'Tie') {
        whoWon.innerHTML = 'ROUND TIED'
        whoWon.style.fontSize = '24px'
        XOwinner.style = 'display: none'
    } else if (W == 1 && player1Turn == 1) {
        whoWonImg.src = 'assets/icon-x.svg'
        whoWon.innerHTML = 'Player1 Won'
        roundTakerText.style.color = '#31C3BD'

    } else if (W == 0 && player1Turn == 0) {
        whoWon.innerHTML = 'Player1 Won'
        whoWonImg.src = 'assets/icon-o.svg'
        roundTakerText.style.color = '#F2B137'

    } else if (W == 1 && player2Turn == 1) {
        whoWonImg.src = 'assets/icon-x.svg'
        whoWon.innerHTML = 'Player2 Won'
        roundTakerText.style.color = '#31C3BD'

    } else if (W == 0 && player2Turn == 0) {
        whoWon.innerHTML = 'Player2 Won'
        whoWonImg.src = 'assets/icon-o.svg'
        roundTakerText.style.color = '#F2B137'
    }

    // quitze dacherisas vbrundebit mtavar meniushi
    let quitBtn = document.getElementById('quitBtn');
    quitBtn.addEventListener('click', function () {
        quitBtn.href = 'index.html'
    })

    let nextRoundBtn = document.getElementById('next-round')
    nextRoundBtn.addEventListener('click', function () {
        arr = ['cont-1', 'cont-2', 'cont-3',
            'cont-4', 'cont-5', 'cont-6',
            'cont-7', 'cont-8', 'cont-9']
        for (let i = 0; i < 9; i++) {
            buttons[i].innerHTML = ''
        }
        turn = 1
        turnImgChange()
        winner = undefined
        maxTurn = 9;
        theme1.style = "opacity: 100%"
        clearButtons()
        winnerWindow.style.opacity = '0'
        winnerWindow.style.visibility = 'hidden'
        winnerWindow.style.transform = 'translateY(80%)'
        endGame = false
        theme1.style.animation = 'bodyanim 1000ms'
    })
    
}
