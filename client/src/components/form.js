import React from 'react'
import '../styles/_form.css'

class CustomForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        // change code here
        this.props.onSubmit(event)

        event.preventDefault()
    }

    render() {
        return (
            <form id="msform">
                <fieldset>
                    <h2 className="fs-title">{this.props.caption}</h2>
                    {this.props.children}
                    <input className="action-button" type="button" value="Submit" onClick={this.handleSubmit}/>
                </fieldset>
            </form>
        );
    }
}

export default CustomForm