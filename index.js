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

