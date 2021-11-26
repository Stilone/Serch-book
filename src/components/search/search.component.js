import React from 'react';
import PropTypes from 'prop-types';
import SearchBarComponent from './search.bar.component';
import SearchSelectComponent from './search.select.component';
import SearchSortComponent from './search.sort.component';
import Button from '@mui/material/Button';

const Search = ({onGetBooks, onLoad, query, onChangeBooksQuery}) => {
    const getBooks = () => {
        onLoad(true);
        onGetBooks(query, false, onLoad);
    };

    return (
        <div className='search-container'>
            <p className='search-container-text'>Search for books</p>
            <div className='search-bar'>
                <SearchBarComponent query={query} onChangeBooksQuery={onChangeBooksQuery}/>
                <Button variant='contained' className='btn-search' onClick={getBooks}>Search</Button>
            </div>
            <div className='search-select'>
                <SearchSelectComponent onChangeBooksQuery={onChangeBooksQuery}/>
                <SearchSortComponent onChangeBooksQuery={onChangeBooksQuery}/>
            </div>
        </div>
    );
};

Search.propTypes = {
    onGetBooks: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired,
    query: PropTypes.shape({
        text: PropTypes.string,
        categories: PropTypes.string,
        sort: PropTypes.string,
        startIndex: PropTypes.number
    }).isRequired,
    onChangeBooksQuery: PropTypes.func.isRequired
};

export default Search;

