import {BookReducer} from '../reducer/book.reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(BookReducer, applyMiddleware(thunk));