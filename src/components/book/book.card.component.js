import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate, useParams} from 'react-router-dom';
import {BookType} from '../../types/types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const BookCardComponent = ({books}) => {
    const navigate = useNavigate();
    const params = useParams();
    const handleClick = () => {
        navigate('/');
    };

    return (
            <Card className='card-container-item'>
                <CardMedia
                    component='img'
                    alt='green iguana'
                    height='500'
                    image={books[params.id].imageLinks ? books[params.id].imageLinks.thumbnail : 'https://bookmix.ru/groups/images/0/3/9/groups_1582375475.jpg'}
                />
                <div className='card-content'>
                    <Typography gutterBottom variant='h5' component='div'>
                        {books[params.id].title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        categories: {books[params.id].categories ? books[params.id].categories : 'no category'}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        authors: {books[params.id].authors}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {books[params.id].description ? books[params.id].description : 'no description'}
                    </Typography>
                    <Button size='small' onClick={handleClick}>Back</Button>
                </div>
            </Card>
    );
};

BookCardComponent.propTypes = {
    books: PropTypes.arrayOf(BookType).isRequired
};

export default BookCardComponent;
