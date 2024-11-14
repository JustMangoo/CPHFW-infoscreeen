// Select overlay elements
const qrOverlay = document.getElementById("qrOverlay");
const closeOverlay = document.getElementById("closeOverlay");

// Show overlay when any .socials icon is clicked
document.querySelectorAll(".socials img").forEach((icon) => {
  icon.addEventListener("click", () => {
    qrOverlay.style.display = "flex";
  });
});

// Hide overlay when clicking the close button or outside the container
closeOverlay.addEventListener("click", () => {
  qrOverlay.style.display = "none";
});

qrOverlay.addEventListener("click", (event) => {
  if (event.target === qrOverlay) {
    qrOverlay.style.display = "none";
  }
});
