var filterBtns = document.querySelectorAll('.filter-btn');
var galleryImages = document.querySelectorAll('.gallery img');
function filterImages(category) {
    // Embaralhar imagens quando a categoria for "todos"
    if (category === 'all') {
        shuffle(galleryImages);
    }
    galleryImages.forEach(function (image) {
        var imageCategory = image.getAttribute('data-category');
        if (category === 'all' || category === imageCategory) {
            image.style.display = 'block';
        }
        else {
            image.style.display = 'none';
        }
    });
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        array[i].parentNode.insertBefore(array[j], array[i].nextSibling);
    }
}

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        filterBtns.forEach(function (btn) { return btn.classList.remove('active'); });
        btn.classList.add('active');
        var category = btn.getAttribute('data-category');
        filterImages(category);
    });
});