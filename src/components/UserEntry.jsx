import React from 'react';
import PropTypes from 'prop-types';

class UserEntry extends React.Component  {

  static propTypes = {
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.oneOf(['admin', 'user']),
    isEnabled: PropTypes.bool,
  }

  static defaultProps = {
    username: '',
    firstName: '',
    lastName: '',
    role: 'user',
    isEnabled: false,
  }

  usernameRef = React.createRef();
  firstNameRef = React.createRef();
  lastNameRef = React.createRef();
  roleRef = React.createRef();
  statusRef = React.createRef();

  removeUser = e => {
    e.preventDefault();
    this.props.deleteUser(this.props.id);
  }

  editUser = e => {
    e.preventDefault();
    const user = {
      id: this.props.id,
      username: this.usernameRef.current.value,
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
      role: this.roleRef.current.value,
      enabled: this.statusRef.current.value === "true" ? true : false,
    };
    this.props.updateUser(user);
  }

  render () {
    const { username, firstName, lastName, role, isEnabled } = this.props;
      return (
        <tr>
          <td><input type="text" ref={this.usernameRef} defaultValue={username}/></td>
          <td><input type="text" ref={this.firstNameRef} defaultValue={firstName}/></td>
          <td><input type="text" ref={this.lastNameRef} defaultValue={lastName}/></td>
          <td>
            <select name="role" ref={this.roleRef} className="custom-select d-block w-100" defaultValue={role}>
              <option value="admin">admin</option>
              <option value="user">user</option>
            </select>
          </td>
          <td>
            <select name="status" ref={this.statusRef} className="custom-select d-block w-100" defaultValue={isEnabled ? 'true' : 'false'}>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </td>
          <td>
            <button className="btn btn-dark btn-sm" type="submit" onClick={this.removeUser}>Delete</button>
            <button className="btn btn-dark btn-sm" type="submit" onClick={this.editUser}>Update</button>
          </td>
        </tr>
      )
  }
}

export default UserEntry;
