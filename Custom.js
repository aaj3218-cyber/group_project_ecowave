function showImage(imageNumber) {
    const imageContainer = document.getElementById('image-container');
    const imageContainerContent = [
        'https://cdn.glitch.global/3ead7f68-ded6-4c94-a1e3-372b680bbc16/BlueSurfmarvel.jpeg?v=1733104146755',
        'https://cdn.glitch.global/3ead7f68-ded6-4c94-a1e3-372b680bbc16/Tealsurdmarvel.jpeg?v=1733104151613',
        'https://cdn.glitch.global/3ead7f68-ded6-4c94-a1e3-372b680bbc16/ombrepurplsurf.webp?v=1733143571207',
        'https://cdn.glitch.global/3ead7f68-ded6-4c94-a1e3-372b680bbc16/Newfirst.jpeg?v=1731971847066',
        'https://cdn.glitch.global/3ead7f68-ded6-4c94-a1e3-372b680bbc16/colage%20custom.jpg?v=1733145307855',
    ];

    // Hide the image container if already displaying an image
    imageContainer.style.display = 'block';
    
    // Create an image element and set the source
    const img = document.createElement('img');
    img.src = imageContainerContent[imageNumber - 1];
    img.alt = `Image ${imageNumber}`;
    
    // Clear any previous image and display the new one
    imageContainer.innerHTML = '';  // Clear previous image
    imageContainer.appendChild(img);  // Append the new image
}
