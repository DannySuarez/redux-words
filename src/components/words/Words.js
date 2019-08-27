import React from 'react';
import PropTypes from 'prop-types';

function Words({ dictionary }) {
  const word = dictionary.map(word => {
    return <li key={word}> {word} </li>;
  });
  
  return (
    <ul>
      {word}
    </ul>
  );
}

Words.propTypes = {
  dictionary: PropTypes.array.isRequired
};

export default Words;
