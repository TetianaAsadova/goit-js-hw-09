import '../css/common.css';

const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');

let intervalId = null;
let isActive = false;

startBtnRef.addEventListener('click', onStartChangeColorBody);
stopBtnRef.addEventListener('click', onStopChangeColorBody);

function onStartChangeColorBody(e) {
    startBtnRef.setAttribute('disabled', true);
    stopBtnRef.removeAttribute('disabled', true);
    if (isActive) {
        return;
    };
    intervalId = setInterval(() => {
        bodyRef.style.backgroundColor = getRandomHexColor();
    }, 1000);
    isActive = true;
}

function onStopChangeColorBody(e) {
    stopBtnRef.setAttribute('disabled', true);
    startBtnRef.removeAttribute('disabled', true);
    isActive = false;
    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
