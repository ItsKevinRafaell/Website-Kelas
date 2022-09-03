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
    }, 2500);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 3000);
  });
});
