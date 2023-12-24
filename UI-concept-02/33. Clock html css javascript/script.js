function mode() {
    const body = document.querySelector('body');
    body.classList.toggle('light');
    body.style.transition = `0.3s linear`;
}

const deg = 6;
const sec = document.querySelector('#sec');
const min = document.querySelector('#min');
const hr = document.querySelector('#hr');

setInterval(() => {
    let day = new Date();
    let msec = day.getMilliseconds();
    let ss = day.getSeconds() * deg;
    let mm = day.getMinutes() * deg;
    let hh = day.getHours() * 30;
    sec.style.transform = `rotateZ(${ss}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
})

