import React from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import Naver from './component/Naver';
import Google from './component/Google';

function App() {
    state = {
        naverAct: {action: 'http://www.google.co.kr/search'},
        googleAct: {action: 'https://search.naver.com/search.naver?ie=UTF-8&query=" target="_self'}
    }
    const change = document.getElementById('btn');
    const formChange = document.querySelector('search-bar');
    const btn = document.getElementById('btn');
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
            <Naver 
                action={this.state.naverAct.action}
            />
            <Google
                action={this.state.googleAct.action}
            />
            {/* <div className="search-engine">
                <button id="btn">G</button>
            </div>
            <form className="search-bar" id="google" name="searchBar" method="get" action="http://www.google.co.kr/search" target="_self" >
                <input id="searchTag" type="text" name="q" maxlength="255" value="" /> 구글 검색 입력 창
                <input id="submitBtn" type="submit" name="btnG" value="" /> 검색 버튼
            </form>
            <form className="search-bar" id="naver" method="get" action="https://search.naver.com/search.naver?ie=UTF-8&query=" target="_self" >
                <input id="searchTag" type="text" name="q" maxlength="255" value="" />
                <input id="submitBtn" type="submit" name="btnG" value="" />
            </form> */}
        </main>
  );
}

export default App;