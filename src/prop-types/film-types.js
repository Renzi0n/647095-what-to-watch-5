import PropTypes from 'prop-types';

export default {
  title: PropTypes.string.isRequired,
  previewSrc: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  posterSrc: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  overview: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired
  }).isRequired,
  details: PropTypes.shape({
    runTime: PropTypes.string.isRequired,
    fullStarring: PropTypes.string.isRequired
  }),
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired,
};
