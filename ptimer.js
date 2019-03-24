const btn = document.getElementById('playButton');
const workTime = document.getElementById('workVal');
const breakTime = document.getElementById('breakVal');
const incWork = document.getElementById('addWork');
const decWork = document.getElementById('minusWork');
const incBreak = document.getElementById('addBreak');
const decBreak = document.getElementById('minusBreak');
const timerDisplay = document.querySelector('#session');
let timeMin = document.getElementById('time-min');
let timeSec = document.getElementById('time-sec');
let btnPaused;
let minPaused;
let secPaused;
let pausedAt;
let isplaying;
let countdown;

function incWorkTime(){
    if( workTime.innerText < 45){
        ++workTime.innerText
        ++timeMin.innerText
    }
};
function decWorkTime(){
    if( workTime.innerText > 10){
        --workTime.innerText
        --timeMin.innerText
    }
};
function incBreakTime(){
    if( breakTime.innerText < 15){
        ++breakTime.innerText
    }
};
function decBreakTime(){
    if( breakTime.innerText > 5){
        --breakTime.innerText
    }
};
function myFunction(){
    btn.classList.toggle('button-paused')
};

function stopFunction() {
    btn.classList.replace('button-paused', 'button-play')
};

//timer functions
function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000
    displayTimeLeft(seconds)
    
    countdown = setInterval(() => {
        let secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
       
        displayTimeLeft(secondsLeft);
    }, 1000);
}
function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.floor(seconds % 60);
    const display = `${minutes}:${secondsRemainder < 10 ? "0" : ""}${
    secondsRemainder}`
    minPaused = minutes;
    secPaused = secondsRemainder;

    timerDisplay.textContent = display;
    console.log({minutes, secondsRemainder});
}
function startTimer(){
    if(isplaying == true){
        pausedAt = (minPaused*60) + secPaused;
        clearInterval(countdown)
        isplaying = false
    }
    
    else if(isplaying == false){
        let secnds = pausedAt;
        timer(secnds);
        isplaying = true
        }
    else{
        let start = parseInt(timeMin.textContent)*60;
        timer(start);
        isplaying = true;
    }
}

incWork.addEventListener('click',() => incWorkTime());
decWork.addEventListener('click',() => decWorkTime());
incBreak.addEventListener('click', () => incBreakTime());
decBreak.addEventListener('click', () => decBreakTime());
btn.addEventListener('click', () => startTimer());