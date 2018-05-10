import React from 'react'
import '../styles/_form.css'
import {transferAssets} from '../bdchain'

class CustomForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {ownTxid: '', newTxid: '', beforeOwner: {publicKey: '', privateKey: ''}, newOwner: {publicKey: '', privateKey: ''}}
        this.handleSubmit = this.handleSubmit.bind(this)

        this.handleChangeTx = this.handleChangeTx.bind(this);
        this.handleChangeBeforeOwnerPublicKey   = this.handleChangeBeforeOwnerPublicKey.bind(this)
        this.handleChangeBeforeOwnerPrivateKey  = this.handleChangeBeforeOwnerPrivateKey.bind(this)
        this.handleChangeNewOwnerPublicKey      = this.handleChangeNewOwnerPublicKey.bind(this)
    }

    handleChangeTx(event) {
        this.setState({ ownTxid: event.target.value})
    }

    handleChangeBeforeOwnerPublicKey(event) {
        const publicKey = event.target.value
        this.setState(prevState => ({ beforeOwner: { publicKey, privateKey: prevState.beforeOwner.privateKey }}))
    }

    handleChangeBeforeOwnerPrivateKey(event) {
        const privateKey = event.target.value
        this.setState(prevState => ({ beforeOwner: { privateKey, publicKey: prevState.beforeOwner.publicKey }}))
    }

    handleChangeNewOwnerPublicKey(event) {
        const publicKey = event.target.value
        this.setState(prevState => ({ newOwner: { publicKey, privateKey: prevState.newOwner.privateKey }}))
    }

    async handleSubmit(event) {
       const [txid, beforeOwner, newOwner] = [this.state.ownTxid, this.state.beforeOwner, this.state.newOwner]

       const transaction = await transferAssets(txid, '', beforeOwner, newOwner)
       this.props.onSubmit(`your transaction id: ${transaction.id} was succeed`)

        // event.preventDefault()
    }

    renderTransaction() {
        if (this.state.transactionID) 
            return <h3 className="fs-subtitle">{`your transaction id: ${this.state.transactionID}`}</h3>
    }

    render() {
        return (
            <form id="msform">
                <fieldset>
                    <h2 className="fs-title">{this.props.caption}</h2>
                    {this.renderTransaction()}
                    <input type="text" value={this.state.ownTxid} onChange={this.handleChangeTx} placeholder="Transaction ID" />
                    <input type="text" value={this.state.beforeOwner.publicKey} onChange={this.handleChangeBeforeOwnerPublicKey} placeholder="Public key of before owner" />
                    <input type="text" value={this.state.beforeOwner.privateKey} onChange={this.handleChangeBeforeOwnerPrivateKey} placeholder="Private key of before owner" />
                    <input type="text" value={this.state.newOwner.publicKey} onChange={this.handleChangeNewOwnerPublicKey} placeholder="Public key of new owner" />
                    <input className="action-button" type="button" value="Submit" onClick={this.handleSubmit}/>
                </fieldset>
            </form>
        );
    }
}

export default CustomForm