import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';

const SearchSelectComponent = ({onChangeBooksQuery}) => {
    const handleChange = (event) => {
        onChangeBooksQuery('categories', event.target.value);
    };
    const option = ['art', 'biography', 'computers', 'history', 'medical', 'poetry']

    return (
        <Box>
            <FormControl>
                <InputLabel variant='standard' htmlFor='uncontrolled-native'>
                    Categories
                </InputLabel>
                <NativeSelect
                    defaultValue='all'
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                    onChange={handleChange}
                >
                    <option value=' '>all</option>
                    {option.map(item => {
                       return <option key={item} value={item}>{item}</option>
                    })}
                </NativeSelect>
            </FormControl>
        </Box>
    );
};

SearchSelectComponent.propTypes = {
    onChangeBooksQuery: PropTypes.func.isRequired
};

export default SearchSelectComponent;
