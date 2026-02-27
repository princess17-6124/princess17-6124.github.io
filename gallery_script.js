const imageGallery = [
    "link",
    "link",
    "link"
];
const imageElement= document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-btn');
const prevButton = document.getElementById('next-btn');
let currentImageIndex = 0;
function updateImage() {
    imageElement.src = imageGallery[currentImageIndex];
}
updateImage();
nextButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % imageGallery.length;
    updateImage();
});
prevButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1) % imageGallery.length;
    updateImage();
});