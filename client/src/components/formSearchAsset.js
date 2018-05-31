import React from 'react'
import Form from './form'
import {getTransactionBaseStudentID} from '../bdchain'

class CustomForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            studentID: ""
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({studentID: event.target.value})
    }

    handleSubmit(event) {
        // change code here
        const studentID = this.state.studentID

        const transaction = getTransactionBaseStudentID(studentID)

        console.log(transaction.then(asset => console.log(asset[0].data.student.name)))
        this.props.onSubmit(`Turn on console debug to see the transaction`)

        // event.preventDefault()
    }

    render() {
        return (
            <Form caption={this.props.caption} onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.studentID} onChange={this.handleChange} placeholder="StudentID" />
            </Form>
        );
    }
}

export default CustomForm