const userTextTyping = document.querySelector('.userTextTyping');

function timerFunction(counterTimerMinutes) {
    if(counterTimerMinutes === 0) {
        return false;
    } else {
        counterTimerMinutes--;
        timerFunction(counterTimerMinutes);
    }
}

function timerStart() {
    let timer = document.querySelector('.timer');
    let counterTimer = timer.innerHTML; 
    let timerArray = counterTimer.split(":");
    timerArray.forEach( (element, index,  arr) => {
        arr[index] = parseInt(element);
    });
    let totalSeconds = timerArray[0]*60;
    setInterval(() => {
        console.log(totalSeconds);
        totalSeconds--;
    }, 1000);
    // (() => {
    //     // counterTimerMinutes--;
    //     // console.log(counterTimerMinutes);
    //     // timer.innerHTML = counterTimerMinutes;
    // }, );
}

userTextTyping.addEventListener('keypress', timerStart);