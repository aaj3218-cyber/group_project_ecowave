// Get all elements with the 'wetsuit' class
const cardElements = document.querySelectorAll('.wetsuit');

// List of background images
const backgroundImages = [
  "https://cdn.glitch.global/3ead7f68-ded6-4c94-a1e3-372b680bbc16/2-side.jpg?v=1732957061129",
  "https://cdn.glitch.global/3ead7f68-ded6-4c94-a1e3-372b680bbc16/male%20wetsuit.jpg?v=1733010181659",
];

let currentIndex = 0;

// Function to rotate background images for each wetsuit element
function rotateBackground() {
  // Loop through each wetsuit card element
  cardElements.forEach(cardElement => {
    cardElement.style.backgroundImage = `url("${backgroundImages[currentIndex]}")`;
  });

  // Update the index to rotate images
  currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Set interval for rotation (e.g., every 5 seconds)
setInterval(rotateBackground, 4000); // Adjust the time as needed
