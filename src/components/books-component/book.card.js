import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const BookCard = ({state}) => {
    const navigate = useNavigate()
    const params = useParams()
    const handleClick = () => {
        navigate('/')
    }

    return (
        <div>
            <Button size='small' onClick={handleClick}>Back</Button>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    component='img'
                    alt='green iguana'
                    height='340'
                    image={state[params.id].volumeInfo.imageLinks ? state[params.id].volumeInfo.imageLinks.smallThumbnail : 'https://bookmix.ru/groups/images/0/3/9/groups_1582375475.jpg'}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {state[params.id].volumeInfo.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        categories: {state[params.id].volumeInfo.categories ? state[params.id].volumeInfo.categories : 'no category'}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        authors: {state[params.id].volumeInfo.authors}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {state[params.id].volumeInfo.description ? state[params.id].volumeInfo.description : 'no description'}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};
