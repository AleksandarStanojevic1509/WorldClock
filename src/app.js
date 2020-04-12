import {londonTime, newYorkTime, singaporeTime, capeTownTime, sydneyTime,
moscowTime, tokyoTime, beijingTime, vancouverTime, rioTime} 
from './cities.js'

//DOM - local time
let hourHand = document.querySelector("#hour-hand");
let minutHand = document.querySelector("#minut-hand");
let secondHand = document.querySelector("#second-hand");

// Display local - time

let localTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  
  let sHand = second * 6;
  let mHand = minute * 6 + sHand / 60;
  let hHand = hour * 30 + mHand / 12;

  hourHand.style.transform = `rotate(${hHand}deg)`;
  minutHand.style.transform = `rotate(${mHand}deg)`;
  secondHand.style.transform = `rotate(${sHand}deg)`;
};

setInterval(localTime, 1000);

// Display cites - time

setInterval(londonTime, 1000);
setInterval(newYorkTime, 1000);
setInterval(singaporeTime, 1000);
setInterval(capeTownTime, 1000);
setInterval(sydneyTime, 1000);
setInterval(moscowTime, 1000);
setInterval(tokyoTime, 1000);
setInterval(beijingTime, 1000);
setInterval(vancouverTime, 1000);
setInterval(rioTime, 1000);
