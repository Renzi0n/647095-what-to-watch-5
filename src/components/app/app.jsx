import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import Main from '../main/main';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import filmTypes from '../../prop-types/film-types';

const App = (props) => {
  const {title, genre, year, films} = props;
  const [film] = films;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main
            title={title}
            genre={genre}
            year={year}
            films={films}
          />
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/mylist'>
          <MyList
            films={films}
          />
        </Route>
        <Route exact path='/film/:id'>
          <Film
            film={film}
            likeThis={films}
          />
        </Route>
        <Route exact path='/film/:id/review'>
          <AddReview
            film={film}
          />
        </Route>
        <Route exact path='/player/:id'>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(filmTypes).isRequired).isRequired,
};

export default App;
