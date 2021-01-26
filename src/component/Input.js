import React from 'react';

function Input({id, href}) {
    return (
        <form id={id} action={href}>
            <input type='text' placeholder='검색어를 입력하세요' />
            <button></button>
        </form>
    )
}

export default Input;