export const CREATE_BOOKS = 'CREATE_BOOKS'

export const getBooksAction = (state, merge = false, load) => {
    return (dispatch, getState) => {
        const {books} = getState()
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.text}+subject:${state.categories}&orderBy=${state.sort}&startIndex=${state.startIndex}&maxResults=30&key=AIzaSyAM866byHG_AquX8S1BBCyC-PMvdnH1VTs`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: CREATE_BOOKS,
                    payload: {
                        items: merge ? books.concat(data.items) : data.items,
                        totalBooks: data.totalItems
                    }
                })
                setTimeout(() => {
                    load(false)
                }, 500)
            })
    }
};