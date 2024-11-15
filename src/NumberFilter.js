import React from "react";

const numberslist = ['1', '2', '3', '4', '5', '6'];

function NumberFilter({ numbers = numberslist }) {
    return (
      <ul>
        {numbers.filter(num => num % 2 === 0).map((num, index) => (
        <li key={index}>{num}</li>
        ))}
      </ul>
    );
  }
  


export default NumberFilter;