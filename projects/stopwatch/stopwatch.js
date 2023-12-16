let displayTime = document.getElementById('display');
let startBtn = document.getElementById('start');
let splitBtn = document.getElementById('split');
let resetBtn = document.getElementById('reset');
let splitOutput = document.getElementById('split-output');

let timer = null;
let [hours, minutes, seconds] = [0, 0, 0];


function stopwatch(){
    seconds++;
    if (seconds > 60){
        seconds = 0;
        minutes++;
        if (minutes > 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    displayTime.innerHTML = `${h}:${m}:${s}`;
}
console.log(displayTime.innerHTML);

startBtn.addEventListener('click', start);

function start(){
    if (startBtn.innerHTML == 'Start'){
        if (timer != null){
            clearInterval(timer);
        }
        timer = setInterval(stopwatch, 1000);
        startBtn.innerHTML = 'Pause';
    } else{
        clearInterval(timer);
        startBtn.innerHTML = 'Start';
    }
    
}

splitBtn.addEventListener('click', ()=>{
    startBtn.innerHTML = 'Start';
    const splitTime = document.createElement('h1');
    splitTime.classList.add('split-time');
    splitTime.innerHTML = displayTime.innerHTML;
    splitOutput.appendChild(splitTime);
    start();
})

resetBtn.addEventListener('click', ()=>{
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    displayTime.innerHTML = '00:00:00';
    splitOutput.innerHTML = ' ';
    startBtn.innerHTML = 'Start';
})