import React from 'react';
import { render } from 'react-dom';
import './ControlPanel.scss';
import users from '../../sample-users.js';
import UserEntry from '../UserEntry';
import AddNewUserForm from '../AddNewUserForm';

const Header = () =>
  <header className="py-5 text-center">
    <h1>User Control Panel</h1>
    <h3>Users list</h3>
  </header>

class ControlPanel extends React.Component  {

  constructor() {
    super();
    this.state = {
      searchValue: "",
      roleFilter: 'all',
      users: users,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  searchInput = React.createRef();

deleteUser = userId => {
  delete this.state.users[userId];
  this.setState({users: users});
}

updateUser = user => {
  this.state.users[user.id] = user;
  this.setState({users: users});
}

addUser = user => {
  this.state.users[`user${Date.now()}`] = user;
  this.setState({users: users});
}

filterChange = e => {
    this.setState({roleFilter: e.target.value});
}

handleChange(e) {
  this.setState({searchValue: e.target.value});
}

  render() {
    const useSearchBar = this.state.searchValue ? true : false;
    const showAll = this.state.roleFilter === "all" || false;
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-5 mb-3">
            <input
              type="text"
              name="search"
              ref={this.searchInput}
              placeholder="Search for a user"
              value={this.state.searchValue}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-5 mb-3">
            <select className="custom-select d-block w-100" onChange={this.filterChange} value={this.state.roleFilter}>
              <option value="all">all</option>
              <option value="admin">admin</option>
              <option value="user">user</option>
            </select>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Enabled</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.state.users).map(
                key => {
                    if((showAll || users[key].role === this.state.roleFilter) && !useSearchBar) {
                    return <UserEntry
                    key={key}
                    id={key}
                    username={users[key].username}
                    firstName={users[key].firstName}
                    lastName={users[key].lastName}
                    role={users[key].role}
                    isEnabled={users[key].enabled}
                    deleteUser={this.deleteUser}
                    updateUser={this.updateUser}
                  />
                } else {
                  const searchFields = [users[key].username, users[key].firstName, users[key].lastName].toString();
                  if(useSearchBar && searchFields.toLowerCase().indexOf(this.state.searchValue) > -1) {
                    return <UserEntry
                      key={key}
                      id={key}
                      username={users[key].username}
                      firstName={users[key].firstName}
                      lastName={users[key].lastName}
                      role={users[key].role}
                      isEnabled={users[key].enabled}
                      deleteUser={this.deleteUser}
                      updateUser={this.updateUser}
                    />
                  }
                }
                })
              }
            </tbody>
          </table>
          <h5>Add a new user</h5>
          <AddNewUserForm
            addUser={this.addUser}
          />
        </div>
      </div>
    );
  }
}

export default ControlPanel;
