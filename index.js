let timerId; // variable for storing the timer ID

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date(); // получаем текущую дату и время

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Добавляем 0 перед значениями, если они меньше 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Обновляем текст в элементе clock
  clock.textContent = hours + ":" + minutes + ":" + seconds;
}

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

// Запуск таймера при нажатии на start
startButton.addEventListener("click", function () {
  if (!timerId) { // проверка, чтобы не запустить несколько таймеров одновременно
    timerId = setInterval(updateClock, 1000); // запуск обновления каждую секунду
  }
});

// Остановка таймера при нажатии на stop
stopButton.addEventListener("click", function () {
  if (timerId) { // проверка, что таймер был запущен
    clearInterval(timerId); // остановка таймера
    timerId = null; // сбрасываем ID таймера
  }
});
