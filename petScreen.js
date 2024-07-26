document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function(event) {
        const graySquares = document.querySelectorAll('.graySquare');

        // Clicked on .graySquare
        if (event.target.classList.contains('graySquare') || event.target.closest('.graySquare')) {
            graySquares.forEach(square => {
                square.classList.add('hidden');
            });
        } else {
            // Clicked outside .graySquare
            graySquares.forEach(square => {
                square.classList.remove('hidden');
            });
        }
    });
});