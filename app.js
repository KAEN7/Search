const change = document.getElementById('btn');
const formChange = document.querySelector('search-bar');
// const action = document.getElementById('search-bar').action;

function changeSearch(e) {
    $('#search-bar').attr('action','https://search.naver.com/search.naver?query=');
    console.log('gogo');
}


if(change) {
    change.addEventListener('click', changeSearch);
}