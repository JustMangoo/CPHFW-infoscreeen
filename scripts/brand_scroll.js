document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".brand-carousel");

  // Duplicate all images for infinite effect
  carousel.innerHTML += carousel.innerHTML;

  let scrollAmount = 0;

  function animateCarousel() {
    scrollAmount -= 0.2; // Adjust this value for speed; -1 is slow, increase for faster
    if (scrollAmount <= -carousel.scrollWidth / 2) {
      scrollAmount = 0; // Reset scroll amount to loop back
    }
    carousel.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(animateCarousel);
  }

  animateCarousel();
});
