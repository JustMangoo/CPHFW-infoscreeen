document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".brand-carousel");

  carousel.innerHTML += carousel.innerHTML;

  let scrollAmount = 0;

  function animateCarousel() {
    scrollAmount -= 0.2;
    if (scrollAmount <= -carousel.scrollWidth / 2) {
      scrollAmount = 0;
    }
    carousel.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(animateCarousel);
  }

  animateCarousel();
});
