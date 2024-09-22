document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline');
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
                const popupWidth = popup.offsetWidth;
                popup.style.top = `-${popupHeight + 10}px`; // Position the popup above
            }

            // adjusting the pop up if it's too far to the side of the screen
            const popupRect = popup.getBoundingClientRect();
            if (popupRect.right >= window.innerWidth) {
                const popupWidth = popup.offsetWidth;
                popup.style.left = `-${window.innerWidth - popupWidth - 1050}px`;
                popup.style.transform = 'none'; // Disable centering if near edge
            }

            // Adjust pop-up if it's too close to the left edge of the screen
            if (popupRect.left < 0) {
                popup.style.left = '20px';
                popup.style.transform = 'none'; // Disable centering if near edge
            }
            popup.style.display = 'block'; // Show the popup
        });

        point.addEventListener('mouseout', function() {
            popup.style.display = 'none'; // Hide the popup
        });
    });
});
