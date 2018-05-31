import React from 'react'
import ReactDOM from 'react-dom'
import './styles/_index.css'
import Button from './components/button'
import FormController from './components/formControl'
import ListUser from './components/listUser'
import {makeUserKeyPair} from './bdchain'
import Notification from './components/notification'
import DropDown from './components/dropDown'

class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {keypair: [], formSelected: 'createTx', notifi: 'notice the message in here'};
      
      this.handleCreateKeyPair = this.handleCreateKeyPair.bind(this)
      this.handleChangeForm = this.handleChangeForm.bind(this)
      this.handleChangeNotification = this.handleChangeNotification.bind(this)
    }

    handleCreateKeyPair() {
        const keypair = makeUserKeyPair()

        let prevKeypai = this.state.keypair
        prevKeypai.push(keypair)

        this.setState({keypair: prevKeypai})
    }

    handleChangeForm(formSelected) {
        this.setState({ formSelected })
    }

    handleChangeNotification(notifi) {
        this.setState({ notifi })
    }

    render() {
        return (
            <div className="side">
                <div className="keypair-side">
                    <DropDown onChange={this.handleChangeForm}/>
                    <Notification message={this.state.notifi} />
                    <FormController formSelected={this.state.formSelected} onSubmit={this.handleChangeNotification}/>
                    <div className="keypair-area">
                        <Button name="create keypair" onClick={this.handleCreateKeyPair} />
                        <ListUser users={this.state.keypair}/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('root')
);
