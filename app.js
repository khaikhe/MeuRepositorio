document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;

    function changeImage(direction) {
        const images = document.querySelectorAll('.project-image');
        images[currentImageIndex].style.display = 'none'; // Oculta a imagem atual
        currentImageIndex += direction; // Atualiza o índice da imagem

        // Loop de volta ao início ou ao fim, se necessário
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        } else if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        }

        images[currentImageIndex].style.display = 'block'; // Mostra a nova imagem
    }

    const images = document.querySelectorAll('.project-image');

    images.forEach(img => {
        img.addEventListener('click', function() {
            img.classList.toggle('enlarged');
        });
    });
});
