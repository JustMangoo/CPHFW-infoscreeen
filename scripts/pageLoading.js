window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.opacity = "0"; // Fade out
  setTimeout(() => {
    loadingScreen.style.display = "none"; // Hide completely
  }, 300); // Delay to allow for fade-out transition
});
