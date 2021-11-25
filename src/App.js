import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import {BooksPageComponent} from "./pages/books/books.page.wrapper";
import {BookPageComponent} from "./pages/book/book.page.wrapper";
import './css/index.css';

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