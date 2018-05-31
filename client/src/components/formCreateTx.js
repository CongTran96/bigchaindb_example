import React from 'react'
import {createAssets} from '../bdchain'
import Form from './form'

class CustomForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {asset: {message: ''}, meta_data: {message:''}, ownerAsset: {publicKey: '', privateKey: ''}}

        // bind for event function
        this.handleChangeMessage        = this.handleChangeMessage.bind(this)
        this.handleChangeMetadata       = this.handleChangeMetadata.bind(this)
        this.handleChangeOwnPublicKey   = this.handleChangeOwnPublicKey.bind(this)
        this.handleChangeOwnPrivateKey  = this.handleChangeOwnPrivateKey.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.inputMetadata.focus()
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
        var [asset, meta_data, ownerAsset] = [this.state.asset, this.state.meta_data, this.state.ownerAsset]

        asset = {
            name: "Cong Tran Minh",
            id: "14520100",
            born_on: "Nghe An",
            major_in: "Software Engineer",
            ranking: "Excellent",
            mode_of_study: "full-time",
            serial_number: "0384928439",
            reference_number: "",
        }

        const transaction = await createAssets(asset, meta_data, ownerAsset)
        
        this.props.onSubmit(`your transaction id: ${transaction.id} was succeed`)
    }

    render() {
        return (
            <Form caption={this.props.caption} onSubmit={this.handleSubmit}>
                <input type="text" ref={input => this.inputTransaction = input} value={this.state.asset.message} onChange={this.handleChangeMessage} placeholder="enter your first data transaction here..." />
                <input type="text" ref={input => this.inputMetadata = input} value={this.state.meta_data.message} onChange={this.handleChangeMetadata} placeholder="enter meta data (can change after)" />
                <input type="text" value={this.state.ownerAsset.publicKey} onChange={this.handleChangeOwnPublicKey} placeholder="Public key of owner" />
                <input type="text" value={this.state.ownerAsset.privateKey} onChange={this.handleChangeOwnPrivateKey} placeholder="Private key of owner" />
            </Form>
        );
    }
}

export default CustomForm