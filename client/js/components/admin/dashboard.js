import React, {Component, PropTypes} from 'react';

export default class AdminDashboard extends Component {
  render() {
    return (
      <div class='row'>
        <div class='col-xs-12'>
          <div className='panel panel-default'>
            <header className='panel-heading'>
              <h3 className='panel-title'>Dashboard</h3>
            </header>
            <div className='panel-body'>Content</div>
          </div>
        </div>
      </div>
    )
  }
};
