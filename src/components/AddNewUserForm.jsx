import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class AddNewUserForm extends React.Component  {

usernameRef = React.createRef();
firstNameRef = React.createRef();
lastNameRef = React.createRef();
roleRef = React.createRef();
statusRef = React.createRef();

  createUser = e => {
    e.preventDefault();
    const user = {
      username: this.usernameRef.current.value,
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
      role: this.roleRef.current.value,
      enabled: this.statusRef.current.value === "true" ? true : false,
    };
    this.props.addUser(user);
    e.currentTarget.reset();
  }
  render () {
    return (
        <form onSubmit={this.createUser}  className="table-responsive">
          <table className="table table-striped table-sm">
            <tbody>
              <tr>
                <td><input name="username" type="text" ref={this.usernameRef}/></td>
                <td><input name="firstname" type="text" ref={this.firstNameRef}/></td>
                <td><input name="lastname" type="text" ref={this.lastNameRef}/></td>
                <td>
                  <select name="role" ref={this.roleRef} className="custom-select d-block w-100">
                    <option value="admin">admin</option>
                    <option value="user">user</option>
                  </select>
                </td>
                <td>
                  <select name="status" ref={this.statusRef} className="custom-select d-block w-100">
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                </td>
                <td>
                  <button className="btn btn-dark btn-sm" type="submit">Add User</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
    );
  }
}

export default AddNewUserForm;
