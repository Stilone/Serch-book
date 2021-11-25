import React from 'react';
import './css/index.css';
import {BooksPageComponent} from "./components/page-component/books.page.wrapper";
import {BookPageComponent} from "./components/books-component/book.card.wrapper";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

export const App = () => {
    return (
        <div className='container'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<BooksPageComponent />}/>
                    <Route path='/bookCard/:id' element={<BookPageComponent />}/>
                </Routes>
            </Router>
        </div>
    );
};