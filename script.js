// Select all clickable images
const images = document.querySelectorAll('.clickable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

// Add click event listener to each image
images.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImg.src = image.src; // Set the lightbox image to the clicked image
        lightbox.classList.remove('hidden'); // Show the lightbox
    });
});

// Close lightbox when clicking the close button
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden'); // Hide the lightbox
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.add('hidden'); // Hide the lightbox
    }
});