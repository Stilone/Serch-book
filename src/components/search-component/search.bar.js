import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const SearchBar = ({condition, onChangeBooksQuery}) => {
    const handleChange = (event) => {
        onChangeBooksQuery('text', event.target.value);
    };

    return (
        <Box
            component='form'
            sx={{
                '& > :not(style)': {m: 1, width: '70ch'},
            }}
            noValidate
            autoComplete='off'
        >
            <TextField
                id='outlined-basic'
                label='Enter the title'
                variant='outlined'
                value={condition.text}
                onChange={handleChange}/>
        </Box>
    );
};

SearchBar.propTypes = {
    condition: PropTypes.shape({
        text: PropTypes.string,
        categories: PropTypes.string,
        sort: PropTypes.string,
        startIndex: PropTypes.number
    }).isRequired,
    onChangeBooksQuery: PropTypes.func.isRequired,
};

export default SearchBar