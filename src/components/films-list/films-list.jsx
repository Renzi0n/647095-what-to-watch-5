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

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(activeFilm) {
    this.setState({activeFilm});
  }

  onMouseLeave() {
    this.setState({});
  }

  render() {
    const {films} = this.props;

    return (
      films.map((film) => (
        <FilmCard
          key={film.title}
          film={film}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
      ))
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmTypes).isRequired).isRequired
};

export default FilmsList;
