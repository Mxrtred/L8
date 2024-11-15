import React from 'react';

const numbers = ['1', '2', '3', '4', '5'];
const ListNumbers = numbers.map(number => <li>{number}</li>);

function NumberList() {
    return <ul>{ListNumbers}</ul>;
}

export default NumberList; 