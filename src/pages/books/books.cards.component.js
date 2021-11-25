import React from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {BookType} from '../../types/types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BooksCardsComponent = ({books}) => {
    const navigate = useNavigate();

    const handleClick = (index) => {
        navigate(`/bookCard/${index}`);
    };

    const getTitle = (string) => {
        if (string.length >= 29) {
           return string.slice(0, 29) + '...';
        } else {
            return string;
        }
    };

    return (
        <div className='cards-container'>
            {books.map((item, index) =>
                <Card sx={{maxWidth: 180}} key={`book-${index}`} className='cards-container-item'>
                    <CardMedia
                        component='img'
                        alt='image is not default'
                        height='200'
                        image={item.imageLinks ? item.imageLinks.smallThumbnail : 'https://bookmix.ru/groups/images/0/3/9/groups_1582375475.jpg'}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h6' component='div'>
                            {getTitle(item.title)}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            categories: {item.categories ? item.categories[0] : null}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            authors: {item.authors}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' onClick={() => handleClick(index)}>Open</Button>
                    </CardActions>
                </Card>)}
        </div>
    );
};

BooksCardsComponent.propTypes = {
    books: PropTypes.arrayOf(BookType).isRequired
};

export default BooksCardsComponent;