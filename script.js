window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loaddr.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
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
    }, 100); //set 3000

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 100); //set 3500
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
