const reset = document.querySelector('.reset');
const main = document.querySelector('.main');
const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');
const milisec = document.querySelector('.milliseconds');


let time = 0;
let seconds = 0;
let minutes = 0;
let milisecs = 0;
let active = false;
let interval;


const displayTime = () => {
  min.textContent = 0;
  sec.textContent = 0;
  milisec.textContent = "00";
}

const minAndSecReset = () => {
  minutes = 0;
  seconds = 0;
}
const resetStopwatch = () => {
    minAndSecReset();
    clearInterval(interval);
    main.textContent = "Start";
    displayTime();
}

const stopwatch = () => {
  time++;

    if(time == 100) {
    time = 0;
    seconds++;
  }

  if(seconds == 60) {
    seconds = 0;
    minutes++;
  }

  min.innerHTML = minutes.toString().bold();
  sec.innerHTML = seconds.toString().bold();
  time < 10 ? milisec.textContent = `0${time}` : milisec.textContent = `${time}`;

  minutes == 15 ? resetStopwatch(1) : minutes = 0;
}

main.addEventListener('click', () => {
  
  if(!active){
    interval = setInterval(stopwatch, 1);
    active = !active;
    main.textContent = "Stop";
  } 
  else{
    main.textContent = "Start";
    clearInterval(interval);
    active = !active;
  }
})

reset.addEventListener('click', () => {
  clearInterval(interval);
  minAndSecReset();
  displayTime();
  main.textContent = "Start";
  active = false;
})

