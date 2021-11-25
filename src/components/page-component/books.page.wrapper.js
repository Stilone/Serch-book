import {getBooksAction} from '../../redux/actions/books.action';
import {connect} from 'react-redux';
import BooksPage from './books.page.component';

const mapStateToProps = (state) => {
    return {
        books: state.books,
        total: state.total
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetBooks: (state, merge, onLoad) => {
            dispatch(getBooksAction(state, merge, onLoad));
        }
    }
}

export const BooksPageComponent = connect(mapStateToProps, mapDispatchToProps)(BooksPage);