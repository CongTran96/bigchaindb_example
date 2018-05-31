import React from 'react'
import FormCreateTx from './formCreateTx'
import FormTransferTx from './formTransferTx'
import FormRetriveTx from './formRetriveTx'
import FormSearchAsset from './formSearchAsset'

class FormController extends React.Component {

    renderFormSelected() {
        const formSelected = this.props.formSelected
        
        if (formSelected === 'createTx') {
            return <FormCreateTx caption="Make new create assets" onSubmit={this.props.onSubmit}/>
        } else if (formSelected === 'transferTx') {
            return <FormTransferTx caption="Transfer your assets" onSubmit={this.props.onSubmit}/>
        } else if (formSelected === 'retriveAsst') {
            return <FormRetriveTx caption="Retrive your transaction" onSubmit={this.props.onSubmit}/>
        } else if (formSelected === 'searchAsst') {
            return <FormSearchAsset caption="Search your assets" onSubmit={this.props.onSubmit} />
        }
    }

    render() {
        return (
            this.renderFormSelected()
        )
    }
}

export default FormController