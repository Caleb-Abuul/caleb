let board;
let playerO = 'O';
let playerX = 'X';
let currentPlayer = playerO;
let gameOver = false;
let replayBtn = document.getElementById('replay-btn');
let resetBtn = document.getElementById('reset-btn');

let scoreX = 0;
let scoreO = 0;

function startGame(){
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ]

    for (let r = 0; r < 3; r++){
        for (let c = 0; c < 3; c++){
            let tile = document.createElement('div');
            tile.id = r.toString() + '-' + c.toString();
            tile.classList.add('tile');

            if (r == 0 || r == 1){
                tile.classList.add('horizontal-line');
            }
            if (c == 0 || c == 1){
                tile.classList.add('vertical-line');
            }
            tile.addEventListener('click', setTile);
            document.getElementById('board').appendChild(tile);
        }
    }
}

function setTile(){
    if (gameOver){
        return
    }

    let coords = this.id.split('-');
    let r = coords[0];
    let c = coords[1];

    if (board[r][c] != ' '){
        return;
    }
    
    board[r][c] = currentPlayer;
    this.innerText = currentPlayer;

    if (currentPlayer == playerO){
        currentPlayer = playerX;
    } else{
        currentPlayer = playerO;
    }

    checkWinner();
    
}

function checkWinner(){
    // horizontally
    for (let r = 0; r < 3; r++){
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' '){
            for (let i = 0; i < 3; i++){
                let tile = document.getElementById(r.toString() + '-' + i.toString());
                tile.classList.add('winner');
            }
            gameOver = true;
            checkPlayer();
            return;
        }
    }

    // vertically
    for (let c = 0; c < 3; c++){
        if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != ' '){
            for (let i = 0; i < 3; i++){
                let tile = document.getElementById(i.toString() + '-' + c.toString());
                tile.classList.add('winner');
            }
            gameOver = true;
            checkPlayer();
            return;
        }
    }

    // diagonally
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' '){
        for (let i = 0; i < 3; i++){
            let tile = document.getElementById(i.toString() + '-' + i.toString());
            tile.classList.add('winner');
        }
        gameOver = true;
        checkPlayer();
        return;
    }

    //anti-diagonally
    if (board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[2][0] != 0){
        let tile = document.getElementById('0-2');
        tile.classList.add('winner');

        tile = document.getElementById('1-1');
        tile.classList.add('winner');

        tile = document.getElementById('2-0');
        tile.classList.add('winner');

        gameOver = true;
        checkPlayer();
        return;
    }
}

function checkPlayer(){
    if (currentPlayer == 'X'){
        scoreO++;
        document.getElementById('playerO').innerText = scoreO;
    } 
    if(currentPlayer == 'O'){
        scoreX++;
        document.getElementById('playerX').innerText = scoreX;
    }
}


replayBtn.addEventListener('click', replay);

function replay(){
    gameOver = false;
    document.getElementById('board').innerHTML = ' ';
    startGame();
}

resetBtn.addEventListener('click', resetGame);

function resetGame(){
    gameOver = false;
    document.getElementById('board').innerHTML = ' ';
    scoreO = 0;
    scoreX = 0;
    document.getElementById('playerX').innerText = '0';
    document.getElementById('playerO').innerText = '0';
    startGame();
}

startGame();