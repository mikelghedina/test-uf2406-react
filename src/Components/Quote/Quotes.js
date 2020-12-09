import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";
import {connect} from "react-redux";
import {deleteQuote, fetchQuotes} from "../../store/actions/quoteActions";
import {fetchBooks} from "../../store/actions/bookActions";
import NewQuote from "./NewQuote";


class Quotes extends Component{

    componentDidMount() {
       this.props.fetchQuotes();
       this.props.fetchBooks();
    }


    render() {
        return(
            <div>
                <Table striped bordered hover size="sm" id="myTable" >
                    <thead>
                    <tr>
                        <th>Tag</th>
                        <th>Sentence</th>
                        <th>Number of words</th>
                    </tr>
                    </thead>
                    <tbody>{this.props.quote.map(q=>
                        <tr key={q.id}>
                            <td>{q.tag}</td>
                            <td>{q.sentence}</td>
                            <td>{q.numberOfWords}</td>
                            {q.book!=null?
                                <td>{q.book.title}</td>
                                : <td>""</td>}
                            <td><Button variant="danger" onClick={this.props.deleteQuote.bind(this, q.id)}>Delete</Button>{' '}</td>
                        </tr>)}
                    </tbody>
                    <tbody>
                    <NewQuote/>
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        quote:state.quote.quotesData,
        book:state.book.booksData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        fetchQuotes: ()=>dispatch(fetchQuotes()),
        deleteQuote:(id)=>dispatch(deleteQuote(id)),
        fetchBooks:()=>dispatch(fetchBooks())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Quotes)
