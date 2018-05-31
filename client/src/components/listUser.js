import React from 'react'
import '../styles/_listuser.css'

class ListUser extends React.Component {

    render() {

        return (
            <table id="users">
                <tbody>
                    <tr>
                        <th>Public key</th>
                        <th>Private key</th>
                    </tr>
                    {
                        this.props.users.map(user => (
                            <tr key={user.publicKey}>
                                <td>{user.publicKey}</td>
                                <td>{user.privateKey}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}

export default ListUser