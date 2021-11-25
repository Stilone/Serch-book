import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const ProgressCircular = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <CircularProgress/>
        </Box>
    );
};