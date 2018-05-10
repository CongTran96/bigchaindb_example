import React from 'react'
import '../styles/_form.css'
import {createAssets} from '../bdchain'

class CustomForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {asset: {message: ''}, meta_data: {message:''}, ownerAsset: {publicKey: '', privateKey: '', transactionID: ''}}

        // bind for event function
        this.handleChangeMessage        = this.handleChangeMessage.bind(this)
        this.handleChangeMetadata       = this.handleChangeMetadata.bind(this)
        this.handleChangeOwnPublicKey   = this.handleChangeOwnPublicKey.bind(this)
        this.handleChangeOwnPrivateKey  = this.handleChangeOwnPrivateKey.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    renderTransaction() {
        if (this.state.transactionID) 
            return <h3 className="fs-subtitle">{`your transaction id: ${this.state.transactionID}`}</h3>
    }

    handleChangeMessage(event) {
        this.setState({ asset: {message: event.target.value} })
    }

    handleChangeMetadata(event) {
        this.setState({ meta_data: {message: event.target.value} })
    }

    handleChangeOwnPublicKey(event) {
        const publicKey = event.target.value
        this.setState(prevState => ({ ownerAsset: { publicKey, privateKey: prevState.ownerAsset.privateKey }}))
    }

    handleChangeOwnPrivateKey(event) {
        const privateKey = event.target.value
        this.setState( prevState => ({ ownerAsset: { publicKey: prevState.ownerAsset.publicKey, privateKey }}))
    }

    async handleSubmit(event) {
        const [asset, meta_data, ownerAsset] = [this.state.asset, this.state.meta_data, this.state.ownerAsset]

        const transaction = await createAssets(asset, meta_data, ownerAsset)
        
        this.props.onSubmit(`your transaction id: ${transaction.id} was succeed`)
        // event.preventDefault()
    }

    render() {
        return (
            <form id="msform">
                <fieldset>
                    <h2 className="fs-title">{this.props.caption}</h2>
                    {this.renderTransaction()}
                    <input type="text" value={this.state.asset.message} onChange={this.handleChangeMessage} placeholder="enter your first data transaction here..." />
                    <input type="text" value={this.state.meta_data.message} onChange={this.handleChangeMetadata} placeholder="enter meta data (can change after)" />
                    <input type="text" value={this.state.ownerAsset.publicKey} onChange={this.handleChangeOwnPublicKey} placeholder="Public key of owner" />
                    <input type="text" value={this.state.ownerAsset.privateKey} onChange={this.handleChangeOwnPrivateKey} placeholder="Private key of owner" />
                    <input className="action-button" type="button" value="Submit" onClick={this.handleSubmit} />
                </fieldset>
            </form>
        );
    }
}

export default CustomForm