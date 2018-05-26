import React, { Fragment } from 'react';
import { render } from 'react-dom';
import './ControlPanel.scss';

class ControlPanel extends React.Component  {
  render() {
    return (
      <Fragment>
        <div className="control-panel">
          <h1>Users Control Panel</h1>
          <p>Users list</p>
          <div className="filter-box">
            <div type="text" className="filter-box__item">
              <input type="text" className="filter-box__search"/>
            </div>
            <div type="text" className="filter-box__item">
              <select name="" id="" className="filter-box__dropdown">
                <option value="" className="dropdown__option"></option>
                <option value="" className="dropdown__option"></option>
              </select>
            </div>
          </div>
          <ul className="users">
            <li className="users__item">
              <div className="user__wrapper">
                <div className="user__info"></div>
                <div className="user__info"></div>
                <div className="user__info"></div>
                <div className="user__info"></div>
                <div className="user__info"></div>
                <div className="user__control">
                  <button className="user__button user__button--green"></button>
                  <button className="user__button user__button--red"></button>
                </div>
              </div>
            </li>
          </ul>
          {/* titlos
          filterbox
          pinakas me xristes */}
          skata
        </div>
      </Fragment>
    );
  }
}

export default ControlPanel;
