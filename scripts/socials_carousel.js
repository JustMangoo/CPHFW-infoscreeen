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

      requestAnimationFrame(() => {
        const carouselRows = document.querySelectorAll(".carousel-row");

        carouselRows.forEach((carousel) => {
          let carouselRowNr = parseInt(carousel.dataset.row, 10);

          carousel.innerHTML += carousel.innerHTML;

          let scrollAmount = 0;
          const scrollSpeed = 0.2;

          function animateCarousel() {
            if (carouselRowNr % 2 === 0) {
              scrollAmount += scrollSpeed;
              if (scrollAmount >= carousel.scrollWidth * 1.35) {
                scrollAmount = 0;
              }
            } else {
              scrollAmount -= scrollSpeed;

              if (scrollAmount <= -carousel.scrollWidth / 2) {
                scrollAmount = 0;
              }
            }

            carousel.style.transform = `translateX(${scrollAmount}px)`;
            requestAnimationFrame(animateCarousel);
          }

          animateCarousel();
        });
      });
    })
    .catch((error) => console.error("Error loading posts:", error));
});
