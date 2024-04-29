// show and hide navbar
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const navbarToggle = document.querySelector('.navbar-toggle');
    navbarLinks.classList.toggle('show');
    navbarToggle.classList.toggle('open');
  }
  
  // Function to set the theme based on browser preference
  function setThemeFromBrowserPreference() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const root = document.documentElement;
    const sunIcon = document.getElementById("sunIcon");
    const moonIcon = document.getElementById("moonIcon");
  
    if (prefersDarkMode) {
      root.setAttribute("data-theme", "dark");
      moonIcon.style.display = "inline"; // Show moon icon
    } else {
      root.setAttribute("data-theme", "light");
      sunIcon.style.display = "inline"; // Show sun icon
    }
  }
  
  // Function to toggle between dark and light mode
  function toggleDarkMode() {
    const root = document.documentElement;
    const sunIcon = document.getElementById("sunIcon");
    const moonIcon = document.getElementById("moonIcon");
  
    // Check if dark mode is enabled
    const isDarkMode = root.getAttribute("data-theme") === "dark";
  
    // Toggle dark mode
    if (isDarkMode) {
      root.setAttribute("data-theme", "light");
      sunIcon.style.display = "inline"; // Show sun icon
      moonIcon.style.display = "none"; // Hide moon icon
    } else {
      root.setAttribute("data-theme", "dark");
      sunIcon.style.display = "none"; // Hide sun icon
      moonIcon.style.display = "inline"; // Show moon icon
    }
  
    // Store the user's preference in local storage
    localStorage.setItem("theme", root.getAttribute("data-theme"));
  }
  
  // Check if the user has a preference stored in local storage, otherwise set theme based on browser preference
  document.addEventListener("DOMContentLoaded", function () {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      setThemeFromBrowserPreference();
    }
  
    // Show the appropriate icon based on the theme
    const sunIcon = document.getElementById("sunIcon");
    const moonIcon = document.getElementById("moonIcon");
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      moonIcon.style.display = "inline";
    } else {
      sunIcon.style.display = "inline";
    }
  });