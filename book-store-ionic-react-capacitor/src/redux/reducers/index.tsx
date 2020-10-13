import { combineReducers } from 'redux'
import { book } from './book.reducer'
import { user } from './user.reducer'

const rootReducer = combineReducers({
   book ,
   user
   
})

export default rootReducer;