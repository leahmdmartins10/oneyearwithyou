document.addEventListener('DOMContentLoaded', function() {
    const timelines = document.querySelectorAll('.timeline');

    timelines.forEach(timeline => {
        const points = timeline.querySelectorAll('.timeline-point');
        const numberOfPoints = points.length;

        // Position the timeline points based on their index
        points.forEach((point, index) => {
            const position = (index / (numberOfPoints - 1)) * 100;
            point.style.left = `${position}%`;
        });

        // Handle dynamic pop-up positioning
        points.forEach(point => {
            const popup = point.querySelector('.popup-content');

            point.addEventListener('mouseover', function() {
                // Only calculate and set the `top` position if it's not already set
                if (!popup.style.top || popup.style.top === 'auto') {
                    const popupHeight = popup.offsetHeight;
                    popup.style.top = `-${popupHeight + 10}px`; // Position the popup above
                }

                // Adjust the pop-up if it's too far to the side of the screen
                const popupRect = popup.getBoundingClientRect();
                if (popupRect.right >= window.innerWidth) {
                    popup.style.left = `calc(100% - ${popup.offsetWidth + 20}px)`;
                    popup.style.transform = 'none'; // Disable centering if near edge
                } else if (popupRect.left < 0) {
                    popup.style.left = '20px';
                    popup.style.transform = 'none'; // Disable centering if near edge
                } else {
                    popup.style.left = '50%'; // Center horizontally
                    popup.style.transform = 'translateX(-50%)'; // Adjust to center
                }
                popup.style.display = 'block'; // Show the popup
            });

            point.addEventListener('mouseout', function() {
                popup.style.display = 'none'; // Hide the popup
            });
        });
    });
});


let currentIndex = { 'carousel-one': 0, 'carousel-two': 0 }; // Store current index for each carousel

function showSlide(index, carouselId) {
    const slides = document.querySelectorAll(`#${carouselId} .carousel-images img`);
    const totalSlides = slides.length;

    // Wrap around the index
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });

    // Update the active index
    currentIndex[carouselId] = index;

    return index; // Return the updated index
}

function moveSlide(step, carouselId) {
    const newIndex = currentIndex[carouselId] + step; // Update the index based on step
    showSlide(newIndex, carouselId); // Show the new slide
}

// Initialize the first slide for each carousel
document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-images img');
    images.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none'; // Show only the first image
    });
});
