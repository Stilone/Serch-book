import {InputReducer} from '../reducer/input.reducer'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(InputReducer, applyMiddleware(thunk))