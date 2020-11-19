const change = document.getElementById('btn');
const formChange = document.querySelector('search-bar');
const searchBtn = document.getElementById('btn');

function changeSearch(e) {
    $('#search-bar').attr('action','https://search.naver.com/search.naver?query=');
    btn.innerText = 'N';
    console.log('gogo');
}


if(change) {
    change.addEventListener('click', changeSearch);
}