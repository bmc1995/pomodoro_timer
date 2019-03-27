const btn = document.getElementById('playButton');
const workTime = document.getElementById('workVal');
const breakTime = document.getElementById('breakVal');
const incWork = document.getElementById('addWork');
const decWork = document.getElementById('minusWork');
const incBreak = document.getElementById('addBreak');
const decBreak = document.getElementById('minusBreak');
let timerDisplay = document.querySelector('#session');
let timeMin = document.getElementById('time-min');
let timeSec = document.getElementById('time-sec');
let stopBtn = document.getElementById('stopButton');
let switchBreak = document.getElementById('switchToBreak');
let switchWork = document.getElementById('switchToWork');
let btnPaused;
let minPaused;
let secPaused;
let pausedAt;
let isplaying;
let countdown;
let isWork;
let isBreak;
let hasPlayed;

function incWorkTime(){
    if( workTime.innerText < 45){
        if(hasPlayed == 0){
            ++workTime.innerText;
            timerDisplay.innerText = `${workTime.innerText}:00`
        }else{
            ++workTime.innerText
            ++timeMin.innerText
        }
    }
};
function decWorkTime(){
    if( workTime.innerText > 10 || workTime.innerText <= 10){
        if(hasPlayed == 0){
            --workTime.innerText;
            timerDisplay.innerText = `${workTime.innerText}:00`
        }else{
            --workTime.innerText
            --timeMin.innerText
        }
    }
};
function incBreakTime(){
    if( breakTime.innerText < 15){
        if(hasPlayed == 0){
            ++breakTime.innerText
            timerDisplay.innerText = `${breakTime.innerText}:00`
        }else{
            ++breakTime.innerText
            ++timeMin.innerText
        }
    }
};
function decBreakTime(){
    if( breakTime.innerText > 5){
        if(hasPlayed == 0){
            --breakTime.innerText
            timerDisplay.innerText = `${breakTime.innerText}:00`

        }else{
            --breakTime.innerText
            --timeMin.innerText
        }
    }
};
function myFunction(){
    btn.classList.toggle('button-paused')
};

function stopFunction() {
    if(isplaying == true){
    location.reload();
    }
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
            timesUp();
            if(isWork == true){
                getBreak();
            }
            else if(isBreak == true){
                getWork();
            }
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
    hasPlayed = document.getElementsByClassName('time-min');
}

function getBreak(){
    timerDisplay.textContent = `${breakTime.innerText}:00`;
    incWork.style.pointerEvents = 'none';
    decWork.style.pointerEvents = 'none';
    incBreak.style.pointerEvents = 'auto';
    decBreak.style.pointerEvents = 'auto';

    isWork = false;
    isBreak = true;
}

function getWork(){
    timerDisplay.textContent = `${workTime.innerText}:00`;
    incBreak.style.pointerEvents = 'none';
    decBreak.style.pointerEvents = 'none';
    incWork.style.pointerEvents = 'auto';
    decWork.style.pointerEvents = 'auto';

    isWork = true
    isBreak = false
}

function timesUp(){
    const audio = new Audio('/home/william/the_odin_project/ptimer/sounds/TimesUp.wav');
    audio.loop = false;
    audio.play(); 
    
}

incWork.addEventListener('click',() => incWorkTime());
decWork.addEventListener('click',() => decWorkTime());
incBreak.addEventListener('click', () => incBreakTime());
decBreak.addEventListener('click', () => decBreakTime());
btn.addEventListener('click', () => startTimer());
switchBreak.addEventListener('click', () => getBreak());
switchWork.addEventListener('click', () => getWork());

isWork = true;
incBreak.style.pointerEvents = 'none';
decBreak.style.pointerEvents = 'none';