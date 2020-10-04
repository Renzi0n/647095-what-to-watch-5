import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import Main from '../main/main';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';

const App = (props) => {
  const {title, genre, year} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main title={title} genre={genre} year={year} />
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/mylist'>
          <MyList />
        </Route>
        <Route exact path='/film/:id'>
          <Film />
        </Route>
        <Route exact path='/film/:id/review'>
          <AddReview />
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
};

export default App;
