let currentImageIndex = 0;
        const images = document.querySelectorAll('#servicos img');

        function showImage(index) {
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = 'none'; // Oculta todas as imagens
            }
            if (index >= 0 && index < images.length) {
                images[index].style.display = 'block'; // Exibe a imagem específica
                currentImageIndex = index;
            }
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }

        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        }

        window.onload = function () {
            showImage(currentImageIndex);
            setInterval(nextImage, 3000); // Altera a imagem a cada 3 segundos
        };