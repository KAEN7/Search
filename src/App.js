import React from 'react';
import './reset.css';
import './App.css';
import Input from './component/Input';

function App(props) {
    state = {
        mode: 'main',
        contents: [
            {id:1, href:'http://www.google.co.kr/search'},
            {id:2, href:'https://search.naver.com/search.naver?ie=UTF-8&query="'}
        ]
    }
    
    return (
        <Input
            id={this.state.contents.id}
            href={this.state.contents.href}
        />
    );
}

export default App;