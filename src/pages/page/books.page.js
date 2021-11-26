import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import {BookType} from '../../types/types';
import Search from '../../components/search/search.component';
import {ProgressCircularComponent} from '../../components/progress/progress.circular.component';
import {BookCardComponent} from "../book/book.card.component";
import BooksCardsComponent from "../books/books.cards.component";

const BooksPage = ({books, total, onGetBooks}) => {
    const [query, setQuery] = useState({text: '', categories: '', sort: 'relevance', startIndex: 0});
    const [onLoad, setOnLoad] = useState(false);
    const ref = useRef(null);

    const changeBooksQuery = (field, value) => {
        const state = {...query, [field]: value};
        setQuery(state);
    };

    const handleLoad = (loading) => {
        setOnLoad(loading);
    };

    const handleClickMore = () => {
        handleLoad(true);
        if (books.length > total) {
            ref.current.style.display = 'none';
        } else {
            const state = {...query};
            state.startIndex += 30;
            setQuery(state);
            onGetBooks(query, true, handleLoad);
        }
    };

    const load = () => {
        if (onLoad) {
            return <ProgressCircularComponent/>
        } else if (total) {
            return <div>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<BooksCardsComponent books={books} total={total} ref={ref} handleClickMore={handleClickMore}/>}/>
                        <Route path='/bookCard/:id' element={<BookCardComponent books={books}/>}/>
                    </Routes>
                </Router>
            </div>
        }
    };

    return (
        <div>
            <Search onGetBooks={onGetBooks}
                    onLoad={handleLoad}
                    query={query}
                    onChangeBooksQuery={changeBooksQuery}/>
            {load()}
        </div>
    );
};

BooksPage.propTypes = {
    books: PropTypes.arrayOf(BookType).isRequired,
    total: PropTypes.number.isRequired,
    onGetBooks: PropTypes.func.isRequired
};

export default BooksPage;