const cardElement = document.querySelector('.card2');

// List of background images
const backgroundImages = [
  "https://cdn.glitch.global/3ead7f68-ded6-4c94-a1e3-372b680bbc16/wetsuit2.jpg?v=1732936186091",
  "https://cdn.glitch.global/3ead7f68-ded6-4c94-a1e3-372b680bbc16/leases3.webp?v=1732936734361",
  "https://cdn.glitch.global/3ead7f68-ded6-4c94-a1e3-372b680bbc16/wax3.jpg?v=1732936806171",
  "https://cdn.glitch.global/3ead7f68-ded6-4c94-a1e3-372b680bbc16/wetsuit4.webp?v=1733014110122",
];

let currentIndex = 0;

// Function to rotate background images
function rotateBackground() {
  currentIndex = (currentIndex + 1) % backgroundImages.length; // Loop through the images
  cardElement.style.backgroundImage = `url("${backgroundImages[currentIndex]}")`;
}

// Set interval for rotation (e.g., every 5 seconds)
setInterval(rotateBackground, 5000); // Adjust the time as needed

    function toggleSideNavbar() {
      const sideNavbar = document.getElementById("sideNavbar");
      const overlay = document.getElementById("overlay");
      sideNavbar.classList.toggle("show");
      overlay.classList.toggle("show");
    }

    function toggleSubmenu(submenuId) {
      const submenu = document.getElementById(submenuId);
      submenu.classList.toggle("show");
    }
window.addEventListener('scroll', () => {
  const element = document.querySelector('.target');
  if (element.getBoundingClientRect().top < window.innerHeight * 0.7) {
    element.classList.add('animate');
  }
});