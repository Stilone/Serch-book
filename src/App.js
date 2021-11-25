import React from 'react';
import './css/index.css';
import {BooksPageComponent} from "./pages/books.page/books.page.wrapper";
import {BookPageComponent} from "./pages/book.page/book.page.wrapper";
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