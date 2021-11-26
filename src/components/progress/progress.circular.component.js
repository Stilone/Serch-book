import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const ProgressCircularComponent = () => {
    return (
        <Box className='progress' sx={{display: 'flex'}}>
            <CircularProgress/>
        </Box>
    );
};