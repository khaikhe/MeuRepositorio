document.addEventListener('DOMContentLoaded', function() {
    // Slider de Imagens
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

    // Animação para troca de seções conforme a rolagem
    const sections = document.querySelectorAll('section');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 1 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Handle initial scroll position
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
