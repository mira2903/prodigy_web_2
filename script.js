let timer;
let startTime;
let running = false;
let laps = [];

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

function formatTime(ms) {
  const date = new Date(ms);
  return date.toISOString().substr(11, 8);
}

function update() {
  const elapsedTime = Date.now() - startTime;
  display.textContent = formatTime(elapsedTime);
}

function startTimer() {
  if (!running) {
    startTime = Date.now();
    timer = setInterval(update, 10);
    running = true;
  }
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  display.textContent = '00:00:00';
  laps = [];
  lapsList.innerHTML = '';
}

function lapTimer() {
  const elapsedTime = Date.now() - startTime;
  const lapTime = formatTime(elapsedTime);
  laps.push(lapTime);
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap ${laps.length}: ${lapTime}`;
  lapsList.appendChild(lapItem);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);
