
import { bookConstants } from '../constants/book.constants'
export function book(state = {}, action: any) {
    console.log(action)
    switch (action.type) {

        case bookConstants.GET_BOOK_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            };

        case bookConstants.GET_BOOK_BY_ID_SUCCESS:
            return {
                ...state,
                bookById: action.book.data
            }

        case bookConstants.GET_BOOK_BY_ID_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case bookConstants.GET_BOOKS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case bookConstants.GET_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.book.data
            }

        case bookConstants.GET_BOOKS_FAILURE:
            return {
                ...state,
                error: action.error
            }
         

        default:
            return state;
    }




}