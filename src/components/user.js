import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
class User extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            users: this.props.users
        }
    }
    async deleteUser(option){
        var res = await axios.delete(`http://localhost:4000/users/delete/${option}`)
    }
    render() {
        return (
            <tr>
                <td>{this.props.user.userId}</td>
                <td>{this.props.user.userFirstName}</td>
                <td>{this.props.user.userLastName}</td>
                <td>{this.props.user.userPassword}</td>
                <td>{this.props.user.userRole}</td>
                <td>
                    <button type="button" className="btn btn-link">
                        <Link to={'/admin/edit/'+ this.props.user._id}>Edit</Link>
                    </button>
                    <button onClick={() => {
                      this.deleteUser(this.props.user._id)
                    }} type="button" className="btn btn-link">Delete</button>
                </td>
            </tr>
        )
    }
}


export default User;