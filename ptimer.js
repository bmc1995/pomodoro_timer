const btn = document.getElementById('playButton');
const workTime = document.getElementById('workVal');
const breakTime = document.getElementById('breakVal');
const incWork = document.getElementById('addWork');
const decWork = document.getElementById('minusWork');
const incBreak = document.getElementById('addBreak');
const decBreak = document.getElementById('minusBreak');
let timeMin = document.getElementById('time-min');

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

incWork.addEventListener('click',() => incWorkTime());
decWork.addEventListener('click',() => decWorkTime());
incBreak.addEventListener('click', () => incBreakTime());
decBreak.addEventListener('click', () => decBreakTime());



//timer functions
const timerDisplay = document.querySelector('#session')


let countdown;
function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000
    displayTimeLeft(seconds)
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
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

    timerDisplay.textContent = display;
    console.log({minutes, secondsRemainder});
}
