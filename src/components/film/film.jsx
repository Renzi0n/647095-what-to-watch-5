import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import filmTypes from '../../prop-types/film-types';
import FilmsList from '../films-list/films-list';

const MAX_FILMS = 4;
const FILM_RATES = {
  bad: {
    name: `Bad`,
    max: 3
  },
  normal: {
    name: `Normal`,
    min: 3,
    max: 5
  },
  good: {
    name: `Good`,
    min: 5,
    max: 8
  },
  veryGood: {
    name: `Very good`,
    min: 8,
    max: 10
  },
  awesome: {
    name: `Awesome`,
    max: 10
  },
};

const getTextRateOfFilm = (rate) => {
  switch (true) {
    case rate < FILM_RATES.bad.max:
      return FILM_RATES.bad.name;
    case rate >= FILM_RATES.normal.min && rate < FILM_RATES.normal.max:
      return FILM_RATES.normal.name;
    case rate >= FILM_RATES.good.min && rate < FILM_RATES.good.max:
      return FILM_RATES.good.name;
    case rate >= FILM_RATES.veryGood.min && rate < FILM_RATES.veryGood.max:
      return FILM_RATES.veryGood.name;
    case rate === FILM_RATES.awesome.max:
      return FILM_RATES.awesome.name;
  }

  throw new Error(`Invalid value`);
};

const Film = (props) => {
  const {film, likeThis} = props;

  const {
    title,
    previewSrc,
    genre,
    year,
    posterSrc,
    overview
  } = film;
  const {
    rate,
    votes,
    text,
    director,
    starring
  } = overview;

  const textRateOfFilm = getTextRateOfFilm(rate);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={posterSrc} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to='/' className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to='/film/:id/review' className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={previewSrc} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{rate}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{textRateOfFilm}</span>
                  <span className="movie-rating__count">{votes} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{text}</p>

                <p className="movie-card__director"><strong>Director: {director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">

            <FilmsList films={likeThis.slice(0, MAX_FILMS)}/>

          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  film: PropTypes.shape(filmTypes).isRequired,
  likeThis: PropTypes.arrayOf(PropTypes.shape(filmTypes).isRequired).isRequired
};

export default Film;
