let board;
let playerO = 'O';
let playerX = 'X';
let currentPlayer = playerO;
let gameOver = false;
let btn = document.getElementById('btn');
let playerOscore = 0;
let playerXscore = 0;
let popUp = document.getElementById('pop-up');
let counter = 0;

let playGame = document.getElementById('play-game');
let homeBtn = document.getElementById('home-btn');
let restart = document.getElementById('restart');
let closeBtn = document.getElementById('close');
let instructions = document.getElementById('instructions');

instructions.addEventListener('click', ()=>{
    document.getElementById('home').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('pop-up').style.display = 'none';
    document.getElementById('instruction').style.display = 'block';
}

playGame.addEventListener('click', ()=>{
    document.getElementById('home').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('pop-up').style.display = 'none';
    restartGame();
})

homeBtn.addEventListener('click', ()=>{
    document.getElementById('home').style.display = 'block';
    document.getElementById('game').style.display = 'none';
    
    restartGame();
})
restart.addEventListener('click', restartGame);

closeBtn.addEventListener('click', ()=>{
    document.getElementById('home').style.display = 'block';
    document.getElementById('game').style.display = 'none';
})

let randomText = ["Down the rabbit hole we go!", "You are a wizard, Harry!", "It's far from over!", "Beware, a kiss!", "Outstanding!", "Captain thunderpants says hi!", "You are a champion!", "Oh yeah!", "Fantastic!", "Juicy!", "What a genius!", "Let's do this!"];

function startGame(){
    setGame();
}

function setGame(){
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    for (let row = 0; row < 3; row++){
        for (let column = 0; column < 3; column++){
            let tile = document.createElement('div');
            tile.classList.add('tile');
            tile.id = row.toString() + '-' + column.toString();

            if (row == 0 || row == 1){
                tile.classList.add('horizontal-line');
            }
            if (column == 0 || column == 1){
                tile.classList.add('vertical-line');
            }

            tile.addEventListener('click', setTile);
            document.getElementById('board').appendChild(tile);
        }
    }
}

function setTile(){
    if (gameOver){
        return;
    }
    let coords = this.id.split('-'); //1-1 => [1][1]

    let rows = parseInt(coords[0]);
    let columns = parseInt(coords[1]);

    if (board[rows][columns] != ' '){
        return;
    }
    board[rows][columns] = currentPlayer;
    this.innerText = currentPlayer;

    if (currentPlayer == playerO){
        currentPlayer = playerX;
        this.style.color = 'var(--playerO-clr)';
    } else {
        currentPlayer = playerO;
        this.style.color = 'var(--playerX-clr)';
    }

    checkWinner();
}

function checkWinner(){
    // horizontally
    for (let rows = 0; rows < 3; rows++){
        if (board[rows][0] == board[rows][1] && board[rows][1] == board[rows][2] && board[rows][0] != ' '){
            for (let columns = 0; columns < 3; columns++){
                let tile = document.getElementById(rows.toString() + '-' + columns.toString());
                tile.classList.add('winner');
                tile.style.color = 'var(--winner-clr)';
            }
            gameOver = true;
            popUp.style.display = 'block';
            btn.addEventListener('click', playAgain);
            updateScore();
            updateMsg();
            return;
        }
    }

    // vertically
    for (let columns = 0; columns < 3; columns++){
        if (board[0][columns] == board[1][columns] && board[1][columns] == board[2][columns] && board[0][columns] != ' '){
            for (let rows = 0; rows < 3; rows++){
                let tile = document.getElementById(rows.toString() + '-' + columns.toString());
                tile.classList.add('winner');
                tile.style.color = 'var(--winner-clr)';
            }
            gameOver = true;
            popUp.style.display = 'block';
            btn.addEventListener('click', playAgain);
            updateScore();
            updateMsg();
            return;
        }
    }

    // diagonally
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' '){
        for (let i = 0; i < 3; i++){
            let tile = document.getElementById(i.toString() + '-' + i.toString());
            tile.classList.add('winner');
            tile.style.color = 'var(--winner-clr)';
        }
        gameOver = true;
        popUp.style.display = 'block';
        btn.addEventListener('click', playAgain);
        updateScore();
        updateMsg();
        return;
    }

    // anti-diagonally
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' '){
        // 0-2
        let tile = document.getElementById('0-2');
        tile.classList.add('winner');
        tile.style.color = 'var(--winner-clr)';

        // 1-1
        tile = document.getElementById('1-1');
        tile.classList.add('winner');
        tile.style.color = 'var(--winner-clr)';

        // 2-0
        tile = document.getElementById('2-0');
        tile.classList.add('winner');
        tile.style.color = 'var(--winner-clr)';

        gameOver = true;
        popUp.style.display = 'block';
        btn.addEventListener('click', playAgain);
        updateScore();
        updateMsg();
        return;
    }

    if (board[0][0] != ' ' && board[0][1] != ' ' && board[0][2] != ' ' && board[1][0] != ' ' && board[1][1] != ' ' && board[1][2] != ' ' && board[2][0] != ' ' && board[2][1] != ' ' && board[2][2] != ' '){
        gameOver = true;
        popUp.style.display = 'block';
        document.getElementById('random-msg').innerText = "Oops! it's a tie!";
        document.getElementById('winner').innerText = 'None';
        btn.addEventListener('click', playAgain);
        return;
    }
}

function updateScore(){
    if (currentPlayer == playerO){
        playerXscore++;
        document.getElementById('scoreX').innerText = playerXscore;
        document.getElementById('winner').innerText = 'Player X';
    }
    if (currentPlayer == playerX){
        playerOscore++;
        document.getElementById('scoreO').innerText = playerOscore;
        document.getElementById('winner').innerText = 'Player O';
    }
}

function playAgain(){
    document.getElementById('board').innerText = ' ';
    gameOver = false;
    startGame();
    popUp.style.display = 'none';
    counter++;
}

function updateMsg(){
    if (counter > randomText.length){
        counter = 0;
    }
    document.getElementById('random-msg').innerText = randomText[counter];
}

function restartGame(){
    playAgain();
    counter = 0;
    playerOscore = 0;
    playerXscore = 0;
    document.getElementById('scoreX').innerText = 0;
    document.getElementById('scoreO').innerText = 0;
}

startGame();
