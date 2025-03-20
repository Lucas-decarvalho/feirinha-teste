document.addEventListener('DOMContentLoaded', function() {
    const soundItems = document.querySelectorAll('.sound-item');

    soundItems.forEach(item => {
        item.addEventListener('click', function() {
            const soundFile = this.getAttribute('data-sound');
            const audio = new Audio(soundFile);
            audio.play();
        });
    });
});