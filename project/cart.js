const backgroundImages = [
    'asset/shoe4.jpg',
    'asset/shoe5.jpg',
    'asset/shoe2.jpg',
    'asset/shoe1.jpg'
];

let currentImageIndex = 0;

document.getElementById('change-background-right').addEventListener('click', function() {
    const container = document.getElementById('background-container');
    
    // Move to the next image (right arrow)
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    
    // Set the new background image
    container.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
});

document.getElementById('change-background-left').addEventListener('click', function() {
    const container = document.getElementById('background-container');
    
    // Move to the previous image (left arrow)
    currentImageIndex = (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length;
    
    // Set the new background image
    container.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
});