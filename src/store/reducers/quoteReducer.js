import {
    ERROR_QUOTES,
    FETCH_QUOTES_REQUEST,
    POST_QUOTES_REQUEST,
    FETCH_QUOTES_SUCCESS,
    DELETE_QUOTES_REQUEST
} from "../actions/quoteTypes";

const initialState = {
    quotesData:[],
    loading:false,
    error:''
}


const quoteReducer = (state= initialState, action)=>{
    switch (action.type){
        case FETCH_QUOTES_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_QUOTES_SUCCESS:
            return{
                loading: true,
                quotesData:action.payload,
                error: ''
            }
        case POST_QUOTES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ERROR_QUOTES:
            return {
                loading:false,
                quotesData:[],
                error: action.payload
            }
        case DELETE_QUOTES_REQUEST:
            return {
                ...state,
                loading: true
            }
        default: return state
    }
}

export default quoteReducer
