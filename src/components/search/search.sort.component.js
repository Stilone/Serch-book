import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Box from '@mui/material/Box';

const SearchSortComponent = ({onChangeBooksQuery}) => {
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

SearchSortComponent.propTypes = {
    onChangeBooksQuery: PropTypes.func.isRequired
};

export default SearchSortComponent;
