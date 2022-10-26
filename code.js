const searchButton = document.querySelector('#search-button');
const loadingCircle = document.querySelector('#search-button div');

console.log(searchButton);

searchButton.addEventListener('click', toggleButton)

function toggleButton() {
    loadingCircle.classList.toggle('loading')
}