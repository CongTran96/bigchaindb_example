import React from 'react'
import '../styles/_notifi.css'

class Notification extends React.Component {

    render() {
        return (
            <div className="Notifi">
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}

export default Notification