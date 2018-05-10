import React from 'react'
import FormCreateTx from './formCreateTx'
import FormTransferTx from './formTransferTx'
import FormRetriveTx from './formRetriveTx'

class FormController extends React.Component {
    constructor(props) {
        super(props)
    }

    renderFormSelected() {
        const formSelected = this.props.formSelected
        
        if (formSelected === 'createTx') {
            return <FormCreateTx caption="Make new create assets" onSubmit={this.props.onSubmit}/>
        } else if (formSelected === 'transferTx') {
            return <FormTransferTx caption="Transfer your assets" onSubmit={this.props.onSubmit}/>
        } else {
            return <FormRetriveTx caption="Retrive your transaction" onSubmit={this.props.onSubmit}/>
        }
    }

    render() {
        return (
            this.renderFormSelected()
        )
    }
}

export default FormController