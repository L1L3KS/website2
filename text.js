
document.addEventListener('DOMContentLoaded', function () {
    var parallax = document.querySelector('.parallax');

    window.addEventListener('scroll', function () {
        var offset = window.pageYOffset;
        parallax.style.transform = 'translateY(' + offset * 0.6 + 'px)';
    });
});



function showPage(pageNumber) {
    // Скрыть все картинки
    var allImages = document.querySelectorAll('.newfr .sdfr');
    for (var i = 0; i < allImages.length; i++) {
      allImages[i].style.display = 'none';
    }

    // Отобразить картинки для выбранной страницы
    var imagesToShow = document.querySelectorAll('.newfr .sdfr.page-' + pageNumber);
    for (var i = 0; i < imagesToShow.length; i++) {
      imagesToShow[i].style.display = 'inline-block';
    }
  }
  showPage(1);
  document.addEventListener('DOMContentLoaded', function () {
    // Привязываем обработчики событий к кнопкам
    document.querySelector('.pagination button:first-child').addEventListener('click', () => navigatePage('prev'));
    document.querySelector('.pagination button:last-child').addEventListener('click', () => navigatePage('next'));
  });

  function navigatePage(direction) {
    if (direction === 'prev' && currentPage > 1) {
      currentPage--;
    } else if (direction === 'next' && currentPage < 4) { // Измените 4 на общее количество страниц
      currentPage++;
    }

    showPage(`page-${currentPage}`);
  }

document.addEventListener('DOMContentLoaded', function () {
    var parallax = document.querySelector('.parallax');

    window.addEventListener('scroll', function () {
        var offset = window.pageYOffset;
        parallax.style.transform = 'translateY(' + offset * 0.6 + 'px)';
    });
});



function showPage(pageNumber) {
    // Скрыть все картинки
    var allImages = document.querySelectorAll('.newfr .sdfr');
    for (var i = 0; i < allImages.length; i++) {
      allImages[i].style.display = 'none';
    }

    // Отобразить картинки для выбранной страницы
    var imagesToShow = document.querySelectorAll('.newfr .sdfr.page-' + pageNumber);
    for (var i = 0; i < imagesToShow.length; i++) {
      imagesToShow[i].style.display = 'inline-block';
    }
  }
  showPage(1);
  document.addEventListener('DOMContentLoaded', function () {
    // Привязываем обработчики событий к кнопкам
    document.querySelector('.pagination button:first-child').addEventListener('click', () => navigatePage('prev'));
    document.querySelector('.pagination button:last-child').addEventListener('click', () => navigatePage('next'));
  });

  function navigatePage(direction) {
    if (direction === 'prev' && currentPage > 1) {
      currentPage--;
    } else if (direction === 'next' && currentPage < 4) { // Измените 4 на общее количество страниц
      currentPage++;
    }

    showPage(`page-${currentPage}`);
  }

