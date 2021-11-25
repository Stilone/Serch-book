import React from 'react';
import Button from '@mui/material/Button';
import SearchBar from './search.bar';
import SearchSelect from './search.select';
import SearchSort from './search.sort';
import PropTypes from 'prop-types';

const Search = ({onGetBooks, onLoad, condition, onChangeBooksQuery}) => {
    const getBooks = () => {
        onLoad(true);
        onGetBooks(condition, false, onLoad);
    };

    return (
        <div className='searchContainer'>
            <p className='search-container-text'>Search for books</p>
            <div className='search-bar'>
                <SearchBar condition={condition} onChangeBooksQuery={onChangeBooksQuery}/>
                <Button variant='contained' className='btn-search' onClick={getBooks}>Search</Button>
            </div>
            <div className='search-select'>
                <SearchSelect onChangeBooksQuery={onChangeBooksQuery}/>
                <SearchSort onChangeBooksQuery={onChangeBooksQuery}/>
            </div>
        </div>
    );
};

Search.propTypes = {
    onGetBooks: PropTypes.func.isRequired,
    onLoad: PropTypes.func.isRequired,
    condition: PropTypes.shape({
        text: PropTypes.string,
        categories: PropTypes.string,
        sort: PropTypes.string,
        startIndex: PropTypes.number
    }).isRequired,
    onChangeBooksQuery: PropTypes.func.isRequired
}

export default Search

