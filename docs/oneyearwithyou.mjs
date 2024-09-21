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
                popup.style.top = `-${popupHeight + 10}px`; // Position the popup above
            }
            popup.style.display = 'block'; // Show the popup
        });

        point.addEventListener('mouseout', function() {
            popup.style.display = 'none'; // Hide the popup
        });
    });
});
