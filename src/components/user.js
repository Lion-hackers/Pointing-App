import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    return (
        <tr>
            <td>{props.user.userId}</td>
            <td>{props.user.userFirstName}</td>
            <td>{props.user.userLastName}</td>
            <td>{props.user.userPassword}</td>
            <td>{props.user.userRole}</td>
            <td>
                <Link to={'/edit' + props.user._id}>Edit</Link>
            </td>
        </tr>
    )
}

export default User;