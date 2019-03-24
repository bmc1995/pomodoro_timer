let btn = document.getElementById('playButton');
let timeLeft = document.getElementById('time-left');
let workTime = document.getElementById('workVal');
let breakTime = document.getElementById('breakVal');
let incWork = document.getElementById('addWork');
let decWork = document.getElementById('minusWork');
let incBreak = document.getElementById('addBreak');

function incWorkTime(){
    if( workTime.innerText < 45){
        ++workTime.innerText
    }
}
function decWorkTime(){
    if( workTime.innerText > 10){
        --workTime.innerText
    }
}
function incBreakTime(){
    if( breakTime.innerText < 15){
        ++breakTime.innerText
    }
}

function myFunction(){
    btn.classList.toggle('button-paused')
}

function stopFunction() {
    btn.classList.replace('button-paused', 'button-play')
}

incWork.addEventListener('click',() => incWorkTime())
decWork.addEventListener('click',() => decWorkTime())
incBreak.addEventListener('click', () => incBreakTime())

