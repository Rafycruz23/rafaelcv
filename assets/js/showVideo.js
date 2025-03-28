let currentIndex = 0;

function showVideo(index) {
    const gallery = document.querySelector('.gallery');
    const videos = document.querySelectorAll('.gallery video');
    if (index >= videos.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = videos.length - 1;
    } else {
        currentIndex = index;
    }
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextVideo() {
    showVideo(currentIndex + 1);
}

function prevVideo() {
    showVideo(currentIndex - 1);
}

// Initialize the gallery
showVideo(currentIndex);