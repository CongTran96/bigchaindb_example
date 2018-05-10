import React from 'react'
import '../styles/_button.css'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (!this.props.txid) {
            this.props.onClick()
        } else {
            this.props.onClick(this.props.txid)
        }
    }

    render() {
        return (
            <button className="button" onClick={this.handleClick}>
                {this.props.name}
            </button>
        )
    }
}

export default Button