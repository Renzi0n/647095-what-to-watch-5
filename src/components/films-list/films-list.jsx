import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmTypes from '../../prop-types/film-types';

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: {}
    };

    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseOver(activeFilm) {
    this.setState({activeFilm});
  }

  render() {
    const {films} = this.props;

    return (
      films.map((film) => (
        <FilmCard
          key={film.title}
          film={film}
          onMouseOver={this.onMouseOver}
        />
      ))
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmTypes).isRequired).isRequired
};

export default FilmsList;
