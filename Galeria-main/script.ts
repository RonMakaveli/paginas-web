const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
const galleryImages = document.querySelectorAll<HTMLImageElement>('.gallery img');

function filterImages(category: string) {
  // Embaralhar imagens quando a categoria for "todos"
  if (category === 'all') {
    shuffle(galleryImages);
  }

  galleryImages.forEach(image => {
    const imageCategory = image.getAttribute('data-category');
    if (category === 'all' || category === imageCategory) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function shuffle(array: NodeListOf<HTMLImageElement>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    array[i].parentNode.insertBefore(array[j], array[i].nextSibling);
  }
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-category');
    filterImages(category);
  });
});
