import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchBarComponent = ({query, onChangeBooksQuery}) => {
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
                value={query.text}
                onChange={handleChange}/>
        </Box>
    );
};

SearchBarComponent.propTypes = {
    query: PropTypes.shape({
        text: PropTypes.string,
        categories: PropTypes.string,
        sort: PropTypes.string,
        startIndex: PropTypes.number
    }).isRequired,
    onChangeBooksQuery: PropTypes.func.isRequired,
};

export default SearchBarComponent;