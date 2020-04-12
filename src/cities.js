// DOM -cities
let london = document.querySelector("#london");
let newYork = document.querySelector("#new-york");
let singapore = document.querySelector("#singapore");
let capeTown = document.querySelector("#cape-town");
let sydney = document.querySelector("#sydney");
let moscow = document.querySelector("#moscow");
let tokyo = document.querySelector("#tokyo");
let beijing = document.querySelector("#beijing");
let vancouver = document.querySelector("#vancouver");
let rioDeJaneiro = document.querySelector("#rio-de-janeiro");


// London
export let londonTime = () => {
    let date = new Date().toLocaleString("en-US", {
      timeZone: "Europe/London"
    });
    date = new Date(date);
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    london.innerHTML = `<h2 class="town">London:</h2>
      <h2>${hours} : ${minutes} : ${seconds}</h2>`;
  };

  // New York
export let newYorkTime = () => {
    let date = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York"
    });
    date = new Date(date);
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    newYork.innerHTML = `<h2 class="town">New York:</h2>
        <h2>${hours} : ${minutes} : ${seconds}</h2>`;
  };

  // Singapore
export let singaporeTime = () => {
    let date = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Singapore"
    });
    date = new Date(date);
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    singapore.innerHTML = `<h2 class="town">Singapore:</h2>
        <h2>${hours} : ${minutes} : ${seconds}</h2>`;
  };

  // Cape Town
export let capeTownTime = () => {
    let date = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Johannesburg"
    });
    date = new Date(date);
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    capeTown.innerHTML = `<h2 class="town">Cape Town:</h2>
        <h2>${hours} : ${minutes} : ${seconds}</h2>`;
  };

  // Sidney
export let sydneyTime = () => {
    let date = new Date().toLocaleString("en-US", {
      timeZone: "Australia/Sydney"
    });
    date = new Date(date);
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    sydney.innerHTML = `<h2 class="town">Sidney:</h2>
        <h2>${hours} : ${minutes} : ${seconds}</h2>`;
  };

  // Moscow
export let moscowTime = () => {
    let date = new Date().toLocaleString("en-US", {
      timeZone: "Europe/Moscow"
    });
    date = new Date(date);
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    moscow.innerHTML = `<h2 class="town">Moscow:</h2>
        <h2>${hours} : ${minutes} : ${seconds}</h2>`;
  };

  // Tokyo
export let tokyoTime = () => {
    let date = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Tokyo"
    });
    date = new Date(date);
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    tokyo.innerHTML = `<h2 class="town">Tokyo:</h2>
        <h2>${hours} : ${minutes} : ${seconds}</h2>`;
  };

  // Beijing
export let beijingTime = () => {
    let date = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Shanghai"
    });
    date = new Date(date);
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    beijing.innerHTML = `<h2 class="town">Beijing:</h2>
        <h2>${hours} : ${minutes} : ${seconds}</h2>`;
  };

  // Vancouver
export let vancouverTime = () => {
    let date = new Date().toLocaleString("en-US", {
      timeZone: "America/Vancouver"
    });
    date = new Date(date);
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    vancouver.innerHTML = `<h2 class="town">Vancouver:</h2>
        <h2>${hours} : ${minutes} : ${seconds}</h2>`;
  };

  // Rio de Janeiro
export let rioTime = () => {
    let date = new Date().toLocaleString("en-US", {
      timeZone: "America/Sao_Paulo"
    });
    date = new Date(date);
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");
    rioDeJaneiro.innerHTML = `<h2 class="town">Rio de Janeiro:</h2>
        <h2>${hours} : ${minutes} : ${seconds}</h2>`;
  };