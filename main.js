const change = document.querySelector('.change');
const reset = document.querySelector('.reset')
const main = document.querySelector('.main')


let time = 0;
let seconds = 0;
let minutes = "";
let active = false;
let interval;

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

  if(minutes == 15){
    minutes = 0;
    seconds = 0;
    clearInterval(interval)
    main.textContent = "Start"
    main.className = "main"
  }

  if(minutes == 0){
    if(time < 10) {
      change.textContent = `${seconds}.0${time}`;
    } else{
      change.textContent = `${seconds}.${time}`
    }
  } else{
    if(time < 10){
      change.textContent = `${minutes}.${seconds}.0${time}`
    } else if (time < 10 && seconds < 10) {
      change.textContent = `${minutes}.0${seconds}.0${time}`
    } else{
      change.textContent = `${minutes}.${seconds}.${time}`
    }
  }
}

main.addEventListener('click', () => {
  
  if(!active){
    interval = setInterval(stopwatch, 10)
    active = !active;
    main.textContent = 'Stop'
  } 
  else{
    main.textContent = 'Start'
    clearInterval(interval)
    active = !active;
  }
})

reset.addEventListener('click', () => {
  clearInterval(interval)
  minutes = 0;
  seconds = 0;
  change.textContent = "---"
  main.textContent = "Start"
  active = false;
})

