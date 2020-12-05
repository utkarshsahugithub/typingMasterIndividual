const userTextTyping = document.querySelector('.userTextTyping');

// function timerFunction(counterTimerMinutes) {
//     if(counterTimerMinutes === 0) {
//         return false;
//     } else {
//         counterTimerMinutes--;
//         timerFunction(counterTimerMinutes);
//     }
// }

let timer = document.querySelector('.timer');
let counterTimer = timer.innerHTML; 
let timerArray = counterTimer.split(":");
timerArray.forEach( (element, index,  arr) => {
    arr[index] = parseInt(element);
    // console.log(arr[index]);
});
let totalSeconds = timerArray[0]*60;
// let totalMinutes = timerArray[0];
let minutes = timerArray[0];
let seconds;

function timerStart() {
    let secondsCounter = setInterval(() => {
        console.log(totalSeconds + "seconds");
        if(totalSeconds === -1) {
            clearInterval(secondsCounter);
        }else  if(totalSeconds%60 == 0) {
            // console.log(totalMinutes-- + " minutes");
            minutes--;
            console.log(minutes + " minutes");
            // console.log();
            // counterTimer = minutes.toString();
            counterTimer = minutes + ":" + "00";
            timer.innerHTML = counterTimer;
            
            console.log(counterTimer);
            
            timerArray[0] = minutes;
        }
        totalSeconds--;
    }, 1000);
    // let minutesCounter = setInterval(() => {
    //     console.log(totalMinutes + "minutes");
    //     totalMinutes--;
    //     if(totalMinutes === -1) {
    //         clearInterval(minutesCounter);
    //     }
    // }, 60*1000);
    userTextTyping.removeEventListener('keypress', timerStart);
}

userTextTyping.addEventListener('keypress', timerStart);