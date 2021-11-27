import {connect} from 'react-redux';
import {getBooksAction} from '../../redux/actions/books.action';
import BooksPage from "./books.page";

const mapStateToProps = (state) => {
    return {
        books: state.books,
        total: state.total
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetBooks: (state, merge, onLoad) => {
            dispatch(getBooksAction(state, merge, onLoad));
        }
    };
};

export const SearchBooksPage = connect(mapStateToProps, mapDispatchToProps)(BooksPage);