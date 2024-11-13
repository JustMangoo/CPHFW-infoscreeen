let inactivityTimer;
const eventTypes = ["click", "mousemove", "keypress"];

function changeLayoutToInactive() {
  var page = document.getElementById("index-page");

  page.classList.remove("active");
}

function changeLayoutToActive() {
  var page = document.getElementById("index-page");

  page.classList.add("active");
}

function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    changeLayoutToInactive();
  }, 20000);
}

document
  .getElementById("index-page")
  .addEventListener("click", function (event) {
    changeLayoutToActive();
    resetInactivityTimer();
  });

eventTypes.forEach((eventType) => {
  document.addEventListener(eventType, resetInactivityTimer);
});
