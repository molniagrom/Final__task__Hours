let timerId; // переменная, которая будет хранить ID таймера

function updateClock() {
  const clock = document.getElementById("clock");

  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.textContent = hours + ":" + minutes + ":" + seconds;
}

const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
  timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
  clearInterval(timerId); // останавливаем таймер
});
