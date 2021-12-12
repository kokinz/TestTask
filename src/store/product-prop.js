import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }),
}).isRequired;
