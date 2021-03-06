import React from 'react'
import Form from './form'
import {getTransaction} from '../bdchain'

class CustomForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            transactionID: '',

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({transactionID: event.target.value})
    }

    async handleSubmit(event) {
        // change code here
        const txid = this.state.transactionID

        const transaction = await getTransaction(txid)

        console.log(transaction)
        this.props.onSubmit(`Turn on console debug to see the transaction`)

        // event.preventDefault()
    }

    render() {
        return (
            <Form caption={this.props.caption} onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.transactionID} onChange={this.handleChange} placeholder="Transaction ID" />
            </Form>
        );
    }
}

export default CustomForm