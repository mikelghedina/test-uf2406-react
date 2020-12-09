import axios from "axios";
import {
    ERROR_BOOKS,
    FETCH_BOOKS_REQUEST,
    POST_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    DELETE_BOOKS_REQUEST
} from "./bookTypes";

export const fetchBooks=()=>{
    return(dispatch)=>{
        dispatch(fetchBooksRequest())
        axios.get('http://localhost:8080/api/books')
            .then(res=>{
                const data = res.data
                dispatch(fetchBooksSuccess(data))
            })
            .catch(error=>dispatch(errorBooks(error)));
    }
}

export const addBook=(book)=>{
    return(dispatch)=>{
        dispatch(postBookRequest())
        axios.post('http://localhost:8080/api/books', book)
            .then(res=>{
                console.log(res)
                dispatch(fetchBooks())
            })
            .catch(error=>dispatch(errorBooks(error)))
    }
}

export const deleteBook=(id)=>{
    return(dispatch)=>{
        dispatch(deleteBookRequest())
        axios.delete('http://localhost:8080/api/books' + id)
            .then(res=>{
                console.log(res)
                dispatch(fetchBooks())
            })
            .catch(error=>dispatch(errorBooks(error)))
    }
}



const fetchBooksRequest=()=>{
    return{
        type: FETCH_BOOKS_REQUEST,
    }
}
const fetchBooksSuccess=(books)=>{
    return{
        type: FETCH_BOOKS_SUCCESS,
        payload:books
    }
}


const errorBooks=error=>{
    return{
        type:ERROR_BOOKS,
        payload:error
    }
}

const postBookRequest=()=>{
    return{
        type: POST_BOOKS_REQUEST
    }
}
const deleteBookRequest=()=>{
    return{
        type: DELETE_BOOKS_REQUEST
    }
}
