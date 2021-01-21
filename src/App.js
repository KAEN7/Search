import logo from './logo.svg';
import './App.css';

function App() {
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
  return (
    <main id='main'>
        <div class="search-engine">
            <button id="btn">G</button>
        </div>
        <form class="search-bar" id="google" name="searchBar" method=get action="http://www.google.co.kr/search" target="_self" >
            <input id="searchTag" type=text name=q maxlength=255 value="" /> <!-- 구글 검색 입력 창 -->           
            <input id="submitBtn" type=submit name=btnG value="" /> <!-- 검색 버튼 -->
        </form>
        <form class="search-bar" id="naver" method=get action="https://search.naver.com/search.naver?ie=UTF-8&query=" target="_self" >
            <input id="searchTag" type=text name=q maxlength=255 value="" />         
            <input id="submitBtn" type=submit name=btnG value="" /> 
        </form>
    </main>
  );
}

export default App;
