document.addEventListener('DOMContentLoaded', function() {
    var currentImage = 1;
    var totalImages = 3;
  
    function changeImage(imageNumber) {
      if (imageNumber >= 1 && imageNumber <= totalImages) {
        // Oculta a imagem atual
        var currentImageContainer = document.querySelector('.image-container.active');
        if (currentImageContainer) {
          currentImageContainer.classList.remove('active');
        }
        
        // Exibe a nova imagem
        var newImageContainer = document.querySelector('.image-container:nth-child(' + imageNumber + ')');
        if (newImageContainer) {
          newImageContainer.classList.add('active');
        }
        
        currentImage = imageNumber;
      }
    }
  
    function rotateImages() {
      currentImage++;
      if (currentImage > totalImages) {
        currentImage = 1;
      }
      changeImage(currentImage);
    }
  
    // Exibe a primeira imagem imediatamente
    changeImage(currentImage);
  
    // Inicia a rotação das imagens após 5 segundos
    setInterval(rotateImages, 5000);
});
  
