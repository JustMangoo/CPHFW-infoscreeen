document.addEventListener("DOMContentLoaded", function () {
  fetch("data/posts.json")
    .then((response) => response.json())
    .then((posts) => {
      const carouselSection = document.querySelector(".photo-carousels");

      posts.forEach((post) => {
        let carouselRow = carouselSection.querySelector(
          `.carousel-row[data-row="${post.row}"]`
        );
        if (!carouselRow) {
          carouselRow = document.createElement("ul");
          carouselRow.className = "carousel-row";
          carouselRow.setAttribute("data-row", post.row);
          carouselSection.appendChild(carouselRow);
        }

        const postItem = document.createElement("li");
        postItem.className = "post";
        postItem.innerHTML = `
            <div class="author">
              <img src="${post.profilePic}" alt="Profile of ${post.username}" />
              <p>${post.username}</p>
            </div>
            <img src="${post.photo}" alt="Post by ${post.username}" class="post-photo"/>
          `;

        carouselRow.appendChild(postItem);
      });
    })
    .catch((error) => console.error("Error loading posts:", error));

  var carouselRows =
    document.querySelector(".carousel-row").parentElement.children;

  console.log(carouselRows);

  carouselRows.forEach((carousel) => {
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

  // Duplicate all images for infinite effect
});
