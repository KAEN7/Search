const change = document.getElementById('btn');
const formChange = document.querySelector('search-bar');
const searchBtn = document.getElementById('btn');
const main = document.getElementById('main');

function changeSearch() {
    if(btn.innerText === 'G') {
        btn.innerText = 'N';
        main.style.backgroundColor = 'green';
    } else {
        btn.innerText = 'G';
        main.style.backgroundColor = 'white';
    }
}


if(change) {
    change.addEventListener('click', changeSearch);
}