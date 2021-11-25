import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BookReducer} from '../reducer/book.reducer';

export const store = createStore(BookReducer, applyMiddleware(thunk));