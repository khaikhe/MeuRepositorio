document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const images = project.querySelectorAll('.image-slider .project-image');
        let currentImageIndex = 0;

        function showImage(index) {
            images[currentImageIndex].style.display = 'none';
            currentImageIndex = index;
            images[currentImageIndex].style.display = 'block';
        }

        project.querySelector('.prev').addEventListener('click', function() {
            showImage((currentImageIndex - 1 + images.length) % images.length);
        });

        project.querySelector('.next').addEventListener('click', function() {
            showImage((currentImageIndex + 1) % images.length);
        });
        document.addEventListener("DOMContentLoaded", function() {
            // Quando a página carregar, adicione a classe que define a opacidade como 1
            document.getElementById("animated-text").style.opacity = "1";
        });

        images.forEach(img => {
            img.addEventListener('click', function() {
                img.classList.toggle('enlarged');
            });
            
        });
    });
});
