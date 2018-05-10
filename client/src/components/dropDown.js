import React from 'react'

class DropDown extends React.Component {
    constructor(props) {
        super(props)

        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    handleSelectChange(event) {
        const formSelected = event.target.value

        this.props.onChange(formSelected)
    }

    render() {
        return (
            <select name="form-dropdown" id="dropdown--select" onChange={this.handleSelectChange}>
                <option value="createTx">Create Assets</option>
                <option value="transferTx">Transfer Assets</option>
                <option value="retriveAsst">Retrive Assets</option>
                <option value="searchAsst">Search Assets</option>
            </select>
        )
    }
}

export default DropDown