let timer;
let isRunning = false;
let seconds = 0;
let lapCount = 0;

const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

function formatTime(sec) {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(seconds);
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateDisplay();
    lapList.innerHTML = '';
    lapCount = 0;
});

document.getElementById('lap').addEventListener('click', () => {
    if (isRunning) {
        lapCount++;
        const lapTime = document.createElement('li');
        lapTime.textContent = `Lap ${lapCount}: ${formatTime(seconds)}`;
        lapList.appendChild(lapTime);
    }
});
