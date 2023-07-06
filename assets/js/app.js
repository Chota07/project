const countdownDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
const countdownTimer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();

  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysElement = document.getElementById("days");
  daysElement.textContent = days;

  const hoursElement = document.getElementById("hours");
  hoursElement.textContent = hours;

  const minutesElement = document.getElementById("minutes");
  minutesElement.textContent = minutes;

  const secondsElement = document.getElementById("seconds");
  secondsElement.textContent = seconds;

  if (distance < 0) {
    clearInterval(countdownTimer);
    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = "Countdown has ended.";
  }
}
