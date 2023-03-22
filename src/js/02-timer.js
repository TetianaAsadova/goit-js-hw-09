import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import '../css/common.css';

class Countdown {
  constructor({onTick}) {
    this.intervalId = null;
    this.onTick = onTick;
  }
  
  start() {
    this.intervalId = setInterval(() => {
      delta = flatDate - Date.now();
      const time = this.convertMs(delta);
      this.onTick(time);
    }, 1000);
    
  }
  stop() {
    clearInterval(this.intervalId);
    const time = this.convertMs(0);
    this.onTick(time);
  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = this.addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }
  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}

const countdown = new Countdown({
  onTick: updateClockFace,
});

const days = 0;
const hours = 0;
const mins = 0;
const secs = 0;

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
    dateTime: document.querySelector('#datetime-picker')
};

let flatDate = 0;
let delta = 0;
const dateNow = Date.now();

refs.startBtn.addEventListener('click', () => {
  countdown.start();
});

function updateClockFace({ days, hours, mins, secs }) {
  refs.days = days;
  refs.hours = hours;
  refs.minutes = mins;
  refs.seconds = secs;
};
    
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) { 
      console.log(`selectedDates[0]`, selectedDates[0]);
      console.log(`flatDate1`, flatDate);
      flatDate = selectedDates[0].getTime();
      console.log(`flatDate2`, flatDate);
        if (selectedDates[0] < dateNow) {
        //   ref.startBtn.dataset.start.disabled = true;
          console.error("Please choose a date in the future");
          window.alert("Please choose a date in the future");
          return;
      }
  },
};

refs.dateTime.addEventListener('click', flatpickr("#datetime-picker", options));

