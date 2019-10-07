var activePlayer, moves, isWinner;

activePlayer = 0;
moves = 0;
isWinner = 0;

var gameStart = function() {
    for (var i = 1; i < 10; i++) {
        var box = document.createElement('div');
        box.className = 'box';
        box.setAttribute('id', i);
        document.getElementById('game-board').appendChild(box);
    }
    document.querySelector('.counter').innerHTML = 'Moves: 0';
    activePlayer = 0;
    moves = 0;
    isWinner = 0;
}

var a = document.getElementById('game-board').addEventListener('click', function(a) {
    if (activePlayer == 0 && a.target.innerText == "" && isWinner == 0) {
        document.getElementById(a.target.id).innerText = 'X';
        nextPlayer();
        moves++;
    } else if (activePlayer == 1 && a.target.innerText == "" && isWinner == 0){
        document.getElementById(a.target.id).innerText = 'O';
        nextPlayer();
        moves++;
    } else {
        console.log('isnt empty');
    }
    
    document.querySelector('.counter').innerHTML = 'Moves: ' + moves;

    if (moves > 4) {
        if (document.getElementById('1').innerHTML == 'X' && document.getElementById('2').innerHTML == 'X' && document.getElementById('3').innerHTML == 'X'){
            alert('X is winner!');
            isWinner = 1;
        } else if (document.getElementById('1').innerHTML == 'O' && document.getElementById('2').innerHTML == 'O' && document.getElementById('3').innerHTML == 'O'){
            alert('O is winner!');
            isWinner = 1;
        } else if (document.getElementById('4').innerHTML == 'X' && document.getElementById('5').innerHTML == 'X' && document.getElementById('6').innerHTML == 'X'){
            alert('X is winner!');
            isWinner = 1;
        } else if (document.getElementById('4').innerHTML == 'O' && document.getElementById('5').innerHTML == 'O' && document.getElementById('6').innerHTML == 'O'){
            alert('O is winner!');
            isWinner = 1;
        } else if (document.getElementById('7').innerHTML == 'X' && document.getElementById('8').innerHTML == 'X' && document.getElementById('9').innerHTML == 'X'){
            alert('X is winner!');
            isWinner = 1;
        } else if (document.getElementById('7').innerHTML == 'O' && document.getElementById('8').innerHTML == 'O' && document.getElementById('9').innerHTML == 'O'){
            alert('O is winner!');
            isWinner = 1;
        } else if (document.getElementById('1').innerHTML == 'X' && document.getElementById('4').innerHTML == 'X' && document.getElementById('7').innerHTML == 'X'){
            alert('X is winner!');
            isWinner = 1;
        } else if (document.getElementById('1').innerHTML == 'O' && document.getElementById('4').innerHTML == 'O' && document.getElementById('7').innerHTML == 'O'){
            alert('O is winner!');
            isWinner = 1;
        } else if (document.getElementById('2').innerHTML == 'X' && document.getElementById('5').innerHTML == 'X' && document.getElementById('8').innerHTML == 'X'){
            alert('X is winner!');
            isWinner = 1;
        } else if (document.getElementById('2').innerHTML == 'O' && document.getElementById('5').innerHTML == 'O' && document.getElementById('8').innerHTML == 'O'){
            alert('O is winner!');
            isWinner = 1;
        } else if (document.getElementById('3').innerHTML == 'X' && document.getElementById('6').innerHTML == 'X' && document.getElementById('9').innerHTML == 'X'){
            alert('X is winner!');
            isWinner = 1;
        } else if (document.getElementById('3').innerHTML == 'O' && document.getElementById('6').innerHTML == 'O' && document.getElementById('9').innerHTML == 'O'){
            alert('O is winner!');
            isWinner = 1;
        } else if (document.getElementById('1').innerHTML == 'X' && document.getElementById('5').innerHTML == 'X' && document.getElementById('9').innerHTML == 'X'){
            alert('X is winner!');
            isWinner = 1;
        } else if (document.getElementById('1').innerHTML == 'O' && document.getElementById('5').innerHTML == 'O' && document.getElementById('9').innerHTML == 'O'){
            alert('O is winner!');
            isWinner = 1;
        } else if (document.getElementById('3').innerHTML == 'X' && document.getElementById('5').innerHTML == 'X' && document.getElementById('7').innerHTML == 'X'){
            alert('X is winner!');
            isWinner = 1;
        } else if (document.getElementById('3').innerHTML == 'O' && document.getElementById('5').innerHTML == 'O' && document.getElementById('7').innerHTML == 'O'){
            alert('O is winner!');
            isWinner = 1;
        }
    } 
    if (moves == 9 && isWinner == 0) {
        alert('Tie!');
    }
});

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
}

function resetGame() {
        var parent = document.getElementById('game-board');
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        gameStart();
}

document.querySelector('.new-game').addEventListener('click', resetGame);

gameStart();