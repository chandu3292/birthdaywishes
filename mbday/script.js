const picContainer = document.getElementById('pic-container');
const wishesTextarea = document.getElementById('wishes');
const wishesText = document.createElement('div');
wishesText.classList.add('wishes-text');

const imageUrls = [
  'pic1.png',
  'pic2.jpg',
  'pic3.jpg',
];

function calculateImageSize() {
  const screenWidth = document.documentElement.clientWidth;

  // Calculate the width for each image (10% of the screen size)
  const imageWidth = screenWidth * 0.1;

  return { width: imageWidth };
}

function createAndDisplayImages() {
  const imageSize = calculateImageSize();
  const numImages = Math.ceil(screen.width / imageSize.width);

  for (let i = 0; i < numImages; i++) {
    for (let j = 0; j < imageUrls.length; j++) {
      const img = new Image();
      img.src = imageUrls[j];
      img.style.width = `${imageSize.width}px`;
      img.style.height = 'auto'; // Maintain the aspect ratio
      img.style.opacity = 0; // Start with opacity 0 for fade-in effect
      picContainer.appendChild(img);

      // Apply fade-in animation
      setTimeout(() => {
        img.style.opacity = 1;
      }, i * 300 + j * 100); // Adjust the timing as needed
    }
  }

  picContainer.style.backgroundImage = `url('${imageUrls[imageUrls.length - 1]}')`;
  picContainer.appendChild(wishesText);
}

createAndDisplayImages();

wishesTextarea.addEventListener('input', () => {
  wishesText.innerText = wishesTextarea.value;
});

// Update images on window resize
window.addEventListener('resize', () => {
  picContainer.innerHTML = ''; // Clear existing images
  createAndDisplayImages();
});
