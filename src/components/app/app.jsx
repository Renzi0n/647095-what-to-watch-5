import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = (props) => {
  const {title, genre, year} = props;

  return (
    <Main title={title} genre={genre} year={year}/>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default App;
