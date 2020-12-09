import React, {Component} from "react";
import {addQuote} from "../../store/actions/quoteActions";
import {connect} from "react-redux";
import {Button, FormControl, Form} from "react-bootstrap";


class NewQuote extends Component{

    state={
        id:'',
        tag:'',
        sentence:'',
        numberOfWords:'',
        book:{
            id:''
        }
    }

    handleOnClickAddQuote=(newQuote)=>{
        console.log(this.state)
        this.props.addQuote(newQuote)
        this.setState(
            {
                tag: '',
                sentence: '',
                numberOfWords: '',
            })
    }

    render() {
        return(
            <tr>
                <td><FormControl type="text" placeholder="Add Tag" value={this.state.tag}
                                 onChange={(event) => (this.setState({tag: event.target.value}))}/></td>
                <td><FormControl type="text" placeholder="Add Sentence" value={this.state.sentence}
                                 onChange={(event) => (this.setState({sentence: event.target.value}))}/></td>
                <td><FormControl type="Integer" placeholder="Add Number of Words" value={this.state.numberOfWords}
                                 onChange={(event) => (this.setState({numberOfWords: event.target.value}))}/></td>
                <td>
                    <Form.Control as="select" custom value={this.state.book.id}
                                  onChange={(event)=>(this.setState({...this.state, book: {id: event.target.value}}))}>
                        {this.props.book.map(b=>
                            <option value={b.id} key={b.id}>{b.title}</option>
                        )}</Form.Control>
                </td>
                <td><Button onClick={this.handleOnClickAddQuote.bind(this, this.state)}>Add Quote</Button></td>
            </tr>
        )
    }
}

const mapStateToProps=state=>{
    return{
        book: state.book.booksData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addQuote:(quote)=>dispatch(addQuote(quote))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuote)
