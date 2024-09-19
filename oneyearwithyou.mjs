document.querySelectorAll('.timeline-point').forEach(point => {
    point.addEventListener('mouseover', function() {
        this.querySelector('.popup-content').style.display = 'block';
    });

    point.addEventListener('mouseout', function() {
        this.querySelector('.popup-content').style.display = 'none';
    });
});