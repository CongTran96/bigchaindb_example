import React from 'react'
import '../styles/_form.css'
import {getTransaction} from '../bdchain'

class CustomForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {transactionID: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({transactionID: event.target.value})
    }

    handleSubmit(event) {
        // change code here
        const txid = this.state.transactionID

        const transaction = getTransaction(txid)

        console.log(transaction)
        this.props.onSubmit(`Turn on console debug to see the transaction`)

        // event.preventDefault()
    }

    render() {
        return (
            <form id="msform">
                <fieldset>
                    <h2 className="fs-title">{this.props.caption}</h2>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Transaction ID" />
                    <input className="action-button" type="button" value="Submit" onClick={this.handleSubmit}/>
                </fieldset>
            </form>
        );
    }
}

export default CustomForm