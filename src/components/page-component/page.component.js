import React, {useRef, useState} from 'react';
import {SearchComponent} from '../search-component/search.component';
import {BookCards} from '../books-component/book.cards';
import Button from '@mui/material/Button';
import {ProgressCircular} from '../progress-component/progress.circular';

export const PageComponent = ({onGetBooks, state}) => {
    const [condition, setCondition] = useState({text: '', categories: '', sort: 'relevance', startIndex: 0})
    const [onLoad, setOnLoad] = useState(false)
    const ref = useRef(null)
    const {books, total} = state;

    const createInputChange = (field) => {
        return (event) => {
            const {value} = event.target;
            const state = {...condition, [field]: value};
            setCondition(state);
        }
    }

    const handleLoad = (loading) => {
        setOnLoad(loading)
    }

    const handleClick = () => {
        handleLoad(true)
        if (books.length > total) {
            ref.current.style.display = 'none'
        } else {
            const state = {...condition}
            state.startIndex += 30
            setCondition(state)
            onGetBooks(condition, true, handleLoad)
        }
    }

    const load = () => {
        if (onLoad) {
            return <ProgressCircular/>
        } else if (total) {
            return <div>
                <p>Books found: {total}</p>
                <BookCards books={books}/>
                <Button variant='contained' ref={ref} onClick={handleClick}>Load more...</Button>
            </div>
        }
    }

    return (
        <div>
            <SearchComponent onGetBooks={onGetBooks}
                             handleLoad={handleLoad}
                             condition={condition}
                             createInputChange={createInputChange}/>
            {load()}
        </div>
    )
}