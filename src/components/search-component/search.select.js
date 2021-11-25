import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';

export const SearchSelect = ({createInputChange}) => {
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
                    onChange={createInputChange('categories')}
                >
                    <option value=' '>all</option>
                    <option value='art'>art</option>
                    <option value='biography'>biography</option>
                    <option value='computers'>computers</option>
                    <option value='history'>history</option>
                    <option value='medical'>medical</option>
                    <option value='poetry'>poetry</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
};
