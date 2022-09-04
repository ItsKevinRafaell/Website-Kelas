window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loaddr.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logo2 = document.querySelector(".logo-second");
let logo3 = document.querySelector(".logo-third");
let logoSpan = document.querySelectorAll(".logo-span");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, id) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (id + 1) * 100);
    });

    setTimeout(() => {
      logoSpan.forEach((span, id) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (id + 1) * 50);
      });
    }, 4500); //set 3000

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 6000); //set 3500
  });
});

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-brightness-high-fill");
  if (this.classList.toggle("bi-moon")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});

setInterval(showTime, 1000); // takes time as 1 s and execute the function for every second.

function showTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let period = "AM";

  // Set the clock in 12 hr format
  // If hours is equal to 0 at midnight, we set to 12, and if greater than 12, we will
  //subtract it from 12.
  if (hours == "0") {
    hours = 12;
  }
  if (hours > 12) {
    hours -= 12;
    period = "PM";
  }

  // when the hrs is less than 10, we are concantenate with 0, otherwise leave it hrs.
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  // displayin to UI
  const time = `${hours} : ${minutes} : ${seconds}  ${period} `;
  document.getElementById("clock").innerHTML = time;
}
showTime();
