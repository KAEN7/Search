const change = document.getElementById('btn');
const formChange = document.querySelector('search-bar');
const searchBtn = document.getElementById('btn');
const main = document.getElementById('main');
const naver = document.getElementById('naver');
const google = document.getElementById('google');

function changeSearch() {
    if(btn.innerText === 'G') {
        btn.innerText = 'N';
        main.style.backgroundColor = 'green';     
        google.style.display = 'none';
        naver.style.display = 'block';
    } else {
        btn.innerText = 'G';
        main.style.backgroundColor = 'white';
        google.style.display = 'block';
        naver.style.display = 'none';
    }
}

if(change) {
    change.addEventListener('click', changeSearch);
}