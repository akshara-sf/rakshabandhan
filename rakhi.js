window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".circle1").classList.replace("hidden", "visible");
  }, 1000);

  setTimeout(() => {
    document.querySelector(".circle2").classList.replace("hidden", "visible");
  }, 2000);

  setTimeout(() => {
    document.querySelector(".circle3").classList.replace("hidden", "visible");
  }, 3000);

  setTimeout(() => {
    document.querySelector(".shine").classList.replace("hidden", "visible");
  }, 4000);

  setTimeout(() => {
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 }
    });
  }, 4200);
});

function showCat() {
  document.getElementById("catPopup").style.display = "block";
}
