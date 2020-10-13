import sendRequest from '../../helpers/sendRequest'
import { bookConstants } from '../constants/book.constants'

export const bookAction = {

    getBookByid,
    getBooks,
     

}

function getBookByid(id: any) {

    return (dispatch: any) => {
        dispatch({
            type: bookConstants.GET_BOOK_BY_ID_REQUEST,
        })

        return sendRequest({
            method: 'GET',
            url: `/book/${id}`,

        }).then(book => {

            dispatch({
                type: bookConstants.GET_BOOK_BY_ID_SUCCESS,
                book
            })

        }, ({ response }) => {
            dispatch({
                type: bookConstants.GET_BOOK_BY_ID_FAILURE,
                error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

            })
        })
    }
}

function getBooks() {

    return (dispatch: any) => {
        dispatch({
            type: bookConstants.GET_BOOKS_REQUEST,
        })

        return sendRequest({
            method: 'GET',
            url: `/book/`

        }).then(book => {

            dispatch({
                type: bookConstants.GET_BOOKS_SUCCESS,
                book
            })

        }, ({ response }) => {
            dispatch({
                type: bookConstants.GET_BOOKS_FAILURE,
                error: (response != undefined && response != null) ? response.data.message : "somthing wrong"

            })
        })
    }
}

 