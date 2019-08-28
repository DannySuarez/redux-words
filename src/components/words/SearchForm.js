import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ dictionary, handleOnChange }) {
  return <input type="text" value={dictionary} onChange={handleOnChange} />;
}

SearchForm.propTypes = {
  dictionary: PropTypes.string,
  handleOnChange: PropTypes.func
};

export default SearchForm;
