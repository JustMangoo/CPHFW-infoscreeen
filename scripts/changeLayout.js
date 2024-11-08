let inactivityTimer;

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
  .getElementById("exploreBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeLayoutToActive();
    resetInactivityTimer();
  })

  [("onclick", "onmousemove", "onkeypress")].forEach((eventType) => {
    document.addEventListener(eventType, resetInactivityTimer);
  });
