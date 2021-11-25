import React, {useRef, useState} from 'react';
import Search from '../../components/search-component/search.component';
import BooksCards from './books.cards';
import Button from '@mui/material/Button';
import {ProgressCircular} from '../../components/progress-component/progress.circular';
import PropTypes from 'prop-types';
import {BookType} from '../../types/types';

const BooksPage = ({books, total, onGetBooks}) => {
    const [condition, setCondition] = useState({text: '', categories: '', sort: 'relevance', startIndex: 0});
    const [onLoad, setOnLoad] = useState(false);
    const ref = useRef(null);

    const changeBooksQuery = (field, value) => {
        const state = {...condition, [field]: value};
        setCondition(state);
    };

    const handleLoad = (loading) => {
        setOnLoad(loading);
    };

    const handleClick = () => {
        handleLoad(true);
        if (books.length > total) {
            ref.current.style.display = 'none';
        } else {
            const state = {...condition};
            state.startIndex += 30;
            setCondition(state);
            onGetBooks(condition, true, handleLoad);
        }
    };

    const load = () => {
        if (onLoad) {
            return <ProgressCircular/>
        } else if (total) {
            return <div>
                <p>Books found: {total}</p>
                <BooksCards books={books}/>
                <Button variant='contained' ref={ref} onClick={handleClick}>Load more...</Button>
            </div>
        }
    };

    return (
        <div>
            <Search onGetBooks={onGetBooks}
                    onLoad={handleLoad}
                    condition={condition}
                    onChangeBooksQuery={changeBooksQuery}/>
            {load()}
        </div>
    );
};

BooksPage.propTypes = {
    books: PropTypes.arrayOf(BookType).isRequired,
    total: PropTypes.number.isRequired,
    onGetBooks: PropTypes.func.isRequired
}

export default BooksPage;