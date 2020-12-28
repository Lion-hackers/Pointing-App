import React from 'react'
import logo from "../logo.png";
import {Link, Route} from "react-router-dom"

import EditUser from "./edit_user";
import CreateUser from "./create_user";
import UsersList from "./users_list";
class Admin extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="https://www.rebootkamp.net/">
                        <img className="navbar-brand" src={logo} width="110" height="60" alt="" />
                    </a> 
                    <button onClick={this.toggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                        <Link to="/home" className="navbar-brand"><b>Pointing App</b></Link>
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                            <Link to="/admin/users" className="nav-link">Users</Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/admin/create" className="nav-link">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Route path="/admin/users" component={UsersList} />
                <Route path="/admin/create" component={CreateUser} />
                <Route path="/admin/edit/:id" component={EditUser} />
            </div>
        )
    }
}
export default Admin