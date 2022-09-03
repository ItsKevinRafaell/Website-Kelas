window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loaddr.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
