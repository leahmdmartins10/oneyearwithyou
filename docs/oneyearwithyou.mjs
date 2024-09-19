document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline');
    const points = timeline.querySelectorAll('.timeline-point');
    const numberOfPoints = points.length;
    
    points.forEach((point, index) => {
        // Adjust calculation to prevent clipping of the last point
        const position = (index / (numberOfPoints - 1)) * (100 - 5); // Subtract 5% to avoid clipping
        point.style.left = `${position}%`;
    });
});
