// Select the flags
const danishFlag = document.querySelector(".flag-danish");
const englishFlag = document.querySelector(".flag-english");

// Function to toggle the flags
function toggleFlags() {
  // Check which flag is currently shown
  const isDanishVisible = !danishFlag.classList.contains("hidden");

  // Toggle the visibility
  if (isDanishVisible) {
    danishFlag.classList.add("hidden");
    englishFlag.classList.remove("hidden");

    // Save the selected language to localStorage
    localStorage.setItem("language", "english");
  } else {
    englishFlag.classList.add("hidden");
    danishFlag.classList.remove("hidden");

    // Save the selected language to localStorage
    localStorage.setItem("language", "danish");
  }
}

// Add click event listeners to toggle flags
danishFlag.addEventListener("click", toggleFlags);
englishFlag.addEventListener("click", toggleFlags);

// Function to initialize flags based on localStorage
function initializeFlags() {
  const savedLanguage = localStorage.getItem("language");

  if (savedLanguage === "english") {
    danishFlag.classList.add("hidden");
    englishFlag.classList.remove("hidden");
  } else {
    englishFlag.classList.add("hidden");
    danishFlag.classList.remove("hidden");
  }
}

// Initialize flags on page load
initializeFlags();
