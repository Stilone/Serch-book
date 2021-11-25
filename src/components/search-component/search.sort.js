import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const SearchSort = ({onChangeBooksQuery}) => {
    const handleChange = (event) => {
        onChangeBooksQuery('sort', event.target.value);
    };

    return (
        <Box>
            <FormControl>
                <InputLabel variant='standard' htmlFor='uncontrolled-native'>
                    Sorting by
                </InputLabel>
                <NativeSelect
                    defaultValue='relevance'
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                    onChange={handleChange}
                >
                    <option value='relevance'>relevance</option>
                    <option value='newest'>newest</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
};

SearchSort.propTypes = {
    onChangeBooksQuery: PropTypes.func.isRequired
}

export default SearchSort
