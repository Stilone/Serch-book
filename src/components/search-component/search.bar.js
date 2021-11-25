import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../css/css.css'

export const SearchBar = ({condition, createInputChange}) => {
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
                onChange={createInputChange('text')}/>
        </Box>
    );
};
