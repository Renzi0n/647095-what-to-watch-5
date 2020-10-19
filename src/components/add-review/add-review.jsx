import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import filmTypes from '../../prop-types/film-types';

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rate: 2,
      text: ``
    };
  }

  render() {
    const {film} = this.props;
    const {rate, text} = this.state;

    const {
      title,
      previewSrc,
      posterSrc,
    } = film;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={posterSrc} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to='/' className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to='/film/:id' className="breadcrumbs__link">{title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={previewSrc} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                {new Array(5).fill().map((it, i) => (
                  <React.Fragment key={`star-${i}`}>
                    <input
                      className="rating__input"
                      id={`star-${i}`}
                      type="radio" name="rating"
                      value={i}
                      checked={i === rate ? true : false}
                      onChange={() => {
                        this.setState({
                          rate: i
                        });
                      }}
                    />
                    <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text"
                id="review-text" placeholder="Review text"
                onChange={(evt) => {
                  const value = evt.target.value;

                  this.setState({
                    text: value
                  });
                }}
                value={text}
              />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

AddReview.propTypes = {
  film: PropTypes.shape(filmTypes).isRequired,
};

export default AddReview;
