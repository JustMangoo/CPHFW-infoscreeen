// Select all list items and map pins
const listItems = document.querySelectorAll(".location-info ul li");
const pins = document.querySelectorAll(".map .pins");
const yourLocationPin = document.querySelector(".map .your-location");

// Function to add focus to the correct pin
listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Remove focus from all pins and your location pin
    pins.forEach((pin) => pin.classList.remove("focus"));
    yourLocationPin.classList.remove("focus");

    // Check if the clicked item is the "Your current location" item
    if (index === 0) {
      // Add focus to "Your location" pin
      yourLocationPin.classList.add("focus");
    } else {
      // Add focus to the pin corresponding to the numbered list item
      const pinIndex = index - 1; // Adjust index to start from 0 for numbered pins
      if (pins[pinIndex]) {
        pins[pinIndex].classList.add("focus");
      }
    }
  });
});
