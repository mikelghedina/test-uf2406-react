import {combineReducers} from "redux";
import bookReducer from "./reducers/bookReducer";
import quoteReducer from "./reducers/quoteReducer";


const rootReducer= combineReducers({
    book:bookReducer,
    quote:quoteReducer,
})

export default rootReducer;
