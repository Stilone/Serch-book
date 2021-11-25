import React from 'react';
import Button from '@mui/material/Button';
import '../../css/css.css'
import {SearchBar} from './search.bar';
import {SearchSelect} from './search.select';
import {SearchSort} from './search.sort';

export const SearchComponent = ({onGetBooks, handleLoad, condition, createInputChange}) => {
    const getBooks = () => {
        handleLoad(true)
        onGetBooks(condition, false, handleLoad)
    }

    return (
        <div className='searchContainer'>
            <p className='searchContainerText'>Search for books</p>
            <div className='searchBar'>
                <SearchBar condition={condition} createInputChange={createInputChange}/>
                <Button variant='contained' className='btnSearch' onClick={getBooks}>Search</Button>
            </div>
            <div className='searchSelect'>
                <SearchSelect createInputChange={createInputChange}/>
                <SearchSort createInputChange={createInputChange}/>
            </div>
        </div>
    );
};

