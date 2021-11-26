import React from 'react';
import './css/index.css';
import {SearchBooksPage} from "./pages/page/books.page.wrapper";


export const App = () => {
    return (
        <div className='container'>
            <SearchBooksPage />
        </div>
    );
};