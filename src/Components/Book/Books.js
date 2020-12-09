import React, {Component} from 'react'
import {Button, Table} from "react-bootstrap";
import {deleteBook, fetchBooks} from "../../store/actions/bookActions";
import {connect} from "react-redux";
import NewBook from "./NewBook";

class Books extends Component{

    state={
        book:[]
    }

    componentDidMount() {

        this.props.fetchBooks()
    }

    render() {
        return(
            <div>
                <Table striped bordered hover size="sm" id="myTable" >
                    <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                    </thead>
                    <tbody>{this.props.book.map(b=>
                        <tr key={b.id}>
                            <td>{b.title}</td>
                            <td><Button variant="danger" onClick={this.props.deleteBook.bind(this, b.id)}>Delete</Button></td>
                        </tr>)}
                    </tbody>
                    <tbody>
                    <NewBook/>
                    </tbody>
                </Table>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        book:state.book.booksData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        fetchBooks: ()=>dispatch(fetchBooks()),
        deleteBook:(id)=>dispatch(deleteBook(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Books)
