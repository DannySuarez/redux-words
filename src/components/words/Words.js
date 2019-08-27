import React from 'react';

function Words({ array = ['a', 'b'] }) {

  const word = array.map(word => {
    return <li key={Math.random()}> {word} </li>;
  });

  return (
    <ul>
      {word}
    </ul>
  );
}

export default Words;
