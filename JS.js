document.addEventListener('DOMContentLoaded', function () {
    var parallax = document.querySelector('.parallax');

    window.addEventListener('scroll', function () {
        var offset = window.pageYOffset;
        parallax.style.transform = 'translateY(' + offset * 0.6 + 'px)';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const totalPages = 4;

    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");

    prevPageButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            updatePage();
        }
    });

    nextPageButton.addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            updatePage();
        }
    });

    function updatePage() {
        // Скрываем все элементы
        const allElements = document.querySelectorAll(".sdfr");
        allElements.forEach(function (element) {
            element.style.display = "none";
        });

        // Показываем элементы текущей страницы
        const currentPageElements = document.querySelectorAll(".page-" + currentPage);
        currentPageElements.forEach(function (element) {
            element.style.display = "inline-block";
        });
    }

    // Показываем первую страницу при загрузке страницы
    updatePage();
});