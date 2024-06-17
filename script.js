document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.image-slider');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.project-image');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                if (i === index) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        }

        // Exibe a primeira imagem ao carregar a página
        showImage(currentIndex);

        prevBtn.addEventListener('click', () => {
            images[currentIndex].classList.remove('enlarged'); // Remove a classe enlarged da imagem atual antes de mudar o índice
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            showImage(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            images[currentIndex].classList.remove('enlarged'); // Remove a classe enlarged da imagem atual antes de mudar o índice
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            showImage(currentIndex);
        });

        // Evento de clique na imagem para expandir/voltar ao tamanho original
        images.forEach(img => {
            img.addEventListener('click', () => {
                img.classList.toggle('enlarged');
            });
        });
    });
});
