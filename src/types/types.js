import PropTypes from 'prop-types';

export const BookType = PropTypes.shape({
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string
    }),
});