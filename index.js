let timerId; // variable for storing the timer ID

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date(); // get the current date and time

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add 0 before values if they are less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Update the text in the clock element
  clock.textContent = hours + ":" + minutes + ":" + seconds;
}

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("zeroing");

// Start the timer when the start button is clicked
startButton.addEventListener("click", function () {
  if (timerId) { // if the timer is already running, stop it first
    clearInterval(timerId);
  }
  timerId = setInterval(updateClock, 1000); // start a new timer
});

// Stop the timer when the stop button is clicked
stopButton.addEventListener("click", function () {
  if (timerId) {
    // check that the timer was started
    clearInterval(timerId); // stop the timer
    timerId = null; // reset the timer ID
  }
});

resetButton.addEventListener("click", function () {
  // Check if the timer is running
  if (timerId) { 
    clearInterval(timerId); // Stop the timer
    timerId = null; // Reset the timer ID
  }
  
  // Reset the clock display to "00:00:00"
  clock.textContent = "00:00:00";
});

// 🌟 The task with the asterisk. Explanation

// Проблема в том, что при многократном нажатии на кнопку "Запустить часы", код может создать несколько таймеров, даже если мы используем проверку if (!timerId). Это происходит потому, что после первого нажатия на кнопку таймер уже создаётся и хранится в переменной timerId, но повторные нажатия создают новый таймер, не сбрасывая предыдущий. Когда мы нажимаем "Остановить часы", мы останавливаем только последний созданный таймер, но предыдущие продолжают работать.

// Чтобы решить эту проблему, нужно обеспечить правильное отключение старого таймера, если кнопка "Запустить" нажимается повторно. Мы можем добавить логику для сброса текущего таймера перед созданием нового.

// .........................................................................

// The problem is that when we press the "Start clock" button repeatedly, the code may create several timers, even if we use the if (!timerId) check. This is because after the first click on the button, a timer is already created and stored in the timerId variable, but repeated clicks create a new timer without resetting the previous one. When we click "Stop clock", we stop only the last created timer, but the previous ones keep running. 

// To solve this problem, we need to ensure that the old timer is properly disabled if the "Start" button is pressed repeatedly. We can add logic to reset the current timer before creating a new one.
