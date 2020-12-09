
import axios from "axios";
import {
    ERROR_QUOTES,
    FETCH_QUOTES_REQUEST,
    POST_QUOTES_REQUEST,
    FETCH_QUOTES_SUCCESS,
    DELETE_QUOTES_REQUEST
} from "./quoteTypes";

export const fetchQuotes=()=>{
    return(dispatch)=>{
        dispatch(fetchQuotesRequest())
        axios.get('http://localhost:8080/api/quotes')
            .then(res=>{
                const data = res.data
                dispatch(fetchQuotesSuccess(data))
            })
            .catch(error=>dispatch(errorQuotes(error)));
    }
}

export const addQuote=(quote)=>{
    return(dispatch)=>{
        dispatch(postQuotesRequest())
        axios.post('http://localhost:8080/api/quotes', quote)
            .then(res=>{
                console.log(res)
                dispatch(fetchQuotes())
            })
            .catch(error=>dispatch(errorQuotes(error)))
    }
}

export const deleteQuote=(id)=>{
    return(dispatch)=>{
        dispatch(deleteQuoteRequest())
        axios.post('http://localhost:8080/api/quotes' + id)
            .then(res=>{
                console.log(res)
                dispatch(fetchQuotes())
            })
            .catch(error=>dispatch(errorQuotes(error)))
    }
}



const fetchQuotesRequest=()=>{
    return{
        type: FETCH_QUOTES_REQUEST,
    }
}
const fetchQuotesSuccess=(quotes)=>{
    return{
        type: FETCH_QUOTES_SUCCESS,
        payload:quotes
    }
}


const errorQuotes=error=>{
    return{
        type:ERROR_QUOTES,
        payload:error
    }
}

const postQuotesRequest=()=>{
    return{
        type: POST_QUOTES_REQUEST
    }
}

const deleteQuoteRequest=()=>{
    return{
        type: DELETE_QUOTES_REQUEST
    }
}
