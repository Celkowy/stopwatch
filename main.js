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

const displayContent = (element, value) => {
  return element.textContent = value;
}

const displayTime = () => {
  displayContent(min, 0);
  displayContent(sec, 0);
  displayContent(milisec, "00");
}

const minAndSecReset = () => {
  minutes = 0;
  seconds = 0;
}
const resetStopwatch = () => {
    minAndSecReset();
    clearInterval(interval);
    displayTime();
    displayContent(main, "Start");
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

  displayContent(min, minutes);
  displayContent(sec, seconds);
  time < 10 ? displayContent(milisec, `0${time}`) : displayContent(milisec, `${time}`);

  if(minutes == 1) resetStopwatch();
}

if(window.innerWidth < 1024) {
  displayContent(span1, ":");
  displayContent(span2, ".");
  displayContent(span3, "");
} else {
  displayContent(span1, "minutes");
  displayContent(span2, "seconds");
  displayContent(span3, "milliseconds");
}

main.addEventListener('click', () => {
  
  if(!active){
    interval = setInterval(stopwatch, 10);
    active = !active;
    displayContent(main, "Stop");
  } 
  else{
    displayContent(main, "Start");
    clearInterval(interval);
    active = !active;
  }
})

reset.addEventListener('click', () => {
  clearInterval(interval);
  minAndSecReset();
  displayTime();
  displayContent(main, "Start");
  active = false;
})