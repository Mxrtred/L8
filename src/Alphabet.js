import React from 'react';

function Alphabet({ items }) {
    const sortedItems = [...items].sort();

    return (
        <ul>
            {sortedItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default Alphabet;