const reset = document.querySelector('.reset');
const main = document.querySelector('.main');
const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');
const milisec = document.querySelector('.milliseconds');
const span1 = document.querySelector('.display span:nth-child(2)');
const span2 = document.querySelector('.display span:nth-child(4)');
const span3 = document.querySelector('.display span:nth-child(6)');


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
    displayTime();
    main.textContent = "Start";
    active = false;
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

  if(minutes == 1) resetStopwatch();
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

window.addEventListener('resize', () => {
  const mq = window.matchMedia("(max-width: 1024px)");
  const mquery = window.matchMedia("(min-width: 1025px)");
  if (mq.matches) {
    span1.textContent = ":";
    span2.textContent = ".";
    span3.textContent = "";
  }

  if (mquery.matches) {
    span1.textContent = "minutes";
    span2.textContent = "seconds";
    span3.textContent = "milliseconds";
  }
})
