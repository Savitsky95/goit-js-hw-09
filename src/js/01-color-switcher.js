function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')

const bodyEl = document.body;
console.log(bodyEl)

let colorChangeTime = null;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  colorChangeTime = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor()
  }, 1000)
  stopBtn.disabled = false;
})

stopBtn.addEventListener('click', () => {
  clearInterval(colorChangeTime);
  stopBtn.disabled = true;
  startBtn.disabled = false;
})
