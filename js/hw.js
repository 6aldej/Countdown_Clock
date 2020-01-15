const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus_s = document.querySelector('.plus_s');
const minus_s = document.querySelector('.minus_s');

const plus_m = document.querySelector('.plus_m');
const minus_m = document.querySelector('.minus_m');

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

const restart = document.querySelector('.restart');

const result = document.querySelector('.result');

let countSec = 0;
let countMin = 0;

const updateText = () =>{	
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => {

	let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);

  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    result.style.display = 'block';
    restart.style.display = 'inline-block';
  }

  if(countSec > 0) countSec--;
  else{
  	countSec = 59;
    countMin--;
  }

  reset.onclick = () => {
    clearTimeout(timeinterval);
    countMin =0;
    countSec =0;
    start.style.display = 'inline-block';
    but_start();
    updateText();
  }

  pause.onclick = () => {
    clearTimeout(timeinterval);
    start.style.display = 'inline-block';
  }
  
  updateText();
}



//управление счётчиком секунд
plus_s.onclick = () =>{
  if (countMin < 59) {
    if(countSec < 59) ++countSec;
    else{
      countSec = 0;
      ++countMin;
    }
  }
  else {
    if (countSec<59) ++countSec;
    }
  updateText();
  but_start();
}

minus_s.onclick = () =>{
	if(countMin <= 0 && countSec===0){
  	countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
  	countSec = 59;
  	--countMin;
  }
  updateText();
  but_start();
}

//управление счётчиком минут
plus_m.onclick = () =>{
  if(countMin < 59) ++countMin;
  updateText()
  but_start();
}

minus_m.onclick = () =>{
  if(countMin <= 0 && countSec===0){
    countSec = 0;
    countMin = 0;
    return;
  }
  if(countMin > 0) --countMin;
  updateText();
  but_start();
}

but_start = () => {
  if(countSec==0 && countMin==0)
    document.getElementById('b1').disabled = true;
  else
    document.getElementById('b1').disabled = false;
}
but_start();

start.onclick = () => {
    start.style.display = 'none';
    countDown();
}

restart.onclick = () => {
  timer.style.display = 'block';
  message.innerHTML = '<p></p>'
  restart.style.display = 'none';
  countMin =0;
  countSec =0;
  start.style.display = 'inline-block';
  result.style.display = 'none';
  but_start();
  updateText();
}