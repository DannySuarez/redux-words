import React from 'react';
import PropTypes from 'prop-types';
import SearchWords from '../../containers/SearchWords';
import TopWords from '../../containers/TopWords';

export default function Searchable({ match }) {
  return (
    <>
      <SearchWords />
      <TopWords match={match} />
    </>
  );
}

Searchable.propTypes = {
  match: PropTypes.object.isRequired
};
