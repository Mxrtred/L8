import React from 'react';

const strings = ['because', 'im', 'happy', 'aaa'];
const ListStrings = strings.map(string => <li>{string}</li>);

function StringList() {
    return <ul>{ListStrings}</ul>;
}
      
export default StringList;