import {getBooksAction} from '../../redux/actions/books.action';
import {connect} from 'react-redux';
import BookCard from './book.card.component';

const mapStateToProps = (state) => {
    return {books: state.books};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetBooks: (state, merge, onLoad) => {
            dispatch(getBooksAction(state, merge, onLoad));
        }
    }
}

export const BookPageComponent = connect(mapStateToProps, mapDispatchToProps)(BookCard);