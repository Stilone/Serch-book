import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../css/css.css'
import {useNavigate} from 'react-router-dom';

export const BookCards = ({books}) => {
    const navigate = useNavigate()

    const handleClick = (index) => {
        navigate(`/bookCard/${index}`)
    }

    const title = (string) => {
        if (string.length <= 29) {
            return string
        } else {
            const newString = string.slice(0, 29) + '...'
            return newString
        }
    }

    return (
        <div className='cardsContainer'>
            {books.map((item, index) =>
                <Card sx={{maxWidth: 180}} key={item.etag} className='cardsContainerItem'>
                    <CardMedia
                        component='img'
                        alt='image is not default'
                        height='200'
                        image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : 'https://bookmix.ru/groups/images/0/3/9/groups_1582375475.jpg'}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h6' component='div'>
                            {title(item.volumeInfo.title)}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            categories: {item.volumeInfo.categories ? item.volumeInfo.categories[0] : null}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            authors: {item.volumeInfo.authors}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' onClick={() => handleClick(index)}>Open</Button>
                    </CardActions>
                </Card>)}
        </div>
    );
};
