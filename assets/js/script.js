const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const clear = document.querySelector('.fa-xmark');

searchInput.addEventListener('input', function () {
    if (searchInput.value.length > 0) {
        clear.classList.add('active');
    } else {
        clear.classList.remove('active');
    }
});
clear.addEventListener('click', function () {
    if (searchInput.value.length > 0) {
        searchInput.value = "";
        clear.classList.remove('active');
    }
});
searchButton.addEventListener('click', function () {
    if (searchInput.value.length > 0) {
        const searchQuery = searchInput.value;
        window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
    } else {
        window.click();
    }
});