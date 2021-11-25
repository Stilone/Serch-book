import React from 'react';
import {PageComponent} from './components/page-component/page.component';
import './css/css.css'
import {BookCard} from './components/books-component/book.card';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

export const Page = (props) => {
    const {onGetBooks, state} = props
    return (
        <div className='container'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<PageComponent onGetBooks={onGetBooks} state={state}/>}/>
                    <Route path='/bookCard/:id' element={<BookCard state={state.books}/>}/>
                </Routes>
            </Router>
        </div>
    );
}