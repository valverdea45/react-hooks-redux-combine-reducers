import { combineReducers } from "redux";
import authorsReducer from "./features/books/Authors/AuthorSlice";
import booksReducer from "./features/books/Books/booksSlice";

const rootReducer = combineReducers({
    authors: authorsReducer,
    books: booksReducer
})

export default rootReducer