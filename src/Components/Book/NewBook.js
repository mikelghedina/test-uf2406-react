import React, {Component} from "react";
import FormControl from "react-bootstrap/FormControl";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {addBook} from "../../store/actions/bookActions";


class NewBook extends Component{

    state={
       title:''
    }

    handleOnClickAddBook=(newBook)=>{
        console.log(this.state)
        this.props.addBook(newBook)
        this.setState(
            {
                title:''
            })
    }

    render() {
        return (
            <tr>
                <td><FormControl type="text" placeholder="Add Name" value={this.state.title}
                                 onChange={(event) => (this.setState({title: event.target.value}))}/></td>
                <td><Button onClick={this.handleOnClickAddBook.bind(this, this.state)}>Add Book</Button></td>
            </tr>
        );
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addBook:(book)=>dispatch(addBook(book))
    }
}
export default connect(null, mapDispatchToProps)(NewBook)
