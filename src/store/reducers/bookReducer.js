import {
    ERROR_BOOKS,
    FETCH_BOOKS_REQUEST,
    POST_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS, DELETE_BOOKS_REQUEST
} from "../actions/bookTypes";

const initialState = {
    booksData:[],
    loading:false,
    error:''
}


const bookReducer = (state= initialState, action)=>{
    switch (action.type){
        case FETCH_BOOKS_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_BOOKS_SUCCESS:
            return{
                loading: true,
                booksData:action.payload,
                error: ''
            }
        case POST_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ERROR_BOOKS:
            return {
                loading:true,
                booksData:[],
                error: action.payload
            }
        case DELETE_BOOKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        default: return state
    }
}

export default bookReducer
