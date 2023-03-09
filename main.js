let search = document.querySelector('.search');
let searchBox = document.querySelector('.searchBox');
let close = document.querySelector('.close');

search.onclick = function() {
    searchBox.classList.add('active');
}

close.onclick = function() {
    searchBox.classList.remove('active');
}