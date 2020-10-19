import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const FilmCard = (props) => {
  const {film, onMouseOver} = props;
  const {title, previewSrc} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMouseOver(film)}>
      <div className="small-movie-card__image">
        <img src={previewSrc} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to='/film/:id' className="small-movie-card__link" >{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmCard;
