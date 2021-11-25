import {CREATE_BOOKS} from '../actions/books.action';

export const InputReducer = (state = {books: [], total: 0}, action) => {
    switch (action.type) {
        case CREATE_BOOKS:
            return {...state, books: action.payload.items, total: action.payload.totalBooks}
        default:
            return {...state}
    }
}